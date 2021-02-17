$(() => {
    let powerFound = false;
    let trappedFound = false;
    let sufferingFound = false;

    let chantsHeard = 0;

    const ctrl = new anycontrol();

    var autoTimeout;
    let timeoutLength = 30; // Time in seconds before skipping to next candle;

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
        $('#chromeMessage').show();
        $('#scene').hide();
    }

    navigator.permissions.query(
        { name: 'microphone' }
    ).then(function (permissionStatus) {


        let state = permissionStatus.state;

        if (state != 'granted') {
            $('#bottom').show();
            $('#scene').hide();
        }

        permissionStatus.onchange = function () {

            if (this.state == 'granted') {
                $('#bottom').hide();
                $('#scene').show();
            }
        }

    })



    // spirits of our world and the next, 
    // lend us the POWER of your sight,
    // too long have we been TRAPPED in the night
    // allow us to conjure your might
    // and end our SUFFERING tonight

    const checkWords = (() => {
        if (powerFound && trappedFound && sufferingFound) {
            clearTimeout(autoTimeout);
            chantsHeard++;
            powerFound = false;
            trappedFound = false;
            sufferingFound = false;

            if (chantsHeard == 1) {
                $('#allAudio').trigger('play');
                $('#candle1').attr("src", "assets/candle.jpg");
                autoTimeout = setTimeout(() => {
                    powerFound = true;
                    trappedFound = true;
                    sufferingFound = true;
                    checkWords();
                }, timeoutLength * 1000);
            }

            if (chantsHeard == 2) {
                $('#candle2').attr("src", "assets/candle.jpg");
                autoTimeout = setTimeout(() => {
                    powerFound = true;
                    trappedFound = true;
                    sufferingFound = true;
                    checkWords();
                }, timeoutLength * 1000);
            }

            if (chantsHeard == 3) {
                $('#allAudio').trigger('pause');
                $('#candle3').attr("src", "assets/candle.jpg");

                $('#successsound').trigger('play');

                // demon puking gif
                $('body').css('background-image', 'url("assets/successvid.gif")');

                setInterval(() => {
                    $('#backup-button').show();
                    window.location.href = 'https://puzzled.tgb.gg/2-EndofGameVideo/';
                }, 6 * 1000); // 5 is the number of seconds before redirecting

            }

            $('#chantCounter').text(`Chants Heard: ${chantsHeard}`);

        }
    });

    $('#startButton').click(() => {

        autoTimeout = setTimeout(() => {
            powerFound = true;
            trappedFound = true;
            sufferingFound = true;
            checkWords();
        }, timeoutLength * 1000);


        $('#preZone').hide();
        $('#ritual').show();
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

        ctrl.start();
    });
});