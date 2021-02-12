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

function puzzleReset() {
    if (window.confirm('Stuck? Click okay to reset the puzzle')) {
        let storage = window.localStorage;

        // Remove Items for this puzzle
        storage.removeItem("chessValue");
        
        location.reload();
    }
}
