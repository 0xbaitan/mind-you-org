/** Slideshow Functionality */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("m-slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/** Loading Slideshow */
$(document).ready(
    $(function () {
      var year = $("[data-year]").data("year");
      var month = $("[data-month]").data("month");
      var post = $("[data-post]").data("post");
      console.log("archives/"+year+"/"+month+"/"+post+"slideshow/");
    })
  );
  