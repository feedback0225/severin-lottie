const playBtns2 = document.querySelectorAll('.play-video-btn');
function openFullscreen(video) {
	video.play();
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) { /* Firefox */
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		video.webkitRequestFullscreen();
	} else if (video.msRequestFullscreen) { /* IE/Edge */
		video.msRequestFullscreen();
	}
}

if (playBtns2.length > 0) {
	playBtns2.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			let video = el.previousElementSibling.previousElementSibling;
            console.log(video);
			openFullscreen(video);
		});
	});
};