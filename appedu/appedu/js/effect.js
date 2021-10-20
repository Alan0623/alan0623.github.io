/*------------------------------------------------------------------
fancybox
------------------------------------------------------------------*/
$.preload( '../images/icon/social_links/social_links1_o.svg',
  '../images/icon/social_links/social_links2_o.svg',
  '../images/icon/social_links/social_links3_o.svg',
  '../images/icon/social_links/social_links4_o.svg',
  '../images/icon/icon_lock_o.svg',
  '../images/icon/icon_Arrow_hover.svg'
);
/*------------------------------------------------------------------
fancybox
------------------------------------------------------------------*/
$(document).keydown(function(event){
  if(event.keyCode == 27){
    $('.fancybox-close-small').click();
  }else if (event.keyCode == 39){
  //do somethings;
  }
});
$(function() {


  var o = $.extend(!0, {}, $.fancybox.defaults, {
      caption: function(o, n) {
          return $(this).next("figcaption").html()
      }
  });
  $('[data-fancybox="images"]').fancybox(o)
});
/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function(){
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 34){
        $('.header').addClass('fixed');
        $(".audit_fixed").removeClass("selected"),
        $(".audit_btn").removeClass("open");
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
預約諮詢
------------------------------------------------------------------*/
$(function(){
  setTimeout(function(){ 
    $(".audit_fixed").removeClass("selected");
    $(".audit_btn").removeClass("open");
  }, 3000);
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
});
/*------------------------------------------------------------------
換字
------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  new Typed('.block_main_slice b', {
      strings: ['平面設計', '影視特效', '遊戲動畫', '室內設計', '設計接案'],
      typeSpeed: 100,
      backSpeed: 100,
      // attr: 'placeholder',
      bindInputFocusEvents: true,
      loop: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  new Typed('.block_future b', {
      strings: ['平面設計師', '影視特效師', '遊戲動畫師', '室內設計師', '接案設計師'],
      typeSpeed: 100,
      backSpeed: 100,
      // attr: 'placeholder',
      bindInputFocusEvents: true,
      loop: true
  });
});
/*------------------------------------------------------------------
主廣告輪播
------------------------------------------------------------------*/
$(function(){
  var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 3,
    // spaceBetween: 180,
    centeredSlides: true,
    loop: true,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    }
  });
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(function(){
  var appendNumber = 4;
  var prependNumber = 1;
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 32,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
  document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  });
  document.querySelector('.prepend-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  });
  document.querySelector('.append-slide').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  });
  document.querySelector('.append-2-slides').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  });
});
/*------------------------------------------------------------------
//回最上面
------------------------------------------------------------------*/
$(".base-footer .simple-text.btn .ct a").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
    $(".for_accessibility > a").focus();
    return false;
});

