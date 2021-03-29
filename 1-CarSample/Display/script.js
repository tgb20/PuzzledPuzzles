
var l = 0;
var vid = document.getElementById('videowindow');
 





function startAudio() { var x = document.getElementById("audioDisplayTrack");x.play();
    $('#videowindow').trigger('pause');
    document.getElementById('romanII').style.display ='none';
    setTimeout(function() 
		{
    document.getElementById('video1').style.display ='block';
    document.getElementById('audioDisplay').style.display ='block';
    document.getElementById('romanII').style.display ='none';
		document.getElementById('greatSuccess').style.display ='none';
		document.getElementById('videoDiv').style.display ='none';}, 
		100);
        setTimeout(function() 
            {document.getElementById('video1').style.display ='none';
             document.getElementById('formForCode').style.display ='block';},
            4000);


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
	var x = document.getElementById("audioDisplaySuccess"); x.play();
  document.getElementById('audioDisplay').style.display ='none';
  document.getElementById('iFrameId').style.display ='none';
  document.getElementById('videoDiv').style.display ='none';
}


function showVideo() {
  document.getElementById('greatSuccess').style.display ='none';
	document.getElementById('audioDisplay').style.display ='none';
  document.getElementById('videoDiv').style.display ='block';
  document.getElementById('iFrameId').style.display ='none';
  document.getElementById('romanII').style.display ='none';
  var x = document.getElementById("audioDisplayTrack");x.pause();
  }


function showMap() {
    var x = document.getElementById("audioDisplayTrack");x.pause();
    $('#videowindow').trigger('pause');
    setTimeout(function() 
    {
      document.getElementById('iFrameId').style.display ='block';
      document.getElementById('audioDisplay').style.display ='none';
      document.getElementById('romanII').style.display ='block';
      document.getElementById('greatSuccess').style.display ='none';
      document.getElementById('videoDiv').style.display ='none';
      document.getElementById('navigationInstId').style.display ='block';}, 
    100);       
           setInterval(() => {
                          document.getElementById('navigationInstId').style.display ='none';
                        }, 3 * 1000);
       
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











//THE SCRIPT FOR CODE

  function codeInputting() {
  var wrongResponse;
  var blankResponse;
  var puzzleOne =  document.getElementById('inputRom1').value;
  var puzzleTwo =  document.getElementById('inputRom2').value;
  var puzzleThree =  document.getElementById('inputRom3').value;


     if ((puzzleOne == '5') && 
      (puzzleTwo == '5') && 
        (puzzleThree == '3'))  
     
     {showSuccess();
  } else {
  document.getElementById('wrongAnswerId').innerHTML = "No, that's not right.";
  var x = document.getElementById("failureAudio");x.play();
  setTimeout(function() 
    {
    document.getElementById('wrongAnswerId').innerHTML = " "; }, 
    1000);
  }
 
}
