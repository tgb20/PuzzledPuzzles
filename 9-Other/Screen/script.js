
var l = 0;
var vid = document.getElementById('videowindow');
 





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

function showSuccess() {
	document.getElementById('greatSuccess').style.display ='block';
  document.getElementById('videoDivSuccess').style.display ='block';
  document.getElementById('formDiv').style.display ='none';
  document.getElementById('videoButtonId').style.display ='none';
  document.getElementById('videoButtonSuccessId').style.display ='block';
  
  //var x = document.getElementById("audioDisplaySuccess"); x.play();

}


function showVideo() {
  document.getElementById('greatSuccess').style.display ='none';
  document.getElementById('videoDiv').style.display ='block'; 

  var x = document.getElementById("audioDisplayTrack");x.pause();
  setInterval(() => {
    document.getElementById('navigationInstId').style.display ='none';
  }, 3 * 1000);
  }



function myFunction() {    
    //document.getElementById('formDiv').style.display ='block';
    //document.getElementById('videowindow').style.display ='none';
}




function playVideo() {
  if (l === 0) {

    $('#videowindow').trigger('play');
    l = 1;
  } else {
    $('#videowindow').trigger('pause');
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

    $('#videowindowSuccess').trigger('play');
    l = 1;
  } else {
    $('#videowindowSuccess').trigger('pause');
    l = 0;
  }


  if (vid.paused == true) {
    document.getElementById('videoButtonSuccessId').className = "vbPlayClass";

          } else {//document.getElementById('temp').style.display = 'block';
                  document.getElementById('videoButtonSuccessId').className = "vbPauseClass";

        }
} 



document.getElementById('videowindow').addEventListener('ended',myHandler,false);
function myHandler(e) {
    // What you want to do after the event
    document.getElementById('videowindow').style.display ='none';
    document.getElementById('videoDiv').style.display ='none';
    document.getElementById('formDiv').style.zIndex ='1';
    document.getElementById('videoButtonId').style.display ='none';

}








//THE SCRIPT FOR CODE




  function codeInputting() {
  var wrongResponse;
  var blankResponse;
  
  var puzzleOne =  document.getElementById('inputFirstName').value.toLowerCase();
  var puzzleTwo =  document.getElementById('inputLastName').value.toLowerCase();
  


     if ( (puzzleOne == 'ron') && 
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



