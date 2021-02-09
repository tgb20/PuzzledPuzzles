
 
// first word: Spirits of our world and the next  = world
// second word: lend us your sight = sight 
// third word: give us the power to conjure our might  = conjure
// fourth word: too long we've been  = trapped
// fifth word: allow us to end our suffering tonight = suffering

let words = [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']]
//var solvedpenta = 0;

$(() => {

    $('#completed').hide();


    let storage = window.localStorage;

    if(storage.getItem("pentagramletters") !== null) {
        words = JSON.parse(storage.getItem('pentagramletters'));
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
        words[word-1][letter-1] = $(this).val().toLowerCase();
        let solution = words[0][0] + words[1][0] + words[2][0] + words[3][0] + words[4][0] + words[4][8];
        // six letters. wptcsu
        if(solution === 'wptcsg') {
            console.log('Solved!');
            //$('#image').hide();
            $('#puzzle').hide();
            $('#completed').show();
        }
    });

    $("input[type='text']").bind('input', function () {
        let changedID = $(this).attr('id');

        let letter = changedID[6];
        let word = changedID[11];
        words[word-1][letter-1] = $(this).val().toLowerCase();
        let solution = words[0][0] + words[1][0] + words[2][0] + words[3][0] + words[4][0] + words[4][8];
        
        if(solution === 'wptcsg') {
            console.log('Solved!');
            //$('#image').hide();
            $('#puzzle').hide();
             //make sure the file is correct in index
            $('#pentasuccess').trigger('play');
            
           

            // change this
            $('body').css('image', 'url("images/temp.gif")');

                setInterval(() => {
                    // Where do you want the player to end up
                    window.open("https://puzzled.tgb.gg/EndGame/", '_blank');
                    $('#completed').show();
                    
                }, 3 * 1000); // 5 is the number of seconds before redirecting
            //window.open("https://puzzled.tgb.gg/EndGame/");
        }
        console.log(words);
        storage.setItem('pentagramletters', JSON.stringify(words));

        if (this.value.length == this.maxLength) {
            $(this).next('.letter').focus();
        }
    });
});

// var iframe = $("#iframe"); 
// var newWindow = window.open(iframe.attr(src), 'Dynamic Popup', 'height=' + iframe.height() + ', width=' + iframe.width() + 'scrollbars=auto, resizable=no, location=no, status=no');
// newWindow.document.write(iframe[0].outerHTML);
// newWindow.document.close();
// iframe[0].outerHTML = '';