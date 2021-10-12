$(function() {
    var o = $.extend(!0, {}, $.fancybox.defaults, {
        caption: function(o, n) {
            return $(this).next("figcaption").html()
        }
    });
    $('[data-fancybox="images"]').fancybox(o)
});
/*------------------------------------------------------------------
問卷等高
------------------------------------------------------------------*/
$(function(){
$("#yes").click();
$("#attend_yes").click();
$(".form-check-input.mt24").click();

// $(".form_check_box label input").click(function() {
// 	$(".form_check_box label").removeClass(".selected");
// 	$(this).parents($(".form_check_box label")).addClass(".selected");
// });


    $("body").removeClass("no_js");
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Ｗei-Ching Lin");
    var maxHeight = 0;
    $('.sameHeight').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.sameHeight').each(function() {
        $(this).height(maxHeight);
    });

	$('.sameHeight2').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.sameHeight2').each(function() {
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

		$('.sameHeight2').each(function() {
            $(this).height('auto');
            if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
        });
        $('.sameHeight2').each(function() {
            $(this).height(maxHeight);
        });
    });
});
/*------------------------------------------------------------------
GoTop
------------------------------------------------------------------*/
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('.gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
});



/*------------------------------------------------------------------
第一次出場動畫
------------------------------------------------------------------*/
$(function(){
	
	$('.content_main_Visual').removeClass('ready-animate').addClass('run-animate');
	$('.content_questions').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_questions').offset().top;
		if(  $WS >  $RO ) {
			$('.content_questions').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_teacher').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_teacher').offset().top;
		if(  $WS >  $RO ) {
			$('.content_teacher').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_album').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_album').offset().top;
		if(  $WS >  $RO ) {
			$('.content_album').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_step').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_step').offset().top;
		if(  $WS >  $RO ) {
			$('.content_step').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_price').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_price').offset().top;
		if(  $WS >  $RO ) {
			$('.content_price').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_downlond').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_downlond').offset().top;
		if(  $WS >  $RO ) {
			$('.content_downlond').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_book').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_book').offset().top;
		if(  $WS >  $RO ) {
			$('.content_book').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_form').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_form').offset().top;
		if(  $WS >  $RO ) {
			$('.content_form').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

    $('.content_live').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_live').offset().top;
		if(  $WS >  $RO ) {
			$('.content_live').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

});
