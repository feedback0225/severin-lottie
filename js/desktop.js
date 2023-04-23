const returnAnimationFiles = () => {
  return [
    {
      src: "./img/services/1.json",
      offset: 400,
      duration: 1000,
    },
    {
      src: "./img/services/2.json",
      offset: 1350,
      duration: 750,
    },
    {
      src: "./img/services/3.json",
      offset: 2050,
      duration: 700,
    },
    {
      src: "./img/services/4.json",
      offset: 2700,
      duration: 750,
    },
    {
      src: "./img/services/5.json",
      offset: 3400,
      duration: 600,
    },
    {
      src: "./img/services/6.json",
      offset: 3950,
      duration: 700,
    },
    {
      src: "./img/services/7.json",
      offset: 4600,
      duration: 750,
    },
    {
      src: "./img/services/8.json",
      offset: 5300,
      duration: 1000,
    },
  ];
};

const loadAnimation = (file) => {
  return new Promise((resolve, reject) => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("desktop-lottie"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: file,
    });

    animation.addEventListener("DOMLoaded", () => {
      resolve(animation);
    });

    animation.addEventListener("error", (error) => {
      reject(error);
    });
  });
};

async function init() {
  if ($(window).width() > 1024) {
    SmoothScroll({
      animationTime: 1000,
      stepSize: 30,
      accelerationDelta: 20,
      accelerationMax: 3,
      keyboardSupport: true,
      arrowScroll: 20,
      pulseAlgorithm: true,
      pulseScale: 4,
      pulseNormalize: 1,
      touchpadSupport: true,
    });

    const animationFiles = returnAnimationFiles();
    const animationContainers = document.querySelectorAll(
      ".animation__right .animation__item"
    );

    for (let i = 0; i < animationContainers.length; i++) {
      animationContainers[i].id = `animation-container-${i}`;
    }

    animationFiles.forEach((animationFile) => {
      loadAnimation(animationFile.src).then((animation) => {
        animation.hide();

        let tl = new TimelineMax({ repeat: 0 });
        tl.to({ frame: 0 }, 1, {
          frame: animation.totalFrames,
          onUpdate: function () {
            if (
              this.target.frame >= animation.totalFrames ||
              this.target.frame <= 0
            ) {
              animation.hide();
            } else {
              animation.show();
              animation.goToAndStop(Math.round(this.target.frame), true);
            }
          },
          Ease: Linear.easeNone,
        });

        let controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
          triggerElement: ".env-three",
          offset: animationFile.offset,
          duration: animationFile.duration,
        })
          .setTween(tl)
          .setPin("#lottie-three")
          .addTo(controller);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
