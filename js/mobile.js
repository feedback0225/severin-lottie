const initSlider = () => {
  const slider = new Swiper(".services-animation-mobile .swiper", {
    spaceBetween: 30,
    freeMode: false,
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const index_currentSlide = slider.realIndex;
        const currentSlide = slider.slides[index_currentSlide];
        $(".animationimg").attr("src", $(currentSlide).attr("data-src"));
      },
    },
  });
};

window.onload = () => {
  initSlider();
  $(window).scroll(function (e) {
    let y = $(window).scrollTop();
    let elem = $(".services-animation .animation__item");
    let mobileelem = $(".services-animation-mobile .swiper-slide");
    let pagination = $(".services-animation .animation__pagination");
    let pagination2 = $(".services-animation-mobile .animation__pagination");
    let windowHeight = $(window).height() / 3;
    for (let i = 0; i < elem.length; i++) {
      if (y - windowHeight > $(elem[i]).position().top) {
        $(pagination).removeClass("animation__pagination_active");
        $(pagination[i]).addClass("animation__pagination_active");
      }
    }
    for (let i = 0; i < mobileelem.length; i++) {
      if ($(mobileelem[i]).css("opacity") > 0.5) {
        $(pagination2).removeClass("animation__pagination_active");
        $(pagination2[i]).addClass("animation__pagination_active");
      }
    }
    if (
      e.target.documentElement.scrollHeight -
      e.target.documentElement.scrollTop -
      window.innerHeight <
      $("footer").height() - 400 &&
      $(window).width() < 1024
    ) {
      $(".services-animation-mobile").css("opacity", "0");
    } else {
      $(".services-animation-mobile").css("opacity", "1");
    }
  });
  setTimeout(function () {
    $("body").show();
    $("body").css("opacity", "1");
    $("body").css("visibility", "unset");
    AOS.init();
  }, 500);
  $(".services-animation").show();
  $(".services-animation-mobile").hide();
  $(".loading").hide();

  if ($(window).width() < 1030) {
    $(".services-animation").hide();
    $(".services-animation-mobile").show();
    $(".loading").hide();
  }
};
