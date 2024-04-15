// let btn = document.getElementById("btn")
// btn.addEventListener("click", pressMe)
// btn.on

// function pressMe() {
//     console.log("I have just been clicked");
// }

let count = 50;
const timer = setInterval(function() {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);