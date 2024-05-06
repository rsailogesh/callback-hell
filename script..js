function startTimer(duration, display, callback) {
    var timer = duration, minutes, seconds;
    var intervalId;
  
    intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(intervalId);
        callback();
      }
    }, 1000);
  }
  
  window.onload = function () {
    var fiveMinutes = 60 * 5;
    var display = document.querySelector('#timer');
    
    startTimer(fiveMinutes, display, function() {
      var tenSeconds = 10;
      display.textContent = "Time's up!";
      
      startTimer(tenSeconds, display, function() {
        display.textContent = "Finished!";
      });
    });
  };
  