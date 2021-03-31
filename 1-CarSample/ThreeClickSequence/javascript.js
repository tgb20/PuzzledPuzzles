


function soundCarDescription() {var x = document.getElementById("designDescription"); x.play();}  



function revealPuzzle1(){
	setInterval(() => {
                      document.getElementById("puzzle1rules").style.display = "block";
                      
                      
                    }, 12 * 1000);
      }




function myCountingFunctionButton() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.klikkcount4) {
      localStorage.klikkcount4 = Number(localStorage.klikkcount4)+1;
    } else {
      localStorage.klikkcount4 = 1;
    }
    document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcount4 + " time(s).";
  } else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function triggerPuzzleOrAudioButton() {

	if (localStorage.klikkcount4 == undefined)
	{
	
		document.getElementById("buttonId").style.display = "block";
		
		document.getElementById("puzzle1rules").style.display = "none";
		//revealPuzzle1();
	}

	else {
		document.getElementById("puzzle1rules").style.display = "block";
		}
	} 



	function featureAudio()
		{var x = document.getElementById("designDescription"); x.play(); 
			document.getElementById("buttonId").style.display = "none";
			

		setInterval(() => {document.getElementById("puzzle1rules").style.display = "block";
		                    }, 7 * 1000);

		}