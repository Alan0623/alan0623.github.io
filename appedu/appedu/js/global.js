/*------------------------------------------------------------------
預約諮詢
------------------------------------------------------------------*/
$(function(){
  if ($(window).width() > 501) {
    setTimeout(function(){ 
      $(".audit_fixed").removeClass("selected");
      $(".audit_btn").removeClass("open");
    }, 3000);
  } else {
    $(".audit_fixed").removeClass("selected");
    $(".audit_btn").removeClass("open");
  };

  $(".audit_btn").click(function () {
    $(this).toggleClass("open"),
    $(".audit_fixed").toggleClass("selected");
    window.addEventListener("resize", function () {
      $(window).width() > 768 && (
        $(".audit_fixed").removeClass("selected"),
        $(".audit_btn").removeClass("open")
      )
    })
  });

  // if ($(window).width() > 502) {
  //   $(window).scroll(function() {
  //     if ( $(this).scrollTop() > 34){
  //         $(".audit_fixed").removeClass("selected"),
  //         $(".audit_btn").removeClass("open");
  //     } else {
  //     }
  //   });
  // } else {
  //   $(".audit_fixed").removeClass("selected");
  //   $(".audit_btn").removeClass("open");
  // };

  // $(window).resize(function() {
  //   if ($(window).width() > 502) {
  //     $(window).scroll(function() {
  //       if ( $(this).scrollTop() > 34){
  //           $(".audit_fixed").removeClass("selected"),
  //           $(".audit_btn").removeClass("open");
  //       } else {
  //       }
  //     });
  //   } else {
  //     $(".audit_fixed").removeClass("selected");
  //     $(".audit_btn").removeClass("open");
  //   };
  // });


  $(".mobile_modal_close_btn").click(function () {
    $(".audit_fixed").removeClass("selected");
    $(".audit_btn").removeClass("open");
  });
});
/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function(){
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 34){
        $('.header').addClass('fixed');
        // $(".audit_fixed").removeClass("selected"),
        // $(".audit_btn").removeClass("open");
    } else {
        $('.header').removeClass('fixed');
    }
  });
  $("body").removeClass("no_js");
  console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
  console.log("Front-end programming By Ｗei-Ching Lin");
  $(".open_nav").click(function () {
      $(this).toggleClass("open"),
      $(".menu").toggleClass("open_menu");
      window.addEventListener("resize", function () {
        $(window).width() > 768 && ($(".menu").removeAttr("style").removeClass("open_menu"),
          $(".open_nav").removeClass("open"))
      })
  });
  $(".sub_menu_title,sub_menu").on('mouseenter', function() {
    $(this).addClass("open");
    $(".sub_menu,.main_menu").addClass("open");
  }).on('mouseleave', function() {
    $(this).removeClass("open");
    $(".sub_menu,.main_menu").removeClass("open");
  });
});
/*------------------------------------------------------------------
手機版選單
------------------------------------------------------------------*/
$(function(){
  $("#mobile_menu").on('click', function(e) {
    $(this).toggleClass('open');
    $("#mobile_scroll_menu").toggleClass('menu_show');
  });
});

/*------------------------------------------------------------------
社群
------------------------------------------------------------------*/
$(function(){
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 800){
        $('.social_links').addClass('show');
    } else {
        $('.social_links').removeClass('show');
    }
  });
});

/*------------------------------------------------------------------
//回最上面
------------------------------------------------------------------*/
$(function(){
  $(".footer a.gotop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow'); 
    return false;
  });
});