window.onload = (() => {
    //let correctOrder = ['ANTHROPOLOGY', 'HERBOLOGY', 'PSYCHOLOGY', 'THEOLOGY', 'CHICKEN', 'ELK', 'FISH', 'RABBIT', 'BEER', 'CHAMPAGNE', 'VODKA', 'COGNAC', 'GOETHE', 'KAFKA', 'NIETZSCHE', 'TOLSTOY', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    //let correctOrder = ['ANTHROPOLOGY', 'VODKA'];
        let correctOrder = ['THEOLOGY', 'RABBIT', 'VODKA', 'TOLSTOY',     'PSYCHOLOGY', 'ELK', 'CHAMPAGNE', 'GOETHE',       'ANTHROPOLOGY', 'CHICKEN', 'BEER',  'KAFKA',     'HERBOLOGY', 'FISH', 'COGNAC','NIETZSCHE',     'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];


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

$(function(){
  var $curParent, Content;
  $(document).delegate("span","click", function(){
    if($(this).closest("s").length) {
      Content = $(this).parent("s").html();
      $curParent = $(this).closest("s");
      $(Content).insertAfter($curParent);
      $(this).closest("s").remove();
    }
    else {
      $(this).wrapAll("<s />");
    }
  });
});