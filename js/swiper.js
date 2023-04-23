// инициализация Свайпера
const myImageSlider = new Swiper('.slider__container', {
	// НАСТРОЙКИ

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: false, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// стартовый слайд
	initialSlide: 0,

	// свободный режим
	freeMode: true,

	// скорость прокрутки слайдов
	speed: 12000,

	autoplay: {
		enabled: false,
		delay: 100,
		disableOnInteraction: true,
	},

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		320: {
			slidesPerView: 1.05,
			spaceBetween: 20,
		},
		481: {
			slidesPerView: 1.05,
			spaceBetween: 40,
		},
		1025: {
			slidesPerView: 2,
			spaceBetween: 30,
		}
	},

	// запрет предзагрузки картинок
	preloadImages: true,
	// lazy loading
	watchSlidesProgress: true, // слежка за видимыми слайдами
	watchSlidesVisibility: true, // добавление класса видимым слайдам

});

const slider = document.querySelector('.slider__container');

if (slider) {
	slider.addEventListener('mouseenter', function () {
		myImageSlider.autoplay.start();
	})
	slider.addEventListener('mouseleave', function () {
		myImageSlider.autoplay.stop();
	})
}


const myImageSlider2 = new Swiper('.slider2__container', {
	// НАСТРОЙКИ
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку
	slideToClickedSlide: true, // свайп по щелчку на изображении

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// кол-во показанных слайдов
	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отступ между слайдами в px
	spaceBetween: 30,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// запрет предзагрузки картинок
	preloadImages: false,
	// lazy loading
	watchSlidesProgress: true, // слежка за видимыми слайдами
	watchSlidesVisibility: true, // добавление класса видимым слайдам

});

const myImageSlider3 = new Swiper('.projects-slider__container', {
	// НАСТРОЙКИ

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку
	slideToClickedSlide: true, // свайп по щелчку на изображении

	loop: true,
	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// кол-во показанных слайдов
	slidesPerView: 3, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 2,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		320: {
			spaceBetween: 10,
			slidesPerView: 1,
		},
		580: {
			spaceBetween: 18,
			slidesPerView: 2,
		},
		992: {
			spaceBetween: 30,
			slidesPerView: 3,
		}
	},

	// запрет предзагрузки картинок
	preloadImages: false,
	// lazy loading
	watchSlidesProgress: true, // слежка за видимыми слайдами
	watchSlidesVisibility: true, // добавление класса видимым слайдам

});

const myImageSlider4 = new Swiper('.half-slider', {
	// НАСТРОЙКИ

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: true, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 600,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		320: {
			slidesPerView: 1.05,
			spaceBetween: 15,
		},
		481: {
			slidesPerView: 1.5,
			spaceBetween: 30,
		},
		1025: {
			slidesPerView: 1,
			spaceBetween: 30,
		}
	},

	// запрет предзагрузки картинок
	preloadImages: true,
	// lazy loading
	watchSlidesProgress: true, // слежка за видимыми слайдами
	watchSlidesVisibility: true, // добавление класса видимым слайдам

});

const myImageSlider5 = new Swiper('.scheme-slider', {
	// НАСТРОЙКИ

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// автовысота
	autoHeight: false, // подстаривает слайдер под размер контента

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 600,

	// брейкпоинты (адаптив, ширина)
	breakpoints: {
		320: {
			slidesPerView: 1.25,
			spaceBetween: 30,
		},
		481: {
			slidesPerView: 1.5,
			spaceBetween: 90,
		},
		641: {
			slidesPerView: 2,
			spaceBetween: 90,
		},
		1025: {
			slidesPerView: 2,
			spaceBetween: 90,
		}
	},

	// запрет предзагрузки картинок
	preloadImages: true,
	// lazy loading
	watchSlidesProgress: true, // слежка за видимыми слайдами
	watchSlidesVisibility: true, // добавление класса видимым слайдам

});

// ------

// инициализация Свайпера
const myImageSlider6 = new Swiper('.use__slider', {
	// НАСТРОЙКИ
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: true, // меняет стрелку на руку

	// автовысота
	autoHeight: false, // подстаривает слайдер под размер контента

	// кол-во показанных слайдов
	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// отступ между слайдами в px
	spaceBetween: 30,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// скорость прокрутки слайдов
	speed: 600,
	on: {
		slideChange: function (e) {
			const index_currentSlide = myImageSlider6.realIndex;
			console.log(index_currentSlide);
			let items = document.getElementsByClassName("use__item")
			for(let i = 0; i < items.length; i++) {
				items[i].classList.remove("_active")
			}
			items[index_currentSlide].classList.add("_active")
		}
	}

});




// ПАРАМЕТРЫ

// let qSlides = myImageSlider.slides.length; = кол-во слайдов

// myImageSlider.params.speed = 1000; = изменение скорости прокрутки


// МЕТОДЫ

// myImageSlider.update(); = обновить слайдер

// myImageSlider.slideTo(2, 800); = переключиться на слайд 2, скорость 800


// СОБЫТИЯ

// on: { (работает в объекте ньюслайдер)
// событие инициализации
// 	init: function () {
// 		console.log('Слайдер запущен');
// 	},
// событие переключения слайда
// 	slideChange: function() {
// 		console.log('Слайдер переключен');
// 	},
// }

// работает вне объекта
// myImageSlider5.on('slideChange', function () {
// 	console.log('Слайдер переключен');
// });

useItems = document.querySelectorAll('.use__item');

if (useItems.length > 0) {
	useItems.forEach(el => {
		el.addEventListener('click', function (e) {
			useItemsDeleteActive();
			el.classList.add('_active');
			myImageSlider6.slideTo(e.target.dataset.slide, 800);
		});
	});
}

function useItemsDeleteActive() {
	useItems.forEach(el => {
		el.classList.remove('_active');
	});
}