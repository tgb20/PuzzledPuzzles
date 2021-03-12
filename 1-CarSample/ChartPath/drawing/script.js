var color = $('.selected').css('background-color');
var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
var lastEvent,
    mousedown = false;



function showHome() {
document.getElementById('cs1').style.display ='none';
document.getElementById('codeId').style.display ='block';
document.getElementById('thebtn').style.display ='none';
document.getElementById('greatSuccess').style.display ='none';
document.getElementById('videoDiv').style.display ='none';

}


function showVideo() {

document.getElementById('videoDiv').style.display ='block';

}

function showMap() {
  document.getElementById('cs1').style.display ='block';
document.getElementById('codeId').style.display ='none';
document.getElementById('greatSuccess').style.display ='none';
document.getElementById('videoDiv').style.display ='none';
document.getElementById('thebtn').style.display ='block';
}


function clearCanvas() {
  document.getElementById('cs1').style.display ='block';
  document.getElementById('codeId').style.display ='none';
canvas = document.getElementById('cs1');
ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
}



// When clicking on control list items
$('.controls').on('click', 'li', function () {
  // Deselect sibling elements
  $(this).siblings().removeClass('selected');
  
  // Select clicked element
  $(this).addClass('selected');
  
  // cache current color
  color = $(this).css('background-color');
});


// When "New Color" button is clicked
$('#revealColorSelect').click(function () {
  changeColor();
  
  // Toggle visibility of colorSelect element
  $('#colorSelect').toggle();
});


function changeColor() {
  var r = $('#red').val(),
      g = $('#green').val(),
      b = $('#blue').val();
  
  // Update the newColor span
  $('#newColor').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
}

// When color slider values change
$('input[type=range]').change(changeColor);



// When "Add Color" button is clicked
$('#addNewColor').click(function () {
  // Append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor);
  
  // Select the new color
  $newColor.click();
});



// On mouse event(s) on the canvas
$canvas
  .mousedown(function (event) {
    lastEvent = event;
    mousedown = true;
  })
  .mousemove(function (event) {
    if (mousedown) {
      // Draw lines
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(event.offsetX, event.offsetY);
      context.strokeStyle = color;
      context.stroke();
      
      lastEvent = event;
    }
  })
  .mouseup(function (event) {
    mousedown = false;
  })
  .mouseleave(function (event) {
    mousedown = false;
  });








