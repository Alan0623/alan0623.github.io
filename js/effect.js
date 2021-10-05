/*------------------------------------------------------------------
quality_center
------------------------------------------------------------------*/
$(function(){
  var i=0;
  jummper();
  function jummper(){
    $(".pic ul li").eq(i).find(".img").css("left","-100vw");
    $(".pic ul li").eq(i).find("p").css("width","0px");
    $(".pic ul li").eq(i).find(".img").animate({left:"0px"},500,function(){
          $(".pic ul li").eq(i).find("p").animate({width:"100vw"},8000,function(){
              $(".pic ul li").eq(i).find(".img").animate({left:"100vw"},500,function(){
                  i++;
                  if(i>2)
                  i=0;
                  $(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
              });
          });
    });
  }
  setInterval("jummper()",9100);
});
/*------------------------------------------------------------------
.header 定住
------------------------------------------------------------------*/
$(function(){
  $("body").removeClass("no_js");
  console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
  console.log("Front-end programming By Ｗei-Ching Lin");

  $(window).scroll(function() {
    if ( $(this).scrollTop() > 90){
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
  });

  $(window).scroll(function() {
    if ( $(this).scrollTop() > 110){
        $('.ready_fixed').addClass('fixed');
    } else {
        $('.ready_fixed').removeClass('fixed');
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
pop_inquiry
------------------------------------------------------------------*/
$(function(){
  $(".header .header_center .tool2").click(function () {
    $(".pop_language").removeClass("open"),
    $(".pop_inquiry").toggleClass("open");
    window.addEventListener("resize", function () {
      $(window).width() > 768 && (
        $(".pop_inquiry").removeClass("open"));
    })
  });
  $(".header .header_center .tool3").click(function () {
    $(".pop_inquiry").removeClass("open"),
    $(".pop_language").toggleClass("open");
    window.addEventListener("resize", function () {
      $(window).width() > 768 && (
        $(".pop_language").removeClass("open")
      );
    })
  });

  $(".header .header_center .tool1").click(function () {
    $(".pop_inquiry").removeClass("open"),
    $(".pop_language").removeClass("open"),
    $(".pop_search").addClass("open"),
    window.addEventListener("resize", function () {
      $(window).width() > 768 && (
        $(".pop_search").addClass("open")
      );
    })
  });


  $(".btn_close").click(function () {
    $(".pop_inquiry").removeClass("open"),
    $(".pop_language").removeClass("open"),
    $(".pop_search").removeClass("open"),
    window.addEventListener("resize", function () {
      $(window).width() > 768 && (
        $(".pop_search").removeClass("open")
      );
    })
  });

  $(document).keydown(function(event){
    //判斷當event.keyCode 為37時（即左方面鍵），執行函數to_left();
    //判斷當event.keyCode 為39時（即右方面鍵），執行函數to_right();
    if(event.keyCode == 27){
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

------------------------------------------------------------------*/
$(document).on('ready', function() {
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/*---------------------------------------------
	Check User Agent
---------------------------------------------*/

  var nut = navigator.userAgent.toLowerCase();
  var _ua = {
    ie	:nut.indexOf("msie") != -1 || nut.indexOf("trident") != -1,
    ie6	:nut.indexOf("msie 6") != -1,
    ie7	:nut.indexOf("msie 7") != -1,
    ie8	:nut.indexOf("msie 8") != -1,
    ie9	:nut.indexOf("msie 9") != -1,
    ie10	:nut.indexOf("msie 10") != -1,
    ie11	:nut.indexOf("trident") != -1,
    edge	:nut.indexOf("edge") != -1,
    ff	:nut.indexOf("firefox") != -1,
    webkit	:nut.indexOf("webkit") != -1 && nut.indexOf("edge") == -1,
    safari	:nut.indexOf("safari") != -1 && nut.indexOf("edge") == -1 && nut.indexOf("chrome") == -1,
    chrome	:nut.indexOf("chrome") != -1 && nut.indexOf("edge") == -1,
    opera	:nut.indexOf("opera") != -1,
    iphone	:nut.indexOf("iphone") != -1,
    ipad	:nut.indexOf("ipad") != -1,
    ipod	:nut.indexOf("ipod") != -1,
    android	:nut.indexOf("android") != -1,
    xp	:nut.indexOf("nt 5.1") != -1,
    win	:nut.indexOf ("windows") != -1,
    win10	:nut.indexOf ("windows nt 10") != -1,
    mac	:nut.indexOf ("macintosh") != -1,
    ios	:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1,
    phone	:nut.indexOf("iphone") != -1 || (nut.indexOf("android") != -1 && nut.indexOf("mobile") != -1),
    mobile	:typeof window.orientation != "undefined",
    spWebkit:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1 || (nut.indexOf("android") != -1 && nut.indexOf("mobile") != -1)
  };
  
  (function () {
  
/*---------------------------------------------
Default Settings 
---------------------------------------------*/
$("html").addClass("js");
if (_ua.mobile) $("html").addClass("sp");
if (_ua.phone) $("html").addClass("phone");
if (_ua.spWebkit) $("html").addClass("spWebkit");

if (_ua.opera || _ua.ff || _ua.safari) {
  window.onunload = function() {}
}

/* Scroll Bar Width */
$("body").append('<div id="outer" style="overflow-y:scroll;"><div id="inner"></div></div>');
$("html").addClass("sb" + ($("#outer").width() - $("#inner").width()));
$("#outer").remove();
/*---------------------------------------------
Adjust Image 主視覺
---------------------------------------------*/
  if($(".mainvisual")[0]) {
  
    var $mainImg = $(".main-bg img");
  //	var mainImgOriginalH = $mainImg.attr("height") * .8;
  //	var mainImgOriginalW = $mainImg.attr("width");
    var mainImgOriginalH = 1125 * .8;
    var mainImgOriginalW = 1340;
    var mainSvgOriginalH = document.getElementById("mask").getAttribute("viewBox").split(" ")[3];
    var mainSvgOriginalW = (mainImgOriginalW / mainImgOriginalH) * mainSvgOriginalH;
    var mainImgInSvgOriginalRate = mainSvgOriginalH / mainImgOriginalH;
  
    var setBgImgSize = function() {
      
      var w = $(".main-bg").width();
      var h = $(".main-bg").height();
        
      if (w < 320) w = 320;
        
      var bgW = w;
      var bgH = w / mainImgOriginalW * mainImgOriginalH;
      if (h >= bgH) {
        bgH = h;
        bgW = bgH / mainImgOriginalH * mainImgOriginalW;
      }
        
      var bgL = (w - bgW) / 2;
      var bgT = (h - bgH) / 2;
      $mainImg.width(bgW).height(bgH * 1.25).css({left:bgL, top:bgT});
        
      var $mask = $("#mask");
      var mainSvgH = $mask.height();
      var mainSvgW = $mask.width();
        
      var maskX = $mask.offset().left;
      if(_ua.ie) maskX += (w - (h * .94 - 200) * .7655068) / 2;
      var maskY = $mask.offset().top;
        
      var mainImgInSvgRate = mainImgInSvgOriginalRate * mainImgOriginalH / mainSvgH;
      var mainImgInSvgH = bgH * mainImgInSvgRate;
      var mainImgInSvgW = bgW * mainImgInSvgRate;
      var mainImgInSvgL = (bgL - maskX) * mainImgInSvgRate;
      var mainImgInSvgT = (bgT - maskY) * mainImgInSvgRate;
        
      $(".mask image").attr("width", mainImgInSvgW).attr("height", mainImgInSvgH).attr("x", mainImgInSvgL).attr("y", mainImgInSvgT);
      
    }
  
    /* Move SVG */
    var moveSVG = function() {
  
      var onFlag = false;
      var prevX = 0;
      var currentX = 0;
      var targetX = 0;
      var mvW = $(".mainvisual").width();
      $(window).on("load resize", function() {mvW = $(".mainvisual").width();});
  
      var prevPointerX = 0;
      $(".mainvisual").on("mousemove", function(e) {
        var pointerX = e.clientX;
        targetX = (pointerX - mvW / 2);
      }).on("touchstart", function(e) {
        var pointerX = e.changedTouches[0].clientX;
        prevPointerX = pointerX;
        targetX = (pointerX - mvW / 2) * 1.5;
      }).on("touchmove", function(e) {
        var pointerX = e.changedTouches[0].clientX;
        if(Math.abs(prevPointerX - pointerX) > 10) e.preventDefault();
        prevPointerX = pointerX;
        targetX = (pointerX - mvW / 2) * 1.5;
      }).on("touchend", function() {
        targetX = 0;
      });
      $(".mainvisual, header, .header-bg, .news-col, .right-col").on("mouseenter", function() {
        onFlag = true;
      }).on("mouseleave", function() {
        onFlag = false;
        setTimeout(function() {
          if(!onFlag) {
            targetX = 0;
          }
        }, 0);
      });
  
      setInterval(function() {
        if(prevX != targetX) {
          var offsetX = (prevX - targetX) * (_ua.spWebkit ? .3 : .1);
          if(Math.abs(offsetX) < .5) offsetX = 0;
          currentX = prevX - offsetX;
          prevX = currentX;
          $(".mask-container").css({transform: "translate3d(" + currentX + "px, 0, 0)"});
          setBgImgSize();
        }
      }, 30);
  
    };
  
    setBgImgSize();
    $(window).on("resize", setBgImgSize);
  
    $(window).on("load", function() {
      $(".loading").fadeOut(300, function() {
        $(this).remove();
        $("#mask image").css({opacity: 1, transform: "scale(1)"});
        setBgImgSize();
        $(".mainvisual").addClass("loaded");
        setTimeout(function() {
          moveSVG();
        },800);
      });
    });
  
  }
  
  
  
/*---------------------------------------------
Screen Height 100% for iPhone
---------------------------------------------*/
  
  function screenH() {
    var screen = '<div id="screen" style="position:absolute;height:100%;"></div>'
    $("body").append(screen);
    var h = $("#screen").innerHeight();
    $("#screen").remove();
    $(".js-h100p").height(h);
  }
  
  if($(".js-h100p")[0]) {
    screenH();
    $(window).on("load resize", screenH);
  }
  
/*---------------------------------------------
Scroll Effect
---------------------------------------------*/
  
  $(window).on("load scroll resize", function (){
    
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
    var fadePos = [];
    var slidePos = [];
    
    $(".fade-in").each(function(i){
      if(!$(this).hasClass("done")) {
        var $this = $(this);
        fadePos[i] = $this.offset().top;
        if (scroll > fadePos[i] - windowH) {
          $this.addClass("done");
          switch (fadePos[i]) {
            case fadePos[i-3]:
              var interval = 6;
              break;
            case fadePos[i-2]:
              var interval = 4;
              break;
            case fadePos[i-1]:
              var interval = 2;
              break;
            default:
              var interval = 0;
              break;
          }
          $this.find(".img-bg").css({
            opacity: 1,
            transform: "scale(1)",
            webkitTransition: "opacity 1s linear ." + interval + "s, -webkit-transform 1s cubic-bezier(0,.7,.3,1) ." + interval + "s",
            transition: "opacity 1s linear ." + interval + "s, transform 1s cubic-bezier(0,.7,.3,1) ." + interval + "s"
          });
        }
      }
    });
  
  });
  
  
  
  }());
  

/*---------------------------------------------
Scroll Effect
---------------------------------------------*/
$(function() {
    $('.to_article1').stop().click(function() {
      $('html,body').animate({scrollTop: $('#article1').offset().top - 100}, 600);
      return false;
    });
    $('.to_article2').stop().click(function() {
      $('html,body').animate({scrollTop: $('#article2').offset().top - 100}, 600);
      return false;
  });
});