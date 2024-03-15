const slides = [
	{
		"image":"slide-1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide-2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide-3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide-4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function createDots(dots, slideActive) {
	slides.forEach(slide => {
		var dot = document.createElement('div');
		dot.classList.add('dot');
		dots.append(dot);
		if (slides.indexOf(slide) == slideActive) {
			dot.classList.add('dot-selected');
		};
	});
};

function createBanner() {
	if (slides.length > 1) {
		const arrows = document.getElementById('slider-arrows');
		const dots = document.getElementById('slider-dots');
		var sliderSlide = document.getElementById('slider-slide');
		var slideImg = sliderSlide.getElementsByClassName('slide-img')[0];
		var slideText = sliderSlide.getElementsByClassName('slide-text')[0];
		var slideActive = 0;

		createDots(dots, slideActive);
		arrows.style.display = 'block';
		dots.style.display = 'flex';

		arrows.addEventListener('click', function(e) {
			sliderSlide.classList.remove('fadeEffect');
			if (e.target.classList.contains('arrow-next')) {
				slideActive++;
				if (slideActive >= slides.length) {
					slideActive = 0;
				};
			} else {
				slideActive--;
				if (slideActive < 0) {
					slideActive = slides.length - 1;
				};
			};
			slideImg.src = "./assets/images/slideshow/" + slides[slideActive].image;
			slideText.innerHTML = slides[slideActive].tagLine;
			dots.getElementsByClassName('dot-selected')[0].classList.remove('dot-selected');
			dots.getElementsByClassName('dot')[slideActive].classList.add('dot-selected');
			setTimeout(function() {
				sliderSlide.classList.add('fadeEffect');
			}, 0);
		});
	};
};
createBanner();