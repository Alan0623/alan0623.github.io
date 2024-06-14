/*------------------------------------------------------------------

------------------------------------------------------------------*/
$(document).ready(function() {
	
 	$(window).bind('resize orientationchange', FULL);
	
	function FULL(){

		
		var WINW = $(window).width();
		var MIP = Math.round(WINW-30);
		
		$(".mc-image p").css("width",MIP+"px");
		
		
	};
	FULL();	
	
	var	$box = $(".slider-touch li p"),
		$btn = $(".slider-touch li a#INFO");
	
	function gotoptop2(){		
		$box.removeClass("UP").animate({bottom:-100+"px"},600,function() {$btn.animate({backgroundPosition: "0 -50"},600);});
	};
			
	$(".slider-touch li a#INFO").bind('click touchstart', function(){
		if($btn.is(".UP")){	
			$box.stop(true,false).animate({bottom:-100+"px"},500);
			$btn.removeClass("UP").animate({backgroundPosition: "0 -50"},600);clearTimeout(timer);;
		}else{
			$box.stop(true,false).animate({bottom:0},500);
			$btn.addClass("UP").animate({backgroundPosition: "0 0"},600);
	}});
	timer = setTimeout(gotoptop2, 5000);	

});
/*------------------------------------------------------------------

------------------------------------------------------------------*/
jQuery(document).ready(function(e) {

	var t = {
		lines: 17,
		length: 6,
		width: 4,
		radius: 12,
		rotate: 0,
		color: "#ccc",
		speed: 2.2,
		trail: 60,
		className: "spinner",
		zIndex: 2e9,
		top: "auto",
		left: "auto"
	},
		n = document.getElementById("preloader"),
		r = (new Spinner(t)).spin(n);
	Modernizr.load({
		test: Modernizr.touch,
		yep: {
			loadSwipejs: project_script_params.swipejsurl
		},
		nope: {
			loadMaximage: project_script_params.maximageurl
		},
		callback: {
			loadSwipejs: function(t, n, i) {
				jQuery(function() {
					e("#slider").removeClass("hidden");
					var t = new Swipe(document.getElementById("slider"), {
						speed: 500,
						callback: function(e, t, n) {}
					});
					e("#slider").waitForImages(function() {
						r.stop();
						e("#slider").animate({
							opacity: 1
						}, 600, function() {
							e("#slider p").delay(600).css("display", "block").animate({
								opacity: 1
							}, 600)
						})
					})
				})
			},
			loadMaximage: function(t, n, i) {
				jQuery(function() {
					e("#slider-notouch").removeClass("hidden");
					e("#slider").remove();
					e("#slider-notouch").maximage({
						cycleOptions: {
							fx: "scrollHorz",
							speed: 800,
							timeout: 0,
							prev: "#prev",
							next: "#next"
						},
						onImagesLoaded: function() {
							e("#slider-notouch p").delay(600).css("display", "block").animate({
								opacity: 1
							}, 600)
						},
						cssBackgroundSize: !1,
						cssTransitions: !1
					});
					e("#slider-notouch").waitForImages(function() {
						r.stop();
						e("#slider-notouch").animate({
							opacity: 1
						}, 600)
					})
				});
				e(document).bind("keyup", "left", function() {
					e("#slider-notouch").cycle("prev")
				});
				e(document).bind("keyup", "right", function() {
					e("#slider-notouch").cycle("next")
				})
/*//////////////////////////////////////////////////*/

	
/*//////////////////////////////////////////////////*/	
	var	$box = $(".mc-image p"),
		$btn = $(".mc-image a#INFO");
	
	function gotoptop(){		
		$box.removeClass("UP").animate({bottom:-100+"px"},600,function() {$btn.animate({backgroundPosition: "0 -50"},600);});
	};
			
	$(".mc-image a#INFO").bind('click', function(){
		if($btn.is(".UP")){	
			$box.stop(true,false).animate({bottom:-100+"px"},500);
			$btn.removeClass("UP").animate({backgroundPosition: "0 -50"},600);clearTimeout(timer);;
		}else{
			$box.stop(true,false).animate({bottom:0},500);
			$btn.addClass("UP").animate({backgroundPosition: "0 0"},600);
	}});
	timer = setTimeout(gotoptop, 5000);
/*//////////////////////////////////////////////////*/

			}
		}
	});
	var i = e(window).height(),
		s = e("#share-modal").height(),
		o = i / 2 - s / 2;
	e("a[rel*=theModal]").leanModal({
		top: o,
		overlay: .7,
		closeButton: ".modal_close"
	});
	e(window).resize(function() {
		e("#slider ul").children().css("height", e(window).height());
		e("#share-modal").css({
			top: e(window).height() / 2 - s / 2
		});
		e(window).width() < 550 ? e(".custom-code").css("display", "none") : e(".custom-code").css("display", "block")
	
	
	
	}).resize()
});

