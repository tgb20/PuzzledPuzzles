function setup() {
    let render = createCanvas(100, 100);
    render.parent("canvas");
    background(184, 235, 200);
}

function draw() {
    if (mouseIsPressed) {
        erase();
        ellipse(mouseX, mouseY, 80, 80);
        noErase();
    }

    if(mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseX < 400) {
        cursor('cell');
    }

}
