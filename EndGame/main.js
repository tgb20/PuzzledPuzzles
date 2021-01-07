$(() => {
    $('#startButton').click(() => {
        $('#audio').trigger('play');

        $('#startButton').hide();
        $('#ritual').show();
        const ctrl = new anycontrol();

        ctrl.addCommand("world", function () {
            worldFound = true;
            checkWords();
        });

        ctrl.addCommand("conjure", function () {
            conjureFound = true;
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

    let worldFound = false;
    let conjureFound = false;
    let trappedFound = false;
    let tonightFound = false;


    const checkWords = (() => {
        if (worldFound) {
            $('#world').show();
        }
        if (conjureFound) {
            $('#conjure').show();
        }
        if (trappedFound) {
            $('#trapped').show();
        }
        if (tonightFound) {
            $('#tonight').show();
        }

        if (worldFound && conjureFound && trappedFound && tonightFound) {
            $('#gif').show();
        }
    });
});