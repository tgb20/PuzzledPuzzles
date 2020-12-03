let image1 = true;

function switchImages() {
    if(image1) {
        // Show Image 2
        document.getElementById("image").src = "images/click-change_2.png"; 
    } else {
        // Show Image 1
        document.getElementById("image").src = "images/click-change_1.png"; 
    }
    image1 = !image1;
}