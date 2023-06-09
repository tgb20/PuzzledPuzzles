const { pointer, transform, calc, value, css, physics, trackOffset } = window.popmotion;
const { angle } = calc;
const { pipe, wrap, snap } = transform;

const dial = document.querySelector('.dial');
const dialRenderer = css(dial);
const dialRotation = value(0, v => dialRenderer.set('rotate', v));

//var btnRad = localStorage.radioSetting.getItem();
// get the position of the button inside the container (%)

      
// color width = position of button (%)


function startTracking(e) {
  e.preventDefault();
  const pointerAngle = pointer(e, {
    transform: v => {
      const dialPos = dial.getBoundingClientRect();
      const dialCenter = {
        x: dialPos.left + dialPos.width / 2,
        y: dialPos.top + dialPos.height / 2 };
      var x = document.getElementById("click"); x.play();

      const angleFromCenter = angle(dialCenter, v);

      return angleFromCenter;
    } }).
  start();

  trackOffset(pointerAngle, {
    from: dialRotation.get(),
    transform: pipe(
    wrap(0, 360),
    snap([0, 60, 140, 210, 290])),

    onUpdate: dialRotation,
    onStop: () => pointerAngle.stop() }).
  start();
  
}

function stopTracking() {
  dialRotation.stop();

  let percentPosition = dialRotation.get() / 16; 
  let frequencyPosition = dialRotation.get();

  //localStorage.radioSetting.getItem();

  document.getElementById('changeThis').innerHTML = dialRotation.get();
  //document.getElementById('frequencyBar').style.paddingLeft = percentPosition + "%";
  document.getElementById('frequencyBar').style.marginLeft = percentPosition + "%";
  document.getElementById('success').innerHTML = percentPosition;
  document.getElementById
  //localStorage.radioSetting.getItem();
 



 // AM SETTINGS AND FREQUENCY 
  if (frequencyPosition === 60 && localStorage.radioSetting === "AM") {
    document.querySelectorAll('audio').forEach(el => el.pause());
    $('#AMsong90').trigger('play');
    document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;

  } else if (frequencyPosition === 140 && localStorage.radioSetting === "AM") {
    document.querySelectorAll('audio').forEach(el => el.pause());
    $('#AMsong135').trigger('play');
    document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;
  
  } else if (frequencyPosition === 210 && localStorage.radioSetting === "AM") {
    document.querySelectorAll('audio').forEach(el => el.pause());
    $('#AMsong180').trigger('play');
    document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;
  }

    else if (frequencyPosition === 290 && localStorage.radioSetting === "AM") {
      document.querySelectorAll('audio').forEach(el => el.pause());
      $('#AMsong225').trigger('play');
      document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;
  }

/*
  FM SETTINGS AND FREQUENCY 
  if (frequencyPosition === 60 && localStorage.radioSetting === "FM") {
  document.querySelectorAll('audio').forEach(el => el.pause());
  $('#FMsong45').trigger('play');
  document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;

} else if (frequencyPosition === 140 && localStorage.radioSetting == "FM") {
  document.querySelectorAll('audio').forEach(el => el.pause());
  $('#FMsong90').trigger('play');
  document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;

} else if (frequencyPosition === 210 && localStorage.radioSetting == "FM") {
  document.querySelectorAll('audio').forEach(el => el.pause());
  $('#FMsong180').trigger('play');
  document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;
}

  else if (frequencyPosition === 290 && localStorage.radioSetting == "FM") {
    document.querySelectorAll('audio').forEach(el => el.pause());
    $('#FMsong270').trigger('play');
    document.getElementById("radio-info").innerHTML = localStorage.getItem("radioSetting") + "-" + frequencyPosition;
}  
*/
  
  


  //if (dialRotation.get() == 45)   {  activate45()}
  //if (dialRotation.get() == 90)  {  activate90()}
  //if (dialRotation.get() == 135)  {  activate135()}
  //if (dialRotation.get() == 180)   {activate180()}

  document.getElementById('stopButton').addEventListener('click', () => {
    document.querySelectorAll('audio').forEach(el => el.pause());
  });


}

dial.addEventListener('mousedown', startTracking);
dial.addEventListener('touchstart', startTracking, { passive: false });
document.addEventListener('mouseup', stopTracking);
document.addEventListener('touchend', stopTracking);


/*
function activate45() {var x = document.getElementById("AMsong45"); x.play(); }
function activate90() {x.stop(); var x = document.getElementById("AMsong90"); x.play(); }
function activate135() {var x = document.getElementById("AMsong135"); x.play(); }
function activate180() {var x = document.getElementById("AMsong180"); x.play(); }
*/


