//================================================================
$(document).ready(function() {
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Alan Lin");
});
//================================================================
$.preload('/images/main_pad.jpg',
  '/images/main_phone.jpg'
);
//jarallax===============================================================
  function show_browse(){
  jarallax = new Jarallax();
  jarallax.addAnimation('.content_main_text', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-50%" }]);
  jarallax.addAnimation('.content_form', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-40%" }]);
  jarallax.addAnimation('.cube_ae',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-85%" }]);
  jarallax.addAnimation('.cube_ps',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-80%" }]);
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