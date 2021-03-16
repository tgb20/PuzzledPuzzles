


function featureAudio() {var x = document.getElementById("featureAudioId"); x.play();
setTimeout(function() 
		{document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";}, 
		100);}   



function revealPuzzle(){
	setInterval(() => {
						
                      document.getElementById("puzzle3rules").style.display = "block";
                      
                      
                    }, 7 * 1000);
      }