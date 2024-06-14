/*///////////////////////////////////////////////////////////
藍色系列 CSS語JS 命名 page.css page.js
粉色系列 CSS語JS 命名 pageDetail.css pageDetail.js
首頁       CSS語JS 命名 index.css index.js
///////////////////////////////////////////////////////////*/
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

/*///////////////////////////////////////////////////////////
日期選擇器
///////////////////////////////////////////////////////////*/
/*
$(document).ready(function () {
    var opt1 = {
        //以下為日期選擇器部分
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週",
        showMonthAfterYear: true,
        dateFormat: "yy-mm-dd",
        //以下為時間選擇器部分
        timeOnlyTitle: "選擇時分秒",
        timeText: "",
        hourText: "時",
        minuteText: "分",
        secondText: "秒",
        millisecText: "毫秒",
        timezoneText: "時區",
        currentText: "今天日期",
        closeText: "確定",
        amNames: ["上午", "AM", "A"],
        pmNames: ["下午", "PM", "P"],
        showSecond: false,
        timeFormat: ""//取消時間選擇
        //timeFormat: "HH:mm:ss:l"
    };
    $(".datetimepicker1").datetimepicker(opt1);

});


$(document).ready(function () {
    var opt2 = {
        //以下為日期選擇器部分
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週",
        showMonthAfterYear: true,
        dateFormat: "yy-mm-dd",
        //以下為時間選擇器部分
        timeOnlyTitle: "選擇時分秒",
        timeText: "",
        hourText: "時",
        minuteText: "分",
        secondText: "秒",
        millisecText: "毫秒",
        timezoneText: "時區",
        currentText: "今天日期",
        closeText: "確定",
        amNames: ["上午", "AM", "A"],
        pmNames: ["下午", "PM", "P"],
        showSecond: false,
        //timeFormat: ""//取消時間選擇
        timeFormat: "HH:mm:ss:l",
        timeOnlyShowDate:true
    };
    $(".datetimepicker2").datetimepicker(opt2);
    //console.log($("input.datetimepicker2")[0].value);
});
*/
var choseStartTimeStamp;
var choseEndTimeStamp;
var choseCompareTimeStamp;

