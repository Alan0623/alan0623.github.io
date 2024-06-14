/*------------------------------------------------------------------
Front-end programming By Alan Lin 林位青 www.alan-lin.com
------------------------------------------------------------------*/
/*------------------------------------------------------------------
nivoSlider
------------------------------------------------------------------*/
$(window).load(function () {
    $('#slider').nivoSlider();
});
/*------------------------------------------------------------------
goto top
------------------------------------------------------------------*/
jQuery(function ($) {
    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });
});
/*------------------------------------------------------------------
拿掉網頁無js狀態
------------------------------------------------------------------*/
jQuery(window).load(function () {
      $("body").removeClass("no_js");    
});
/*------------------------------------------------------------------
手機板 主選單 按鈕 icon效果
------------------------------------------------------------------*/
$(document).ready(function () {
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
jcarousel
------------------------------------------------------------------*/
$(".jcarousel-control-prev").hide();
$(".jcarousel-control-prev").click(function () {
    $(".jcarousel-control-next").show();
    $(".jcarousel-control-prev").hide();
});
$(".jcarousel-control-next").click(function () {
    $(".jcarousel-control-next").hide();
    $(".jcarousel-control-prev").show();
});

/*------------------------------------------------------------------
.company_list_ul
------------------------------------------------------------------*/
/*
var i;
for (i = 0; i < 99; i++) {
    $(".company_list_ul li:nth-child(" + (i + 1) + ")").find('a').click(function () {
        $(".company_article_ul>.close").fadeIn(1000);
        $(".company_article_ul li:eq(" + i + ")").fadeIn(1000);
    });
}
*/
$(".company_article_ul>.close").hide();
$(".company_article_ul>.close").click(function () {
    $(".company_article_ul li").slideUp(1000);
    $(".company_article_ul>.close").fadeOut(1000);
});
$(".company_list_ul li:nth-child(1)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(0)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(0)').slideUp(1000);
});
$(".company_list_ul li:nth-child(2)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(1)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(1)').slideUp(1000);
});
$(".company_list_ul li:nth-child(3)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(2)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(2)').slideUp(1000);
});
$(".company_list_ul li:nth-child(4)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(3)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(3)').slideUp(1000);
});
$(".company_list_ul li:nth-child(5)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(4)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(4)').slideUp(1000);
});
$(".company_list_ul li:nth-child(6)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(5)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(5)').slideUp(1000);
});
$(".company_list_ul li:nth-child(7)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(6)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(6)').slideUp(1000);
});
$(".company_list_ul li:nth-child(8)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(7)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(7)').slideUp(1000);
});
$(".company_list_ul li:nth-child(9)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(8)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(8)').slideUp(1000);
});
$(".company_list_ul li:nth-child(10)").find('a').click(function () {
    $(".company_article_ul>.close").fadeIn(1000);
    $(".company_article_ul li:eq(9)").slideDown(1000);
    $(".company_article_ul li").not('li:eq(9)').slideUp(1000);
});
});

/*------------------------------------------------------------------
讓錨點連結有滑動的效果
------------------------------------------------------------------*/
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        var target = $(this.hash);
        if (window.innerWidth >= 909) {
            $('html, body').animate({
                scrollTop: target.offset().top - 173
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: target.offset().top - 59
            }, 1000);
        }
        return false;
    });
});