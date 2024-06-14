// IE7 NowLoading
$(function(){
$('div#IE7_BG td.IE7_BG3').html('<img src="images/IE7/proposal_03.jpg" width="630" height="55"/>');
$('div#IE7_BG td.IE7_BG4').html('<img src="images/IE7/proposal_04.jpg" width="382" height="50"/>');
$('div#IE7_BG td.IE7_BG5').html('<a href="http://www.microsoft.com/windows/internet-explorer/"><img src="images/IE7/proposal_05.jpg" width="50" height="50" border="0" /></a>');
$('div#IE7_BG td.IE7_BG6').html('<a href="https://www.google.com/chrome/"><img src="images/IE7/proposal_06.jpg" width="50" height="50" border="0" /></a>');
$('div#IE7_BG td.IE7_BG7').html('<a href="http://www.mozilla.com/firefox/"><img src="images/IE7/proposal_07.jpg" width="50" height="50" border="0" /></a>');
$('div#IE7_BG td.IE7_BG8').html('<a href="http://www.apple.com/safari/download/"><img src="images/IE7/proposal_08.jpg" width="50" height="50" border="0" /></a>');
$('div#IE7_BG td.IE7_BG9').html('<img src="images/IE7/proposal_09.jpg" width="48" height="50"/>');
$('div#IE7_BG td.IE7_BG10').html('<img src="images/IE7/proposal_10.jpg" width="630" height="345"/>');
});

/*------------------------------------------------------------------
div#Gallery
------------------------------------------------------------------*/
$(function() {
	$("#mid div#Gallery div#Gallery_bg div#content div.titlecircle_bg,").css("opacity",1);
		$(this).find("div.titlecircle_bg").stop().animate({opacity:1 ,top:20},1);
		$(this).find("div.banner").stop().animate({opacity:1},1);
		$(this).find("div.title_E").stop().animate({opacity:1 ,top:151},1);
		$(this).find("div.title_C").stop().animate({opacity:1 ,top:221},1);

	$("#mid div#Gallery div#Gallery_bg div#content div.banner,#mid div#Gallery div#Gallery_bg div#content div.title_E,#mid div#Gallery div#Gallery_bg div#content div.title_C").css("opacity",1);

	$("#mid div#Gallery div#Gallery_bg div#content div.content_L div.images_L,#mid div#Gallery div#Gallery_bg div#content div.content_R div.images_R").hover(function(){
		$(this).find("div.banner").animate({opacity:0},1000);
		$(this).find("div.title_E").stop().delay(100).animate({opacity:0 ,top:100},1000);
		$(this).find("div.title_C").stop().delay(100).animate({opacity:0 ,top:271},1000);
	}, function(){
		$(this).find("div.banner").stop().animate({opacity:1},1000);
		$(this).find("div.title_E").stop().delay(100).animate({opacity:1 ,top:151},1000);
		$(this).find("div.title_C").stop().delay(100).animate({opacity:1 ,top:221},1000);

	});
	$("#mid div#Gallery div#Gallery_bg div#content div#content_G").css("opacity",0);
	/*$("#mid div#Gallery div#Gallery_bg div#content div.content_L,#mid div#Gallery div#Gallery_bg div#content div.content_R").click(function(){
		$("#mid div#Gallery div#Gallery_bg div#content div.titlecircle_bg").animate({opacity:0 ,top:-20},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div.content_L").animate({opacity:0 ,left:50},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div.content_R").animate({opacity:0 ,right:50},2000);
		$("#mid div#Gallery div#Gallery_bg div#content div#content_G").delay(2000).animate({opacity:1},2500,function(){$("#mid div#Gallery div#Gallery_bg div#content div#content_G").css("z-index",100);});
			
		});
	*/
});
