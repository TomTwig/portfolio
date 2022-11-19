let sIndex = 1;
if(window.matchMedia("(min-width: 768px)").matches){
  showSlides(sIndex);
};


// Next/previous controls
function plusSlides(n) {
  showSlides(sIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(sIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {sIndex = 1}
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sIndex-1].style.display = "block";
  dots[sIndex-1].className += " active";
}



