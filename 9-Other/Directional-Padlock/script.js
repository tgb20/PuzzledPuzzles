var circ = document.getElementById("inner-circle");

function togglePos(x) {
  circ.className = "slide-" + x;
  setTimeout(function() {
    circ.className = "";
  }, 300);
  logPos(x[0]);
}

var dirHist = "";
var ans = "geahecah";
var answ = "hdhd";
// North = a
// nEast = b
// East = c 
// sEast = d
// South = e
// sWest = f
// West = g
// nWest = h

//geahecah 
//w s n nw s e n nw


function logPos(x) {
  dirHist += x;
  if(dirHist.includes(ans) || dirHist.includes(answ)){ 
    document.getElementById("fail").style.display = "none";
    document.getElementById("success").style.display = "block";
    setTimeout( function() {
      document.getElementById("outer-circle").className = "shake";
    }, 500)
    setTimeout( function() {
      document.getElementById("outer-circle").className = "";
      document.getElementById("padlock").style.display = "none"
      document.getElementById("opensafe").style.display = "block"
    }, 1500)
  }
}