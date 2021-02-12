function switchImages() {
    $('#image').attr('src', 'images/click-change_2.png');
    $('#puzzle').show();

}

let words = [['', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']];

$(() => {

    let storage = window.localStorage;


    if(storage.getItem("paintingletters") !== null) {
        words = JSON.parse(storage.getItem('paintingletters'));
    }

    let letters = $("input[type='text']").toArray();

    let iter = 0;
    words.forEach((word) => {
        word.forEach((letter) => {
            letters[iter].value = letter;
            iter++;
        });
    });


    $("input[type='text']").each(function () {
        let changedID = $(this).attr('id');

        let letter = changedID[6];
        let word = changedID[11];
        words[word - 1][letter - 1] = $(this).val().toLowerCase();
        let solution = words[0][2] + words[1][3] + words[2][1] + words[3][1] + words[4][2] + words[5][2];

        if (solution === 'aperta') {
            console.log('Solved!');
            $('#image').hide();
            $('#puzzle').hide();
            $('#video').show();
            $('#reboot').show();
            $('#linking').show();
             //$('#video1').show();
        }
    });

    $("input[type='text']").bind('input', function () {
        let changedID = $(this).attr('id');

        let letter = changedID[6];
        let word = changedID[11];
        words[word - 1][letter - 1] = $(this).val().toLowerCase();
        let solution = words[0][2] + words[1][3] + words[2][1] + words[3][1] + words[4][2] + words[5][2];

        if (solution === 'aperta') {
            console.log('Solved!');
            $('#image').hide();
            $('#puzzle').hide();
            $('#apertasuccess').trigger('play');
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

        if (this.value.length == this.maxLength) {
            $(this).next('.letter').focus();
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