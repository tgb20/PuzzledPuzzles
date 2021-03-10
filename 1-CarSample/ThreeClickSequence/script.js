

function acceleratorClick() 
            {
                            if(typeof(Storage) !== "undefined") {
                                    if (window.localStorage.clickcount) {
                                      window.localStorage.clickcount = Number(window.localStorage.clickcount)+2;
                                    } else {
                                      window.localStorage.clickcount = 0;
                                  
                                    }}


                            if (window.localStorage.clickcount > 2) {window.localStorage.clear(); printResults();}
            }


function hornClick() 
            {
                            if(typeof(Storage) !== "undefined") {
                                                  if (window.localStorage.clickcount) {
                                                    window.localStorage.clickcount = Number(window.localStorage.clickcount)+2;
                                                  } else {
                                                    window.localStorage.clickcount = 0;
                                                
                                                  }}
                                                  window.localStorage.clickcount++;}

function doorClick() 
            {
                            if(typeof(Storage) !== "undefined") {
                                                  if (window.localStorage.clickcount) {
                                                    window.localStorage.clickcount = Number(window.localStorage.clickcount)-0;
                                                  } else {
                                                    window.localStorage.clickcount = 0;}
                                                  }
                                                }



function clickCounter() {

  if(typeof(Storage) !== "undefined") {
    if (window.localStorage.clickcount) {
      window.localStorage.clickcount = Number(window.localStorage.clickcount)+1;
    } else {
      window.localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + window.localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function clickCounterGreen() {

  if(typeof(Storage) !== "undefined") {
    if (window.localStorage.clickcount) {
      window.localStorage.clickcount = Number(window.localStorage.clickcount)+2;
    } else {
      window.localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + window.localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function doShit() {
    if (window.localStorage.clickcount == 7) {
                document.getElementById("result").innerHTML = "HurraH!";
                document.getElementById("solvedPuzzle1").style.display = "block";
                                              }

}
function printResults() {
    document.getElementById("result").innerHTML = "You have clicked the button" + window.localStorage.clickcount + "time";

}



function redButtonClick() 
            {
                document.getElementById('redbutton').style.backgroundColor = "yellow";
                            if(typeof(Storage) !== "undefined") {
                                    if (window.localStorage.clickcount) {
                                      window.localStorage.clickcount = Number(window.localStorage.clickcount)+2;
                                    } else {
                                      window.localStorage.clickcount = 0;
                                    }}

                            if (window.localStorage.clickcount > 2) {window.localStorage.clear(); printResults();}
            }


function blueButtonClick() 
            {
                document.getElementById('bluebutton').style.backgroundColor = "yellow";
                if(typeof(Storage) !== "undefined") {
                                    if (window.localStorage.clickcount) {
                                      window.localStorage.clickcount = Number(window.localStorage.clickcount)+2;
                                    } else {
                                      window.localStorage.clickcount = 1;
                                    }}
            }

function greenButtonClick() 
            {
                document.getElementById('greenbutton').style.backgroundColor = "pink";
                if(typeof(Storage) !== "undefined") {
                                    if (window.localStorage.clickcount >= 8) {
                                      window.localStorage.clickcount = -1;
                                    }}
            }

          




function soundClick() {var x = document.getElementById("reving"); x.play();}            

function soundhonkClick() {var x = document.getElementById("honking"); x.play();} 








/*
function zredButtonClick() 
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


function zblueButtonClick() 
            {
                document.getElementById('bluebutton').style.backgroundColor = "yellow";
                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount) {
                                      localStorage.clickcount = Number(localStorage.clickcount)+2;
                                    } else {
                                      localStorage.clickcount = 1;
                                    }}
            }

function zgreenButtonClick() 
            {
                document.getElementById('greenbutton').style.backgroundColor = "pink";
                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.clickcount >= 8) {
                                      localStorage.clickcount = -1;
                                    }}
            }

          

function zclickCounter() {

  if(typeof(Storage) !== "undefined") {
    if (window.localStorage.clickcount) {
      window.localStorage.clickcount = Number(window.localStorage.clickcount)+1;
    } else {
      window.localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

*/
