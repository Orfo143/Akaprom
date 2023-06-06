const cards = Array.from(document.querySelectorAll(".gallery__card"));
const slider = document.querySelector(".slider-gal");
const sliderContainer = document.querySelector(".slider__container");
const picture = Array.from(document.querySelectorAll(".gallery__card__pic"));
const sliderBtnLeft = document.querySelector(".slider__btn_left");
const sliderBtnRight = document.querySelector(".slider__btn_right");
const sliderClose = document.querySelector(".slider__close-gal");

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    sliderContainer.append(pictureFull);
    slider.classList.add("active");
  });
}

sliderBtnLeft.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("left");
});

sliderBtnRight.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("right");
});

function changePicture(dir) {
  if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
  } else if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  }
  let newPictureFull = picture[cardIndex].cloneNode();
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
}

sliderClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("active");
  pictureFull.remove();
  newPictureFull.remove();
});

// video-toutube
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