/*/////////////////////////////////////////////////////////////////////////////
【 effect.js自行撰寫 請麻煩集中放這裡 多謝 】 海棠設計 Web Designer 林位青
////////////////////////////////////////////////////////////////////////////*/
/*------------------------------------------------------------------
先跑About 跑完再載入inside.css
------------------------------------------------------------------*/
$(function() {  
var headID = document.getElementsByTagName("head")[0]; 
var newCss = document.createElement('link');
newCss.type = 'text/css';
newCss.rel = "stylesheet";
newCss.href = "css/inside.css";
headID.appendChild(newCss);
/*
var newJs = document.createElement('script');
newJs .type = 'text/javascript';
newJs .src= ".js";
headID.appendChild(newJs);
*/
});
/*------------------------------------------------------------------
footer
------------------------------------------------------------------*/
$(function(){
	var 
	$menu = $("#footer"),
	$godown = $menu.find("#footer_thousand #footer_nav a.SiteMap,#footer_thousand #footer_nav a.SiteMap2");
	$godown.bind('click', function(){
	if($menu.is(".closed")){	
		$menu.animate({bottom:0,left:50}, 450, function(){$(this).removeClass("closed");});	
		$godown.removeClass("SiteMap").addClass("SiteMap2");
	}else{
		$menu.animate({bottom:-58,left:0}, 450, function(){$(this).addClass("closed");});
		$("#footer_thousand #footer_nav a.SiteMap2").removeClass("SiteMap2").addClass("SiteMap");
	};return false;});	
	
	$godown.trigger('click');
	 
	$("#footer #footer_thousand #footer_nav3").hover(function(){
	$(this).stop().animate({backgroundPosition: "0 -40"},600);
		},function(){
	$(this).stop().animate({backgroundPosition: "0 0"},600);
	});
	$("#footer #footer_thousand #footer_nav3").click(function(){$("#footer").animate({bottom:-58,left:50},450);});
});
/*------------------------------------------------------------------
img[hover] 威力加強版2012.06
------------------------------------------------------------------*/
$(function() {     
	$('INPUT[type=image][hover], img[hover]').hover(function() {         
		$(this).attr('tmp', $(this).attr('src')).attr('src', $(this).attr('hover'))
		.attr('hover', $(this).attr('tmp')).removeAttr('tmp');})
		.each(function(){$('<img />').attr('src', $(this).attr('hover'));
	});
	$('.fade').append('<span class="hover"></span>').each(function () {
	  var $span = $('> span.hover', this).css('opacity', 0).css('position','absolute').css('top', 0).css('left', 0);
	  $(this).hover(function () {$span.stop().fadeTo(1000, 1);}, function () {$span.stop().fadeTo(1000, 0);});
	});
});
/*------------------------------------------------------------------
IE7 LightBox
------------------------------------------------------------------*/
$(function(){$('#closelightbox').click(function(){
	$("div#IE7_BG").fadeOut(function(){
	$("div#IE7_BG").css('display','none');
	$("#header").delay(6000).animate({top:-95},1500);	
	});
});});
/*------------------------------------------------------------------
//減少NowLoading  index_nowloading.js 第71行後
------------------------------------------------------------------*/
$(function(){

//加寫 按鈕後 加載圖片
$('#mid div#About div#content div.content_L ul li.introductions_images2').html('<img src="images/introductions_images2.jpg" width="420" height="542" />');
$('#mid div#About div#content div.content_L ul li.introductions_images3').html('<img src="images/introductions_images3.jpg" width="420" height="542" />');
//$('#mid div#Services div#Services_bg div#content div.content_R div.services_images').html('<img src="images/services_content_R_images.png" width="450" height="480" /><div class="services_images2"></div>');
$('#mid div#Services div#Services_bg div#content div.content_L div.title div.SCL1').html('<img src="images/services_content_L_1.png" width="365" height="103" />');
$('#mid div#Services div#Services_bg div#content div.content_L div.title div.SCL2').html('<img src="images/services_content_L_2.png" width="365" height="99" />');
$('#mid div#Services div#Services_bg div#content div.content_L div.title div.SCL3').html('<img src="images/services_content_L_3.png" width="365" height="100" />');
$('#mid div#Services div#Services_bg div#content div.content_L div.title div.SCL4').html('<img src="images/services_content_L_4.png" width="365" height="100" />');
$('#mid div#Gallery div#Gallery_bg div#content div.content_L div.images_L div.banner,#mid div#Gallery div#Gallery_bg div#content div.content_R div.images_R div.banner').html('<img src="images/gallery_images_banner_bg.png" width="321" height="128" />');
$('#mid div#Gallery div#Gallery_bg div#content div.content_L div.images_L div.title_E').html('<img src="images/gallery_images_banner_furnishing.png" width="221" height="78" />');
$('#mid div#Gallery div#Gallery_bg div#content div.content_R div.images_R div.title_E').html('<img src="images/gallery_images_banner_decoration.png" width="251" height="78" />');
		
});

