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
            document.getElementById("addoverlay").innerText = 'Show Overlay';
        } else {
            document.getElementById('overlay').style.display = 'block';
            overlayOpen = true;
            document.getElementById("addoverlay").innerText = 'Hide Overlay';
        }
    }
});