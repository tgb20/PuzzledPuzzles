function filterme(value) {
    value = parseInt(value, 10); // Convert to an integer
    
    if (value === 1) {
      $('#custom-toggle').removeClass('tgl-off', 'tgl-def').addClass('tgl-on');
      $('#radio-info').text('AM Radio');
      localStorage.setItem("radioSetting", "AM");
      //$('#featureAudioId').trigger('play');

    } else if (value === 2) {
      $('#custom-toggle').removeClass('tgl-on, tgl-off').addClass('tgl-def');
      $('#radio-info').text('OFF');
      localStorage.setItem("radioSetting", "OFF");
      document.querySelectorAll('audio').forEach(el => el.pause());
    
    } else if (value === 3) {
      $('#custom-toggle').removeClass('tgl-def', 'tgl-on').addClass('tgl-off');
      $('#radio-info').text('FM Radio');
      localStorage.setItem("radioSetting", "FM");
    }
  }


  function featureAudio()
		{var x = document.getElementById("featureAudioId"); x.play(); }