/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function(){
	$("#goTop").stop().click(function(){$("html,body").animate({scrollTop:0},900);return false;});
	$("div.logo").stop().click(function(){document.location.href = $(this).find("a").attr('href');;});
	var	$box = $("#header"),
		$btn = $box.find("div.godown");
		
		$btn.addClass("godown3");
			function gotoptop(){		
				$box.animate({top:-95},500,function() {
					$btn.removeClass("godown3").addClass("godown");
				});
			};
			
			$btn.bind('click', function(){
			if($btn.is(".DOWN")){	
					$box.stop(true,false).animate({top:-95},500);
					$btn.removeClass("DOWN").removeClass("godown3").addClass("godown");
					clearTimeout(timer);
			}else{
					$box.stop(true,false).animate({top:0},500);
					$btn.addClass("DOWN").removeClass("godown").removeClass("godown32").addClass("godown3");		
			}});
		
			$btn.hover(function(){
				var _btnDown = $(this).hasClass('DOWN');
				if($btn.is(".DOWN")){
					$(this).removeClass("godown").addClass("godown3");
				}else{
					$(this).hover(function(){$(this).removeClass("godown3").addClass("godown2");
					},function(){$(this).removeClass("godown2").addClass("godown");
					});
				}		
			});			
$('#header #main_menu div.nav ul li').localScroll();
$('#header #main_menu div.logo').localScroll();
$('#mid div#Index div#content div.content_R div.Index_news .news_title').localScroll();
/*IE 無效
$("#header #main_menu div.nav ul li a").click(function(event){
  event.returnValue = false; 
  if(event.preventDefault) event.preventDefault(); 
  window.location.hash = $(this).attr("href");
  event.preventDefault();
});*/
timer = setTimeout(gotoptop, 5000);
$btn.trigger('click');			
})
/*------------------------------------------------------------------
00 div#Index
------------------------------------------------------------------*/
$(function() {
	$('#mid div#Index div#content div.content_L').hover(function(){
		$(this).find('div.index_images2').stop().animate({opacity:0},2000);
		$(this).find('div.index_images').stop().animate({backgroundPosition: "-80 0"},4000);
	}, function(){
		$(this).find('div.index_images2').stop().animate({opacity:1},2000);
		$(this).find('div.index_images').stop().animate({backgroundPosition: "38 0"},4000);
	});
	$('#mid div#Index div#content div.content_R div.Index_news .news_title').hover(function(){
		$(this).stop().animate({backgroundPosition:"0 0"},300);
	}, function(){
		$(this).stop().animate({backgroundPosition:"0 16"},300);
	});		
});
/*------------------------------------------------------------------
01 div#About
------------------------------------------------------------------*/
$(function(){
	$('#mid div#About div#content div.content_L div.cycle_images').appear(function() {
$('#mid div#About div#content div.content_L div.cycle_images .cycle ul').cycle({
   fx:   'shuffle', 
    shuffle: { top:  -542, left: -420 }, 
	speed:  '1500',
	delay:5000,
	/*
	next:   '.cycle_next',
	prev:   '.cycle_prev',
	*/
	cleartype:  0,	
	pause:  1
});
/* 上一張下一張按鈕
var 
$btnPrev = $('#mid div#About div#content div.content_R div.cycle_images .cycle_prev') ,
$btnNext = $('#mid div#About div#content div.content_R div.cycle_images .cycle_next') ;
$btnPrev.hide();$btnNext.hide();
$('#mid div#About div#content div.content_R div.cycle_images').hover(function(){
$btnPrev.show();$btnNext.show();},function(){$btnPrev.hide();$btnNext.hide();});
$btnPrev.hover(function(){
	$(this).removeClass("cycle_prev").addClass("cycle_prev_o");
},function(){
	$(this).removeClass("cycle_prev_o").addClass("cycle_prev");
});
$btnNext.hover(function(){
	$(this).removeClass("cycle_next").addClass("cycle_next_o");
},function(){
	$(this).removeClass("cycle_next_o").addClass("cycle_next");
});*/
});
});

