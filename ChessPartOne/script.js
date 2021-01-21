

$(() => {

    let storage = window.localStorage;
    
    if(storage.getItem('chessValue') == 'false') {
        $('#lightSwitch').prop('checked', false);
    }
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            storage.setItem('chessValue', true);
            //$('#ondisplay').show();
        }
        else if($(this).prop("checked") == false){
            storage.setItem('chessValue', false);
        }
    });
});

/*

$(() => {

    let storage = window.localStorage;
    
    if(storage.getItem('chessValue') == 'false') {
        $('#pic').prop('checked', false);
    }
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked")){
            storage.setItem('chessValue', true);
        }
        else if($(this).prop("checked") == false){
            storage.setItem('chessValue', false);
        }
    });
});

*/