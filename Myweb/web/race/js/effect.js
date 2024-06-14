/*------------------------------------------------------------------
拿掉網頁無js狀態
------------------------------------------------------------------*/
jQuery(window).load(function () {
      $("body").removeClass("no_js");    
});
/*------------------------------------------------------------------
手機板 主選單 按鈕 icon效果
------------------------------------------------------------------*/
$(".open_nav").click(function() {
    $(this).toggleClass("open");
    $(".main_menu").slideToggle(500);
    window.addEventListener('resize', function () {
        if ($(window).width() > 768) {
            $(".main_menu").removeAttr("style");
            $(".open_nav").removeClass("open");  
        }
        else {
        }
    });
});
/*------------------------------------------------------------------
gototop
------------------------------------------------------------------*/
jQuery(function ($) {
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
});

/*------------------------------------------------------------------

------------------------------------------------------------------*/

$(document).ready(function () {
    $(".btn_login_a").click(function () {
        $(".login_block").css({ "display": "none"});
        $(".member_block").css({ "display": "block" });
    });
    $(".btn_logout_a").click(function () {
        $(".login_block").css({ "display": "block" });
        $(".member_block").css({ "display": "none" });
    });
});
$(document).ready(function () {
    $(".send>a").click(function () {
        $(".forget_form").css({ "display": "none" });
        $(".forget_ok").css({ "display": "block" });
    });
    $(".btn_forget>a,.btn_member_accounting>li>a").click(function () {
        $(".forget_form").css({ "display": "block" });
        $(".forget_ok").css({ "display": "none" });
    });
});
$(document).ready(function () {
    $(".Buy_1>input").click(function () {
        $(".forget_form").css({ "display": "none" });
        $(".forget_atm").css({ "display": "block" });
    });
    $(".Buy_2>input").click(function () {
        $(".forget_form").css({ "display": "none" });
        $(".forget_store").css({ "display": "block" });
    });
    $(".btn_forget>a,.btn_member_accounting>li>a").click(function () {
        $(".forget_form").css({ "display": "block" });
        $(".forget_ok,.forget_atm,.forget_store").css({ "display": "none" });
    });
});
/*------------------------------------------------------------------
fancybox
------------------------------------------------------------------*/
$('[data-fancybox="images"]').fancybox({
    thumbs: {
        autoStart: true
    },
    buttons: [
        'slideShow',
        'fullScreen',
        'thumbs',
        'share',
        //'download',
        'zoom',
        'close'
    ],
});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(function () {

    var Page = (function () {

        var $navArrows = $('#nav-arrows').hide(),
            $navDots = $('#nav-dots').hide(),
            $nav = $navDots.children('span'),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({
                onReady: function () {

                    $navArrows.show();
                    $navDots.show();
                    $shadow.show();

                },
                onBeforeChange: function (pos) {

                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');

                }
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

                // add navigation events
                $navArrows.children(':first').on('click', function () {

                    slicebox.next();
                    return false;

                });

                $navArrows.children(':last').on('click', function () {

                    slicebox.previous();
                    return false;

                });

                $nav.each(function (i) {

                    $(this).on('click', function (event) {

                        var $dot = $(this);

                        if (!slicebox.isActive()) {

                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');

                        }

                        slicebox.jump(i + 1);
                        return false;

                    });

                });

            };

        return { init: init };

    })();

    Page.init();

});