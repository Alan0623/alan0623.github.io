/*------------------------------------------------------------------
jquery.queryloader2.js
------------------------------------------------------------------*/
(function($) {
    if (!Array.prototype.indexOf)
	   {
	   Array.prototype.indexOf = function(elt /*, from*/)
             {
             var len  = this.length >>> 0;
             var from = Number(arguments[1]) || 0;
                 from = (from < 0)
                      ? Math.ceil(from)
                      : Math.floor(from);
             if (from < 0)
                 from += len;
 
                 for (; from < len; from++)
                     {
                     if (from in this &&
                     this[from] === elt)
                     return from;
                     }
             return -1;
             };
       }
	var yes = 0;//暫停開關
    var qLimages = new Array;
    var qLdone = 0;
    var qLdestroyed = false;
    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;
function closeOverlay(){  	
    	$(qLoverlay).fadeOut(1000, function () {
                    $(qLoverlay).remove();
                   qLoptions.onComplete();
                   return false;                   
                });	
    	}
    var qLoptions = {
        onComplete: function () {},
        backgroundColor: "#fff",
        barColor: "#000",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function () {
            if (qLoptions.completeAnimation == "grow") {
                $(qLbar).stop().css("width", "100%").animate({
                    top: "0%",
                    height: "100%"
                }, 500, function () {
                    $(qLoverlay).fadeOut(500, function () {
                        $(this).remove();
                        qLoptions.onComplete();
                    })
                });        
            }else if(qLoptions.completeAnimation == "wait"){
            	
            if(yes == 0){
				$("#qLpercentage").hide();	
            	$('<div id="entermag"></div>').appendTo(qLoverlay).fadeTo(1500, 1).bind('click', function(e){closeOverlay();e.preventDefault();
//加寫 按鈕後 選單先開再縮	
$("#header #main_menu div.godown").removeClass("godown").addClass("godown32");
//$("#header #main_menu div.godown32").click(function(){$("#header").animate({top:-95},400)});
$("#header").animate({top:0},0,function(){}).delay(4000).animate({top:-95},1500,function(){
$("#header #main_menu div.godown32").delay(4500).removeClass("godown32").addClass("godown");
});
var headID = document.getElementsByTagName("head")[0]; 
var newCss = document.createElement('link');
newCss.type = 'text/css';
newCss.rel = "stylesheet";
newCss.href = "css/inside.css";
headID.appendChild(newCss);
//加寫 按鈕後 就跑到最上面
$('html, body').stop().animate({scrollTop:0},0);
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
            	yes = 1;}        	
           	}else { 
               closeOverlay();    
            }
        }
    };

    var afterEach = function () {
        //start timer
        var currentTime = new Date();
        qLstart = currentTime.getTime();

        createPreloadContainer();
        createOverlayLoader();
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var i = 0; qLimages.length > i; i++) {
            $.ajax({
                url: qLimages[i],
                type: 'HEAD',
                success: function(data) {
                    if(!qLdestroyed){
                        qLimageCounter++;
                        addImageForPreload(this['url']);
                    }
                }
            });
        }
    };

    var addImageForPreload = function(url) {
        var image = $("<img />").attr("src", url).bind("load", function () {
            completeImageLoading();
        }).appendTo(qLimageContainer);
    };

    var completeImageLoading = function () {
        qLdone++;

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
           width: percentage + "%",
           minWidth: percentage + "%"
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    };

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        qLoptions.onLoadComplete();
        qLdestroyed = true;
    };

    var createOverlayLoader = function () {
        qLoverlay = $("<div id='qLoverlay'></div>").css({
            width: "100%",
            height: "100%",
            backgroundColor: qLoptions.backgroundColor,
            backgroundPosition: "fixed",
            position: "fixed",
            zIndex: 666999,
            top: 0,
            left: 0
        }).appendTo("body");
		qLbar = $("<div id='qLbar'></div>").css({
            height: qLoptions.barHeight + "px",
            marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            backgroundColor: qLoptions.barColor,
            width: "0%",
            position: "relative",
            top: "1px"
        }).appendTo(qLoverlay);
        qLbar.wrap("<div id='loaderbar' />");
        if (qLoptions.percentage == true) {
            qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "2em",
                top: "70%",
                left: "50%",
                marginTop: "-" + (59 + qLoptions.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: "#808080"
            }).appendTo(qLoverlay);
        }
    };

    var findImageInElement = function (element) {
        var url = "";

        if ($(element).css("background-image") != "none") {
            var url = $(element).css("background-image");
        } else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
            var url = $(element).attr("src");
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);
                    }
                    qLimages.push(urls[i] + extra);
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach();
        return this;
    };
})(jQuery);
/*------------------------------------------------------------------
Now Loading  請放最下面  jquery.queryloader2.js
------------------------------------------------------------------*/
WebFontConfig = {google: { families: [ 'Parisienne::latin' ] }};(function() {var wf = document.createElement('script');wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';wf.type = 'text/javascript';wf.async = 'true';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf, s);})(); 
//以上googleFont  0%

/*
jQuery(document).ready(function($) {
	
if(document.cookie != 1){
  document.cookie = 0;
}
//alert(document.cookie)
if(document.cookie == 0){
  	$("#entermag").fadeTo(1,0);
    $("body").queryLoader2({
      	backgroundColor: '#000000',
      	percentage: true,
      	completeAnimation: 'wait',
      	onLoadComplete: showReadMagazine(),
      	barColor: '#444444'
      	});		
      function showReadMagazine(){
		  $("#overlay").hide();  
	  }
	document.cookie = 1;
}

if(document.cookie = 1){
$("#header").animate({top:-95},0);
}
});
*/
jQuery(document).ready(function($) {
	$("#entermag").fadeTo(1,0);
    $("body").queryLoader2({
      	backgroundColor: '#000000',
      	percentage: true,
      	completeAnimation: 'wait',
      	onLoadComplete: showReadMagazine(),
      	barColor: '#444444'
      	});		
      function showReadMagazine(){
		  $("#overlay").hide();  
	  }
});
/*
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}*/
