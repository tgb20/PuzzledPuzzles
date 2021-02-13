$(() => {

    let storage = window.localStorage;

    if(storage.getItem('lightSwitchValue') == 'false') 
    	{
        $('#locked').hide();
        $('#letter').show();
        setInterval(() => {
                      $('#foundit').hide();
                		}, 3 * 1000);
   		}

        else {
            $('#locked').show();
            $('#letter').hide();}
});

function puzzleReset() {
    if (window.confirm('Stuck? Click okay to reset the puzzle')) {
        let storage = window.localStorage;

        // Remove Items for this puzzle
        storage.removeItem("lightSwitchValue");
        $('#locked').show();
        $('#letter').hide();
        location.reload();
    }
}


