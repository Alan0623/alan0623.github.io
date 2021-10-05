/*---------------------------------------------
	Check User Agent
  ---------------------------------------------*/

var nut = navigator.userAgent.toLowerCase();
var _ua = {
	ie	:nut.indexOf("msie") != -1 || nut.indexOf("trident") != -1,
	ie6	:nut.indexOf("msie 6") != -1,
	ie7	:nut.indexOf("msie 7") != -1,
	ie8	:nut.indexOf("msie 8") != -1,
	ie9	:nut.indexOf("msie 9") != -1,
	ie10	:nut.indexOf("msie 10") != -1,
	ie11	:nut.indexOf("trident") != -1,
	edge	:nut.indexOf("edge") != -1,
	ff	:nut.indexOf("firefox") != -1,
	webkit	:nut.indexOf("webkit") != -1 && nut.indexOf("edge") == -1,
	safari	:nut.indexOf("safari") != -1 && nut.indexOf("edge") == -1 && nut.indexOf("chrome") == -1,
	chrome	:nut.indexOf("chrome") != -1 && nut.indexOf("edge") == -1,
	opera	:nut.indexOf("opera") != -1,
	iphone	:nut.indexOf("iphone") != -1,
	ipad	:nut.indexOf("ipad") != -1,
	ipod	:nut.indexOf("ipod") != -1,
	android	:nut.indexOf("android") != -1,
	xp	:nut.indexOf("nt 5.1") != -1,
	win	:nut.indexOf ("windows") != -1,
	win10	:nut.indexOf ("windows nt 10") != -1,
	mac	:nut.indexOf ("macintosh") != -1,
	ios	:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1,
	phone	:nut.indexOf("iphone") != -1 || (nut.indexOf("android") != -1 && nut.indexOf("mobile") != -1),
	mobile	:typeof window.orientation != "undefined",
	spWebkit:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1 || (nut.indexOf("android") != -1 && nut.indexOf("mobile") != -1)
};



