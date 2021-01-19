function switchImages() {
    $('#image').attr('src', 'images/click-change_2.png');
    $('#puzzle').show();
}

let words = [['', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']];

$(() => {

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
            setInterval(() => {
                    // Where do you want the player to be sent to
                    window.location.href = 'https://seekbeak.com/v/NkjxBONe1lQ'
                }, 7 * 1000); // 5 is the number of seconds before redirecting
            //window.open("https://seekbeak.com/v/NkjxBONe1lQ");
        }

        if (this.value.length == this.maxLength) {
            $(this).next('.letter').focus();
        }

    });
});