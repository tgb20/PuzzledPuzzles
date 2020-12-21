function setup() {
    let render = createCanvas(100, 100);
    render.parent("canvas");
    background(184, 235, 200);
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
