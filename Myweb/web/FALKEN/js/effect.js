$(document).ready(function() {
	var nice = false;
	nice = $("html").niceScroll()
});
WebFontConfig = {
	google: {
		families: ['PT+Sans+Caption::latin', 'Inder::latin', 'Tauri::latin', 'Noto+Sans:400,400italic:latin', 'Roboto:300:latin']
	}
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s)
})();
$(function() {
	$('INPUT[type=image][hover], img[hover]').hover(function() {
		$(this).attr('tmp', $(this).attr('src')).attr('src', $(this).attr('hover')).attr('hover', $(this).attr('tmp')).removeAttr('tmp')
	}).each(function() {
		$('<img />').attr('src', $(this).attr('hover'))
	});
	$('.FADE').append('<span class="hover"></span>').each(function() {
		var $span = $('> span.hover', this).css('opacity', 0).css('position', 'absolute').css('top', 0).css('left', 0);
		$(this).hover(function() {
			$span.stop().fadeTo(1000, 1)
		}, function() {
			$span.stop().fadeTo(1000, 0)
		})
	})
});
$(document).ready(function() {
	$("header nav").wrapInner('<div id="MENU">');
	$("header").wrapInner('<div id="BANNER">');
	var otherHeight = 400;
	var wHeight = $(window).height() - otherHeight;
	var wHeight2 = $(window).height() - 225;
	var cHeight = $("section#CONTENT").height();
	$(window).load(function() {
		if (cHeight < wHeight) {
			$("section#CONTENT:not('BRANDS')").height(wHeight)
		}
		$("section#CONTENT.BRANDS").height(wHeight2)
	});
	$(window).resize(function() {
		var wHeight = $(window).height() - otherHeight;
		var wHeight2 = $(window).height() - 225;
		if (cHeight < wHeight) {
			$("section#CONTENT:not('BRANDS')").height(wHeight)
		}
		$("section#CONTENT.BRANDS").height(wHeight2)
	});
	$(window).load(function() {
		if (cHeight > 800) {
			$("section#CONTENT").prepend('<a href="#" class="GOTOP"></a>');
			$('a.GOTOP').on('click', function() {
				$('html, body').animate({
					scrollTop: 0
				}, 'slow');
				return false
			})
		}
	});
	$('a[href=#]').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow');
		return false
	});
	$("header nav a:not(.NAV0,.NAV7,.NAV8,.SUB_NAV_BTN,.H4)").wrap('<h3>');
	$("header nav").find("h3:eq(0)").addClass("NAV1").end().find("h3:eq(1)").addClass("NAV2").end().find("h3:eq(2)").addClass("NAV3").end().find("h3:eq(3)").addClass("NAV4").end().find("h3:eq(4)").addClass("NAV5").end().find("h3:eq(5)").addClass("NAV6").end().find("h3:eq(6)").addClass("NAV7").end().find("h3:eq(7)").addClass("NAV8");
	$("a.NAV1,a.NAV2,a.NAV3,a.NAV4,a.NAV5,a.NAV6,a.NAV7,a.NAV8").clone().prependTo('footer');
	$("footer a.NAV7,footer a.NAV8").removeAttr('title');
	$("section#SEARCH input").wrapAll('<div class="TEXT">');
	$("article#PRODUCTS,article#NEWS").prepend('<a id="L"></a><a id="R"></a>');
	$("article#NEWS .NEWS_CYCLE p,article#PRODUCTS .PRODUCTS_CYCLE p").append('<i>');
	$("article#PRODUCTS .PRODUCTS_CYCLE li img,article#NEWS .NEWS_CYCLE li img").wrap('<div class="IMG">');
	$("article#PRODUCT_CONTENT ul#CYCLE_IMG_TAB img").wrap('<i>');
	$("h2#TITLE").wrapInner('<b>');
	$("#IMG_BTN a,#DOWNLOAD_LIST a").append('<b></b><i></i>');
	$("#DEALER_CONTENT,#KNOWLEDGE_CONTENT,#NEWS_CONTENT").append('<i class="TL"></i><i class="TR"></i><i class="BL"></i><i class="BR"></i>');
	$("#IMG_BTN").after('<div id="IMG_BTNL"></div><div id="IMG_BTNR"></div>');
	$("#DOWNLOAD_LIST").after('<div id="DOWNLOAD_BTNL"></div><div id="DOWNLOAD_BTNR"></div>');
	var IBL = $("#IMG_BTN li>a").length;
	if (IBL < 4) {
		$("#IMG_BTNL,#IMG_BTNR").hide()
	};
	var NCUL = $('#NAV_LEFT #CYCLE_MENU ul>li').length;
	if (NCUL < 11) {
		$("#NAV_LEFT #UP,#NAV_LEFT #DOWN").addClass("NOBTN")
	}
});
$(function() {
	$('header nav h3').each(function() {
		var $span = $('> a', this).css('opacity', 0).css('position', 'absolute').css('top', 0).css('left', 0);
		$(this).hover(function() {
			$span.stop().fadeTo(1000, 1)
		}, function() {
			$span.stop().fadeTo(1000, 0)
		})
	});
	var INPU = $("section#SEARCH input");
	INPU.val("KEYWORD");
	INPU.focus(function() {
		if (INPU.val() == "KEYWORD") {
			INPU.val(" ")
		}
		$("section#SEARCH .TEXT").addClass("THIS")
	});
	INPU.blur(function() {
		if (INPU.val() == " ") {
			INPU.val("KEYWORD")
		}
		$("section#SEARCH .TEXT").removeClass("THIS")
	});
	$('#NEWS .NEWS_CYCLE').cycle({
		fx: 'scrollHorz',
		speed: 'slow',
		timeout: 8000,
		next: '#NEWS #L',
		prev: '#NEWS #R',
		cleartype: 0,
		pause: 1
	});
	$('#PRODUCTS .PRODUCTS_CYCLE').cycle({
		fx: 'scrollHorz',
		speed: 'slow',
		timeout: 8000,
		next: '#PRODUCTS #L',
		prev: '#PRODUCTS #R',
		cleartype: 0,
		pause: 1
	});
	$('#PRODUCT_CONTENT #CYCLE_IMG').cycle({
		fx: 'fade',
		speed: 'slow',
		timeout: 8000,
		cleartype: 0,
		pager: '#CYCLE_IMG_TAB',
		pagerAnchorBuilder: function(idx, slide) {
			return '#CYCLE_IMG_TAB li:eq(' + (idx) + ')'
		}
	});
	$('#CYCLE_IMG_TAB li:nth-child(4n) , ul#PRODUCT_SUB_LIST li ul.SUB_LIST li:nth-child(4n)').each(function() {
		$(this).css({
			marginRight: 0
		})
	});
	$('#NAV_LEFT #CYCLE_MENU').cycle({
		fx: 'scrollVert',
		speed: 'slow',
		timeout: false,
		next: '#NAV_LEFT #UP',
		prev: '#NAV_LEFT #DOWN',
		cleartype: 0,
		pause: false
	});

		$("a#BTN_SPEC").fancybox({
			'overlayColor': '#000',
			'overlayOpacity': 0.8,
			'width': '99.99%',
			'height': '99.99%',
			fitToView: false,
			autoSize: false,
			closeClick: false,
			type: 'iframe',
			'transitionIn': 'elastic',
			'transitionOut': 'elastic',
			padding: 5
		});
		$("a.NAV7,h3.NAV7 a,a.NAV8,h3.NAV8 a").fancybox({
			'overlayColor': '#000',
			'overlayOpacity': 0.8,
			'width': 420,
			'height': 420,
			fitToView: false,
			autoSize: false,
			closeClick: false,
			type: 'iframe',
			'transitionIn': 'elastic',
			'transitionOut': 'elastic',
			padding: 5,
			afterClose: function() {
				window.location.reload()
			}
		})

	$("ul.SUB_NAV h4:last").css("background", "none");
	$('.SUB_NAV li').hover(function() {
		$(this).children('.SUB_NAV_IMG').css({
			visibility: 'visible'
		}).slideDown(600)
	}, function() {
		$(this).children('.SUB_NAV_IMG').hide()
	});
	$('#BTN_NAV1,#BTN_NAV2,#BTN_NAV3,#BTN_NAV4,#BTN_NAV5,#BTN_NAV6').hover(function() {
		$(this).children('.SUB_NAV').css({
			visibility: 'visible'
		}).slideDown(600)
	}, function() {
		$(this).children('.SUB_NAV').hide()
	});
	$('ul#PRODUCT_SUB_LIST li ul.SUB_LIST li a').hover(function() {
		$(this).children('h5').stop(0, 1).animate({
			bottom: "-90"
		}, 400)
	}, function() {
		$(this).children('h5').stop(0, 1).animate({
			bottom: "0"
		}, 400)
	});
	$('ul#PRODUCT_SUB_LIST li.LIST:eq(0)').css("opacity", 1);
	var PSL = $("ul#PRODUCT_SUB_LIST>li.LIST").length;
	if (PSL > 1) {
		$('ul#PRODUCT_SUB_LIST li.LIST').hover(function() {
			$(this).stop(0, 1).fadeTo(500, 1)
		}, function() {
			$(this).stop(0, 1).fadeTo(500, 0.4)
		})
	};
	$('.IMG_EFFECT').adipoli({
		'startEffect': 'transparent',
		'hoverEffect': 'boxRainGrowReverse'
	});
	$('#IMG_BTN').cycle({
		fx: 'scrollHorz',
		speed: 'slow',
		timeout: false,
		next: '#IMG_BTNL',
		prev: '#IMG_BTNR',
		cleartype: 0,
		pause: false
	});
	$('#DOWNLOAD_LIST').cycle({
		fx: 'scrollHorz',
		speed: 'slow',
		timeout: false,
		next: '#DOWNLOAD_BTNL',
		prev: '#DOWNLOAD_BTNR',
		cleartype: 0,
		pause: false
	});
	var $AAA = $('.FONT_SIZE');
	var _dafaultFOntSize = $AAA.css('font-size');
	$('div#FONT a.BTN_BIG').on('click', function() {
		var _currentFontSize = $AAA.css('font-size'),
			_fontSizeNum = parseInt(_currentFontSize, 10),
			_newFontSizeNum = Math.ceil(_fontSizeNum * 1.2);
		var _currentCONTENT_H = $AAA.css('font-size'),
			_CONTENT_HNum = parseInt(_currentCONTENT_H, 100),
			_newCONTENT_HNum = Math.ceil(_CONTENT_HNum * 1.2);
		$AAA.css('font-size', _newFontSizeNum);
		$('div#PRODUCTS_CONTENT_INFO').css('height', _newCONTENT_HNum)
	});
	$('div#FONT a.BTN_MIN').on('click', function() {
		$AAA.css('font-size', '15px')
	});
	$('div#FONT a.BTN_SMALL').on('click', function() {
		var _currentFontSize = $AAA.css('font-size'),
			_fontSizeNum = parseInt(_currentFontSize, 10),
			_newFontSizeNum = Math.ceil(_fontSizeNum * 0.8);
		$AAA.css('font-size', _newFontSizeNum)
	});
	$("#LOCATION_CYCLE li a").fancybox({
		'overlayColor': '#000',
		'overlayOpacity': 0.8,
		'overlayShow': true,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		padding: 5
	});
	$("i.BTN_FORGET").on('click', function() {
		$(".LOGIN_BOX").animate({
			left: -400
		}, 500);
		$(".FORGET_BOX").animate({
			left: 0
		}, 500)
	});
	$("i.BTN_BACK").on('click', function() {
		$(".LOGIN_BOX").animate({
			left: 0
		}, 500);
		$(".FORGET_BOX").animate({
			left: 400
		}, 500)
	})
});
$(function() {
	var $btn = $("section#FIND_TIRE h2");
	var $box = $("section#FIND_TIRE");
	var $btn2 = $("section#UPDATA_TIRE h2");
	var $box2 = $("section#UPDATA_TIRE");
	$btn.on('click', function() {
		if ($btn.is(".CLOSE")) {
			$box.stop(true, false).animate({
				right: 0
			}, 500);
			$btn.removeClass("CLOSE")
		} else {
			$box.stop(true, false).animate({
				right: -210
			}, 500);
			$btn.addClass("CLOSE")
		}
	});
	$btn2.on('click', function() {
		if ($btn2.is(".CLOSE")) {
			$box2.stop(true, false).animate({
				right: 0
			}, 500);
			$btn2.removeClass("CLOSE")
		} else {
			$box2.stop(true, false).animate({
				right: -210
			}, 500);
			$btn2.addClass("CLOSE")
		}
	})
});