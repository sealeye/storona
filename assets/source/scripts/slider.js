var controls = document.querySelectorAll('.controls');

var slides = document.querySelectorAll('.slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 20000);

function nextSlide() {
	goToSlide(currentSlide + 1);
}

function previousSlide() {
	goToSlide(currentSlide - 1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slider__item';
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].className = 'slider__item showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
	nextSlide();
};
previous.onclick = function () {
	previousSlide();
};
