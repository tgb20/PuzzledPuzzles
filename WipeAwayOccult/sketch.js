function setup() {
    let render = createCanvas(403, 556);
    render.parent("canvas");
    background(40, 40, 40);

    document.getElementsByClassName('blue')[0].style.backgroundImage = "url('images/demon-mirror.jpg')";

}

function draw() {
    if (mouseIsPressed) {
        erase();
        ellipse(mouseX, mouseY, 40, 40);
        noErase();
    }

    if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseX < 100) {
        cursor('cell');
    }

}