(function () {

/*---------------------------------------------
	Default Settings 
  ---------------------------------------------*/

$("html").addClass("js");
if (_ua.mobile) $("html").addClass("sp");
if (_ua.phone) $("html").addClass("phone");
if (_ua.spWebkit) $("html").addClass("spWebkit");

if (_ua.opera || _ua.ff || _ua.safari) {
	window.onunload = function() {}
}

/* Scroll Bar Width */
$("body").append('<div id="outer" style="overflow-y:scroll;"><div id="inner"></div></div>');
$("html").addClass("sb" + ($("#outer").width() - $("#inner").width()));
$("#outer").remove();



/*---------------------------------------------
	Adjust Image 主視覺
  ---------------------------------------------*/

if($(".mainvisual")[0]) {

	var $mainImg = $(".main-bg img");
//	var mainImgOriginalH = $mainImg.attr("height") * .8;
//	var mainImgOriginalW = $mainImg.attr("width");
	var mainImgOriginalH = 1125 * .8;
	var mainImgOriginalW = 1340;
	var mainSvgOriginalH = document.getElementById("mask").getAttribute("viewBox").split(" ")[3];
	var mainSvgOriginalW = (mainImgOriginalW / mainImgOriginalH) * mainSvgOriginalH;
	var mainImgInSvgOriginalRate = mainSvgOriginalH / mainImgOriginalH;

	var setBgImgSize = function() {
		
		var w = $(".main-bg").width();
		var h = $(".main-bg").height();
			
		if (w < 320) w = 320;
			
		var bgW = w;
		var bgH = w / mainImgOriginalW * mainImgOriginalH;
		if (h >= bgH) {
			bgH = h;
			bgW = bgH / mainImgOriginalH * mainImgOriginalW;
		}
			
		var bgL = (w - bgW) / 2;
		var bgT = (h - bgH) / 2;
		$mainImg.width(bgW).height(bgH * 1.25).css({left:bgL, top:bgT});
			
		var $mask = $("#mask");
		var mainSvgH = $mask.height();
		var mainSvgW = $mask.width();
			
		var maskX = $mask.offset().left;
		if(_ua.ie) maskX += (w - (h * .94 - 200) * .7655068) / 2;
		var maskY = $mask.offset().top;
			
		var mainImgInSvgRate = mainImgInSvgOriginalRate * mainImgOriginalH / mainSvgH;
		var mainImgInSvgH = bgH * mainImgInSvgRate;
		var mainImgInSvgW = bgW * mainImgInSvgRate;
		var mainImgInSvgL = (bgL - maskX) * mainImgInSvgRate;
		var mainImgInSvgT = (bgT - maskY) * mainImgInSvgRate;
			
		$(".mask image").attr("width", mainImgInSvgW).attr("height", mainImgInSvgH).attr("x", mainImgInSvgL).attr("y", mainImgInSvgT);
		
	}

	/* Move SVG */
	var moveSVG = function() {

		var onFlag = false;
		var prevX = 0;
		var currentX = 0;
		var targetX = 0;
		var mvW = $(".mainvisual").width();
		$(window).on("load resize", function() {mvW = $(".mainvisual").width();});

		var prevPointerX = 0;
		$(".mainvisual").on("mousemove", function(e) {
			var pointerX = e.clientX;
			targetX = (pointerX - mvW / 2);
		}).on("touchstart", function(e) {
			var pointerX = e.changedTouches[0].clientX;
			prevPointerX = pointerX;
			targetX = (pointerX - mvW / 2) * 1.5;
		}).on("touchmove", function(e) {
			var pointerX = e.changedTouches[0].clientX;
			if(Math.abs(prevPointerX - pointerX) > 10) e.preventDefault();
			prevPointerX = pointerX;
			targetX = (pointerX - mvW / 2) * 1.5;
		}).on("touchend", function() {
			targetX = 0;
		});
		$(".mainvisual, header, .header-bg, .news-col, .right-col").on("mouseenter", function() {
			onFlag = true;
		}).on("mouseleave", function() {
			onFlag = false;
			setTimeout(function() {
				if(!onFlag) {
					targetX = 0;
				}
			}, 0);
		});

		setInterval(function() {
			if(prevX != targetX) {
				var offsetX = (prevX - targetX) * (_ua.spWebkit ? .3 : .1);
				if(Math.abs(offsetX) < .5) offsetX = 0;
				currentX = prevX - offsetX;
				prevX = currentX;
				$(".mask-container").css({transform: "translate3d(" + currentX + "px, 0, 0)"});
				setBgImgSize();
			}
		}, 30);

	};

	setBgImgSize();
	$(window).on("resize", setBgImgSize);

	$(window).on("load", function() {
		$(".loading").fadeOut(300, function() {
			$(this).remove();
			$("#mask image").css({opacity: 1, transform: "scale(1)"});
			setBgImgSize();
			$(".mainvisual").addClass("loaded");
			setTimeout(function() {
				moveSVG();
			},800);
		});
	});

}



/*---------------------------------------------
	Screen Height 100% for iPhone
  ---------------------------------------------*/

function screenH() {
	var screen = '<div id="screen" style="position:absolute;height:100%;"></div>'
	$("body").append(screen);
	var h = $("#screen").innerHeight();
	$("#screen").remove();
	$(".js-h100p").height(h);
}

if($(".js-h100p")[0]) {
	screenH();
	$(window).on("load resize", screenH);
}



/*---------------------------------------------
	Top News Ticker


if($("#wrapper").data("page-id") == "top") {
	var $newsCol = $(".news-col");
	var $news = $(".list-home__news li:first-child a");
	var newsColW = 0;
	var newsW = 0;
	var offset = 0;
	var ticker = false;
	var tid;
	var wait = 100;
	function newsTicker() {
		tid = setInterval(function() {
			clearTimeout(tid);
			offset = -offset < newsW ? offset - 3 : newsColW;
			$news.css({
				transform: "translate3d(" + offset + "px,0,0)"
			});
			if(newsColW < newsW) {
				newsTicker();
			}
		}, 30);
	}
	$(window).on("load resize" ,function() {
		newsColW = $newsCol.outerWidth();
		newsW = $news.outerWidth();
		if(newsColW < newsW) {
			if(!ticker) {
				ticker = true
				newsTicker();
			}
		} else {
			if(ticker) {
				clearTimeout(tid);
				ticker = false;
				offset = 0;
				$news.css({
					transform: "translate3d(0,0,0)"
				});
			}
		}
	});
}
  ---------------------------------------------*/


/*---------------------------------------------
	Scroll Down
  

var scrolldown = $('.right-col .t2 a');
scrolldown.on("click", function () {
	var pos = $(".section-home__transforming").offset().top - (window.matchMedia("(max-width: 976px)").matches ? 70 : 100);
	$('body, html').stop().animate({ scrollTop: pos}, 500);
	return false;
});

---------------------------------------------*/

/*---------------------------------------------
	Tab


$(".js-hometab").each(function() {
	var $this = $(this);
    var tabs = $this.find("li");
    tabs.on("click", function() {
      tabs.removeClass("active");
      $(this).addClass("active");
      var index = tabs.index(this);
      $this.parent().parent().find(".col-tabitem.active").fadeOut(100, function() {
      	$(this).removeClass("active");
      	$this.parent().parent().find(".col-tabitem").eq(index).addClass("active").fadeIn(300);
      });
    });
});
  ---------------------------------------------*/


/*---------------------------------------------
	Scroll Effect
  ---------------------------------------------*/

$(window).on("load scroll resize", function (){
	
	var scroll = $(window).scrollTop();
	var windowH = $(window).height();
	var fadePos = [];
	var slidePos = [];
	
	$(".fade-in").each(function(i){
		if(!$(this).hasClass("done")) {
			var $this = $(this);
			fadePos[i] = $this.offset().top;
			if (scroll > fadePos[i] - windowH) {
				$this.addClass("done");
				switch (fadePos[i]) {
					case fadePos[i-3]:
						var interval = 6;
						break;
					case fadePos[i-2]:
						var interval = 4;
						break;
					case fadePos[i-1]:
						var interval = 2;
						break;
					default:
						var interval = 0;
						break;
				}
				$this.find(".img-bg").css({
					opacity: 1,
					transform: "scale(1)",
					webkitTransition: "opacity 1s linear ." + interval + "s, -webkit-transform 1s cubic-bezier(0,.7,.3,1) ." + interval + "s",
					transition: "opacity 1s linear ." + interval + "s, transform 1s cubic-bezier(0,.7,.3,1) ." + interval + "s"
				});
			}
		}
	});

});



}());