//THE SCRIPT FOR CODE

  (function() {
  //   JQuery
  //   JQuery AutoTab Magic

  // Form Parent
  var clearInputs, form, formInputs, inputCode, validCode, validateCode;

  form = $(".code_input");

  // Form Inputs
  formInputs = $(form).children("input");

  // Valid Code
  validCode = "523";

  //JQuery AutoTab to automatically move forward when maximum length of input is reached.
  $(formInputs).autotab_magic();

  // Returns the code which is inputted into each of the form inputs
  inputCode = function() {
    var code;
    code = []; // Blank array (probably a better way to do this
    $(formInputs).each(function() { // Selects each form input object
      return code.push($(this).val()); // Pushes each form input value to the [code] array
    });
    return code.join(""); // Returns the code array in string form (joined)
  };

  
  // Checks the code which is returned from inputCode()
  validateCode = function() {
    var c;
    c = inputCode(); // Runs inputCode() to have a code string to validate
    if (c === validCode) { // Checks code against validCode variable
      $(form).removeClass("error").addClass("success"); // Adds success class and removes error class from form
      $(".hint").fadeOut(); // Hides the hint
      document.getElementById('cs1').style.display ='none';
document.getElementById('codeId').style.display ='none';
document.getElementById('greatSuccess').style.display ='block';
      return false; // End of successful code input
    } else if (c.length === 4) { // Checks if code is 4 digits long
      return $(".hint").fadeIn(); // Shows the hint
    } else {
      $(form).addClass("error").removeClass("success"); // Adds error class, removes success class from form
      return false; // End of unsuccessful input
    }
  };

  
  // Clears out all the inputs and sets the focus to the first one
  clearInputs = function() {
    $(formInputs).first().focus(); // Set focus to first input
    $(formInputs).val(""); // Sets input values to null
    return $(form).removeClass(); // Remove classes from form
  };

  
  // Initiates code validation if the key pressed isn't backspace or delete
  $(formInputs).keyup(function() { // On keyup in any of the form inputs
    if (event.keyCode === 8 || event.keyCode === 46) { // Maps to the backspace and delete key
      clearInputs(); // Clears the form
      return false; // End of backspace event
    } else {
      return validateCode(); // Run validation function
    }
  });

  
  // Clears form when clicking any of the form inputs
  $(formInputs).click(function() {
    return clearInputs(); // Clears form
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2E7RUFBQTs7OztBQUFBLE1BQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTs7RUFDYixJQUFBLEdBQU8sQ0FBQSxDQUFFLGFBQUYsRUFETTs7O0VBSWIsVUFBQSxHQUFhLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLEVBSkE7OztFQU9iLFNBQUEsR0FBWSxPQVBDOzs7RUFVYixDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsYUFBZCxDQUFBLEVBVmE7OztFQWFiLFNBQUEsR0FBWSxRQUFBLENBQUEsQ0FBQTtBQUNaLFFBQUE7SUFBRSxJQUFBLEdBQU8sR0FBVDtJQUNFLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxJQUFkLENBQW1CLFFBQUEsQ0FBQSxDQUFBLEVBQUE7YUFDakIsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFBLENBQVYsRUFEaUI7SUFBQSxDQUFuQjtXQUdBLElBQUksQ0FBQyxJQUFMLENBQVUsRUFBVixFQUxVO0VBQUEsRUFiQzs7OztFQXNCYixZQUFBLEdBQWUsUUFBQSxDQUFBLENBQUE7QUFDZixRQUFBO0lBQUUsQ0FBQSxHQUFJLFNBQUEsQ0FBQSxFQUFOO0lBQ0UsSUFBRyxDQUFBLEtBQUssU0FBUjtNQUNFLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxXQUFSLENBQW9CLE9BQXBCLENBQTRCLENBQUMsUUFBN0IsQ0FBc0MsU0FBdEMsRUFBSjtNQUNJLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxPQUFYLENBQUEsRUFESjthQUVJLE1BSEY7S0FBQSxNQUlLLElBQUcsQ0FBQyxDQUFDLE1BQUYsS0FBWSxDQUFmO2FBQ0gsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLE1BQVgsQ0FBQSxFQURHO0tBQUEsTUFBQTtNQUdILENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLENBQXlCLENBQUMsV0FBMUIsQ0FBc0MsU0FBdEMsRUFBSjthQUNJLE1BSkc7O0VBTlEsRUF0QkY7Ozs7RUFvQ2IsV0FBQSxHQUFjLFFBQUEsQ0FBQSxDQUFBO0lBQ1osQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEtBQWQsQ0FBQSxDQUFxQixDQUFDLEtBQXRCLENBQUEsRUFBRjtJQUNFLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxHQUFkLENBQWtCLEVBQWxCLEVBREY7V0FFRSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsV0FBUixDQUFBLEVBSFk7RUFBQSxFQXBDRDs7OztFQTJDYixDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsS0FBZCxDQUFvQixRQUFBLENBQUEsQ0FBQSxFQUFBO0lBQ2xCLElBQUcsS0FBSyxDQUFDLE9BQU4sS0FBaUIsQ0FBakIsSUFBc0IsS0FBSyxDQUFDLE9BQU4sS0FBaUIsRUFBMUM7TUFDRSxXQUFBLENBQUEsRUFBSjthQUNJLE1BRkY7S0FBQSxNQUFBO2FBSUUsWUFBQSxDQUFBLEVBSkY7O0VBRGtCLENBQXBCLEVBM0NhOzs7O0VBb0RiLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxLQUFkLENBQW9CLFFBQUEsQ0FBQSxDQUFBO1dBQ2xCLFdBQUEsQ0FBQSxFQURrQjtFQUFBLENBQXBCO0FBcERhIiwic291cmNlc0NvbnRlbnQiOlsiIyAgIEpRdWVyeVxuIyAgIEpRdWVyeSBBdXRvVGFiIE1hZ2ljXG5cbiMgRm9ybSBQYXJlbnRcbmZvcm0gPSAkKFwiLmNvZGVfaW5wdXRcIilcblxuIyBGb3JtIElucHV0c1xuZm9ybUlucHV0cyA9ICQoZm9ybSkuY2hpbGRyZW4gXCJpbnB1dFwiXG5cbiMgVmFsaWQgQ29kZVxudmFsaWRDb2RlID0gXCIxMjM0XCJcblxuI0pRdWVyeSBBdXRvVGFiIHRvIGF1dG9tYXRpY2FsbHkgbW92ZSBmb3J3YXJkIHdoZW4gbWF4aW11bSBsZW5ndGggb2YgaW5wdXQgaXMgcmVhY2hlZC5cbiQoZm9ybUlucHV0cykuYXV0b3RhYl9tYWdpYygpXG5cbiMgUmV0dXJucyB0aGUgY29kZSB3aGljaCBpcyBpbnB1dHRlZCBpbnRvIGVhY2ggb2YgdGhlIGZvcm0gaW5wdXRzXG5pbnB1dENvZGUgPSAtPlxuICBjb2RlID0gW10gIyBCbGFuayBhcnJheSAocHJvYmFibHkgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXNcbiAgJChmb3JtSW5wdXRzKS5lYWNoIC0+ICMgU2VsZWN0cyBlYWNoIGZvcm0gaW5wdXQgb2JqZWN0XG4gICAgY29kZS5wdXNoICQodGhpcykudmFsKCkgIyBQdXNoZXMgZWFjaCBmb3JtIGlucHV0IHZhbHVlIHRvIHRoZSBbY29kZV0gYXJyYXlcblxuICBjb2RlLmpvaW4gXCJcIiAjIFJldHVybnMgdGhlIGNvZGUgYXJyYXkgaW4gc3RyaW5nIGZvcm0gKGpvaW5lZClcblxuXG4jIENoZWNrcyB0aGUgY29kZSB3aGljaCBpcyByZXR1cm5lZCBmcm9tIGlucHV0Q29kZSgpXG52YWxpZGF0ZUNvZGUgPSAtPlxuICBjID0gaW5wdXRDb2RlKCkgIyBSdW5zIGlucHV0Q29kZSgpIHRvIGhhdmUgYSBjb2RlIHN0cmluZyB0byB2YWxpZGF0ZVxuICBpZiBjIGlzIHZhbGlkQ29kZSAjIENoZWNrcyBjb2RlIGFnYWluc3QgdmFsaWRDb2RlIHZhcmlhYmxlXG4gICAgJChmb3JtKS5yZW1vdmVDbGFzcyhcImVycm9yXCIpLmFkZENsYXNzIFwic3VjY2Vzc1wiICMgQWRkcyBzdWNjZXNzIGNsYXNzIGFuZCByZW1vdmVzIGVycm9yIGNsYXNzIGZyb20gZm9ybVxuICAgICQoXCIuaGludFwiKS5mYWRlT3V0KCkgIyBIaWRlcyB0aGUgaGludFxuICAgIGZhbHNlICMgRW5kIG9mIHN1Y2Nlc3NmdWwgY29kZSBpbnB1dFxuICBlbHNlIGlmIGMubGVuZ3RoIGlzIDQgIyBDaGVja3MgaWYgY29kZSBpcyA0IGRpZ2l0cyBsb25nXG4gICAgJChcIi5oaW50XCIpLmZhZGVJbigpICMgU2hvd3MgdGhlIGhpbnRcbiAgZWxzZVxuICAgICQoZm9ybSkuYWRkQ2xhc3MoXCJlcnJvclwiKS5yZW1vdmVDbGFzcyBcInN1Y2Nlc3NcIiAjIEFkZHMgZXJyb3IgY2xhc3MsIHJlbW92ZXMgc3VjY2VzcyBjbGFzcyBmcm9tIGZvcm1cbiAgICBmYWxzZSAjIEVuZCBvZiB1bnN1Y2Nlc3NmdWwgaW5wdXRcblxuXG4jIENsZWFycyBvdXQgYWxsIHRoZSBpbnB1dHMgYW5kIHNldHMgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBvbmVcbmNsZWFySW5wdXRzID0gLT5cbiAgJChmb3JtSW5wdXRzKS5maXJzdCgpLmZvY3VzKCkgIyBTZXQgZm9jdXMgdG8gZmlyc3QgaW5wdXRcbiAgJChmb3JtSW5wdXRzKS52YWwgXCJcIiAjIFNldHMgaW5wdXQgdmFsdWVzIHRvIG51bGxcbiAgJChmb3JtKS5yZW1vdmVDbGFzcygpICMgUmVtb3ZlIGNsYXNzZXMgZnJvbSBmb3JtXG5cblxuIyBJbml0aWF0ZXMgY29kZSB2YWxpZGF0aW9uIGlmIHRoZSBrZXkgcHJlc3NlZCBpc24ndCBiYWNrc3BhY2Ugb3IgZGVsZXRlXG4kKGZvcm1JbnB1dHMpLmtleXVwIC0+ICMgT24ga2V5dXAgaW4gYW55IG9mIHRoZSBmb3JtIGlucHV0c1xuICBpZiBldmVudC5rZXlDb2RlIGlzIDggb3IgZXZlbnQua2V5Q29kZSBpcyA0NiAjIE1hcHMgdG8gdGhlIGJhY2tzcGFjZSBhbmQgZGVsZXRlIGtleVxuICAgIGNsZWFySW5wdXRzKCkgIyBDbGVhcnMgdGhlIGZvcm1cbiAgICBmYWxzZSAjIEVuZCBvZiBiYWNrc3BhY2UgZXZlbnRcbiAgZWxzZVxuICAgIHZhbGlkYXRlQ29kZSgpICMgUnVuIHZhbGlkYXRpb24gZnVuY3Rpb25cblxuXG4jIENsZWFycyBmb3JtIHdoZW4gY2xpY2tpbmcgYW55IG9mIHRoZSBmb3JtIGlucHV0c1xuJChmb3JtSW5wdXRzKS5jbGljayAtPlxuICBjbGVhcklucHV0cygpICMgQ2xlYXJzIGZvcm1cbiJdfQ==
//# sourceURL=coffeescript