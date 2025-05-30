/** Function used to handle interactive Google map on property and estimation wizards */
function AddressMap() {
    //Cached DOM lookups
    var $_addressField = $('#processAddress'), //Field Where you enter your address
        $_addressForm = $('#process-address'), //ID of form
        $_processPostalCode = $('#processPostalCode'),
        $_processCity = $('#processCity'),
        $_processState = $('#processState'),
        $_processCounty = $('#processCounty'),
        $_processStreetNum = $('#processStreetNum'),
        $_processStreetName = $('#processStreetName'),
        $_processLat = $('#processLat'),
        $_processLon = $('#processLon'),
        $_submit = $('#estimateSubmit'),
        $_missing_address = $('#fillModal'),
        $_successfulAddress = $('#successfulAddress'), //Last Successful Google Autocomplete Address
        $_modal_body = $('.modal-body'),
        $_map_canvas = $('#map_canvas'),
        $_map_caption = $('#map_caption');

    //Prevent Enter key from triggering submit on the form
    // TODO: Use preventDefault() instead?
    $_addressForm.bind('keyup keypress', function (e) {
        var code = e.keycode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });

    var map = new google.maps.Map($_map_canvas[0], {
        zoom: 19,
        tilt: 45,
        streetViewControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Drag me!',
        animation: google.maps.Animation.DROP
    });

    var autocomplete = new google.maps.places.Autocomplete($_addressField[0], {
        types: ['address'],
        componentRestrictions: { country: 'US' },
        // Copied from onboard_address.js
        fields: [
            'address_components',
            'formatted_address',
            'geometry',
            'place_id',
            'types'
        ]
    });

    var circle,
        place;

    //EnergySage Address Components, keys used for jQuery lookup, matches PropertyDetailsForm hidden fields
    var ES_ADDRESS = 'address',
        ES_POSTAL_CODE = 'postal_code',
        ES_CITY = 'city',
        ES_STATE = 'state',
        ES_STREET_NUM = 'street_num',
        ES_COUNTY = 'county',
        ES_STREET_NAME = 'street_name',
        address_components_to_jquery_obj = {};

    address_components_to_jquery_obj[ES_POSTAL_CODE] = $_processPostalCode;
    address_components_to_jquery_obj[ES_CITY] = $_processCity;
    address_components_to_jquery_obj[ES_STATE] = $_processState;
    address_components_to_jquery_obj[ES_STREET_NUM] = $_processStreetNum;
    address_components_to_jquery_obj[ES_STREET_NAME] = $_processStreetName;
    address_components_to_jquery_obj[ES_COUNTY] = $_processCounty;

    // This only works for strings
    var has_all = function (list) {
        var empty_values = $.grep(list, function (n, i) { return n === ''; });
        return empty_values.length === 0;
    };

    var has_all_address_components = function () {
        // TODO: Should this include lat/lon?
        var addr_components = [$_processStreetNum.val(),
            $_processStreetName.val().split(' ')[0],
            $_processCity.val(),
            $_processState.val()];

        return has_all(addr_components);
    };

    var is_addresses_matching = function () {
        return $_addressField.val() === $_successfulAddress.val();
    };

    var show_errors = function (error_causes, context) {
        var error_message = ['<h2>Possible causes</h2>', '<ol>'].concat(error_causes, ['</ol>']);

        if (window.es_market_estimate_autocomplete_gif) {
            error_message.push('<img src="' + window.es_market_estimate_autocomplete_gif + '">');
        }
        $_modal_body.html(error_message.join(''));
        if (context && context.address_entered){
            // Show entered address by setting textContent to prevent XSS
            document.getElementById("address-entry-echo").textContent = context.address_entered;
        }
        $_missing_address.modal('show');
    };

    /** Checks for valid address, all other validation is server side */
    var form_validation = function (e) {
        // TODO: Be more specific?
        var error_causes = [
            '<li>You did not enter an address.</li>',
            '<li>You entered an address outside of the United States.</li>',
            '<li>You did not select an address from the autocomplete dropdown.</li>'
        ];

        //If a successful lookup never occurred
        if (!$_successfulAddress.val()) {
            if (has_all_address_components()) {
                //Assume user came from a landing page, and therefore already had a successful autocomplete
                return true;
            }

            if ($_addressField.val()) {
                error_causes[0] = '<li>Google Maps could not locate &ldquo;<span id="address-entry-echo"></span>&rdquo;.<br>Please check the spelling or try an alternate form.</li>';
                Sentry.withScope(function (scope) {
                    scope.setExtra('Address Entered', $_addressField.val());
                    Sentry.captureMessage('No Address Results', 'info');
                });
            }

            show_errors(error_causes, {address_entered: $_addressField.val()});
            return false;
        }

        //Check that an invalid address isn't in the address field while the rest of the data points to a valid address
        if (!is_addresses_matching()) {
            show_errors(error_causes);
            Sentry.withScope(function (scope) {
                scope.setExtra('Address Entered', $_addressField.val());
                scope.setExtra('Address Returned', $_successfulAddress.val());
                Sentry.captureMessage('Address Mismatch', 'info');
            });
            return false;
        }

        return true;
    };

    /** Determines address component based on component types */
    var decomposeGeocoderAddressComponent = function (obj) {
        //Google Address Components Types
        var STREET_ADDRESS = 'street_address', //indicates a precise street address
            STREET_NUMBER = 'street_number', //indicates the precise street number
            ROUTE = 'route', //indicates a named route (such as "US 101").
            POLITICAL = 'political', //indicates a political entity
            COUNTRY = 'country', //indicates the national political entity
            ADMIN_LVL_1 = 'administrative_area_level_1', //states (in US)
            ADMIN_LVL_2 = 'administrative_area_level_2', //counties (in US)
            ADMIN_LVL_3 = 'administrative_area_level_3', //third-order civil entity
            LOCALITY = 'locality', //indicates an incorporated city or town political entity
            SUBLOCALITY = 'sublocality', //indicates a first-order civil entity below a locality
            NEIGHBORHOOD = 'neighborhood', //indicates a named neighborhood
            POSTAL_CODE = 'postal_code'; //indicates a postal code as used to address postal mail
        //within the country

        //Return Value of Method
        var ret_val = {
            key: undefined,
            value: undefined
        };

        if ($.inArray(STREET_NUMBER, obj.types) != -1) {
            ret_val.key = ES_STREET_NUM;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        if ($.inArray(ROUTE, obj.types) != -1) {
            ret_val.key = ES_STREET_NAME;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        if ((($.inArray(SUBLOCALITY, obj.types) != -1) || ($.inArray(LOCALITY, obj.types) != -1)) &&
            $.inArray(POLITICAL, obj.types) != -1) {
            ret_val.key = ES_CITY;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        if ($.inArray(ADMIN_LVL_1, obj.types) != -1 && $.inArray(POLITICAL, obj.types) != -1) {
            ret_val.key = ES_STATE;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        if ($.inArray(ADMIN_LVL_2, obj.types) != -1 && $.inArray(POLITICAL, obj.types) != -1) {
            ret_val.key = ES_COUNTY;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        if ($.inArray(POSTAL_CODE, obj.types) != -1) {
            ret_val.key = POSTAL_CODE;
            ret_val.value = obj.short_name;
            return ret_val;
        }
        return false; //Failed to decompose Address Component
    };

    var hasLatLon = function () {
        return Boolean($_processLat.val() && $_processLon.val());
    };

    /** Handles the updating the map GUI based
     * This function should be called after the map object has been updated.
     * @param {PlaceGeometry} geometry - A geometry object containing a lat/lon or viewport
     * @param {string} lat - Latitude of location
     * @param {string} lon - Longitude of location
     */
    var renderMap = function (kwargs) {
        var geometry;
        if (typeof (kwargs.geometry) === 'undefined') {
            geometry = {
                viewport: false,
                location: new google.maps.LatLng(kwargs.lat, kwargs.lon)
            };
        } else {
            geometry = kwargs.geometry;
        }

        $_map_canvas.css('background', 'none');


        if (geometry.viewport) {
            map.fitBounds(geometry.viewport);
        } else {
            map.setCenter(geometry.location);
        }

        map.setZoom(19);

        //Set marker to lat/lon from hidden field if possible
        if (hasLatLon()) {
            marker.setPosition(new google.maps.LatLng($_processLat.val(), $_processLon.val()));
        } else {
            marker.setPosition(geometry.location);
        }

        if (circle) {
            circle.setMap(null);
        }
        circle = new google.maps.Circle({
            map: map,
            fillOpacity: 0.1,
            strokeWeight: 1,
            fillColor: '#00a0df',
            radius: 16 // 16m
        });
        circle.bindTo('center', marker, 'position');

        //show instruction for pin
        $_map_caption.removeClass('hide');

        // move map back onto the page
        $_map_canvas.css('left', '0px').css('position', 'relative');
    };

    /** Initialize a map based on hidden initial form data */
    var initMap = function () {
        if (hasLatLon()) {
            //Center Map around marker location if lat/lon exists
            renderMap({
                lat: $_processLat.val(),
                lon: $_processLon.val()
            });
        } else if ($_addressField.val()) {
            // Address entered without autocomplete; show error modal to encourage autocomplete
            form_validation();
        }
    };

    /** Update variables when map location changes */
    var updateMap = function (geoResult) {
        place = geoResult || autocomplete.getPlace();

        if (typeof (place.formatted_address) === 'undefined') {
            Sentry.withScope(function (scope) {
                scope.setExtra('Address Entered', place.name);
                Sentry.captureMessage('No Address Results', 'info');
            });
        }

        if (!place || !place.geometry) {
            return;
        }

        $_processLat.val(place.geometry.location.lat());
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'latitude' }, value: place.geometry.location.lat()});
        $_processLon.val(place.geometry.location.lng());
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'longitude' }, value: place.geometry.location.lng()});

        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'location_url' }, value: `https://www.google.com/maps/@${place.geometry.location.lat()},${place.geometry.location.lng()},20z/data=!3m1!1e3`});

        //Parse address components
        if (place.address_components) {
            //Populate hidden form fields related to address components
            $.each(place.address_components, function (i, item) {
                var component = decomposeGeocoderAddressComponent(item);
                console.log('decompose');
                console.log(component);
                console.log('decompose');
                if (component) {
                    window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: component.key }, value: component.value});
                    var jquery_obj = address_components_to_jquery_obj[component.key];
                    jquery_obj.val(component.value);
                }
            });
        }

        //Cache autocomplete address for comparison in the submit handler
        $_successfulAddress.val($_addressField.val());
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'successful_address' }, value: $_addressField.val()});


        renderMap({ geometry: place.geometry });
        fixMapHeight();
        setTimeout(() => applyNextStep($_addressField[0]), 1000);
        const maps_viewport_wrap = document.querySelector('.maps-viewport-wrap');
        if(maps_viewport_wrap && !maps_viewport_wrap.classList.contains('init')){
            maps_viewport_wrap.classList.add('init');
        }
    };

    function fixMapHeight() {
        const map_canvas = document.querySelector('#map_canvas');
        const map_caption = document.querySelector('#map_caption');
        if(map_canvas && map_caption){
            map_canvas.style.height = `calc(100% - ${map_caption.offsetHeight}px)`;
        }
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'full_address' }, value: $_addressField.val()});

        setTimeout(() => {
            html2canvas(map_canvas, {
                allowTaint: true,
                useCORS: true,
            }).then(function (canvas) {
                // It will return a canvas element
                window.google_maps_image_canvas = canvas.toDataURL("image/png", 1);
            }).catch((e) => {
                // Handle errors
                console.log(e);
            });
        }, 3000);
    }
    //Initialize cached info
    initMap();

    google.maps.event.addListener(marker, 'dragend', function (e) {
        marker.setPosition(e.latLng);
        map.setCenter(marker.position);
        $_processLat.val(marker.position.lat());
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'latitude' }, value: marker.position.lat()});
        $_processLon.val(marker.position.lng());
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'longitude' }, value: marker.position.lng()});

        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'location_url' }, value: `https://www.google.com/maps/@${marker.position.lat()},${marker.position.lng()},20z/data=!3m1!1e3`});
        $_map_caption.fadeOut(1000, function() {
            fixMapHeight();
        });

        // make sure we set our form field to give them
        // credit for pin drag (if present):
        if ($('#id_did_pin_drag').length) {
            $('#id_did_pin_drag').val('1');
            window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'did_pin_drag' }, value: '1'});
        }
    });

    //Watch for changes to Enter Address Field
    autocomplete.bindTo('bounds', map);
    google.maps.event.addListener(autocomplete, 'place_changed', updateMap);

    //Prevent form submission on failed Google lookup
    $_addressForm.on('submit.validation', form_validation);
}

google.maps.event.addDomListener(window, 'load', AddressMap);