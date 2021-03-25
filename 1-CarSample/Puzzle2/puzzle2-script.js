
function myCountingFunction1() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.klikkcount1) {
      localStorage.klikkcount1 = Number(localStorage.klikkcount1)+1;
    } else {
      localStorage.klikkcount1 = 1;
    }
    document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcount1 + " time(s).";
  } else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function triggerPuzzleOrAudio1() {

	if (localStorage.klikkcount1 == undefined)
	{
	setTimeout(function() 
		{
		document.getElementById("buttonId").style.display = "block";
		document.getElementById("squareId").style.display = "block";
		document.getElementById("puzzle2rules").style.display = "none";
		//revealPuzzle();
	}, 
		100);
	}

	else {
		document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";
		document.getElementById("puzzle2rules").style.display = "block";
		}
	}  



function myCountingFunction2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.klikkcount2) {
      localStorage.klikkcount2 = Number(localStorage.klikkcount2)+1;
    } else {
      localStorage.klikkcount2 = 1;
    }
    document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcount2 + " time(s).";
  } else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function triggerPuzzleOrAudio2() {

	if (localStorage.klikkcount2 == undefined)
	{
	setTimeout(function() 
		{
		document.getElementById("buttonId").style.display = "block";
		document.getElementById("squareId").style.display = "block";
		document.getElementById("puzzle2rules").style.display = "none";
		//revealPuzzle();
	}, 
		100);
	}

	else {
		document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";
		document.getElementById("puzzle2rules").style.display = "block";
		}
	}  



/////FOR SCRIPT 3

function myCountingFunction3() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.klikkcount3) {
      localStorage.klikkcount3 = Number(localStorage.klikkcount3)+1;
    } else {
      localStorage.klikkcount3 = 1;
    }
    document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcount3 + " time(s).";
  } else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function triggerPuzzleOrAudio3() {

	if (localStorage.klikkcount3 == undefined)
	{
	setTimeout(function() 
		{
		document.getElementById("buttonId").style.display = "block";
		document.getElementById("squareId").style.display = "block";
		document.getElementById("puzzle2rules").style.display = "none";
		//revealPuzzle();
	}, 
		100);
	}

	else {
		document.getElementById("buttonId").style.display = "none";
		document.getElementById("squareId").style.display = "none";
		document.getElementById("puzzle2rules").style.display = "block";
		}
	}  







function featureAudio()
		{var x = document.getElementById("featureAudioId"); x.play(); 
			document.getElementById("buttonId").style.display = "none";
			document.getElementById("squareId").style.display = "none";

		setInterval(() => {document.getElementById("puzzle2rules").style.display = "block";
		                    }, 7 * 1000);

		}


//function showResult() {document.getElementById("demo").innerHTML = "You have clicked the button " + localStorage.klikkcount + " time(s).";}


