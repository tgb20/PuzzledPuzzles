$(() => {

    let storage = window.localStorage;

    if(storage.getItem('lightSwitchValue') == 'false') 
    	{
        $('#locked').hide();
        $('#letter').show();
        setInterval(() => {
                      $('#foundit').hide();
                		}, 4 * 1000);
   		}
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


