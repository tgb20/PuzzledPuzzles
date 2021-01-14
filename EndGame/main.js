$(() => {
    let worldFound = false;
    let trappedFound = false;
    let tonightFound = false;

    let chantsHeard = 0;

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome) {
        $('#chromeMessage').show();
        $('#scene').hide();
    }

    // Spirits of our WORLD and the next, lend us your SIGHT, 
    // give us the power to CONJURE our might, 
    // too long have they been trapped in the LIGHT, 
    // allow us to end their suffering TONIGHT.

    const checkWords = (() => {
        if (worldFound && trappedFound && tonightFound) {
            chantsHeard++;
            worldFound = false;
            trappedFound = false;
            tonightFound = false;
            
            if(chantsHeard == 1) {
                $('#allAudio').trigger('play');
            }

            if(chantsHeard == 3) {
                $('#allAudio').trigger('pause');
                $('#successAudio').trigger('play');
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

        ctrl.addCommand("world", function () {
            worldFound = true;
            checkWords();
        });

        ctrl.addCommand("trapped", function () {
            trappedFound = true;
            checkWords();
        });

        ctrl.addCommand("tonight", function () {
            tonightFound = true;
            checkWords();
        });

        ctrl.getCommand();
        ctrl.start();
    });
});