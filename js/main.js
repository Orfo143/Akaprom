
window.addEventListener('DOMContentLoaded', function (){
var videos = document.querySelectorAll('.video');


videos.forEach(function (video) {
	video.addEventListener('click', function(){
		if (video.classList.contains('ready')){
			return;
		}
	
		video.classList.add('ready');
	
		var src = video.dataset.src;
		video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
	});
});
});

// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			items: 1,
			startPosition: 1,
		},
		1200: {
			items: 1,
			margin: 30,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});


// burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu__category');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let menuBtnRight = document.querySelector('.menu-btn--right');
let menuRight = document.querySelector('.mobile-menu');

menuBtnRight.addEventListener('click', function(){
	menuBtnRight.classList.toggle('active');
	menuRight.classList.toggle('active');
})


