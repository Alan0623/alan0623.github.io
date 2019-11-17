//RWD輪播================================================================
$(document).ready(function() {
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Alan Lin"), 
    $('.autoplay3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.autoplay4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});
//jarallax===============================================================
  function show_browse(){
  jarallax = new Jarallax();
  jarallax.addAnimation('.react', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-100%" }]);
  jarallax.addAnimation('.air-max-270-react-0JdRkV',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-80%" }]);
  jarallax.addAnimation('.nike_air_max', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-20%" }]);
  }

  $(document).ready(function () {
      show_browse();

  });
//jarallax===============================================================

jQuery(window).load(function () {
    $("body").removeClass("no_js")
  }),
$(".open_nav").click(function () {
  $(this).toggleClass("open"),
  $(".head_menu_nav_main").slideToggle(500),
  window.addEventListener("resize", function () {
    $(window).width() > 768 && ($(".head_menu_nav_main").removeAttr("style"),
      $(".open_nav").removeClass("open"))
  })
}),
$(window).scroll(function () {
  var a = $(this).scrollTop(),
    b = 90;
  $(".head").css(a > b ? {
    background: "rgba(248, 245, 238, 0.9)",
    border: "1px solid rgb(255, 255, 255)"
  } : {
    background: "none",
    border: "none"
  })
});