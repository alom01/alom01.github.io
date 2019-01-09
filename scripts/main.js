
var random = new Array();

random[0] = "biling.html";
random[1] = "book.html";
random[2] = "chelsea.html";
random[3] = "crossness.html";
random[4] = "earls.html";
random[5] = "goj.html";
random[6] = "greenwich.html";
random[7] = "hoxton.html";
random[8] = "leadenhall.html";
random[9] = "neal.html";
random[10] = "stdun.html";
random[11] = "wilton.html";

function randomLink() {
  window.location = random[Math.floor(Math.random()*(12))];
}

console.log("newArray".length);



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
