/*------------------------------------------------------------------
preload 預先載圖
------------------------------------------------------------------*/
$.preload( 
'../images/news_title1.jpg',
'../images/products/bg_products_big1.jpg',
'../images/products/bg_products_big2.jpg',
'../images/products/bg_products_big3.jpg',
'../images/products/bg_products_big4.jpg',
'../images/catalogue/bg_catalogue_default.jpg',
'../images/page_banner.jpg'
);
/*------------------------------------------------------------------
localStorage
------------------------------------------------------------------*/
$(function(){
  if (window.localStorage) {//localStorage存在，使用H5方式
    storage = localStorage;
  }
  else {//localStorage不存在，使用兼容方式
    storage = cookieStorage;
  }


    var a = storage.cookieINFO || "no";"yes" == a ? ($(".block_cookie").addClass("close-block")
    ) : ($(".cookies_container").append('<p class="cookie-content">We use cookies to offer you a better browsing experience, personalize content, and improve our websites. To find out more about what cookies are, how we use them and how you can control them, see our<a class="btn-statement" href="https://en.cpc.com.tw/cp.aspx?n=2725" title="Cookie statement">Cookie statement</a>. If you continue to use this site, you consent to our use of cookies.</p><a class="btn_accept" title="Accept Cookies From This Website">Accept Cookies From This Website</a>')
    )
  

  $(".btn_accept").click(function() {
    $(".block_cookie").slideToggle(),
    $(".block_cookie").addClass('close-block'),
    storage.cookieINFO = "no" == a ? "yes" : "no",
    window.location.reload();
  })
});
/*------------------------------------------------------------------
.header 定住
------------------------------------------------------------------*/
$(function(){
    $("body").removeClass("no_js");
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Ｗei-Ching Lin");
    if ( $(window).scrollTop() > 90){
      $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 90){
          $('.header').addClass('fixed');
      } else {
          $('.header').removeClass('fixed');
      }
    });
    if ( $(window).scrollTop() > 86){
      $('.ready_fixed,.jump').removeClass('no_fixed').addClass('fixed');
    } else {
        $('.ready_fixed,.jump').removeClass('fixed').addClass('no_fixed');
    }
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 86){
        $('.ready_fixed,.jump').removeClass('no_fixed').addClass('fixed');
      } else {
          $('.ready_fixed,.jump').removeClass('fixed').addClass('no_fixed');
      }
    });
  
  });
  /*------------------------------------------------------------------
  主選單
  ------------------------------------------------------------------*/
  $(function(){
    $(".pop_inquiry").addClass("transition"),
    $(".pop_language").addClass("transition"),
    $(".menu").addClass("transition");
      $(".open_nav").click(function () {
        $(this).toggleClass("open"),
        $(".pop_inquiry").removeClass("open"),
        $(".pop_language").removeClass("open"),
        $(".pop_search").removeClass("open");
        $(".menu").toggleClass("open_menu");
        window.addEventListener("resize", function () {
          $(window).width() > 768 && ($(".menu").removeAttr("style").removeClass("open_menu"),
            $(".open_nav").removeClass("open"))
        })
      });
  
      $(".question>a").click(function () {
        $(this).parents('.block_qna').toggleClass("open");
      });
  });
/*------------------------------------------------------------------
GoTop
------------------------------------------------------------------*/
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('.gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
  });

/*------------------------------------------------------------------
pop_inquiry
------------------------------------------------------------------*/
$(function(){
  $(".header .header_center .tool2,.menu .tool li a.tool2").click(function () {
    $(".main").removeClass("pop_active2").addClass("pop_active");
    $(".menu").removeClass("open_menu"),
    $(".open_nav").removeClass("open"),
    $(".pop_language").removeClass("open"),
    $(".pop_search").removeClass("open");
    $(".pop_inquiry").toggleClass("open");
    // window.addEventListener("resize", function () {
    //   $(window).width() > 768 && (
    //     $(".pop_inquiry").removeClass("open"));
    // })
  });
  $(".header .header_center .tool3,.menu .tool li a.tool3").click(function () {
    
    $(".main").removeClass("pop_active").addClass("pop_active2");
    $(".menu").removeClass("open_menu"),
    $(".open_nav").removeClass("open"),
    $(".pop_inquiry").removeClass("open"),
    $(".pop_search").removeClass("open");
    $(".pop_language").toggleClass("open");
    // window.addEventListener("resize", function () {
    //   $(window).width() > 768 && (
    //     $(".pop_language").removeClass("open")
    //   );
    // })
  });

  $(".header .header_center .tool1,.menu .tool li a.tool1").click(function () {
    $(".menu").removeClass("open_menu"),
    $(".open_nav").removeClass("open"),
    $(".pop_inquiry").removeClass("open"),
    $(".pop_language").removeClass("open"),
    $(".pop_search").addClass("open");
    // window.addEventListener("resize", function () {
    //   $(window).width() > 768 && (
    //     $(".pop_search").addClass("open")
    //   );
    // })
  });


  $(".btn_close").click(function () {
    $(".main").removeClass("pop_active").removeClass("pop_active2"),
    $(".pop_inquiry").removeClass("open"),
    $(".pop_language").removeClass("open"),
    $(".pop_search").removeClass("open");
    // window.addEventListener("resize", function () {
    //   $(window).width() > 768 && (
    //     $(".pop_search").removeClass("open")
    //   );
    // })
  });

  $(document).keydown(function(event){
    //判斷當event.keyCode 為37時（即左方面鍵），執行函數to_left();
    //判斷當event.keyCode 為39時（即右方面鍵），執行函數to_right();
    if(event.keyCode == 27){
      $(".main").removeClass("pop_active").removeClass("pop_active2");
      $(".menu").removeAttr("style").removeClass("open_menu"),
      $(".open_nav").removeClass("open"),
      $(".pop_inquiry").removeClass("open"),
      $(".pop_language").removeClass("open"),
      $(".pop_search").removeClass("open");
    }else if (event.keyCode == 39){
    //do somethings;
    }
  });
});
/*------------------------------------------------------------------
fancybox
------------------------------------------------------------------*/
$(function() {
  var o = $.extend(!0, {}, $.fancybox.defaults, {
      caption: function(o, n) {
          return $(this).next("figcaption").html()
      }
  });
  $('[data-fancybox="images"]').fancybox(o)
});
/*------------------------------------------------------------------
page_title
------------------------------------------------------------------*/
$(function(){
  if ($('.page_title')[0]) {
    $('.page_title').addClass('fixed');
    $(window).on('scroll', function(){
      var $WH = $(window).height();
      var $WS = $(window).scrollTop() + $WH;
      var $RO = $('.footer').offset().top;
      if(  $WS >  $RO ) {
        $('.page_title').removeClass('fixed')
      } else {
        $('.page_title').addClass('fixed');
      }
    }).scroll();
  } else {
    //物件不存在的處理邏輯 
  }
});


$(function(){
  if ($('.page_title2')[0]) { //主題專區 頁籤
    //物件存在的處理邏輯 
    $('.page_title2').addClass('fixed');
    $(window).on('scroll', function(){
      var $WH2 = $(window).height();
      var $WS2 = $(window).scrollTop() + $WH2;
      var $RO2= $('.page_content').offset().top;
      if(  $WS2 >  $RO2 ) {
        $('.page_title2').removeClass('fixed')
      } else {
        $('.page_title2').addClass('fixed');
      }
    }).scroll();
  } else {
      //物件不存在的處理邏輯 
  }
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