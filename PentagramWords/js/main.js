function switchImages() {
    $('#image').attr('src', 'images/pentagram.jpg');
    $('#puzzle').show();
}
 
// first word: Spirits of our world and the next  = world
// second word: lend us your sight = sight 
// third word: give us the power to conjure our might  = conjure
// fourth word: too long they've been trapped in the night  = trapped
// fifth word: allow us to end our suffering tonight = suffering

let words = [['', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']]

$(() => {

    $("input[type='text']").each(function () {
        let changedID = $(this).attr('id');

        let letter = changedID[6];
        let word = changedID[11];
        words[word-1][letter-1] = $(this).val().toLowerCase();
        let solution = words[0][2] + words[1][3] + words[2][1] + words[3][1] + words[4][2] + words[5][2];
        // six letters. 
        if(solution === 'butter') {
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
        words[word-1][letter-1] = $(this).val().toLowerCase();
        let solution = words[0][2] + words[1][3] + words[2][1] + words[3][1] + words[4][2] + words[5][2];
        
        if(solution === 'butter') {
            console.log('Solved!');
            $('#image').hide();
            $('#puzzle').hide();
            $('#video').show();
        }
    });
});