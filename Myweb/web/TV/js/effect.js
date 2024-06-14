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
區塊等高
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

