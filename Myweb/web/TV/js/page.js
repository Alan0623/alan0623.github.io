/*///////////////////////////////////////////////////////////
藍色系列 CSS語JS 命名 page.css page.js
粉色系列 CSS語JS 命名 pageDetail.css pageDetail.js
首頁       CSS語JS 命名 index.css index.js
///////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////
日期
///////////////////////////////////////////////////////////*/
$(function () {
    var Today = new Date();
    $(".date").html("" + (Today.getFullYear() - 1911) + "/" + (Today.getMonth() + 1) + "/" + Today.getDate() + " ");
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
區塊等高  meter.blade.html 30用戶用電資訊
///////////////////////////////////////////////////////////*/
$(function () {
    var maxHeight = 0;

    $('.sameheight').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.sameheight').removeAttr("style");
        $('.sameheight').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block1 li div p').each(function (){
        maxHeight = Math.max($(this).height(),maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block1 li div p').removeAttr("style");
        $('.THD_block1 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });
    
});
$(function () {
    var maxHeight = 0;

    $('.THD_block2 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block2 li div p').removeAttr("style");
        $('.THD_block2 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block3 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block3 li div p').removeAttr("style");
        $('.THD_block3 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block4 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block4 li div p').removeAttr("style");
        $('.THD_block4 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block5 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block5 li div p').removeAttr("style");
        $('.THD_block5 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block6 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block6 li div p').removeAttr("style");
        $('.THD_block6 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
$(function () {
    var maxHeight = 0;

    $('.THD_block7 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block7 li div p').removeAttr("style");
        $('.THD_block7 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});
/*///////////////////////////////////////////////////////////
選單 和 左下區塊高度
///////////////////////////////////////////////////////////*/
$(function () {
    var titleHeight = $('.content .article h2').height();
        contentHeight = $('.content').height();
    $('.table_list').height(contentHeight - titleHeight);
    $(window).resize(function () {
        $('.table_list').height(contentHeight - titleHeight);
    });
});

$(function () {
    var articleHeight = $('section.content').height();
    $('.main_list').height(articleHeight);

    $(window).resize(function () {
        $('.main_list').height(articleHeight);
        //window.location.reload();
    });

});



$(function () {
    var maxHeight = 0;

    $('.THD_block7 li div p').each(function () {
        maxHeight = Math.max($(this).height(), maxHeight);
    }).height(maxHeight);


    $(window).resize(function () {
        var maxHeight = 0;
        $('.THD_block7 li div p').removeAttr("style");
        $('.THD_block7 li div p').each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
        }).height(maxHeight);
    });

});


$(function () {

    var minWidth = 0;

    $('.table1').each(function () {
        minWidth = Math.max($(this).width(), minWidth);
    }).width(minWidth);


    $(window).resize(function () {
        var minWidth = 0;
        $('.table1').removeAttr("style");
        $('.table1').each(function () {
            minWidth = Math.max($(this).width(), minWidth);
        }).width(minWidth);
    });

});
/*///////////////////////////////////////////////////////////
網頁頁籤
///////////////////////////////////////////////////////////*/
$(function () {
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('.abgne_tab').each(function () {
        // 目前的頁籤區塊
        var $tab = $(this);

        var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        // 當 li 頁籤被點擊時...
        // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
        $('ul.tabs li', $tab).click(function () {
            // 找出 li 中的超連結 href(#id)
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            // 把目前點擊到的 li 頁籤加上 .active
            // 並把兄弟元素中有 .active 的都移除 class
            $this.addClass('active').siblings('.active').removeClass('active');
            // 淡入相對應的內容並隱藏兄弟元素
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();

            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });
});

$(function () {

    var minWidth = 0;

    $('.table1').each(function () {
        minWidth = Math.max($(this).width(), minWidth);
    }).width(minWidth);


    $(window).resize(function () {
        var minWidth = 0;
        $('.table1').removeAttr("style");
        $('.table1').each(function () {
            minWidth = Math.max($(this).width(), minWidth);
        }).width(minWidth);
    });

});