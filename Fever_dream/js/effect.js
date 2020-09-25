$(document).ready(function() {
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Alan Lin");
});
//jarallax===============================================================
function show_browse(){
    jarallax = new Jarallax();
    // jarallax.addAnimation('.content_main_text', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-50%" }]);
    // jarallax.addAnimation('.content_form', [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-40%" }]);
    jarallax.addAnimation('.girl',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-85%" }]);
    jarallax.addAnimation('.man',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-50%" }]);
    jarallax.addAnimation('.star',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-10%" }]);
    jarallax.addAnimation('.title',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-170%" }]);
    jarallax.addAnimation('.subtitle',  [{ progress: "0%", top: "0%" }, { progress: "100%", top: "-170%" }]);
}

$(document).ready(function () {
    show_browse();
});


//jarallax===============================================================
$(function() {
    var o = $.extend(!0, {}, $.fancybox.defaults, {
        caption: function(o, n) {
            return $(this).next("figcaption").html()
        }
    });
    $('[data-fancybox="images"]').fancybox(o)
}),
$(function() {
    $(".head_menu_nav_main li:nth-child(1) a").click(function() {
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        }, 500)
    }),
    $(".head_menu_nav_main li:nth-child(2) a").click(function() {
        $("html,body").animate({
            scrollTop: $("#service").offset().top
        }, 500)
    }),
    $(".head_menu_nav_main li:nth-child(3) a").click(function() {
        $("html,body").animate({
            scrollTop: $("#project").offset().top
        }, 500)
    }),
    $(".head_menu_nav_main li:nth-child(4) a").click(function() {
        $("html,body").animate({
            scrollTop: $("#contact").offset().top
        }, 500)
    })
}),
$(function() {
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1e3)
    }),
    $(window).scroll(function() {
        150 < $(this).scrollTop() ? $("#gotop").fadeIn("fast") : $("#gotop").stop().fadeOut("fast")
    })
}),
$(document).ready(function() {
    $(".open_nav").click(function() {
        $(this).toggleClass("open");
        $(".head_menu_nav").slideToggle(500);
        window.addEventListener('resize', function () {
            if ($(window).width() > 768) {
                $(".head_menu_nav").removeAttr("style");
                $(".open_nav").removeClass("open");  
            }
            else {
            }
        });
    });
});