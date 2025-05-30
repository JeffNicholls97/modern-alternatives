/*powered by shopibro.com*/
!function(o){(o.Stephtron=o.Stephtron||{
    _shop: {
        _uriTypes: ['script', 'style'],
        _scripts:{},
        _styles:{}
    },
    _event_types: ['viewport'],
    _validate_uri: function (uriString) {
        var uriPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
            '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
        return !!uriPattern.test(uriString);
    },
    _validate_uri_type: function (type){
        return this._shop._uriTypes.includes(type);
    },
    load: function (data, f = !1){
        if(!this.assign(data)){ return !1; }
        if(this._shop[`_${data.type}s`][data.id].loaded === !0){
            return f(this._shop[`_${data.type}s`][data.id]);
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', data.uri, !0);
        var self = this;
        xhr.onloadend = function (){
            var response = { xhr : xhr };
            if (xhr.status === 200) {
                response.message = 'success';
                response.error = !1;
                response.status = xhr.status;
                //console.log(response)
                if(self._shop[`_${data.type}s`][data.id]){
                    var element = document.createElement(data.type);
                    element.text = xhr.responseText;
                    document.head.append(element);
                    self._shop[`_${data.type}s`][data.id].loaded = !0;
                }
            } else {
                response.message = 'error';
                response.error = !0;
                response.data = response;
                response.status = xhr.status;
            }
            if(self._shop[`_${data.type}s`][data.id]){
                self._shop[`_${data.type}s`][data.id].response = response;
            }
            if(f && typeof f === 'function'){
                f(self._shop[`_${data.type}s`][data.id]);
            }
        };
        xhr.send();
        return this;
    },
    assign: function (data){
        if(!data.id){ return !1; }
        if(!this._validate_uri(data.uri)){ return !1; }
        if(!this._validate_uri_type(data.type)){ return !1; }
        if(!this._shop[`_${data.type}s`][data.id]){
            data.loaded = !1;
            this._shop[`_${data.type}s`][data.id] = data;
        }
        return !0;
    },
    _onViewPort: function (f){
        var observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    var element = entry.target;

                    if(f && typeof f === 'function'){
                        f(element);
                    }
                    // stop observing the image
                    observer.unobserve(element);
                }
            });
        })
        return observer;
    },
    on: function (type, selector, f){
        if(!type || !selector || !f || typeof f !== 'function'){
            return !1
        }
        if(!this._event_types.includes(type)){
            return !1;
        }
        switch(type) {
            case 'viewport':
                var elements = document.querySelectorAll(selector);
                var view_port = this._onViewPort(function (element){
                    f(element);
                })
                elements.forEach(element => {
                    view_port.observe(element);
                })
                break;
            default:
                return !1;
        }
        return this;
    }
}).loaded=!0}(window);
