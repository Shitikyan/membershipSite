var date = "Jan 5, 2021 15:37:25";
var countDownDate = new Date(date).getTime();
var nums = document.querySelectorAll(".timer .num");

var x = setInterval(function () {
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

var min = 0;
var max = 2000000;
var value = 650000;
var percent = document.querySelector('.progress .percent');
var pointerNum = document.querySelector('.progress-wrapper .pointer .num');
var pointer = document.querySelector('.progress-wrapper .pointer');

if (percent && pointerNum && pointer) {
  pointerNum.innerText = value.toLocaleString();
  percent.style.width = (value / max) * 100 + '%';
  pointer.style.left = `calc(${(value / max) * 100}% - 75px)`;
}