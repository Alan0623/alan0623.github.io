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
   
    $('.nav_style li:nth-child(3) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#CRYSTALS').offset().top}, 500); 
    });  
//  + 435
    $('.nav_style li:nth-child(4) a').click(function(){ 
        $('html,body').animate({scrollTop:$('#RESEARCH_TOPICS').offset().top}, 500); 
    });  
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