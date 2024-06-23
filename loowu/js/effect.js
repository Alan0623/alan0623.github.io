/*------------------------------------------------------------------
preload 預先載圖
------------------------------------------------------------------*/
$.preload( '../images/icon/icon_fb_o.svg',
  '../images/icon/icon_ig_o.svg',
  '../images/icon/icon_say_o.svg',
  '../images/icon/icon_yt_o.svg'
);
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
    console.log("Front-end programming By Wei-Ching Lin");
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
主廣告輪播
------------------------------------------------------------------*/
$(function(){
  var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    // spaceBetween: 180,
    speed: 1200,
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
$(function(){
    var swiper = new Swiper('.swiper-container-portfolio', {
      slidesPerView: 1,
      // spaceBetween: 180,
      speed: 1200,
      centeredSlides: true,
      loop: true,
      autoplay:false,
      pagination: {
        el: '.swiper-pagination-portfolio',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-portfolio',
        prevEl: '.swiper-button-prev-portfolio',
      }
    });
  });


$(function(){
    var swiper = new Swiper('.swiper-container-stopplay', {
      slidesPerView: 1,
    //   spaceBetween: 180,
        speed: 1200,
      centeredSlides: true,
      loop: true,
      autoplay: false,
      pagination: {
        el: '.swiper-pagination-stopplay',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-stopplay',
        prevEl: '.swiper-button-prev-stopplay',
      }
    });
  });
/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(function(){
    if($('.tabs_list')[0] != undefined){
	// 預設顯示第一個 Tab
        var _showTab = 0;
        $('.tabs_list').each(function(){
            // 目前的頁籤區塊
            var $tab = $(this);
    
            var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
            $($defaultLi.find('a').attr('href')).removeClass('hide_list').siblings().addClass('hide_list');
    
            // 當 li 頁籤被點擊時...
            // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
            $('ul.tabs li', $tab).click(function() {
                // 找出 li 中的超連結 href(#id)
                var $this = $(this),
                    _clickTab = $this.find('a').attr('href');
                // 把目前點擊到的 li 頁籤加上 .active
                // 並把兄弟元素中有 .active 的都移除 class
                $this.addClass('active').siblings('.active').removeClass('active');
                // 淡入相對應的內容並隱藏兄弟元素
                $(_clickTab).stop(false, true).fadeIn().removeClass('hide_list').siblings().addClass('hide_list');
    
                return false;
            }).find('a').focus(function(){
                this.blur();
            });
        });
    }
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(function(){
    if($('.scroll')[0] != undefined){
        $('.scroll').click(function() {
            var target = $(this.hash);
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;

        });
    }
});

/*------------------------------------------------------------------
//block_links 舊活動
------------------------------------------------------------------*/
$(function() {
    if($('.links_list3')[0] != undefined){ 
        var jcarousel3 = $('.links_list3');
        jcarousel3.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 1000) {
                width = width / 3;
            } else if (width >= 800) {
                width = width / 2;
            } else if (width >= 500) {
                width = width / 1;
            } else if (width >= 300) {
                width = width / 1;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        }).jcarouselSwipe({
            perSwipe: 1
        });

        if ($(window).width() > 828) {
            $('.links_list3_prev').jcarouselControl({target: '-=3'});
            $('.links_list3_next').jcarouselControl({target: '+=3'});
        } else if ($(window).width() > 598) {
            $('.links_list3_prev').jcarouselControl({target: '-=2'});
            $('.links_list3_next').jcarouselControl({target: '+=2'});
        } else if ($(window).width() > 300) {
            $('.links_list3_prev').jcarouselControl({target: '-=1'});
            $('.links_list3_next').jcarouselControl({target: '+=1'});
        }
        $(window).resize(function() {
            if ($(window).width() > 828) {
                $('.links_list3_prev').jcarouselControl({target: '-=3'});
                $('.links_list3_next').jcarouselControl({target: '+=3'});
            } else if ($(window).width() > 598) {
                $('.links_list3_prev').jcarouselControl({target: '-=2'});
                $('.links_list3_next').jcarouselControl({target: '+=2'});
            } else if ($(window).width() > 300) {
                $('.links_list3_prev').jcarouselControl({target: '-=1'});
                $('.links_list3_next').jcarouselControl({target: '+=1'});
            }
        });

        $('.links_list3_pagination')
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
    }
});
$(function() {
    if($('.links_list6')[0] != undefined){ 
    var jcarousel6 = $('.links_list6');
    jcarousel6.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
  
            if (width >= 1000) {
                width = width / 6;
            } else if (width >= 700) {
                width = width / 4;
            } else if (width >= 550) {
                width = width / 2;
            } else if (width >= 300) {
                width = width / 1;
            }
  
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        }).jcarouselSwipe({
          perSwipe: 1
      });
  
      if ($(window).width() > 828) {
          $('.links_list6_prev').jcarouselControl({target: '-=3'});
          $('.links_list6_next').jcarouselControl({target: '+=3'});
      } else if ($(window).width() > 598) {
          $('.links_list6_prev').jcarouselControl({target: '-=2'});
          $('.links_list6_next').jcarouselControl({target: '+=2'});
      } else if ($(window).width() > 300) {
          $('.links_list6_prev').jcarouselControl({target: '-=1'});
          $('.links_list6_next').jcarouselControl({target: '+=1'});
      }
      $(window).resize(function() {
          if ($(window).width() > 828) {
              $('.links_list6_prev').jcarouselControl({target: '-=3'});
              $('.links_list6_next').jcarouselControl({target: '+=3'});
          } else if ($(window).width() > 598) {
              $('.links_list6_prev').jcarouselControl({target: '-=2'});
              $('.links_list6_next').jcarouselControl({target: '+=2'});
          } else if ($(window).width() > 300) {
              $('.links_list6_prev').jcarouselControl({target: '-=1'});
              $('.links_list6_next').jcarouselControl({target: '+=1'});
          }
      });
  
    $('.links_list6_pagination')
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
    }
});
/*------------------------------------------------------------------
.block_index1
------------------------------------------------------------------*/
$(function(){
    if($('.block_index1')[0] != undefined){ 

        $(window).scroll(function() {
            if ( $(this).scrollTop() > $("#block_index1").height()){
                $('#social_media_fixed').addClass('fixed');
                // $(".audit_fixed").removeClass("selected"),
                // $(".audit_btn").removeClass("open");
            } else {
                $('#social_media_fixed').removeClass('fixed');
            }
        });


        $('#block_index2').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.75;
            var $WS = $(window).scrollTop() + $WH;
            var $RO2 = $('#block_index2').offset().top;
            if(  $WS >  $RO2 ) {
                $('#block_index2').addClass('run-animate').removeClass('ready-animate');
            }
        }).scroll();

        $('.block_index3').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.6;
            var $WS = $(window).scrollTop() + $WH;
            var $RO3 = $('.block_index3').offset().top;
            if(  $WS >  $RO3 ) {
                $('.block_index3').removeClass('ready-animate').addClass('run-animate');
                $(".pageLoad1").animateNumbers($(".pageLoad1").attr("value"), true, 1000);
                $(".pageLoad2").animateNumbers($(".pageLoad2").attr("value"), true, 1500);
                $(".pageLoad3").animateNumbers($(".pageLoad3").attr("value"), true, 1500);
            }
        }).scroll();

        $('#block_index4').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.75;
            var $WS = $(window).scrollTop() + $WH;
            var $RO4 = $('#block_index4').offset().top;
            if(  $WS >  $RO4 ) {
                $('#block_index4').addClass('run-animate').removeClass('ready-animate');
            }
        }).scroll();

        $('#block_index5').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.75;
            var $WS = $(window).scrollTop() + $WH;
            var $RO5 = $('#block_index5').offset().top;
            if(  $WS >  $RO5 ) {
                $('#block_index5').addClass('run-animate').removeClass('ready-animate');
            }
        }).scroll();

        $('#block_index6').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.5;
            var $WS = $(window).scrollTop() + $WH;
            var $RO6 = $('#block_index6').offset().top;
            if(  $WS >  $RO6 ) {
                $('#block_index6').addClass('run-animate').removeClass('ready-animate');
                $('#social_media_fixed').addClass('white');
            } 
            if(  $WS <  $RO6 ) {
                $('#social_media_fixed').removeClass('white');
            }
        }).scroll();
    
    }
});

