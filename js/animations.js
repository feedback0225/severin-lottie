window.onload = function () { // можно также использовать window.addEventListener('load', (event) => {
	const anim = lottie;
	const anim2 = lottie;
	const animCall = lottie;
	const animCalendar = lottie;
	const animMessage = lottie;
	// if (document.querySelector('.lottie')) {
	// 	anim.loadAnimation({
	// 		container: document.querySelector('.lottie'),
	// 		renderer: 'canvas',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: './1.json'
	// 	});
	// }
	
	// if (document.querySelector('.lottie2')) {
	// 	anim2.loadAnimation({
	// 		container: document.querySelector('.lottie2'),
	// 		renderer: 'canvas',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: './2.json'
	// 	})
	// }
	// if (document.querySelector('.lottie-call')) {
	
	// 	animCall.loadAnimation({
	// 		container: document.querySelector('.lottie-call'),
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: './call.json'
	// 	});
	// }
	// if (document.querySelector('.lottie-calendar')) {
	// 	animCalendar.loadAnimation({
	// 		container: document.querySelector('.lottie-calendar'),
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: './calendar.json'
	// 	});
	// }
	
	// if (document.querySelector('.lottie-message')) {
	// 	animMessage.loadAnimation({
	// 		container: document.querySelector('.lottie-message'),
	// 		renderer: 'svg',
	// 		loop: true,
	// 		autoplay: true,
	// 		path: './message.json'
	// 	});
	// }
	
	
	// animation scroll
	
	const animation = document.querySelectorAll('.lottie3');
	
	/* Initialize ScrollMagic */
	const controller = new ScrollMagic.Controller();
	
	/* Initialize each lottie animation */
	animation.forEach(async (animation) => {
		const lottieInstance = lottie.loadAnimation({
			container: animation,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: animation.dataset.animPath
		})
	
	
		const animDuration = (() => {
			let duration;
	
			if (animation.dataset.animDuration) {
				duration = animation.dataset.animDuration;
				const durationIsNumString = /^\d+$/.test(duration);
				if (durationIsNumString) {
					duration = parseInt(duration)
				}
			} else {
				duration = "parentHeight"
			}
			return duration
		})();
	
		const animTriggerHook = (() => {
			let triggerHook;
	
			if (animation.dataset.animTriggerHook) {
				triggerHook = animation.dataset.animTriggerHook;
				triggerHook = parseFloat(triggerHook)
			} else {
				triggerHook = 0.5
			}
	
			return triggerHook
		})();
	
		const animOffset = (() => {
			let offset;
	
			if (animation.dataset.animOffset) {
				offset = animation.dataset.animOffset;
				offset = parseInt(offset)
			} else {
				offset = 0
			}
	
			return offset
		})();
	
	
		lottieInstance.addEventListener('DOMLoaded', async (e) => {
			/* Waits until the SVGs have loaded to get height of container - prevents breaking of non-fixed height containers. */
			let parent = animation.parentElement;
	
			/* Build ScrollMagic scene once all SVGs are loaded*/
			new ScrollMagic.Scene({
				/* Animation will be linked to the scroll progress of its container, starting when the top of container is halfway through viewport and ending when bottom of container is halfway through viewport */
				triggerElement: parent,
				triggerHook: animTriggerHook,
				offset: animOffset,
				duration: animDuration === "parentHeight" ? parent.offsetHeight : animDuration === "elemHeight" ? animation.offsetHeight : animDuration
			}).addTo(controller)
				// .addIndicators() /* Debugging tool to see where an  d when animations occur */
				.on("progress", function (e) {
					const scrollFrame = e.progress * (lottieInstance.totalFrames - 1);
					lottieInstance.goToAndStop(scrollFrame, true);
				});
	
		})
	})

	if(window.innerWidth > 1024) {
		let seterBullian = false
		
		let iconMenu = document.querySelector('#calendarlottie');
		let animationMenu = bodymovin.loadAnimation({
			container: iconMenu,
			renderer: 'svg',
			loop: seterBullian,
			autoplay: seterBullian,
			path: "img/icons-video/Calendar_seq_data.json"
		});
		var directionMenu = 1;
		iconMenu.parentNode.parentNode.addEventListener('mouseenter', (e) => {
			animationMenu.setDirection(directionMenu);
			animationMenu.setSpeed(1.5);
			animationMenu.play();
		});
		
		iconMenu.parentNode.parentNode.addEventListener('mouseleave', (e) => {
			animationMenu.setDirection(-directionMenu);
			animationMenu.setSpeed(1.5);
			animationMenu.play();
		});
		
		
		let iconMenu2 = document.querySelector('#call-lottie');
		let animationMenu2 = bodymovin.loadAnimation({
			container: iconMenu2,
			renderer: 'svg',
			loop: seterBullian,
			autoplay: seterBullian,
			path: "img/icons-video/Order_call_seq_data.json"
		});
		var directionMenu = 1;
		iconMenu2.parentNode.parentNode.addEventListener('mouseenter', (e) => {
			animationMenu2.setDirection(directionMenu);
			animationMenu.setSpeed(1.5);
			animationMenu2.play();
		});
		
		iconMenu2.parentNode.parentNode.addEventListener('mouseleave', (e) => {
			animationMenu2.setDirection(-directionMenu);
			animationMenu2.play();
			animationMenu.setSpeed(1.5);
		});
		
		let iconMenu3 = document.querySelector('#email-lottie');
		let animationMenu3 = bodymovin.loadAnimation({
			container: iconMenu3,
			renderer: 'svg',
			loop: seterBullian,
			autoplay: seterBullian,
			path: "img/icons-video/wm_seq_data.json"
		});
		var directionMenu = 1;
		iconMenu3.parentNode.parentNode.addEventListener('mouseenter', (e) => {
			animationMenu3.setDirection(directionMenu);
			animationMenu.setSpeed(1.5);
			animationMenu3.play();
		});
		
		iconMenu3.parentNode.parentNode.addEventListener('mouseleave', (e) => {
			animationMenu3.setDirection(-directionMenu);
			animationMenu.setSpeed(1.5);
			animationMenu3.play();
		});

	}

};