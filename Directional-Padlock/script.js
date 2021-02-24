var circ = document.getElementById("inner-circle");

function togglePos(x) {
  circ.className = "slide-" + x;
  setTimeout(function() {
    circ.className = "";
  }, 300);
  logPos(x[0]);
}

var dirHist = "";
var ans = "aaa";

function logPos(x) {
  dirHist += x;
  if(dirHist.includes(ans)){ 
    document.getElementById("fail").style.display = "none";
    document.getElementById("success").style.display = "block";
    setTimeout( function() {
      document.getElementById("outer-circle").className = "shake";
    }, 500)
    setTimeout( function() {
      document.getElementById("outer-circle").className = "";
    }, 1500)
  }
}