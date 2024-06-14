/*------------------------------------------------------------------
Front-end programming By Alan Lin 林位青 www.alan-lin.com
------------------------------------------------------------------*/
/*------------------------------------------------------------------
拿掉網頁無js狀態
------------------------------------------------------------------*/
jQuery(window).load(function () {
    $("body").removeClass("no_js");
});
$(function () {
    // Trigger maximage
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
            timeout: 5000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 1,
            after: function (last, current) {
                // console.log($(current).find('.light-text').html());
            }
        }
    });
    $('.cube li').maximage2({
        fillElement: '.cube li'
    });
    $('.cube a').maximage2({
        fillElement: '.cube a'
    });
});
/*------------------------------------------------------------------
點小圖換大圖片
------------------------------------------------------------------*/
$(function () {
    // 用來顯示大圖片用
    var $showImage = $('#show-image');

    // 當滑鼠移到 .small_img 中的某一個超連結時
    $('.small_img a').mouseover(function () {
        // 把 #show-image 的 src 改成被移到的超連結的位置
        //$showImage.attr('src', $(this).attr('href'));

        var $this = $(this),
            _src = $this.attr('href');

        if ($showImage.attr('src') != _src) {
            $showImage.stop(false, true).fadeTo(0, 0).attr('src', _src).stop(false, true).fadeTo(400, 1);
        }
    }).click(function () {
        // 如果超連結被點擊時, 取消連結動作
        return false;
    });
});
/*------------------------------------------------------------------
goto top
------------------------------------------------------------------*/

/*------------------------------------------------------------------
手機板 主選單 按鈕 icon效果
------------------------------------------------------------------*/
$(function () {
    $(".open_nav").click(function() {
        $(this).toggleClass("open");
        //$(".main_menu").slideToggle(500);
        $(".main_nav_ul").toggleClass("open");
        window.addEventListener('resize', function () {
            if ($(window).width() > 768) {
                $(".main_menu").removeAttr("style");
                $(".open_nav").removeClass("open");  
                $(".main_nav_ul").removeClass("open"); 
            }
            else {
            }
        });
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
                scrollTop: target.offset().top
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });
});





$(function () {
    // 幫 #menu li 加上 hover 事件
    $('.main_nav_ul li').hover(function () {
        // 先找到 li 中的子選單
        var _this = $(this),
            _subnav = _this.children('ul');
        _subnav.stop(true, true).slideDown(400);
    }, function () {
        var _this = $(this),
            _subnav = _this.children('ul');
        _subnav.stop(true, true).slideUp(400);
    });

    // 取消超連結的虛線框
    $('a').focus(function () {
        this.blur();
    });
});