$(function(){
$('#mid div#About2 div.content_R div.elegance,#mid div#About2 div.content_R div.style,#mid div#About2 div.content_R div.taste').css("opacity",0);
$('#mid div#About2 div.content_R div.elegance')	.appear(function() {
$('#mid div#About2 div.content_R div.elegance').delay(1500).animate({opacity:1 ,left:207},4000,"easeOutCirc");
$('#mid div#About2 div.content_R div.style').delay(2500).animate({opacity:1 , left:207},4000,"easeOutCirc");
$('#mid div#About2 div.content_R div.taste').delay(3500).animate({opacity:1 ,left:207},4000,"easeOutCirc");
});});

/*打字效果*/
$(function(){$('.typewriter1').hide();$('#mid div#About div#content div.content_R div.text').appear(function() {
var $str = $('.typewriter1').text();
var i = 0;
var typing_inst = setInterval(typing,80);

function typing()
{if(i < $str.length -1){
		$('.typewriter1').show();
        $('.typewriter1').text($str.substr(0,i) + "_");
        i++;
    }else if(i == $str.length-1){
        $('.typewriter1').text($str);
        clearInterval(typing_inst);
    }
}});
});
<!--->
$(function(){
$('.typewriter2').hide();
$('#mid div#About2 div.content_L div.typewriter3').hide();
$('#mid div#About2 div.content_L div.text').appear(function() {
var $str2 = $('.typewriter2').text();
var i = 0;
var typing_inst2 = setInterval(typing2,80);

function typing2()
{if(i < $str2.length -1){
		$('.typewriter2').show();
		$('#mid div#About2 div.content_L div.typewriter3').delay(13500).fadeIn(2500);
        $('.typewriter2').text($str2.substr(0,i) + "_");
        i++;
    }else if(i == $str2.length-1){
        $('.typewriter2').text($str2);
        clearInterval(typing_inst2);
    }
}});
});
/*------------------------------------------------------------------
02 div#News
------------------------------------------------------------------*/
$(function(){
	$("#mid div#News div#News_bg div#content div.content_R div.news_list").click(function () {
		document.location.href = $(this).find("a").attr('href');;
		//window.open("news_content.html");;
	});
});
/*------------------------------------------------------------------
03 div#Gallery
------------------------------------------------------------------*/
$(function() {
	$("#mid div#Gallery div#Gallery_bg div#content div.content_L div.images_L,#mid div#Gallery div#Gallery_bg div#content div.content_R div.images_R").click(function () {
		document.location.href = $(this).find("a").attr('href');;
		//window.open("gallery_list.html");;
	});
	$("#mid div#Gallery div#Gallery_bg div#content div.titlecircle").css("opacity",0);
	$(this).find("div.banner").animate({opacity:0},1000);
	$("#mid div#Gallery div#Gallery_bg div#content div.title_E").css("top",100);
	$("#mid div#Gallery div#Gallery_bg div#content div.title_C").css("top",271);	
	$("#mid div#Gallery div#Gallery_bg div#content").appear(function() {
		$(this).find("div.titlecircle").stop().delay(100).animate({opacity:1 ,top:20},4000);
		$(this).find("div.banner").stop().animate({opacity:1},1000);
		$(this).find("div.title_E").stop().delay(500).animate({opacity:1 ,top:151},2000);
		$(this).find("div.title_C").stop().delay(500).animate({opacity:1 ,top:221},2000);
	});
	$("#mid div#Gallery div#Gallery_bg div#content div.banner,#mid div#Gallery div#Gallery_bg div#content div.title_E,#mid div#Gallery div#Gallery_bg div#content div.title_C").css("opacity",1);

	$("#mid div#Gallery div#Gallery_bg div#content div.content_L div.images_L,#mid div#Gallery div#Gallery_bg div#content div.content_R div.images_R").hover(function(){
		$(this).find("div.banner").animate({opacity:0},1000);
		$(this).find("div.title_E").stop().delay(100).animate({opacity:0 ,top:100},1000);
		$(this).find("div.title_C").stop().delay(100).animate({opacity:0 ,top:271},1000);
		$(this).stop().animate({backgroundPosition: "-321 0"},600);
	}, function(){
		$(this).find("div.banner").stop().animate({opacity:1},1000);
		$(this).find("div.title_E").stop().delay(100).animate({opacity:1 ,top:151},1000);
		$(this).find("div.title_C").stop().delay(100).animate({opacity:1 ,top:221},1000);
		$(this).stop().animate({backgroundPosition: "0 0"},600);
	});
	$("#mid div#Gallery div#Gallery_bg div#content div#content_G").css("opacity",0);
	/*$("#mid div#Gallery div#Gallery_bg div#content div.content_L,#mid div#Gallery div#Gallery_bg div#content div.content_R").click(function(){
		$("#mid div#Gallery div#Gallery_bg div#content div.titlecircle_bg").animate({opacity:0 ,top:-20},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div.content_L").animate({opacity:0 ,left:50},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div.content_R").animate({opacity:0 ,right:50},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div#content_G").delay(2000).animate({opacity:1},2500,function(){$("#mid div#Gallery div#Gallery_bg div#content div#content_G").css("z-index",100);});		
	});*/
});
/*------------------------------------------------------------------
04 div#Services
------------------------------------------------------------------*/
$(function(){
	$('#mid div#Services div#Services_bg div#content div.content_R div.services_images div.services_images2').hover(function(){
		$(this).stop().animate({opacity:0},2000);
		$('#mid div#Services div#Services_bg div#content div.content_R div.services_images').stop().animate({backgroundPosition: "0 0"},4000);
	}, function(){
		$(this).stop().animate({opacity:1},2000);
		$('#mid div#Services div#Services_bg div#content div.content_R div.services_images').stop().animate({backgroundPosition: "-50 0"},4000);
	});	
	var $SCL = $("#mid div#Services div#Services_bg div#content div.content_L div.title")
	$SCL.find("div.SCL1").hover(function(){
		$(this).stop().animate({backgroundPosition: "16 -47"},400);
		},function(){
		$(this).stop().animate({backgroundPosition: "-160 3"},400);
	});
	$SCL.find("div.SCL2").hover(function(){
		$(this).stop().animate({backgroundPosition: "-335 -150"},400);
		},function(){
		$(this).stop().animate({backgroundPosition: "-160 -100"},400);
	});
	$SCL.find("div.SCL3").hover(function(){
		$(this).stop().animate({backgroundPosition: "18 -148"},400);
		},function(){
		$(this).stop().animate({backgroundPosition: "-160 -199"},400);
	});
	$SCL.find("div.SCL4").hover(function(){
		$(this).stop().animate({backgroundPosition: "-336 -250"},400);
		},function(){
		$(this).stop().animate({backgroundPosition: "-160 -300"},400);
	});	
});
/*------------------------------------------------------------------
05 div#Portfolio
------------------------------------------------------------------*/
$(function(){
	var $finished_list = $("#mid div#Portfolio div#FinishedCases_bg div#content div.content_L div.finished_list") ;
	$finished_list.append('<div class="view"><span class="lt">&lt;</span><span class="title">View Cases</span><span class="gt">&gt;</span><span class="plus"></span></div>');
	$finished_list.click(function () {
		document.location.href = $(this).find("a").attr('href');;
		//window.open("finished_content.html");;
	});
	$finished_list.find("div.view span.lt").animate({opacity:0 ,left:207},0);
	$finished_list.find("div.view span.gt").animate({opacity:0 ,left:95},0);
	$finished_list.find("div.view span.title").animate({opacity:0 ,top:135},0);
	$finished_list.find("div.view span.plus").animate({opacity:0 ,top:180},0);
	$finished_list.hover(function(){
		$(this).find("div.images img").stop().animate({opacity:0.5},1000);
		$(this).find("div.view span.lt").stop().animate({opacity:1 ,left:197},400);
		$(this).find("div.view span.gt").stop().animate({opacity:1 ,left:105},400);
		$(this).find("div.view span.title").animate({opacity:1 ,top:145},400);
		$(this).find("div.view span.plus").stop().animate({opacity:1 ,top:170},400);
		},function(){
		$(this).find("div.images img").stop().animate({opacity:1},1000);
		$(this).find("div.view span.lt").stop().animate({opacity:0 ,left:207},400);
		$(this).find("div.view span.gt").stop().animate({opacity:0 ,left:95},400);
		$(this).find("div.view span.title").animate({opacity:0 ,top:135},400);
		$(this).find("div.view span.plus").stop().animate({opacity:0 ,top:180},400);
	});
});
/*------------------------------------------------------------------
06 div#content
------------------------------------------------------------------*/
$(function(){
$('#mid div#Contact div#Contact_bg div#content div.content_R div.company_name').css("opacity",0);
$('#mid div#Contact div#Contact_bg div#content div.content_R div.company_name').appear(function() {
	//$('div#content div.cycle_images div.cycle ul li.L1').html('<img src="images/introductions_images1.jpg" width="420" height="542" />');
$('#mid div#Contact div#Contact_bg div#content div.content_R div.company_name').delay(1500).animate({opacity:1 ,top:80},4000,"easeOutCirc");
});
	/*
	var $Contact_L = $('#mid div#Contact div#Contact_bg div#content div.content_L');
	$Contact_L.append('<div class="Link"><p class="p">Link<br />Google Map</p></div>
<div class="view"><span class="lt">&lt;</span><span class="title">Link<br />Google Map</span><span class="gt">&gt;</span><span class="plus"></span></div>
<div class="contact_map2"></div>');
	$Contact_L.click(function () {window.open("http://goo.gl/maps/7q8K");})
	$Contact_L.find("div.contact_map2").css("opacity",0);
	$Contact_L.find("div.view span.lt").animate({opacity:0 ,left:290},0);
	$Contact_L.find("div.view span.gt").animate({opacity:0 ,left:170},0);
	$Contact_L.find("div.view span.title").animate({opacity:0 ,top:270},0);
	$Contact_L.find("div.view span.plus").animate({opacity:0 ,top:335},0);
	$Contact_L.hover(function(){
		$(this).find("div.contact_map2").stop().animate({opacity:0.5},400);
		$(this).find("div.view span.lt").stop().animate({opacity:1 ,left:280},400);
		$(this).find("div.view span.gt").stop().animate({opacity:1 ,left:180},400);
		$(this).find("div.view span.title").animate({opacity:1 ,top:280},400);
		$(this).find("div.view span.plus").stop().animate({opacity:1 ,top:325},400);
		},function(){
		$(this).find("div.contact_map2").stop().animate({opacity:0},400);
		$(this).find("div.view span.lt").stop().animate({opacity:0 ,left:290},400);
		$(this).find("div.view span.gt").stop().animate({opacity:0 ,left:170},400);
		$(this).find("div.view span.title").animate({opacity:0 ,top:270},400);
		$(this).find("div.view span.plus").stop().animate({opacity:0 ,top:335},400);
	});*/
});
/*------------------------------------------------------------------
div#Gallery_list
------------------------------------------------------------------*/
ddaccordion.init({
	headerclass: "submenuheader", //Shared CSS class name of headers group
	contentclass: "submenu", //Shared CSS class name of contents group
	revealtype: "click", //Reveal content when user clicks or onmouseover the header? Valid value: "click", "clickgo", or "mouseover"
	mouseoverdelay: 400, //if revealtype="mouseover", set delay in milliseconds before header expands onMouseover
	collapseprev: true, //Collapse previous content (so only one open at any time)? true/false 
	defaultexpanded: [], //index of content(s) open by default [index1, index2, etc] [] denotes no content
	onemustopen: true , //Specify whether at least one header should be open always (so never all headers closed)
	animatedefault: true, //Should contents open by default be animated into view?
	persiststate: false, //persist state of opened contents within browser session?
	toggleclass: ["", ""], //Two CSS classes to be applied to the header when it's collapsed and expanded, respectively ["class1", "class2"]
	togglehtml: ["", ""], //Additional HTML added to the header when it's collapsed and expanded, respectively  ["position", "html1", "html2"] (see docs)
	animatespeed: "normal", //speed of animation: integer in milliseconds (ie: 200), or keywords "fast", "normal", or "slow"
	oninit:function(headers, expandedindices){ //custom code to run when headers have initalized
		//do nothing
	},
	onopenclose:function(header, index, state, isuseractivated){ //custom code to run whenever a header is opened or closed
		//do nothing
	}
})

