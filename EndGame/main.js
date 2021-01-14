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
            }

            if(chantsHeard == 3) {
                $('#allAudio').trigger('pause');
                window.location.href = 'https://www.puzzledescapegames.com/'
                $('body').css('background-image', 'none');
            }

            $('#chantCounter').text(`Chants Heard: ${chantsHeard}`);

        }
    });

    $('#startButton').click(() => {

        $('#preZone').hide();
        $('#ritual').show();
        const ctrl = new anycontrol();
        $('body').css('background-image', 'url("assets/h264.gif")');

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