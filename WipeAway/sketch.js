function setup() {
    let render = createCanvas(100, 300);
    render.parent("canvas");
    background(255, 235, 255);
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
