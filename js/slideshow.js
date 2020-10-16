var slideIndex = 1;
showslide(slideIndex)

function currentslide(n) {
    showslide(slideIndex = n)
}


function showslide(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
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
var slideIndex = 0;
showslide();

function showslide() {
    var i;
    var slides = document.getElementsByClassName("myslides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showslide, 4000);
}