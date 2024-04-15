// let count = 50;
// let launch = setInterval(function () {
// // const timer = setInterval(function() {
//   count--;
//   console.log(count);
//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Successful conutdown!");
//   }
// }, 1000);

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