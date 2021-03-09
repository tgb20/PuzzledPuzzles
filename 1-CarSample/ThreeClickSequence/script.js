
function acceleratorClick() 
            {
                
                            if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount) {
                                      localStorage.clickcount = Number(localStorage.clickcount)+2;
                                    } else {
                                      localStorage.clickcount = 0;
                                  
                                    }}


                            if (localStorage.clickcount > 2) {window.localStorage.clear(); printResults();}
            }

function soundClick() {
                      var x = document.getElementById("reving"); x.play();}            

function soundhonkClick() {
                      var x = document.getElementById("honking"); x.play();}   

function redButtonClick() 
            {
                document.getElementById('redbutton').style.backgroundColor = "yellow";
                            if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount) {
                                      localStorage.clickcount = Number(localStorage.clickcount)+2;
                                    } else {
                                      localStorage.clickcount = 0;
                                    }}

                            if (localStorage.clickcount > 2) {window.localStorage.clear(); printResults();}
            }



function blueButtonClick() 
            {
                document.getElementById('bluebutton').style.backgroundColor = "yellow";
                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount) {
                                      localStorage.clickcount = Number(localStorage.clickcount)+2;
                                    } else {
                                      localStorage.clickcount = 1;
                                    }}
            }

function greenButtonClick() 
            {
                document.getElementById('greenbutton').style.backgroundColor = "pink";
                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount >= 8) {
                                      localStorage.clickcount = -1;
                                    }}
            }

          

function clickCounter() {

  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function clickCounterGreen() {

  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+2;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function doShit() {
    if (localStorage.clickcount == 6) {document.getElementById("result").innerHTML = "HurraH!";}

}
function printResults() {
    document.getElementById("result").innerHTML = "You have clicked the button 0 time(s).";

}
