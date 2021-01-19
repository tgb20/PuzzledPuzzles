window.onload = (() => {

    let correctOrder = ['ANTHROPOLOGY', 'HERBOLOGY', 'PSYCHOLOGY', 'THEOLOGY', 'BEER', 'CHAMPAGNE', 'CHICKEN', 'COGNAC', 'ELK', 'FISH', 'RABBIT',  'VODKA'];

    let dropzones = document.querySelectorAll('.dropzone');

    let droppable = new Draggable.Swappable(
        dropzones,
        {
            draggable: '.draggable',
            dropzone: '.dropzone',
            mirror: { constrainDimensions: true }
        }
    );

    setInterval(() => {

        let htmlBooks = document.getElementsByClassName("bookimg");

        let bookElements = Array.prototype.filter.call(htmlBooks, (book) => {
            return book;
        });

        let bookImages = [];

        bookElements.forEach(bookElement => {

            let bookName = bookElement.src.split('/').slice(-1)[0].split('.')[0];

            bookImages.push(bookName);
        });

        if (arraysEqual(bookImages, correctOrder)) {
            document.getElementById('solvedtext').style.display = 'block';
            document.getElementById('books').style.display = 'none';
        } else {
            document.getElementById('solvedtext').style.display = 'none';
        }

    }, 250);
});

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}