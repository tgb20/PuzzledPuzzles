var l = 0;
var vid = document.getElementById('videowindow');
/*

 





function startAudio() { 
    var x = document.getElementById("audioDisplayTrack");x.play();
    $('#videowindow').trigger('pause');
    document.getElementById('romanII').style.display ='none';
    document.getElementById('video1').style.display ='block';
    document.getElementById('audioDisplay').style.display ='block';
    document.getElementById('romanII').style.display ='none';
		document.getElementById('greatSuccess').style.display ='none';
		document.getElementById('videoDiv').style.display ='none'; 
		

    
        setTimeout(function() 
            {document.getElementById('video1').style.display ='none';
             document.getElementById('formForCode').style.display ='block';},
            5000);


              }   




function showHome() {
	document.getElementById('audioDisplay').style.display ='none';
document.getElementById('greatSuccess').style.display ='none';
document.getElementById('videoDiv').style.display ='none';
$('#videowindow').trigger('pause');
var x = document.getElementById("audioDisplayTrack");x.pause();
    document.getElementById('romanII').style.display ='none';

}





*/


function showVideo() {
  document.getElementById('greatSuccess').style.display ='none';
  document.getElementById('videoDiv').style.display ='block'; 

  var x = document.getElementById("audioDisplayTrack");x.pause();
  setInterval(() => {
    document.getElementById('navigationInstId').style.display ='none';
  }, 3 * 1000);
  }

function emailSubmission() {
  document.getElementById('cs1').style.display ='none';
  }


function showSuccess() {
	document.getElementById('greatSuccessDiv').style.display ='block';
  document.getElementById('videoDivSuccess').style.display ='block';
  document.getElementById('formDiv').style.display ='none';
  document.getElementById('videoButtonId').style.display ='none';
  document.getElementById('videoButtonSuccessId').style.display ='none';
}


function playMissionVideo() {
  document.getElementById('formDiv').style.display ='none';
  document.getElementById('videoDiv').style.display ='block';
  document.getElementById('videoWindow').style.display ='block';
}


$("#videoWindow").on('ended', function(){
  this.webkitExitFullscreen();
});
document.getElementById("videoWindow").onended = function() {myFunction()};
function myFunction() {
  
  document.getElementById("gameButton").style.opacity = "1.0";
  document.getElementById("theText").style.opacity ="0.0";
  document.getElementById("videoWindow").style.display ="none";
}


function playVideo() {
  if (l === 0) {
    $('#videoWindow').trigger('play');
    l = 1;
  } else {
    $('#videoWindow').trigger('pause');
    l = 0;
  }


  if (vid.paused == true) {
    document.getElementById('videoButtonId').className = "videoButtonPlayClass";
          } else {//document.getElementById('temp').style.display = 'block';
                  document.getElementById('videoButtonId').className = "videoButtonPauseClass";
        }
} 


function playCongrats() {
  if (l === 0) {

    $('#videoSuccess').trigger('play');
    l = 1;
  } else {
    $('#videoSuccess').trigger('pause');
    l = 0;
  }


  if (vid.paused == true) {
    document.getElementById('videoButtonSuccessId').className = "vbPlayClass";

          } else {//document.getElementById('temp').style.display = 'block';
                  document.getElementById('videoButtonSuccessId').className = "vbPauseClass";

        }
} 












//THE SCRIPT FOR CODE

  function codeInputting() {
  var wrongResponse;
  var blankResponse;
  
  var puzzleOne =  document.getElementById('inputFirstName').value.toLowerCase();
  var puzzleTwo =  document.getElementById('inputLastName').value.toLowerCase();
  


     if ( (puzzleOne == 'johnny') && 
          (puzzleTwo == 'appleseed') 
          ||
          (puzzleOne == 'johnny') && 
          (puzzleTwo == 'apple')
          ||
          (puzzleOne == 'johnny') && 
          (puzzleTwo == 'seed')
          ||
          (puzzleOne == 'ron')
          ||
          (puzzleOne == 'ron') && 
          (puzzleTwo == 'seed')      
          ||    
          (puzzleOne == 'ron') && 
          (puzzleTwo == 'appleseed') 
          )  
        
     
     {document.getElementById('formForCode').style.display ='none';
      showSuccess();


  } else {
  document.getElementById('wrongAnswerId').innerHTML = "No, that's not right.";
  var x = document.getElementById("failureAudio");x.play();
  setTimeout(function() 
    {
    document.getElementById('wrongAnswerId').innerHTML = " "; }, 
    2000);
  }
 
}



function initiateContactInfo() {
  //document.getElementById('videoDivSuccess').style.display ='none';
  //document.getElementById('sendToHomePage').style.display ='block';
 
  //document.getElementById('videoButtonSuccessId').style.display ='none';
  //document.getElementById('textAfterCongratsVideoId').style.display ='block';
  //document.getElementById('formDiv').style.display ='none';
  }