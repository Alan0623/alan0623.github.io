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


    var a = storage.cookieINFO || "no";"yes" == a ? ($(".block-cookie").addClass("close-block")
    ) : ($(".cookies-container").append('<p class="cookie-content">We use cookies to offer you a better browsing experience, personalize content, and improve our websites. To find out more about what cookies are, how we use them and how you can control them, see our<a class="btn-statement" href="https://en.cpc.com.tw/cp.aspx?n=2725" title="Cookie statement">Cookie statement</a>. If you continue to use this site, you consent to our use of cookies.</p><a class="btn-accept" title="Accept Cookies From This Website">Accept Cookies From This Website</a>')
    )
  

  $(".btn-accept").click(function() {
    $(".block-cookie").slideToggle(),
    $(".block-cookie").addClass('close-block'),
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
    if ( $(window).scrollTop() > 110){
      $('.ready_fixed,.jump').removeClass('no_fixed').addClass('fixed');
    } else {
        $('.ready_fixed,.jump').removeClass('fixed').addClass('no_fixed');
    }
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 110){
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