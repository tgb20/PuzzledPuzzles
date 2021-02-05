window.onload = (() => {

    let correctOrder = ['CHANTS', 'ELEMENTS', 'GATES', 'HERBS', 'RITUALS', 'SPIRITS', 'SYMBOLS', 'WITCH'];
    //let correctOrder = ['HERBS', 'RITUALS', 'WITCH', 'GATES', 'SPIRITS', 'CHANTS', 'ELEMENTS', 'SYMBOLS'];

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
            document.getElementById('pentashelf').style.display = 'block';
            document.getElementById('books').style.display = 'none';
            setInterval(() => {
                    document.getElementById('linking').style.display = 'block';
                    

                    //$('#pentasoundsolved').trigger('play');
                    
                    //window.location.href = 'https://seekbeak.com/v/NkjxBONe1lQ'
                    window.open("https://seekbeak.com/v/60qZ0Zn8zrB", '_blank');
                    
                    
                }, 2 * 1000);
        } else {
            document.getElementById('solvedtext').style.display = 'block';
        }

    }, 250);
});

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}