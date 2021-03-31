function myCountingFunctionX() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.klikkcountX) {
      localStorage.klikkcountX = Number(localStorage.klikkcountX)+1;
    } else {
      localStorage.klikkcountX = 1;
    }
    document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcountX + " time(s).";
  } else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function triggerPuzzleOrAudioX() {

	if (localStorage.klikkcountX == undefined)
	{
	
		var x = document.getElementById("featureAudioId"); x.play();
		document.getElementById("buttonId").style.display = "block";
		document.getElementById("squareId").style.display = "block";
		//revealPuzzle();
	}

	else {
		document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";
		var x = document.getElementById("featureAudioId"); x.pause();
		document.getElementById("puzzle3rules").style.display = "block";
		}
	}  




function featureAudio() {
		var x = document.getElementById("featureAudioId"); x.play();

		document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";
		revealPuzzle();
		}   



function revealPuzzle(){
	setInterval(() => {
						
                      document.getElementById("puzzle3rules").style.display = "block";
                      
                      
                    }, 5 * 1000);
      }