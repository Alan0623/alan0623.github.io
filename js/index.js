
/*------------------------------------------------------------------
quality_center
------------------------------------------------------------------*/
$(function(){
	// 先取得 .quality_center_pic , 必要參數及輪播間隔
	var $block = $('.quality_center_pic'), 
		timrt, speed = 3000;
 
	// 幫 .quality_center_pic .title ul li 加上 hover() 事件
	var $li = $('.title ul li', $block).hover(function(){
		// 當滑鼠移上時加上 .over 樣式
		$(this).addClass('over').siblings('.over').removeClass('over');
	}, function(){
		// 當滑鼠移出時移除 .over 樣式
		$(this).removeClass('over');
	}).click(function(){
		// 當滑鼠點擊時, 顯示相對應的 div.info
		// 並加上 .on 樣式
		var $this = $(this);
		$this.add($('.bd div.info', $block).eq($this.index())).addClass('on').siblings('.on').removeClass('on');
	});
 
	// 幫 $block 加上 hover() 事件
	$('.quality_center_pic .title').hover(function(){
		// 當滑鼠移上時停止計時器
		clearTimeout(timer);
	}, function(){
		// 當滑鼠移出時啟動計時器
		timer = setTimeout(move, speed);
	});
 
	// 控制輪播
	function move(){
		var _index = $('.title ul li.on', $block).index();
			_index = (_index + 1) % $li.length;
		$li.eq(_index).click();
 
		timer = setTimeout(move, speed);
	}
 
	// 啟動計時器
	timer = setTimeout(move, speed);
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(function() {
  var jcarousel = $('.jcarousel');

  jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
              width = carousel.innerWidth();

          if (width >= 1000) {
              width = width / 4;
          } else if (width >= 700) {
              width = width / 3;
          } else if (width >= 350) {
              width = width / 2;
          }

          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
          wrap: 'circular'
      }).jcarouselSwipe({
          perSwipe: 1
      });

  $('.jcarousel-control-prev')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel-control-next')
      .jcarouselControl({
          target: '+=1'
      });

  $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
          $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
          $(this).removeClass('active');
      })
      .on('click', function(e) {
          e.preventDefault();
      })
      .jcarouselPagination({
          perPage: 1,
          item: function(page) {
              return '<a href="#' + page + '">' + page + '</a>';
          }
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
  $('.close_cookies').stop().click(function() {
    $('.cookies').toggleClass('close');
    return false;
  });
});