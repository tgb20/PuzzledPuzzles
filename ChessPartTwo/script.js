$(() => {

    let storage = window.localStorage;

    if(storage.getItem('chessValue') == 'false') {
        $('#chessboard').show();
        $('#buttondiv').show();
        $('#lockedheading').hide();
        //$('#overlay').show();
        $('#unlockedheading').show();
    }
});


window.onload = (() => {

    let baseRotation = 180;
    let overlayOpen = false;

    document.getElementById("overlay").onclick = () => {
        baseRotation += 90;
        document.getElementById("overlay").style.transform = "rotate(" + baseRotation + "deg)";
    }

    document.getElementById("addoverlay").onclick = () => {
        if(overlayOpen) {
            document.getElementById('overlay').style.display = 'none';
            overlayOpen = false;
            document.getElementById("addoverlay").innerText = 'USE THE DECODER YOU FOUND';
        } else {
            document.getElementById('overlay').style.display = 'block';
            overlayOpen = true;
            document.getElementById("addoverlay").innerText = 'HIDE THE DECODER YOU FOUND';
        }
    }
});

function puzzleReset() {
    if (window.confirm('Stuck? Click okay to reset the puzzle')) {
        let storage = window.localStorage;

        // Remove Items for this puzzle
        storage.removeItem("chessValue");
        
        location.reload();
    }
}