/*------------------------------------------------------------------
//block_promise
------------------------------------------------------------------*/
$(function(){
	// 先取得 .promise_list , 必要參數及輪播間隔
	var $block = $('.promise_list'), 
		timrt, speed = 4000;
 
	// 幫 .promise_list .title ul li 加上 hover() 事件
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
	$block.hover(function(){
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
//block_system 頁籤
------------------------------------------------------------------*/
$(function(){
  // 預設顯示第一個頁籤
  // 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
  // 同時也要取得 .tab_content 的寬
  var _default = 0, 
    $block = $('.system_list'), 
    $tabs = $block.find('.tabs'), 
    $tabsLi = $tabs.find('li'), 
    $tab_content = $block.find('.tab_content'), 
    $tab_contentLi = $tab_content.find('.event'), 
    _width = $tab_content.width();

  // 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
  // 移出時要移除 .hover 樣式
  $tabsLi.hover(function(){
    var $this = $(this);

    // 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
    if($this.hasClass('active')) return;

    $this.toggleClass('hover');
  }).click(function(){	// 當滑鼠點擊 .tabs li 時
    // 先取出被點擊及目前顯示的頁籤與索引
    var $active = $tabsLi.filter('.active').removeClass('active'), 
      _activeIndex = $active.index(),  
      $this = $(this).addClass('active').removeClass('hover'), 
      _index = $this.index(), 
      isNext = _index > _activeIndex;

    // 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
    if(_activeIndex == _index) return;

    // 依索引大或小來決定移動的位置
    $tab_contentLi.eq(_activeIndex).stop().animate({
      left: isNext ? -_width : _width
    }).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
      left: 0
    });
  });

  // 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
  $tabsLi.eq(_default).addClass('active');
  $tab_contentLi.eq(_default).siblings().css({
    left: _width
  });
});

/*------------------------------------------------------------------
//block_system
------------------------------------------------------------------*/
$(function(){
  // 預設顯示第一個頁籤
  // 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
  // 同時也要取得 .tab_content 的寬
  var _default = 0, 
    $block = $('.result_list'), 
    $tabs = $block.find('.tabs'), 
    $tabsLi = $tabs.find('li'), 
    $tab_content = $block.find('.tab_content'), 
    $tab_contentLi = $tab_content.find('.event'), 
    _width = $tab_content.width();

  // 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
  // 移出時要移除 .hover 樣式
  $tabsLi.hover(function(){
    var $this = $(this);

    // 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
    if($this.hasClass('active')) return;

    $this.toggleClass('hover');
  }).click(function(){	// 當滑鼠點擊 .tabs li 時
    // 先取出被點擊及目前顯示的頁籤與索引
    var $active = $tabsLi.filter('.active').removeClass('active'), 
      _activeIndex = $active.index(),  
      $this = $(this).addClass('active').removeClass('hover'), 
      _index = $this.index(), 
      isNext = _index > _activeIndex;

    // 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
    if(_activeIndex == _index) return;

    // 依索引大或小來決定移動的位置
    $tab_contentLi.eq(_activeIndex).stop().animate({
      left: isNext ? -_width : _width
    }).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
      left: 0
    });
  });

  // 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
  $tabsLi.eq(_default).addClass('active');
  $tab_contentLi.eq(_default).siblings().css({
    left: _width
  });
});
/*------------------------------------------------------------------
//block_system
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
              width = width / 4;
          } else if (width >= 350) {
              width = width / 2;
          }

          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
          wrap: 'circular'
      });

  $('.jcarousel-control-prev1')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel-control-next1')
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
});

/*------------------------------------------------------------------
//block_links
------------------------------------------------------------------*/
$(function() {
  var jcarousel = $('.jcarousel2');

  jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
              width = carousel.innerWidth();

          if (width >= 1000) {
              width = width / 3;
          } else if (width >= 700) {
              width = width / 3;
          } else if (width >= 350) {
              width = width / 1;
          }

          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
          wrap: 'circular'
      });

  $('.jcarousel-control-prev2')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel-control-next2')
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
//block_news
------------------------------------------------------------------*/
$(function() {
  var jcarousel = $('.jcarousel3');

  jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
              width = carousel.innerWidth();

          if (width >= 1000) {
              width = width / 3;
          } else if (width >= 700) {
              width = width / 3;
          } else if (width >= 350) {
              width = width / 1;
          }

          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
          wrap: 'circular'
      });

  $('.jcarousel-control-prev3')
      .jcarouselControl({
          target: '-=1'
      });

  $('.jcarousel-control-next3')
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
//block_story
------------------------------------------------------------------*/
function loadStart() {
  "use strict";
  (new TimelineMax).to("#load_sec .load_logo", 1, {
      autoAlpha: 1
      
  }, .1)
}

function stopload() {
  "use strict";
  var e = new TimelineMax;
  e.to("#load_sec .load_logo", 1, {
      autoAlpha: 0
      
  }, 1.5), e.to("#load_sec", 1, {
      autoAlpha: 0
      
  }, 2), e.eventCallback("onComplete", stopfin)
}


function stopfin() {
  "use strict";
  $("#load_sec").remove()
}

