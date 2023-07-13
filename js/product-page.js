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

// pop-up

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
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

  // слайдер
  $(".slider").slick({
    autoplay: false,
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },
});
var trueHeight,
      trueWidth,
      img;
  $('.slick-slide').hover(function(e){
   
    img = $(this).find('img');
    trueHeight = img.height();
    trueWidth = img.width();
    var imgHeight = img.prop('naturalHeight');
    var imgWidth = img.prop('naturalWidth');
   
    img.height(imgHeight);
    img.width(imgWidth);
    
    $(this).mousemove(function(e) {

       var cursor_position = {
      x: e.clientX - $(this).offset().left + $(window).scrollLeft(), // Положение курсора слева
      y: e.clientY - $(this).offset().top + $(window).scrollTop() // Положение курсора сверху
       },
    imagebox__img = img,
    image_position = {
      left: ((cursor_position.x / $(this).innerWidth()) * imagebox__img.width() - cursor_position.x) * -1, // Вычисляем позицию картинки слева
      top: ((cursor_position.y / $(this).innerHeight()) * imagebox__img.height() - cursor_position.y) * -1 // Вычисляем позицию картинки сверху
    }
    imagebox__img.css({
      position: 'absolute', 
      top: image_position.top, 
      left: image_position.left
    });

      
      });
  }, function(){
    
     img.css({'position': 'relative', 'top': 0,'left': 0});
     img.height(trueHeight);
     img.width(trueWidth);
    
  });