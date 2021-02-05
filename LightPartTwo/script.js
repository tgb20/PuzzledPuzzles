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


