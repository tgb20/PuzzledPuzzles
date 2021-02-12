$(() => {

    let storage = window.localStorage;

    if (storage.getItem('lightSwitchValue') == 'false') {
        $('#lightSwitch').prop('checked', false);
    }
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == false) {
            storage.setItem('lightSwitchValue', false);
        }
    });
});

function puzzleReset() {
    if (window.confirm('Stuck? Click okay to reset the puzzle')) {
        let storage = window.localStorage;

        // Remove Items for this puzzle
        storage.removeItem("lightSwitchValue");
        $('#lightSwitch').prop('checked', true);

        location.reload();
    }
}