$(function() { 
var $PI = $("#mid div#Gallery_list div#content div.content_R div.portfoilo div.images");
	$PI.find(" div.black").append('<div class="view"><span class="lt">&lt;</span><span class="title">View Portfolio</span><span class="gt">&gt;</span><span class="plus"></span></div>');

	$PI.find("div.view span.lt").animate({opacity:0 ,left:138},0);
	$PI.find("div.view span.title").animate({opacity:0 ,top:50},0);
	$PI.find("div.view span.gt").animate({opacity:0 ,left:12},0);
	$PI.find("div.view span.plus").animate({opacity:0 ,top:95},0);
	
	$PI.hover(function(){
		$(this).find("a>img").stop().animate({opacity:0.5},1000);
		$(this).find("div.view span.lt").stop().animate({opacity:1 ,left:128},400);
		$(this).find("div.view span.title").animate({opacity:1 ,top:60},400);
		$(this).find("div.view span.gt").stop().animate({opacity:1 ,left:22},400);
		$(this).find("div.view span.plus").stop().animate({opacity:1 ,top:85},400);
		},function(){
		$(this).find("a>img").stop().animate({opacity:1},1000);
		$(this).find("div.view span.lt").stop().animate({opacity:0 ,left:138},400);
		$(this).find("div.view span.title").animate({opacity:0 ,top:50},400);
		$(this).find("div.view span.gt").stop().animate({opacity:0 ,left:12},400);
		$(this).find("div.view span.plus").stop().animate({opacity:0 ,top:95},400);
	});
	$("#mid div#Portfolio_content div#content div.content_L div.article div.head div.PRV,#mid div#News_content div#content div.content_L div.article div.head div.PRV,#mid div#Gallery_list div#content div.content_L div.PRV,#mid div#News_content div#content div.content_L div.article div.title_prv,#mid div#News_content div#content div.content_L div.article div.title_next,#mid div#Portfolio_content div#content div.content_L div.article div.title_prv,#mid div#Portfolio_content div#content div.content_L div.article div.title_next").click(function () {
		document.location.href = $(this).find("a").attr('href');;
	});
}); 
/*------------------------------------------------------------------
ICON (FB BLOG)
------------------------------------------------------------------*/
$(function() {  
$("div.language .icon .FB,div#content div.content_R div.Index_logo .FB,div.language .icon .BLOG,div#content div.content_R div.Index_logo .BLOG").click(function () {document.location.href = $(this).find("a").attr("href");;})}); 