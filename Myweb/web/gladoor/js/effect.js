/*------------------------------------------------------------------
Front-end programming By Alan Lin 林位青 www.alan-lin.com
------------------------------------------------------------------*/
/*------------------------------------------------------------------
拿掉網頁無js狀態
------------------------------------------------------------------*/
jQuery(window).load(function () {
      $("body").removeClass("no_js"); 
        if (window.innerWidth > 769) { 
            $(".main_menu_btn").css({ "display": "none" })
        } 
});
/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function () {
    $('#content').scroll(function () {//向下滑動時 主選單 顯現 或 隱藏
        var scrollVal = $(this).scrollTop();
        var adscrtop = $('#About').offset().top;
        if (window.innerWidth > 769) { 
            if (scrollVal > 50) {
                $(".news_block").css({ "display": "none" });
            } else {
                $(".news_block").css({ "display": "block" });
            }
            if (scrollVal > adscrtop) {
                $(".logotype").css({ "display": "none" });
                $(".main_menu_btn").css({ "display": "block" });
                $(".main_menu_list").addClass("main_menu_open");
                $(".main_menu_list>.Facebook").css({ "visibility": "hidden" });
                $(".main_menu_list>.Simplified_Chinese").css({ "visibility": "hidden" });
                //$(".main_menu_list").slideUp(500);
            } else {
                $(".logotype").css({ "display": "block" });
                $(".main_menu_btn").css({ "display": "none" });
                $(".main_menu_list").removeClass("main_menu_open");
                $(".main_menu_list").removeAttr("style");
                $(".main_menu_list>.Facebook").css({ "visibility": "visible" });
                $(".main_menu_list>.Simplified_Chinese").css({ "visibility": "visible" });
                //$(".main_menu_list").css({ "display": "block" });
                $(".main_menu_list").slideDown(500);
            }
        } else {
            $(".logotype").css({ "display": "block" });
            $(".main_menu_btn").css({ "display": "none" });
            $(".main_menu_list").removeClass("main_menu_open");
            $(".main_menu_list").removeAttr("style");
        }
        
    });
});
$(document).ready(function () {//RWD視窗寬度改變時 主選單 顯現 或 隱藏
    $(window).resize(function() {
        var scrollVal = $(this).scrollTop();
        var adscrtop = $('#About').offset().top;
        if (window.innerWidth > 769) { 
            if (scrollVal > adscrtop) {
                $(".logotype").css({ "display": "none" });
                $(".main_menu_btn").css({ "display": "block" });
                $(".main_menu_list").addClass("main_menu_open");
                $(".main_menu_list>.Facebook").css({ "visibility": "visible" });
                $(".main_menu_list>.Simplified_Chinese").css({ "visibility": "visible" });
                $(".main_menu_list").slideUp(500);
            } else {
                $(".logotype").css({ "display": "block" });
                $(".main_menu_btn").css({ "display": "none" });
                $(".main_menu_list").removeClass("main_menu_open");
                $(".main_menu_list>.Facebook").css({ "visibility": "hidden" });
                $(".main_menu_list>.Simplified_Chinese").css({ "visibility": "hidden" });
            }
        } else {
            $(".logotype").css({ "display": "block" });
            $(".main_menu_btn").css({ "display": "none" });
            $(".main_menu_list").removeClass("main_menu_open");
        }
        if (scrollVal < adscrtop) {
            $(".main_menu_list>.Facebook").css({ "visibility": "hidden" });
            $(".main_menu_list>.Simplified_Chinese").css({ "visibility": "hidden" });
        }
    });

    $(".main_menu_btn").click(function () {//電腦版 主選單 logo
        $(".main_menu_list").slideToggle(500);
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
        'zoom',
        'close'
    ]
});
/*------------------------------------------------------------------
手機板 主選單 按鈕 icon效果
------------------------------------------------------------------*/
$(document).ready(function () {
    $(".open_nav").click(function () {
        $(this).toggleClass("open");
        $(".mobile_main_menu").slideToggle(500);
    });
});
/*------------------------------------------------------------------
#roller_door
------------------------------------------------------------------*/
$(document).ready(function () {
    $("#roller_door").slideUp(500, function () {
        $(".products_nav1").click(function () {
            $("#roller_door").slideToggle(500);
        });
        $(".btn_close").click(function () {
            $("#roller_door").slideToggle(500);
        });
    });
});


$('#Door_Design.group4 .parallax_layer_foreb #door_design_list li a span').css("transform", "skew(0deg, 18.8deg)");
/*------------------------------------------------------------------
door_design
------------------------------------------------------------------*/
$(document).ready(function () {
    $(".door_design1").find('a').addClass('hide');
    $(".door_design1").find('a:first').removeAttr('class');
    $(".door_design2").find('a').addClass('hide');
    $(".door_design2").find('a:first').removeAttr('class');
    $(".door_design3").find('a').addClass('hide');
    $(".door_design3").find('a:first').removeAttr('class');
    $(".door_design4").find('a').addClass('hide');
    $(".door_design4").find('a:first').removeAttr('class');
    $(".door_design5").find('a').addClass('hide');
    $(".door_design5").find('a:first').removeAttr('class');
    $(".door_design6").find('a').addClass('hide');
    $(".door_design6").find('a:first').removeAttr('class');
});
/*------------------------------------------------------------------
news
------------------------------------------------------------------*/
$(function () {
    console.log("Hello!! Nice to see you.(・∀・).");
    console.log("Front-end programming By Alan Lin  www.alan-lin.com");
    var $block = $('#abgneBlock'),
        $slides = $('ul.news_list', $block),
        _width = 278,//$block.width(),
        $li = $('li', $slides),
        _animateSpeed = 600,
        // 加入計時器, 輪播時間及控制開關
        timer, _showSpeed = 5000, _stop = false;
    // 產生 li 選項
    var _str = '';
    for (var i = 0, j = $li.length; i < j; i++) {
        // 每一個 li 都有自己的 className = playerControl_號碼
        _str += '<li class="playerControl_' + (i + 1) + '"></li>';
    }
    // 產生 ul 並把 li 選項加到其中
    var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent());
    // 幫 li 加上 click 事件
    var $playerControlLi = $playerControl.find('li').click(function () {
        var $this = $(this);
        $this.addClass('current').siblings('.current').removeClass('current');

        clearTimeout(timer);
        // 移動位置到相對應的號碼
        $slides.stop().animate({
            left: _width * $this.index() * -1
        }, _animateSpeed, function () {
            // 當廣告移動到正確位置後, 依判斷來啟動計時器
            if (!_stop) timer = setTimeout(move, _showSpeed);
        });
        return false;
    }).eq(0).click().end();

    // 如果滑鼠移入 $block 時
    $block.hover(function () {
        // 關閉開關及計時器
        _stop = true;
        clearTimeout(timer);
    }, function () {
        // 如果滑鼠移出 $block 時
        // 開啟開關及計時器
        _stop = false;
        timer = setTimeout(move, _showSpeed);
    });
    // 計時器使用
    function move() {
        var _index = $('.current').index();
        $playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
    }
});
/*------------------------------------------------------------------
主選單滑動
------------------------------------------------------------------*/
$(function () {
    var scrollToPositionF = $('#First').offset().top;
    var scrollToPositionA = $('#About').offset().top;
    var scrollToPositionP = $('#Products').offset().top;
    var scrollToPositionD = $('#Door_Design').offset().top;
    var scrollToPositionC = $('#Contact').offset().top;
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $('.main_menu_list .About').bind("click", function (e) {
        $('#content').stop().animate({ 'scrollTop': scrollToPositionA }, 600);
        e.preventDefault();
    });
    $('.main_menu_list .Products').bind("click", function (e) {
        $('#content').stop().animate({ 'scrollTop': scrollToPositionP }, 600);
        e.preventDefault();
    });
    $('.main_menu_list .Door_Design').bind("click", function (e) {
        $('#content').stop().animate({ 'scrollTop': scrollToPositionD }, 600);
        e.preventDefault();
    });
    $('.main_menu_list .Contact').bind("click", function (e) {
        $('#content').stop().animate({ 'scrollTop': scrollToPositionC }, 600);
        e.preventDefault();
    });
    $('#First').stop().on('mousewheel', function(event) {
        if (event.deltaY <= -1) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionA }, 190);
        }
    });
    $("<div/>",{"class":"year_list_left"}).appendTo("#About .parallax_layer_foreb .parallax_object");
    $("<div/>",{"class":"year_list_top"}).appendTo("#About .parallax_layer_foreb .parallax_object");
    $('#About>.parallax_layer_foreb>.parallax_object>.year_list_left').stop().on('mousewheel', function(event) {
       // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        if (event.deltaY > 0) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionF }, 190);
        }
        if (event.deltaY <= -1) {
            //console.log("滑鼠向下滑是負数");
            $('#content').stop().animate({ 'scrollTop': scrollToPositionP }, 190);
        }
    });
    $('#About>.parallax_layer_foreb>.parallax_object>.year_list_top').stop().mousewheel(function (event) {
        if (event.deltaY > 0) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionF }, 190);
        }
        if (event.deltaY <= -1) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionP }, 190);
        }
    });
    /*
    $('#About>.parallax_layer_foreb').css("position", "fixed").css("z-index", "9999999");
    $('#About>.parallax_layer_foreb>.parallax_object>.year_list').stop().on('mousewheel', function (event) {
        $('#About>.parallax_layer_foreb').css("position", "fixed").css("z-index", "9999999");
        //$('.year_list').off("mousewheel");
    });
    $('#About>.parallax_layer_foreb>.parallax_object>.year_list').hover(
        function () {
            $('#About>.parallax_layer_foreb').css("position", "fixed").css("z-index", "9999999");
        }, function () {
            $('#About>.parallax_layer_foreb').css("position", "fixed").css("z-index", "9999999");
        }
    );*/
    $('#Products').stop().on('mousewheel', function(event) {
        if (event.deltaY > 0) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionA }, 190);
        }
        if (event.deltaY <= -1) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionD }, 190);
        }
    });
    $('#Door_Design').stop().on('mousewheel', function(event) {
        if (event.deltaY > 0) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionP }, 190);
        }
        if (event.deltaY <= -1) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionC }, 190);
        }
    });
    $('#Contact').stop().on('mousewheel', function(event) {
        if (event.deltaY > 0) {
            $('#content').stop().animate({ 'scrollTop': scrollToPositionD }, 190);
        }
    });

    $('.mobile_main_menu_list .About').click(function () {
        $body.stop().animate({'scrollTop' : $('#About').offset().top}, 600);
        return false;
    });
    $('.mobile_main_menu_list .Products').click(function () {
        $body.stop().animate({ 'scrollTop' : $('#Products').offset().top }, 600);
        return false;
    });
    $('.mobile_main_menu_list .Door_Design').click(function () {
        $body.stop().animate({ 'scrollTop' : $('#Door_Design').offset().top }, 600);
        return false;
    });
    $('.mobile_main_menu_list .Contact').click(function () {
        $body.stop().animate({ 'scrollTop' : $('#Contact').offset().top }, 600);
        return false;
    });
});