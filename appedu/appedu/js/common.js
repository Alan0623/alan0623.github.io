
function loadStart() {
    "use strict";
    (new TimelineMax).to("#load_sec .load_logo", 1, {
        autoAlpha: 1
        
    }, .1)
}

function stopload() {
    "use strict";
    var e = new TimelineMax;
    e.to("#load_sec .load_logo", 1, {
        autoAlpha: 0
        
    }, 1.5), e.to("#load_sec", 1, {
        autoAlpha: 0
        
    }, 2), e.eventCallback("onComplete", stopfin)
}


function stopfin() {
    "use strict";
    $("#load_sec").remove()
}

function stopfinbottom() {
    "use strict";
    $("body").removeClass("fixed"), svgAnime(), jsSplitTxt(), fadeImage()
}
$(window).on("load", function() {
    if ($("#load_sec").length) {
        stopload();

        var e = new ScrollMagic.Controller,
            t = function(e, t) {
                var o, s, a = Date.now();
                return 100,
                    function(e) {
                        (o = a + 100 - Date.now()) < 0 ? (e(), a = Date.now()) : (clearTimeout(s), s = setTimeout(function() {
                            e()
                        }, 100 - o + 16))
                    }
            }();
        new ScrollMagic.Scene({
            triggerHook: "onLeave",
            triggerElement: "#student_story_01",
            duration: "100%",
            offset: 0
        }).on("progress", function(e) {
            var o = Math.floor(100 * e.progress);
            t(function() {
                TweenMax.to("#student_story_txt_01_img", 2, {
                    y: "-" + o,
                    ease: Power4.easeOut
                })
            })
        }).addTo(e), new ScrollMagic.Scene({
            triggerHook: "onLeave",
            triggerElement: "#student_story_02",
            duration: 0,
            offset: 0
        }).on("enter", function(e) {
            $(".student_story_txt_01").stop().addClass("img_done"), $("#student_story_txt_01_ttl").stop().removeClass("done"), $("#student_story_txt_02_ttl").stop().addClass("done"), $("#student_story_txt_01_img02").stop().removeClass("done"), $("#student_story_txt_02_img02").stop().addClass("done")
        }).on("leave", function(e) {
            $(".student_story_txt_01").stop().removeClass("img_done"), $("#student_story_txt_01_ttl").stop().addClass("done"), $("#student_story_txt_02_ttl").stop().removeClass("done"), $("#student_story_txt_01_img02").stop().addClass("done"), $("#student_story_txt_02_img02").stop().removeClass("done")
        }).addTo(e), new ScrollMagic.Scene({
            triggerHook: "onLeave",
            triggerElement: "#student_story_02",
            duration: "100%",
            offset: 0
        }).on("progress", function(e) {
            var o = Math.floor(100 * e.progress);
            t(function() {
                TweenMax.to("#student_story_txt_02_img", 2, {
                    y: "-" + o,
                    ease: Power4.easeOut
                })
            })
        }).addTo(e), new ScrollMagic.Scene({
            triggerHook: "onLeave",
            triggerElement: "#student_story_03",
            duration: 0,
            offset: 0
        }).on("enter", function(e) {
            $(".student_story_txt_02").stop().addClass("img_done"), $("#student_story_txt_02_ttl").stop().removeClass("done"), $("#student_story_txt_03_ttl").stop().addClass("done"), $("#student_story_txt_02_img02").stop().removeClass("done"), $("#student_story_txt_03_img02").stop().addClass("done")
        }).on("leave", function(e) {
            $(".student_story_txt_02").stop().removeClass("img_done"), $("#student_story_txt_02_ttl").stop().addClass("done"), $("#student_story_txt_03_ttl").stop().removeClass("done"), $("#student_story_txt_02_img02").stop().addClass("done"), $("#student_story_txt_03_img02").stop().removeClass("done")
        }).addTo(e), new ScrollMagic.Scene({
            triggerHook: "onLeave",
            triggerElement: "#student_story_03",
            duration: "100%",
            offset: 0
        }).on("progress", function(e) {
            var o = Math.floor(100 * e.progress);
            t(function() {
                TweenMax.to("#student_story_txt_03_img", 2, {
                    y: "-" + o,
                    ease: Power4.easeOut
                })
            })
        }).addTo(e)
    }
});