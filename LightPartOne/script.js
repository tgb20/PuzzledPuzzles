$(() => {

    let storage = window.localStorage;
    
    if(storage.getItem('lightSwitchValue') == 'false') {
        $('#lightSwitch').prop('checked', false);
    }
    $('input[type="checkbox"]').click(function(){
         if($(this).prop("checked") == false){
            storage.setItem('lightSwitchValue', false);
        }
    });
});


/*OG CODE
$(() => {

    let storage = window.localStorage;
    
    if(storage.getItem('lightSwitchValue') == 'false') {
        $('#lightSwitch').prop('checked', false);
    }
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked")){
            storage.setItem('lightSwitchValue', true);
        }
        else if($(this).prop("checked") == false){
            storage.setItem('lightSwitchValue', false);
        }
    });
});
*/