(function() {
  "use strict";

  function startTimer(duration, display) {
      var start = Date.now(),
          diff,
          minutes,
          seconds;
      function timer() {
          diff = duration - (((Date.now() - start) / 1000) | 0);


          minutes = (diff / 60) | 0;
          seconds = (diff % 60) | 0;

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = minutes + ":" + seconds + " minutes!";

          if (diff <= 0) {
              // add one second so that the count down starts at the full duration
              // example 05:00 not 04:59
              start = Date.now() + 1000;
          }

          var picdiff = 100 - (diff/duration * 100);
          $("img").css("width", picdiff + '%');

          if(minutes == 0){
            display.textContent = minutes + ":" + seconds + " seconds!";
          }

          if ( minutes == 0 && seconds == 0){
            clearInterval(go);
            console.log("stop");
          }




      };
      // we don't want to wait a full second before the timer starts
      timer();
      var go = setInterval(timer, 1000);


  }

  window.onload = function () {
      var display = document.querySelector('#time');
      $("#start").click (function() {
        var input = 60 * $(".input").val();
        startTimer(input, display);
      });
  };
}());
