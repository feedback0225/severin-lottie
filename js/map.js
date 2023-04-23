// карта

ymaps.ready(init);
ymaps.ready(init2);
let cordinats = [55.752247, 37.671193]
let cordinatsCenter = [55.76, 37.64]
function init() {
	var myMap = new ymaps.Map("map", {
		center: cordinatsCenter,
		zoom: 12
	}),
		// Создаем метку с помощью вспомогательного класса.
		myPlacemark1 = new ymaps.Placemark(cordinats, {
			hintContent: 'Severin',
			balloonContent: `
				<div class="balloon__name">Северин Девелопмент</div>
				<div class="balloon__address">г. Москва, Нижняя Сыромятническая ул., 10, стр. 2, этаж 7</div>
				<div class="balloon__graphic">Пн-пт: с 9:00 до 19:00</div>
			`
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/card-point.png',
			iconImageSize: [40, 40],
			iconImageOffset: [-19, -44],
		});

	// Добавляем все метки на карту.
	myMap.geoObjects
		.add(myPlacemark1);
}

function init2() {
	var myMap = new ymaps.Map("map2", {
		center: [59.939098, 30.315868],
		zoom: 12
	}),
		// Создаем метку с помощью вспомогательного класса.
		myPlacemark1 = new ymaps.Placemark([59.961075, 30.303543], {
			hintContent: 'Severin',
			balloonContent: `
				<div class="balloon__name">Северин Девелопмент</div>
				<div class="balloon__address">г. Москва, Нижняя Сыромятническая ул., 10, стр. 2, этаж 7</div>
				<div class="balloon__graphic">Пн-пт: с 9:00 до 19:00</div>
			`
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/card-point.png',
			iconImageSize: [40, 40],
			iconImageOffset: [-19, -44],
		});

	// Добавляем все метки на карту.
	myMap.geoObjects
		.add(myPlacemark1);
}


$(".top-block_contacts .tabs__item").click(function(){
	if($(this).attr("data-tab") == 1 ) {
		$("#map2").hide()
		$("#map").show()
	}else{
		$("#map").hide()
		$("#map2").show()
	}
})