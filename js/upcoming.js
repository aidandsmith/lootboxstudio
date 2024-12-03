// Countdown timer
// due date
var countDownDate = new Date("Jan 15, 2025 15:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days +
    "<span id='time-unit'>Day </span>" +
    hours +
    "<span id='time-unit'>Hr </span>" +
    minutes +
    "<span id='time-unit'>Min </span>" +
    seconds +
    "<span id='time-unit'>Sec </span>";

  // If count down is finished, show text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Available Now!";
  }
}, 1000);

// Slide show=====================
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Form submit button action
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! We will notify you once the game is released.");
  this.submit();
});
