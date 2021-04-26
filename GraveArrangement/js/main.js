window.onload = (() => {

    let storage = window.localStorage;

    //let correctOrder = ['ANTHROPOLOGY', 'HERBOLOGY', 'PSYCHOLOGY', 'THEOLOGY', 'CHICKEN', 'ELK', 'FISH', 'RABBIT', 'BEER', 'CHAMPAGNE', 'VODKA', 'COGNAC', 'GOETHE', 'KAFKA', 'NIETZSCHE', 'TOLSTOY', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    let correctOrder = ['BEER', 'ANTHROPOLOGY', 'CHAMPAGNE', 'CHICKEN', 'COGNAC', 'ELK', 'FISH', 'GOETHE', 'HERBOLOGY', 'KAFKA', 'NIETZSCHE', 'PSYCHOLOGY', 'RABBIT', 'THEOLOGY', 'TOLSTOY', 'VODKA', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    //let correctOrder = ['BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',    'THEOLOGY', 'RABBIT', 'VODKA', 'TOLSTOY',     'PSYCHOLOGY', 'ELK', 'CHAMPAGNE', 'GOETHE',       'ANTHROPOLOGY', 'CHICKEN', 'BEER',  'KAFKA',     'HERBOLOGY', 'FISH', 'COGNAC','NIETZSCHE'];


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

        //document.getElementById('value').innerHTML = solutionVar;

        let graveSolved = storage.getItem('graveSolved');

        let htmlGraves = document.getElementsByClassName("graveimg");

        let graveElements = Array.prototype.filter.call(htmlGraves, (grave) => {
            return grave;
        });

        let graveImages = [];

        graveElements.forEach(graveElement => {

            let graveName = graveElement.src.split('/').slice(-1)[0].split('.')[0];

            graveImages.push(graveName);
        });


        document.getElementById('video').style.display = 'none';
        if (arraysEqual(graveImages, correctOrder)) {

            storage.setItem('graveSolved', 1);
            isItSolved = 1;

            //document.getElementById('graves').style.display = 'none';
            //document.getElementById('video').style.display = 'block';


            ///*
            //setTimeout(() => {
            //        document.getElementById('video').style.display = 'none';
            //        document.getElementById('solvedtext').style.display = 'block';
            //    }, 6 * 1000);
            //*/
        }

        //let graveSolved = window.localStorage;
        //graveSolved = isItSolved;



        document.getElementById('value').innerHTML = isItSolved;

        if (graveSolved === 1) {
            document.getElementById('graves').style.display = 'none';
            document.getElementById('video').style.display = 'block';
            document.getElementById('solvedtext').style.display = 'block';
            storage.setItem('graveSolved', 1);
            isItSolved = 1;
            //graveSolved = 1;      
        }
    }, 250);


    function puzzleReset() {
        if (window.confirm('Stuck? Click okay to reset the puzzle')) {
            storage.setItem('graveSolved', 0);
            location.reload();
        }
    }

});

function arraysEqual(a1, a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1) == JSON.stringify(a2);
}

$(function () {
    var $curParent, Content;
    $(document).delegate("span", "click", function () {
        if ($(this).closest("s").length) {
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