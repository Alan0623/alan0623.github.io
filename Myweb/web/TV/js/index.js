/*///////////////////////////////////////////////////////////
日期
///////////////////////////////////////////////////////////*/
$(function(){
    var Today=new Date();
    $( ".date" ).html("" + (Today.getFullYear()-1911)+ "/" + (Today.getMonth()+1) + "/" + Today.getDate() + " ");
});
/*///////////////////////////////////////////////////////////
時間
///////////////////////////////////////////////////////////*/
$(function () {
    console.log("Hello!! Nice to see you.(・∀・).");
    console.log("Front-end programming By Alan Lin  www.alan-lin.com");
    var datetime = null,
        date = null;

    var update = function () {
        date = moment(new Date())
        //datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        datetime.html(date.format('a h:mm'));
    };

    $(document).ready(function () {
        datetime = $(".time")
        update();
        setInterval(update, 1000);
    });
});
/*///////////////////////////////////////////////////////////
圓餅圖

$(function () {
    var labels = ['市電', '風機', '燃料電池', '太陽能'];
    var ctx = document.getElementById('canvasPie').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                //預設資料
                data: [30, 10, 35, 25],
                backgroundColor: [
                    //資料顏色
                    "#0224ba",
                    "#f590a3",
                    "#6faf3d",
                    "#f3ea6b"
                ],
            }],
        }
    });

    function changeData() {
        //隨機資料
        var randomNum = Math.floor(Math.random() * 100) + 1;
        //將隨機資料載入至圖表中
        pieChart.data.datasets[0].data = [randomNum, 100 - randomNum, randomNum, randomNum];
        //更新
        pieChart.update();
    }
    //setInterval(changeData,2000);
});
///////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////
換底圖
///////////////////////////////////////////////////////////*/
$(function () {
    var date_format = '12';
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var result = hour;
    var ext = '';
    if (d.getHours() < 6 || d.getHours() > 18) {
        $("body").removeClass().addClass("night");
    } else {
        $("body").removeClass().addClass("day");
    }
});
/*///////////////////////////////////////////////////////////
每30秒
///////////////////////////////////////////////////////////*/
$(function () {
    var $block = $('#fade_block1'),
        $ad = $block.find('.ad'),
        showIndex = 0,			// 預設要先顯示那一張
        fadeOutSpeed = 10,	// 淡出的速度
        fadeInSpeed = 20,		// 淡入的速度
        defaultZ = 10,			// 預設的 z-index
        isHover = false,
        timer, speed = 30000;	// 計時器及輪播切換的速度

    // 先把其它圖片的變成透明
    $ad.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });

    // 組出右下的按鈕
    var str = '';
    for (var i = 0; i < $ad.length; i++) {
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('#fade_block1').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

    // 當按鈕被點選時
    // 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
    $controlA.click(function () {
        // 取得目前點擊的號碼
        showIndex = $(this).text() * 1 - 1;

        // 顯示相對應的區域並把其它區域變成透明
        $ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function () {
            if (!isHover) {
                // 啟動計時器
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('div.ad').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        // 讓 a 加上 .on
        $(this).addClass('on').siblings().removeClass('on');

        return false;
    }).focus(function () {
        $(this).blur();
    }).eq(showIndex).addClass('on');
/*
    $ad.hover(function () {
        isHover = true;
        // 停止計時器
        clearTimeout(timer);
    }, function () {
        isHover = false;
        // 啟動計時器
        timer = setTimeout(autoClick, speed);
    })
*/
    // 自動點擊下一個
    function autoClick() {
        if (isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }

    // 啟動計時器
    timer = setTimeout(autoClick, speed);
});
/*///////////////////////////////////////////////////////////
每30秒
///////////////////////////////////////////////////////////*/
$(function () {
    var $block = $('#fade_block2'),
        $ad = $block.find('.ad'),
        showIndex = 0,			// 預設要先顯示那一張
        fadeOutSpeed = 10,	// 淡出的速度
        fadeInSpeed = 20,		// 淡入的速度
        defaultZ = 10,			// 預設的 z-index
        isHover = false,
        timer, speed = 30000;	// 計時器及輪播切換的速度

    // 先把其它圖片的變成透明
    $ad.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });

    // 組出右下的按鈕
    var str = '';
    for (var i = 0; i < $ad.length; i++) {
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('#fade_block2').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

    // 當按鈕被點選時
    // 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
    $controlA.click(function () {
        // 取得目前點擊的號碼
        showIndex = $(this).text() * 1 - 1;

        // 顯示相對應的區域並把其它區域變成透明
        $ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function () {
            if (!isHover) {
                // 啟動計時器
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('div.ad').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        // 讓 a 加上 .on
        $(this).addClass('on').siblings().removeClass('on');

        return false;
    }).focus(function () {
        $(this).blur();
    }).eq(showIndex).addClass('on');
    /*
        $ad.hover(function () {
            isHover = true;
            // 停止計時器
            clearTimeout(timer);
        }, function () {
            isHover = false;
            // 啟動計時器
            timer = setTimeout(autoClick, speed);
        })
    */
    // 自動點擊下一個
    function autoClick() {
        if (isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }

    // 啟動計時器
    timer = setTimeout(autoClick, speed);
});
/*///////////////////////////////////////////////////////////
每300秒 換照片
///////////////////////////////////////////////////////////*/
$(function () {
    var $block = $('.community_photo_img'),
        $ad = $block.find('.ad'),
        showIndex = 0,			// 預設要先顯示那一張
        fadeOutSpeed = 10,	// 淡出的速度
        fadeInSpeed = 20,		// 淡入的速度
        defaultZ = 10,			// 預設的 z-index
        isHover = false,
        timer, speed = 300000;	// 計時器及輪播切換的速度

    // 先把其它圖片的變成透明
    $ad.css({
        opacity: 0,
        zIndex: defaultZ - 1
    }).eq(showIndex).css({
        opacity: 1,
        zIndex: defaultZ
    });

    // 組出右下的按鈕
    var str = '';
    for (var i = 0; i < $ad.length; i++) {
        str += '<a href="#">' + (i + 1) + '</a>';
    }
    var $controlA = $('.community_photo_img').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

    // 當按鈕被點選時
    // 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
    $controlA.click(function () {
        // 取得目前點擊的號碼
        showIndex = $(this).text() * 1 - 1;

        // 顯示相對應的區域並把其它區域變成透明
        $ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function () {
            if (!isHover) {
                // 啟動計時器
                timer = setTimeout(autoClick, speed + fadeInSpeed);
            }
        }).css('zIndex', defaultZ).siblings('li.ad').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
        // 讓 a 加上 .on
        $(this).addClass('on').siblings().removeClass('on');

        return false;
    }).focus(function () {
        $(this).blur();
    }).eq(showIndex).addClass('on');
    /*
        $ad.hover(function () {
            isHover = true;
            // 停止計時器
            clearTimeout(timer);
        }, function () {
            isHover = false;
            // 啟動計時器
            timer = setTimeout(autoClick, speed);
        })
    */
    // 自動點擊下一個
    function autoClick() {
        if (isHover) return;
        showIndex = (showIndex + 1) % $controlA.length;
        $controlA.eq(showIndex).click();
    }

    // 啟動計時器
    timer = setTimeout(autoClick, speed);
});
/*///////////////////////////////////////////////////////////
輪播圖片 固定高度
///////////////////////////////////////////////////////////*/
$(function () {
    var imgHeight = 0;
    $('.community_photo_img').each(function () {
        imgHeight = $('.community_photo_img .ad').height();
    }).height(imgHeight + 38);
    $(window).resize(function () {
        $('.community_photo_img').each(function () {
            imgHeight = $('.community_photo_img .ad').height();
        }).height(imgHeight + 38);
    });

});
