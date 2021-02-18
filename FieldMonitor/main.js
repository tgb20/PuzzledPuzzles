$(() => {

    let storage = window.localStorage;


    if(storage.getItem("paintingletters") !== null) {
        words = JSON.parse(storage.getItem('paintingletters'));
    }




        if (solution === 'aperta') {
            console.log('Solved!');
            $('#image').hide();
            $('#puzzle').hide();
            $('#videowindow').trigger('play');
            $('#video').show();
            $('#reboot').show();

            
            setInterval(() => {
                    // Where do you want the player to be sent to
                    //window.location.href = 'https://seekbeak.com/v/NkjxBONe1lQ'
                    window.open("https://seekbeak.com/v/NkjxBONe1lQ", '_blank');
                    $('#linking').show();
                    $('#video').hide();
                    $('#solvedchalkboard').show();
                    //storage.clear(); toggle to show Jacob
                    //window.localStorage.clear();

                    }, 7 * 1000); // 7 is the number of seconds before redirecting
            //$('#solvedchalkboard').show();
        }

       

        storage.setItem('paintingletters', JSON.stringify(words));
    });
});

function puzzleReset() {
    if (window.confirm('Stuck? Click okay to reset the puzzle')) {
        let storage = window.localStorage;

        // Remove Items for this puzzle
        storage.removeItem("paintingletters");
        
        location.reload();
    }
}