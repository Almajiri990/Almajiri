
function countdown() {
    var count = 50;
    var countdownInterval = setInterval(function() {
      if (count === 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown complete";
      } else {
        document.getElementById("countdown").innerHTML = count;
        count--;
      }
    }, 1000);
  }
  countdown()