$(document).ready(function () {
    var startDateTextBox = $('.datetimepicker1');
    var endDateTextBox = $('.datetimepicker2');
    var compareDateStartTextBox = $('.datetimepicker3');
    var compareDateEndTextBox = $('.datetimepicker4');

    startDateTextBox.datetimepicker({
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        currentText: "今天日期",
        closeText: "確定",
        timeFormat: '',
        //timeFormat: 'HH:mm z',
        dateFormat: "yy-mm-dd",
        onClose: function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
            //write here
        },
        onSelect: function (selectedDateTime) {
            var limitDay = startDateTextBox.datetimepicker('getDate').getDate() + 1;
            choseStartTimeStamp = startDateTextBox.datetimepicker('getDate').getTime();
            console.log(choseStartTimeStamp + "starttime");
            var date = new Date(startDateTextBox.datetimepicker('getDate').setDate(limitDay));

            endDateTextBox.datetimepicker('option', 'minDate', date);
            endDateTextBox.datetimepicker('setDate', date);
            choseEndTimeStamp = (date.getTime());
            console.log(choseEndTimeStamp + "endtime");
            nowChart(choseStartTimeStamp, choseEndTimeStamp, choseEndTimeStamp);
        }
    });
    endDateTextBox.datetimepicker(
        {
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            currentText: "今天日期",
            closeText: "確定",
            timeFormat: '',
            //timeFormat: 'HH:mm z',
            dateFormat: "yy-mm-dd",
            onClose: function (dateText, inst) {
                if (startDateTextBox.val() != '') {
                    var testStartDate = startDateTextBox.datetimepicker('getDate');
                    var testEndDate = endDateTextBox.datetimepicker('getDate');
                    if (testStartDate > testEndDate)
                        startDateTextBox.datetimepicker('setDate', testEndDate);
                }
                else {
                    startDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime) {
                startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
                choseEndTimeStamp = endDateTextBox.datetimepicker('getDate').getTime();
                console.log(choseStartTimeStamp + "starttime");
                console.log(choseEndTimeStamp + "endtime");
                nowChart(choseStartTimeStamp, choseEndTimeStamp, choseEndTimeStamp);
            }
        });
    compareDateStartTextBox.datetimepicker({
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        currentText: "今天日期",
        closeText: "確定",
        timeFormat: '',
        //timeFormat: 'HH:mm z',
        dateFormat: "yy-mm-dd",
        onSelect: function (selectedDateTime) {

            var limitDay = compareDateStartTextBox.datetimepicker('getDate').getDate() + datediff(choseStartTimeStamp, choseEndTimeStamp);
            console.log(limitDay + "limitDay");
            //choseStartTimeStamp =  startDateTextBox.datetimepicker('getDate').getTime();
            //console.log(choseStartTimeStamp);
            var date = new Date(startDateTextBox.datetimepicker('getDate').setDate(limitDay));
            choseCompareTimeStamp = compareDateStartTextBox.datetimepicker('getDate').getTime();

            compareDateEndTextBox.val(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
            console.log(choseStartTimeStamp + "starttime");
            console.log(choseEndTimeStamp + "endtime");
            console.log(choseCompareTimeStamp + "comparetime");
            nowChart(choseStartTimeStamp, choseEndTimeStamp, choseCompareTimeStamp);

            //console.log(choseCompareTimeStamp);
        }

    });



});

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function solarCahrt1(timestart, timeend, compareFrom) {
    console.log("you click this solarCahrt button");
    timestart = timestart / 1000;
    timeend = timeend / 1000;
    if (!compareFrom) {
        compareFrom = 1493596800;
    }
    $.ajax({
        method: "GET",
        url: phpPathforWeb + "/ajaxCurvesGetSloarEngData/" + timestart + "/" + timeend + "/" + compareFrom,
        //http://allwin.tvws.com.tw:1688/LIC/public/ajaxGetPublicEngNow/data
        //大公用電累積用電量 amChart Data
        dataType: "json"
    }).done(function (data) {
        //console.log(data);
        draw(data)
    });
}

/*///////////////////////////////////////////////////////////
active
///////////////////////////////////////////////////////////*/
//warningInfo.blade.html
$(function () {
    $(".page_no li a").click(function () {
        $(".page_no li a").removeClass('active');
        $(this).addClass('active');
    });
});

//useElectAllInfo.blade.html 30戶用電比對 對比差曲線
$(function () {
    $(".comparison h2 a").click(function () {
        $(".comparison h2 a").removeClass('active');
        $(this).addClass('active');
    });
});

//curves.blade.html
$(function () {

    var $target = $(".compare_time"),
        $switch = $(".time_picker input");

    $target.hide();
    $switch.removeClass('show_compare_time');

    $(".add_compare_time").click(function () {
        $switch.addClass('show_compare_time');
        $(".time_picker input.show_compare_time").click(function () {
            $target.show();
            return false;
        });
        return false;
    });

    $(".btn_info_img a:not('.add_compare_time')").click(function () {
        $switch.removeClass('show_compare_time');
        $target.hide();
        $switch.click(function () {
            $target.hide();
        });
    });

    //active 按了換色
    $(".btn_info_img a").click(function () {
        $(".btn_info_img a").removeClass('active');
        $(this).addClass('active');
    });

    $(".btn_info_img a.active").click();//載入先點擊一次

    
    //useElectInfo.blade.html
    $(".query_table a:not('.add_compare_time')").click(function () {
        $switch.removeClass('show_compare_time');
        $target.hide();
        $switch.click(function () {
            $target.hide();
        });
    });

    //active 按了換色
    $(".query_table a").click(function () {
        $(".query_table a").removeClass('active');
        $(this).addClass('active');
    });

    $(".query_table a.active").click();//載入先點擊一次

    //useElectInfo.blade.html 
    //當月累積電費 
    //與前年當月整體用電量度數差異 按鈕按下 出現

    $(".smart_user").hide();
    $(".query_table a:not('.show_smart_user')").click(function () {
        $(".smart_user").hide();
    });
    $(".show_smart_user").click(function () {
        $(".smart_user").show();
    });
});
