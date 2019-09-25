var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
let nums = document.querySelectorAll(".timer .num");

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    nums[0].innerHTML = days;
    nums[1].innerHTML = hours;
    nums[2].innerHTML = minutes;
    nums[3].innerHTML = seconds;


  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




// PROGRESS

let min = 0;
let max = 2000000;
let value = 650000;

let percent = document.querySelector('.progress .percent');
let pointer = document.querySelector('.progress-wrapper .pointer');
let pointerNum = document.querySelector('.progress-wrapper .pointer .num');

pointerNum.innerText = value.toLocaleString();
percent.style.width = (value / max) * 100 + '%';
pointer.style.left = `calc(${(value / max) * 100}% - 75px)`;