function stopfinbottom() {
  "use strict";
  $("body").removeClass("fixed"), svgAnime(), jsSplitTxt(), fadeImage()
}
$(window).on("load", function() {
  if ($("#load_sec").length) {
      stopload();

      var e = new ScrollMagic.Controller,
          t = function(e, t) {
              var o, s, a = Date.now();
              return 100,
                  function(e) {
                      (o = a + 100 - Date.now()) < 0 ? (e(), a = Date.now()) : (clearTimeout(s), s = setTimeout(function() {
                          e()
                      }, 100 - o + 16))
                  }
          }();
      new ScrollMagic.Scene({
          triggerHook: "onLeave",
          triggerElement: "#student_story_01",
          duration: "100%",
          offset: 0
      }).on("progress", function(e) {
          var o = Math.floor(100 * e.progress);
          t(function() {
              TweenMax.to("#student_story_txt_01_img", 2, {
                  y: "-" + o,
                  ease: Power4.easeOut
              })
          })
      }).addTo(e), new ScrollMagic.Scene({
          triggerHook: "onLeave",
          triggerElement: "#student_story_02",
          duration: 0,
          offset: 0
      }).on("enter", function(e) {
          $(".student_story_txt_01").stop().addClass("img_done"), $("#student_story_txt_01_ttl").stop().removeClass("done"), $("#student_story_txt_02_ttl").stop().addClass("done"), $("#student_story_txt_01_img02").stop().removeClass("done"), $("#student_story_txt_02_img02").stop().addClass("done")
      }).on("leave", function(e) {
          $(".student_story_txt_01").stop().removeClass("img_done"), $("#student_story_txt_01_ttl").stop().addClass("done"), $("#student_story_txt_02_ttl").stop().removeClass("done"), $("#student_story_txt_01_img02").stop().addClass("done"), $("#student_story_txt_02_img02").stop().removeClass("done")
      }).addTo(e), new ScrollMagic.Scene({
          triggerHook: "onLeave",
          triggerElement: "#student_story_02",
          duration: "100%",
          offset: 0
      }).on("progress", function(e) {
          var o = Math.floor(100 * e.progress);
          t(function() {
              TweenMax.to("#student_story_txt_02_img", 2, {
                  y: "-" + o,
                  ease: Power4.easeOut
              })
          })
      }).addTo(e), new ScrollMagic.Scene({
          triggerHook: "onLeave",
          triggerElement: "#student_story_03",
          duration: 0,
          offset: 0
      }).on("enter", function(e) {
          $(".student_story_txt_02").stop().addClass("img_done"), $("#student_story_txt_02_ttl").stop().removeClass("done"), $("#student_story_txt_03_ttl").stop().addClass("done"), $("#student_story_txt_02_img02").stop().removeClass("done"), $("#student_story_txt_03_img02").stop().addClass("done")
      }).on("leave", function(e) {
          $(".student_story_txt_02").stop().removeClass("img_done"), $("#student_story_txt_02_ttl").stop().addClass("done"), $("#student_story_txt_03_ttl").stop().removeClass("done"), $("#student_story_txt_02_img02").stop().addClass("done"), $("#student_story_txt_03_img02").stop().removeClass("done")
      }).addTo(e), new ScrollMagic.Scene({
          triggerHook: "onLeave",
          triggerElement: "#student_story_03",
          duration: "100%",
          offset: 0
      }).on("progress", function(e) {
          var o = Math.floor(100 * e.progress);
          t(function() {
              TweenMax.to("#student_story_txt_03_img", 2, {
                  y: "-" + o,
                  ease: Power4.easeOut
              })
          })
      }).addTo(e)
  }
});
/*------------------------------------------------------------------
//sameHeight
------------------------------------------------------------------*/
$(function(){

    $("body").removeClass("no_js");
    var maxHeight = 0;
    $('.sameHeight').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.sameHeight').each(function() {
        $(this).height(maxHeight);
    });
  
    $(window).resize(function() {
        var maxHeight = 0;
        $('.sameHeight').each(function() {
            $(this).height('auto');
            if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
        });
        $('.sameHeight').each(function() {
            $(this).height(maxHeight);
        });
    });
});


/*------------------------------------------------------------------
數字自動跳動
------------------------------------------------------------------*/
(function($) {
  $.fn.animateNumbers = function(stop, commas, duration, ease) {
      return this.each(function() {
          var $this = $(this);
          var start = parseInt($this.text().replace(/,/g, ""));
          commas = (commas === undefined) ? true : commas;
          $({value: start}).animate({value: stop}, {
              duration: duration == undefined ? 1000 : duration,
              easing: ease == undefined ? "swing" : ease,
              step: function() {
                  $this.text(Math.floor(this.value));
                  if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
              },
              complete: function() {
                 if (parseInt($this.text()) !== stop) {
                     $this.text(stop);
                     if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                 }
              }
          });
      });
  };
})(jQuery);

$(function(){
  $('.teacher_team_box').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.6;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.teacher_team_box').offset().top;
		if(  $WS >  $RO ) {
			$('.teacher_team_box').removeClass('ready-animate').addClass('run-animate');
      $(".pageLoad1").animateNumbers($(".pageLoad1").attr("value"), true, 1000);
      $(".pageLoad2").animateNumbers($(".pageLoad2").attr("value"), true, 1000);
      $(".pageLoad3").animateNumbers($(".pageLoad3").attr("value"), true, 4000);
      $(".pageLoad4").animateNumbers($(".pageLoad4").attr("value"), true, 4000);
		}
	}).scroll();
});