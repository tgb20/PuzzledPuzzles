

function clickFunc(parameter){
  console.log(parameter)
}




window.onload = (() => {

    
    //let storage = window.localStorage;

    //let correctOrder = ['ANTHROPOLOGY', 'HERBOLOGY', 'PSYCHOLOGY', 'THEOLOGY', 'CHICKEN', 'ELK', 'FISH', 'RABBIT', 'BEER', 'CHAMPAGNE', 'VODKA', 'COGNAC', 'GOETHE', 'KAFKA', 'NIETZSCHE', 'TOLSTOY', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    //let correctOrder = ['BEER', 'ANTHROPOLOGY', 'CHAMPAGNE', 'CHICKEN', 'COGNAC', 'ELK', 'FISH', 'GOETHE', 'HERBOLOGY', 'KAFKA', 'NIETZSCHE', 'PSYCHOLOGY', 'RABBIT', 'THEOLOGY', 'TOLSTOY', 'VODKA', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK', 'BLANK'];
    let correctOrder = ['BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',  'BLANK', 'BLANK', 'BLANK', 'BLANK',    'THEOLOGY', 'RABBIT', 'VODKA', 'TOLSTOY',     'PSYCHOLOGY', 'ELK', 'CHAMPAGNE', 'GOETHE',       'ANTHROPOLOGY', 'CHICKEN', 'BEER',  'KAFKA',     'HERBOLOGY', 'FISH', 'COGNAC','NIETZSCHE'];


    let dropzones = document.querySelectorAll('.dropzone');

    let droppable = new Draggable.Swappable(
        dropzones,
        {
            draggable: '.draggable',
            dropzone: '.dropzone',
            mirror: { constrainDimensions: true }
        }
    );




// Get the Coordinates modal
var coordinatesModal = document.getElementById("coordinatesModal");

// Get the button that opens the modal
var coordinatesBTN = document.getElementById("coordinatesButton");

// Get the <span> element that closes the modal
var coordinatesSpan = document.getElementsByClassName("closeCoordinates")[0];

// When the user clicks on the button, open the modal
coordinatesBTN.onclick = function() {
 coordinatesModal.style.display = "block";
 coordinatesBTN.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
coordinatesSpan.onclick = function() {
  coordinatesModal.style.display = "none";
  coordinatesBTN.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == coordinatesModal) {
    coordinatesModal.style.display = "none";
    coordinatesBTN.style.display = "block";
  }
}




  
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("padlockButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
//  modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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


