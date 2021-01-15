$(() => {
    let powerFound = false;
    let trappedFound = false;
    let sufferingFound = false;

    let chantsHeard = 0;

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome) {
        $('#chromeMessage').show();
        $('#scene').hide();
    }

    // spirits of our world and the next, 
    // lend us the POWER of your sight,
    // too long have we been TRAPPED in the night
    // allow us to conjure your might
    // and end our SUFFERING tonight

    const checkWords = (() => {
        if (powerFound && trappedFound && sufferingFound) {
            chantsHeard++;
            powerFound = false;
            trappedFound = false;
            sufferingFound = false;
            
            if(chantsHeard == 1) {
                $('#allAudio').trigger('play');
                $('#candle1').attr("src","assets/candle.jpg");
            }

            if(chantsHeard == 2) {
                $('#candle2').attr("src","assets/candle.jpg");
            }

            if(chantsHeard == 3) {
                $('#allAudio').trigger('pause');
                $('#candle3').attr("src","assets/candle.jpg");

                $('#successsound').trigger('play');

                // Replace temp.gif with the actual gif
                $('body').css('background-image', 'url("assets/successvid.gif")');

                setInterval(() => {
                    // Where do you want the player to end up
                    window.location.href = 'https://www.theprofessoroftheoccult.com/ending'
                }, 6 * 1000); // 5 is the number of seconds before redirecting

            }

            $('#chantCounter').text(`Chants Heard: ${chantsHeard}`);

        }
    });

    $('#startButton').click(() => {

        $('#preZone').hide();
        $('#ritual').show();
        const ctrl = new anycontrol();
        $('body').css('background-image', 'url("assets/demonback.gif")');

        ctrl.addCommand("power", function () {
            powerFound = true;
            checkWords();
        });

        ctrl.addCommand("trapped", function () {
            trappedFound = true;
            checkWords();
        });

        ctrl.addCommand("suffering", function () {
            sufferingFound = true;
            checkWords();
        });

        ctrl.getCommand();
        ctrl.start();
    });
});