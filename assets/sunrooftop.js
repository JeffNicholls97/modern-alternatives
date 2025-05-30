function abbrRegion(input, to) {
    var states = [
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['American Samoa', 'AS'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['Armed Forces Americas', 'AA'],
        ['Armed Forces Europe', 'AE'],
        ['Armed Forces Pacific', 'AP'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['District Of Columbia', 'DC'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Guam', 'GU'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Marshall Islands', 'MH'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Northern Mariana Islands', 'NP'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Puerto Rico', 'PR'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['US Virgin Islands', 'VI'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    // So happy that Canada and the US have distinct abbreviations
    var provinces = [
        ['Alberta', 'AB'],
        ['British Columbia', 'BC'],
        ['Manitoba', 'MB'],
        ['New Brunswick', 'NB'],
        ['Newfoundland', 'NF'],
        ['Northwest Territory', 'NT'],
        ['Nova Scotia', 'NS'],
        ['Nunavut', 'NU'],
        ['Ontario', 'ON'],
        ['Prince Edward Island', 'PE'],
        ['Quebec', 'QC'],
        ['Saskatchewan', 'SK'],
        ['Yukon', 'YT'],
    ];

    var regions = states.concat(provinces);

    var i; // Reusable loop variable
    if (to == 'abbr') {
        input = input.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        for (i = 0; i < regions.length; i++) {
            if (regions[i][0] == input) {
                return (regions[i][1]);
            }
        }
    } else if (to == 'name') {
        input = input.toUpperCase();
        for (i = 0; i < regions.length; i++) {
            if (regions[i][1] == input) {
                return (regions[i][0]);
            }
        }
    }
}

function validate_address() {
    return $_addressForm.triggerHandler('submit.validation');
}

function pinCallOut(evt) {
    var address_section_height = $_address_section.outerHeight(false),
        the_callout_height = $_the_callout.outerHeight(false),
        current_position = $(this).scrollTop();

    //Should trigger between $_the_callout.offset().top and ($_the_callout.offset().top + the_callout_height)
    if ((current_position - $_address_section.offset().top > 0) &&
        (current_position - ($_address_section.offset().top + address_section_height) < 0)) {
        $_the_callout.addClass("attention-animation");
    } else {
        $_the_callout.removeClass("attention-animation");
    }
}
function handleInputChange(target, secondInput) {
    setTimeout(() => applyNextStep(target), 1000);
    window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: target.name }, value: target.value});
    let progress = target;
    if (progress.type !== 'range') {
        progress = secondInput;
    }
    secondInput.value = target.value;

    const min = target.min;
    const max = target.max;
    const val = target.value;
    console.log((val - min) * 100 / (max - min));
    progress.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    const step_4_radio_ids = ['lower_bill_percentage', 'lower_bill_percentage_helper'];
    if(step_4_radio_ids.includes(target.id) || step_4_radio_ids.includes(secondInput.id)){
        const selectedAchieve = document.querySelector('input[name="achieve"]:checked');
        if(selectedAchieve.id === 'achieve_monthly_bill'){
            const message = selectedAchieve.dataset.message;
            const percentage = message.split('[')[1].split(']')[0];
            window.sunroof_message = message.replace(percentage, secondInput.value+'%');
        }
    }
}
function handleArchieve(){
    const selectedAchieve = document.querySelector('input[name="achieve"]:checked');
    const rangeArchive = document.querySelector('.how-much-lower');
    if(selectedAchieve && rangeArchive){
        window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: selectedAchieve.name }, value: selectedAchieve.value});
        if(selectedAchieve.value === 'lower_your_monthly_bill'){
            const lower_bill_percentage = document.querySelector('#lower_bill_percentage');
            if(lower_bill_percentage){
                window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'lower_bill_percentage' }, value: lower_bill_percentage.value});
            }
            if(!rangeArchive.classList.contains('active')){
                rangeArchive.classList.add('active');
            }
            const achieve_monthly_bill = document.querySelector('#achieve_monthly_bill');
            if(achieve_monthly_bill){
                const message = achieve_monthly_bill.dataset.message;
                const percentage = message.split('[')[1].split(']')[0];
                window.sunroof_message = message.replace(percentage, lower_bill_percentage.value+'%');
            }
        }else {
            setTimeout(() => applyNextStep(selectedAchieve), 1000);
            window.acerillCustomFormsEventBus.publish({eventType: 'UPDATE_VALUE_COMMAND', fieldPredicate: { label: 'lower_bill_percentage' }, value: '100'});
            if(rangeArchive.classList.contains('active')){
                rangeArchive.classList.remove('active');
            }
            const achieve_100_off_grid = document.querySelector('#achieve_100_off_grid');
            if(achieve_100_off_grid){
                const message = achieve_100_off_grid.dataset.message;
                const percentage = message.split('[')[1].split(']')[0];
                window.sunroof_message = message.replace(percentage, '100%');
            }
        }
    }
}
function applyNextStep(input){
    //console.log(input);
    const current_step_wrap = input.closest('.step-spacing');
    //console.log(current_step_wrap);
    if(!current_step_wrap){
       return false;
    }
    const current_step = parseInt(current_step_wrap.dataset.step);
    if(!current_step){
        return false;
    }

    const next_step = current_step + 1;
    if(!current_step_wrap.classList.contains('arrow')){
        current_step_wrap.classList.add('arrow');
    }
    const next_step_title = document.querySelector('[data-step="'+next_step+'"]');
    if(!next_step_title){
       return false;
    }
    const next_step_wrap = next_step_title.closest('.step-spacing');
    if(!next_step_wrap.classList.contains('visible')){
        next_step_wrap.classList.add('visible');
        setTimeout(() => {
            if(next_step_wrap){
                let scrollObject = { behavior: "smooth", block: "center", inline: "nearest" };
                //console.log(next_step_wrap.parentNode);
                if(next_step_wrap.parentNode && current_step == 1){
                    scrollObject.block = "start";
                    current_step_wrap.scrollIntoView(scrollObject);
                }else {
                    next_step_wrap.scrollIntoView(scrollObject);
                }

            }
        }, 700)
    }
}
function handlePopupState(){
    if(!document.body.classList.contains('scroll-freeze')){
        document.body.classList.add('scroll-freeze');
    }else{
        if(document.body.classList.contains('scroll-freeze')){
            document.body.classList.remove('scroll-freeze');
        }
    }
}
function calcAddToCart(e, element){
    e.preventDefault();
    e.stopPropagation();
    const variantId = element.dataset.variant;
    const qty = 1;
    const properties = {};
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'items': [{
                'id': variantId,
                'quantity': qty,
                'properties': properties
            }]})
    }).then(response => {
        window.location.href = '/cart';
    })
}