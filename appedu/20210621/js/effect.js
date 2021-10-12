//================================================================
// jQuery(window).load(function () {
//   $("body").removeClass("no_js");
// });
$(function(){
  $("body").removeClass("no_js");
  console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
  console.log("Front-end programming By Ｗei-Ching Lin");
/*------------------------------------------------------------------
checkbox
------------------------------------------------------------------*/
  $(".content_lecture_list>.class:nth-child(1)").click(function () {
    $(".content_form_class_lecture .label label:nth-child(1) input").click();
  });
  $(".content_lecture_list>.class:nth-child(2)").click(function () {
    $(".content_form_class_lecture .label label:nth-child(3) input").click();
  });
  $(".content_lecture_list>.class:nth-child(3)").click(function () {
    $(".content_form_class_lecture .label label:nth-child(4) input").click();
  });
  $(".content_course_list>.class:nth-child(1)").click(function () {
    $(".content_form_class_topic .label label:nth-child(1) input").click();
  });
  $(".content_course_list>.class:nth-child(2)").click(function () {
    $(".content_form_class_topic .label label:nth-child(2) input").click();
  });
  $(".content_course_list>.class:nth-child(3)").click(function () {
    $(".content_form_class_topic .label label:nth-child(3) input").click();
  });
  $(".content_course_list>.class:nth-child(4)").click(function () {
    $(".content_form_class_topic .label label:nth-child(4) input").click();
  });
  $(".content_course_list>.class:nth-child(5)").click(function () {
    $(".content_form_class_topic .label label:nth-child(5) input").click();
  });
  $(".content_course_list>.class:nth-child(6)").click(function () {
    $(".content_form_class_topic .label label:nth-child(6) input").click();
  });

/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
  $(".open_nav").click(function () {
    $(this).toggleClass("open"),
    $(".menu").slideToggle(500),
    window.addEventListener("resize", function () {
      $(window).width() > 768 && ($(".menu").removeAttr("style"),
        $(".open_nav").removeClass("open"))
    })
  });

/*------------------------------------------------------------------
錨點滑動
------------------------------------------------------------------*/
  var $body = $('html,body');
  var $nav1 = $('.content_lecture').offset().top;
  var $nav2 = $('.content_course').offset().top;
  var $nav3 = $('.content_form').offset().top;
  var $fixed_h = $('.header').outerHeight() || 0;
  $('.nav1').stop().click(function() {
    $body.animate({
      scrollTop: ( $nav1 ) - $fixed_h
    }, 600);
    return false;
  });
  $('.nav2').stop().click(function() {
    $body.animate({
      scrollTop: ( $nav2 ) - $fixed_h
    }, 600);
    return false;
  });
  $('.nav3,.class').stop().click(function() {
    $body.animate({
      scrollTop: ( $nav3 ) - $fixed_h
    }, 600);
    return false;
  });
});
$(window).resize(function() {
  var $body = $('html,body');
  var $nav1 = $('.content_lecture').offset().top;
  var $nav2 = $('.content_course').offset().top;
  var $nav3 = $('.content_form').offset().top;
  var $fixed_h = 64;
  $('.nav1').stop().click(function() {
    $body.stop().animate({
      scrollTop: ( $nav1 ) - $fixed_h
    }, 600);
    return false;
  });
  $('.nav2').stop().click(function() {
    $body.stop().animate({
      scrollTop: ( $nav2 ) - $fixed_h
    }, 600);
    return false;
  });
  $('.nav3,.class').stop().click(function() {
    $body.stop().animate({
      scrollTop: ( $nav3 ) - $fixed_h
    }, 600);
    return false;
  });
});

/*------------------------------------------------------------------
第一次出場動畫
------------------------------------------------------------------*/
$(function(){
  $('.content_lecture').addClass('ready-animate');
  $(window).on('scroll', function(){
      var $WH = $(window).height() * 0.75;
      var $WS = $(window).scrollTop() + $WH;
      var $RO = $('.content_lecture').offset().top;
      if(  $WS >  $RO ) {
          $('.content_lecture').addClass('run-animate');
          $('.content_lecture').removeClass('ready-animate');
      }
  }).scroll();

    $('.content_lecture_list').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_lecture_list').offset().top;
        if(  $WS >  $RO ) {
            $('.content_lecture_list').addClass('run-animate');
            $('.content_lecture_list').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_course').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_course').offset().top;
        if(  $WS >  $RO ) {
            $('.content_course').addClass('run-animate');
            $('.content_course').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_course_list').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_course_list').offset().top;
        if(  $WS >  $RO ) {
            $('.content_course_list').addClass('run-animate');
            $('.content_course_list').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_form').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_form').offset().top;
        if(  $WS >  $RO ) {
            $('.content_form').addClass('run-animate');
            $('.content_form').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_links').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_links').offset().top;
        if(  $WS >  $RO ) {
            $('.content_links').addClass('run-animate');
            $('.content_links').removeClass('ready-animate');
        }
    }).scroll();
});

/*------------------------------------------------------------------
課程等高
------------------------------------------------------------------*/
$(function() {
  var maxHeight = 0;
  $('.content_course_list').find(".text").each(function() {
      $(this).height('auto');
      if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
  });
  $('.content_course_list').find(".text").each(function() {
      $(this).height(maxHeight);
  });
  $(window).resize(function() {
      var maxHeight = 0;
      $('.content_course_list').find(".text").each(function() {
          $(this).height('auto');
          if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
      });
      $('.content_course_list').find(".text").each(function() {
          $(this).height(maxHeight);
      });
  });
});