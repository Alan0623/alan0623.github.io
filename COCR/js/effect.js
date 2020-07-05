/*------------------------------------------------------------------
light box
------------------------------------------------------------------*/
$(function() {
    var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
        caption : function( instance, item ) {
            return $(this).next('figcaption').html();
        }
    });

    // Shortcut to apply options to image gallery
    function applyImgOpts() {
        $('[data-fancybox="images"]').fancybox(imgOpts);
    }
    applyImgOpts();
});
/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function() {
    $('.nav_style li:nth-child(1) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#NEWS').offset().top}, 500); 
    });  

    $('.nav_style li:nth-child(2) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#ABOUT').offset().top}, 500); 
    });  

    if ($(window).width() > 1260) {
        $('.nav_style li:nth-child(3) a').click(function(){ 
            $('html,body').animate({scrollTop:$('#CRYSTALS').offset().top + 280}, 500); 
        });  
        window.addEventListener('resize', function () {
            if ($(window).width() > 1260) {
                $('.nav_style li:nth-child(3) a').click(function(){ 
                    $('html,body').stop().animate({scrollTop:$('#CRYSTALS').offset().top + 280}, 500); 
                });  
            }
            else {
                $('.nav_style li:nth-child(3) a').click(function(){ 
                    $('html,body').stop().animate({scrollTop:$('#CRYSTALS').offset().top}, 500); 
                });
            }
        });
    }
    else {
        $('.nav_style li:nth-child(3) a').click(function(){ 
            $('html,body').animate({scrollTop:$('#CRYSTALS').offset().top}, 500); 
        });
    }
    
    if ($(window).width() > 1260) {
        $('.nav_style li:nth-child(4) a').click(function(){ 
            $('html,body').animate({scrollTop:$('#RESEARCH_TOPICS').offset().top + 220}, 500); 
        });  
        window.addEventListener('resize', function () {
            if ($(window).width() > 1260) {
                $('.nav_style li:nth-child(4) a').click(function(){ 
                    $('html,body').stop().animate({scrollTop:$('#RESEARCH_TOPICS').offset().top + 220}, 500); 
                });  
            }
            else {
                $('.nav_style li:nth-child(4) a').click(function(){ 
                    $('html,body').stop().animate({scrollTop:$('#RESEARCH_TOPICS').offset().top}, 500); 
                });
            }
        });
    }
    else {
        $('.nav_style li:nth-child(4) a').click(function(){ 
            $('html,body').animate({scrollTop:$('#RESEARCH_TOPICS').offset().top}, 500); 
        });
    }
   
//  135
    $('.nav_style li:nth-child(5) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#FACILITIES').offset().top }, 500); 
    });  
//  - 132
    $('.nav_style li:nth-child(6) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#TEAM').offset().top}, 500); 
    });  
 
    $('.nav_style li:nth-child(7) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#CONTACT').offset().top}, 500); 
    });  
});

/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function(){
    //control display of goTop button and motion
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 150){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
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
});


$(function(){
    $('#NEWS').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#NEWS').offset().top;
        if(  $WS >  $RO ) {
            $('#NEWS').addClass('run-animate',);
            $('#NEWS').removeClass('ready-animate');
        }
    }).scroll();
    $('#NEWS section.video').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#NEWS section.video').offset().top;
        if(  $WS >  $RO ) {
            $('#NEWS section.video').addClass('run-animate',);
            $('#NEWS section.video').removeClass('ready-animate');
        }
    }).scroll();
    $('#NEWS section.content .info_card').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#NEWS section.content .info_card').offset().top;
        if(  $WS >  $RO ) {
            $('#NEWS section.content .info_card').addClass('run-animate',);
            $('#NEWS section.content .info_card').removeClass('ready-animate');
        }
    }).scroll();
    $('#NEWS section.content .text').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#NEWS section.content .text').offset().top;
        if(  $WS >  $RO ) {
            $('#NEWS section.content .text').addClass('run-animate',);
            $('#NEWS section.content .text').removeClass('ready-animate');
        }
    }).scroll();
    $('#ABOUT').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#ABOUT').offset().top;
        if(  $WS >  $RO ) {
            $('#ABOUT').addClass('run-animate',);
            $('#ABOUT').removeClass('ready-animate');
        }
    }).scroll();
    $('#ABOUT section.video').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#ABOUT section.video').offset().top;
        if(  $WS >  $RO ) {
            $('#ABOUT section.video').addClass('run-animate',);
            $('#ABOUT section.video').removeClass('ready-animate');
        }
    }).scroll();
    $('#ABOUT section.content.Research').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#ABOUT section.content.Research').offset().top;
        if(  $WS >  $RO ) {
            $('#ABOUT section.content.Research').addClass('run-animate',);
            $('#ABOUT section.content.Research').removeClass('ready-animate');
        }
    }).scroll();
    $('#CRYSTALS').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#CRYSTALS').offset().top;
        if(  $WS >  $RO ) {
            $('#CRYSTALS').addClass('run-animate',);
            $('#CRYSTALS').removeClass('ready-animate');
        }
    }).scroll();
    $('#RESEARCH_TOPICS').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#RESEARCH_TOPICS').offset().top;
        if(  $WS >  $RO ) {
            $('#RESEARCH_TOPICS').addClass('run-animate',);
            $('#RESEARCH_TOPICS').removeClass('ready-animate');
        }
    }).scroll();
    $('#FACILITIES').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#FACILITIES').offset().top;
        if(  $WS >  $RO ) {
            $('#FACILITIES').addClass('run-animate',);
            $('#FACILITIES').removeClass('ready-animate');
        }
    }).scroll();
    $('#FACILITIES .facilities_list').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#FACILITIES .facilities_list').offset().top;
        if(  $WS >  $RO ) {
            $('#FACILITIES .facilities_list').addClass('run-animate',);
            $('#FACILITIES .facilities_list').removeClass('ready-animate');
        }
    }).scroll();
    $('#TEAM .team_list').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#TEAM .team_list').offset().top;
        if(  $WS >  $RO ) {
            $('#TEAM .team_list').addClass('run-animate',);
            $('#TEAM .team_list').removeClass('ready-animate');
        }
    }).scroll();
    $('#TEAM').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#TEAM').offset().top;
        if(  $WS >  $RO ) {
            $('#TEAM').addClass('run-animate',);
            $('#TEAM').removeClass('ready-animate');
        }
    }).scroll();
    $('#CONTACT').addClass('ready-animate');
    $(window).on('scroll', function(){
        var $WH = $(window).height() * 0.75;
        var $WS = $(window).scrollTop() + $WH;
        var $RO = $('#CONTACT').offset().top;
        if(  $WS >  $RO ) {
            $('#CONTACT').addClass('run-animate',);
            $('#CONTACT').removeClass('ready-animate');
        }
    }).scroll();
});