/*------------------------------------------------------------------
.block_index3 數字自動跳動  
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


/*------------------------------------------------------------------
footer_tabs 滑動頁籤
------------------------------------------------------------------*/
$(function(){
    $(".footer_tabs .tabs a").hover(function () {

        var position = $(this).parent().position();
        var width = $(this).parent().width();

        $(".footer_tabs .tabs .floor").css({
            "left": position.left,
            "width": width
        });

    });

    var actWidth = $(".footer_tabs .tabs").find(".active").parent("li").width();
    var actPosition = $(".footer_tabs .tabs .active").position();

    $(".footer_tabs .tabs .floor").css({
        "left": actPosition.left,
        "width": actWidth
    });
});


/*------------------------------------------------------------------
.block_portfolio3
------------------------------------------------------------------*/
$(function(){
    if($('#block_portfolio3')[0] != undefined){ 
        $('#block_portfolio3').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.5;
            var $WS = $(window).scrollTop() + $WH;
            var $RO6 = $('#block_portfolio3').offset().top;
            if(  $WS >  $RO6 ) {
                $('#block_portfolio3').addClass('run-animate').removeClass('ready-animate');
            } 
        }).scroll();
    }
});
/*------------------------------------------------------------------
.block_index1
------------------------------------------------------------------*/
$(function(){
    if($('#block_works2')[0] != undefined){ 
        $('#block_works2').addClass('ready-animate');
        $(window).on('scroll', function(){
            var $WH = $(window).height() * 0.5;
            var $WS = $(window).scrollTop() + $WH;
            var $RO6 = $('#block_works2').offset().top;
            if(  $WS >  $RO6 ) {
                $('#block_works2').addClass('run-animate').removeClass('ready-animate');
            } 
        }).scroll();
    }
});