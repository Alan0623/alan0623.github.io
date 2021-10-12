$(function(){
    $("body").removeClass("no_js");
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Ｗei-Ching Lin");
    /*------------------------------------------------------------------
    老師作品
    ------------------------------------------------------------------*/
    $("#nanogallery1").nanogallery2( {

    // DISPLAY ANIMATION
    thumbnailDisplayTransition: 'flipUp',       // thumbnail display animation
    thumbnailDisplayTransitionDuration: 400,
    thumbnailDisplayInterval: 200,
    thumbnailDisplayOrder: 'rowByRow',

    galleryFilterTagsMode: 'single',
    galleryL1FilterTagsMode: 'single',

    // THUMBNAIL'S HOVER ANIMATION
    thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown',
    touchAnimation: true,
    touchAutoOpenDelay: -1,

    // GALLERY THEME
    galleryTheme : { 
    thumbnail: { titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#fff' },
    navigationPagination :  { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
    },
    thumbnailHeight: '270', thumbnailWidth: 'auto',
    galleryDisplayMode: 'pagination',                 // gallery pagination mode
    galleryMaxRows: 3,                                // gallery with max 3 rows
    gallerySorting: 'random',
    thumbnailAlignment: 'fillWidth',
    thumbnailL1GutterWidth: 8,
    thumbnailL1GutterHeight: 8,
    thumbnailBorderHorizontal: 1,
    thumbnailBorderVertical: 1,
    // thumbnailWidth:     '300',
    // thumbnailHeight:    'auto',
    itemsBaseURL:     'images/teacher/',
    galleryFilterTags: true,
    galleryFilterTagsMode: 'multiple',
    // ### gallery content ### 
    items: [
        { src: 'wedding1.jpg', srct: 'wedding1s.jpg',tags:'婚紗/婚禮攝影' },
        { src: 'wedding2.jpg', srct: 'wedding2s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding3.jpg', srct: 'wedding3s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding4.jpg', srct: 'wedding4s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding5.jpg', srct: 'wedding5s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding6.jpg', srct: 'wedding6s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding7.jpg', srct: 'wedding7s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding8.jpg', srct: 'wedding8s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding9.jpg', srct: 'wedding9s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding10.jpg', srct: 'wedding10s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'wedding11.jpg', srct: 'wedding11s.jpg' ,tags:'婚紗/婚禮攝影' },
        { src: 'studio_shot1.jpg', srct: 'studio_shot1s.jpg',tags:'棚拍/外拍攝影' },
        { src: 'studio_shot2.jpg', srct: 'studio_shot2s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'studio_shot3.jpg', srct: 'studio_shot3s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'studio_shot4.jpg', srct: 'studio_shot4s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'studio_shot5.jpg', srct: 'studio_shot5s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'studio_shot6.jpg', srct: 'studio_shot6s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'studio_shot7.jpg', srct: 'studio_shot7s.jpg' ,tags:'棚拍/外拍攝影' },
        { src: 'food1.jpg', srct: 'food1s.jpg',tags:'食品/商業攝影' },
        { src: 'food2.jpg', srct: 'food2s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food3.jpg', srct: 'food3s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food4.jpg', srct: 'food4s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food5.jpg', srct: 'food5s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food6.jpg', srct: 'food6s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food7.jpg', srct: 'food7s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food8.jpg', srct: 'food8s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food9.jpg', srct: 'food9s.jpg' ,tags:'食品/商業攝影' },
        { src: 'food10.jpg', srct: 'food10s.jpg' ,tags:'食品/商業攝影' },
        { src: 'aerial_shot1.jpg', srct: 'aerial_shot1s.jpg',tags:'空拍攝影/錄影' },
        { src: 'aerial_shot2.jpg', srct: 'aerial_shot2s.jpg' ,tags:'空拍攝影/錄影' },
        { src: 'aerial_shot3.jpg', srct: 'aerial_shot3s.jpg' ,tags:'空拍攝影/錄影' },
        { src: 'aerial_shot4.jpg', srct: 'aerial_shot4s.jpg' ,tags:'空拍攝影/錄影' },
        { src: 'aerial_shot5.jpg', srct: 'aerial_shot5s.jpg' ,tags:'空拍攝影/錄影' },
        { src: 'aerial_shot6.jpg', srct: 'aerial_shot6s.jpg' ,tags:'空拍攝影/錄影' },
        { src: 'aerial_shot7.jpg', srct: 'aerial_shot7s.jpg' ,tags:'空拍攝影/錄影' }
        ]
    });

    /*------------------------------------------------------------------
    學生作品
    ------------------------------------------------------------------*/
    $("#nanogallery2").nanogallery2( {

    // DISPLAY ANIMATION
    thumbnailDisplayTransition: 'flipUp',       // thumbnail display animation
    thumbnailDisplayTransitionDuration: 400,
    thumbnailDisplayInterval: 200,
    thumbnailDisplayOrder: 'rowByRow',

    // THUMBNAIL'S HOVER ANIMATION
    thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown',
    touchAnimation: true,
    touchAutoOpenDelay: -1,

    // GALLERY THEME
    galleryTheme : { 
    thumbnail: { titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#fff' },
    navigationPagination :  { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
    },
    thumbnailHeight: '250', thumbnailWidth: 'auto',
    galleryDisplayMode: 'pagination',                 // gallery pagination mode
    galleryMaxRows: 3,                                // gallery with max 3 rows
    gallerySorting: 'random',
    thumbnailAlignment: 'fillWidth',
    thumbnailL1GutterWidth: 8,
    thumbnailL1GutterHeight: 8,
    thumbnailBorderHorizontal: 1,
    thumbnailBorderVertical: 1,
    // thumbnailWidth:     '300',
    // thumbnailHeight:    'auto',
    itemsBaseURL:     'images/student/',
    galleryFilterTags: true,
    galleryFilterTagsMode: 'multiple',
    // ### gallery content ### 
    items: [
        { src: '01.jpg', srct: '01s.jpg', title: '學員｜林宛真' },
        { src: '02.jpg', srct: '02s.jpg', title: '學員｜蔡麒遠' },
        { src: '03.jpg', srct: '03s.jpg', title: '學員｜楊瀚丞' },
        { src: '04.jpg', srct: '04s.jpg', title: '學員｜吳政融' },
        { src: '05.jpg', srct: '05s.jpg', title: '學員｜黃心旑' },
        { src: '06.jpg', srct: '06s.jpg', title: '學員｜陳奕瑞' },
        { src: '07.jpg', srct: '07s.jpg', title: '學員｜呂健穩' },
        { src: '08.jpg', srct: '08s.jpg', title: '學員｜潘俊愷' },
        { src: '09.jpg', srct: '09s.jpg', title: '學員｜楊瀚丞' },
        { src: '10.jpg', srct: '10s.jpg', title: '學員｜林倢伃' },
        { src: '11.jpg', srct: '11s.jpg', title: '學員｜蔡念勳' },
        { src: '12.jpg', srct: '12s.jpg', title: '學員｜林威廷' },
        { src: '13.jpg', srct: '13s.jpg', title: '學員｜謝奕愷' },
        { src: '14.jpg', srct: '14s.jpg', title: '學員｜李方' },
        { src: '15.jpg', srct: '15s.jpg', title: '學員｜吳政融' },
        ]
    });
    /*------------------------------------------------------------------
    問卷等高
    ------------------------------------------------------------------*/
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
    /*------------------------------------------------------------------
    等高
    ------------------------------------------------------------------*/
    var maxHeight = 0;
    $('.content_feedback ul li').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.content_feedback ul li').each(function() {
        $(this).height(maxHeight);
    });
    $(window).resize(function() {
        var maxHeight = 0;
        $('.content_feedback ul li').each(function() {
            $(this).height('auto');
            if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
        });
        $('.content_feedback ul li').each(function() {
            $(this).height(maxHeight);
        });
    });
    /*------------------------------------------------------------------
    等高
    ------------------------------------------------------------------*/
    var maxHeight = 0;
    $('.sameHeight2').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.sameHeight2').each(function() {
        $(this).height(maxHeight);
    });
    $(window).resize(function() {
        var maxHeight = 0;
        $('.sameHeight2').each(function() {
            $(this).height('auto');
            if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
        });
        $('.sameHeight2').each(function() {
            $(this).height(maxHeight);
        });
    });
    /*------------------------------------------------------------------
    錨點滑動
    ------------------------------------------------------------------*/
    var $body = $('html,body');
    var $nav1 = $('.content_think').offset().top;
    var $nav2 = $('.content_form .form_info').offset().top;
    var $fixed_h = 0;
    $('.go').stop().click(function() {
    $body.animate({
        scrollTop: ( $nav1 ) - $fixed_h
    }, 600);
    return false;
    });
    $('.apply').stop().click(function() {
    $body.animate({
        scrollTop: ( $nav2 ) + 1100
    }, 600);
    return false;
    });
    // $(window).resize(function() {
    //     var $body = $('html,body');
    //     var $nav3 = $('.content_think').offset().top;
    //     var $nav4 = $('.content_form').offset().top;
    //     var $fixed_h = 0;
    //     $('.go').stop().click(function() {
    //     $body.animate({
    //         scrollTop: ( $nav3 ) - $fixed_h
    //     }, 600);
    //     return false;
    //     });
    //     $('.apply').stop().click(function() {
    //     $body.animate({
    //         scrollTop: ( $nav4 )
    //     }, 600);
    //     return false;
    //     });
    // });
    /*------------------------------------------------------------------
    logo 變色
    ------------------------------------------------------------------*/
    var $WH = $(window).height() * 0.1;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_think').offset().top;
    // var $R1 = $('.content_feedback').offset().top;
    if(  $WS >  $RO ) {
        $('.header').addClass('logo_black');
        $('.header').removeClass('logo_white');
    }
    if(  $WS <  $RO ) {
        $('.header').removeClass('logo_black');
        $('.header').addClass('logo_white');
    }
    // if(  $WS <  $R1 ) {
    //     $('.mark_appedu').addClass('logo_black1');
    //     $('.mark_appedu').removeClass('logo_white1');
    // }
    // if(  $WS >  $R1 ) {
    //     $('.mark_appedu').removeClass('logo_black1');
    //     $('.mark_appedu').addClass('logo_white1');
    // }
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.1;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_think').offset().top;
        // var $R1 = $('.content_feedback').offset().top;
        if(  $WS >  $RO ) {
            $('.header').addClass('logo_black');
            $('.header').removeClass('logo_white');
        }
        if(  $WS <  $RO ) {
            $('.header').removeClass('logo_black');
            $('.header').addClass('logo_white');
        }
        // if(  $WS <  $R1 ) {
        //     $('.mark_appedu').addClass('logo_black1');
        //     $('.mark_appedu').removeClass('logo_white1');
        // }
        // if(  $WS >  $R1 ) {
        //     $('.mark_appedu').removeClass('logo_black1');
        //     $('.mark_appedu').addClass('logo_white1');
        // }
    }).scroll();
/*------------------------------------------------------------------
第一次出場動畫
------------------------------------------------------------------*/
    $('.content_think').addClass('ready-animate');
        $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_think').offset().top;
        if(  $WS >  $RO ) {
        $('.content_think').addClass('run-animate');
        $('.content_think').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_system').addClass('ready-animate');
        $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_system').offset().top;
        if(  $WS >  $RO ) {
        $('.content_system').addClass('run-animate');
        $('.content_system').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_team').addClass('ready-animate');
        $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_team').offset().top;
        if(  $WS >  $RO ) {
        $('.content_team').addClass('run-animate');
        $('.content_team').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_chart').addClass('ready-animate');
        $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_chart').offset().top;
        if(  $WS >  $RO ) {
        $('.content_chart').addClass('run-animate');
        $('.content_chart').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_equipment').addClass('ready-animate');
        $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('.content_equipment').offset().top;
        if(  $WS >  $RO ) {
        $('.content_equipment').addClass('run-animate');
        $('.content_equipment').removeClass('ready-animate');
        }
    }).scroll();

    $('.content_student').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_student').offset().top;
    if(  $WS >  $RO ) {
    $('.content_student').addClass('run-animate');
    $('.content_student').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_video').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_video').offset().top;
    if(  $WS >  $RO ) {
    $('.content_video').addClass('run-animate');
    $('.content_video').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_video>ul>li:nth-child(1)').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_video>ul>li:nth-child(1)').offset().top;
    if(  $WS >  $RO ) {
    $('.content_video>ul>li:nth-child(1)').addClass('run-animate');
    $('.content_video>ul>li:nth-child(1)').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_video>ul>li:nth-child(2)').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_video>ul>li:nth-child(2)').offset().top;
    if(  $WS >  $RO ) {
    $('.content_video>ul>li:nth-child(2)').addClass('run-animate');
    $('.content_video>ul>li:nth-child(2)').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_video>ul>li:nth-child(3)').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_video>ul>li:nth-child(3)').offset().top;
    if(  $WS >  $RO ) {
    $('.content_video>ul>li:nth-child(3)').addClass('run-animate');
    $('.content_video>ul>li:nth-child(3)').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_form').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_form').offset().top;
    if(  $WS >  $RO ) {
    $('.content_form').addClass('run-animate');
    $('.content_form').removeClass('ready-animate');
    }
    }).scroll();

    $('.content_feedback').addClass('ready-animate');
    $(window).on('scroll', function(){
    var $WH = $(window).height() * 0.75;
    var $WS = $(window).scrollTop() + $WH;
    var $RO = $('.content_feedback').offset().top;
    if(  $WS >  $RO ) {
    $('.content_feedback').addClass('run-animate');
    $('.content_feedback').removeClass('ready-animate');
    }
    }).scroll();
});
