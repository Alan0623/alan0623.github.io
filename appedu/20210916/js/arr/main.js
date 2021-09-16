function isTouchDevice() {
    return window.ontouchstart === null ? true : false;
}

$(function () {

    var wrapper = $('#wrapper');
    var hiddenMenu = $('#hiddenGlobalMenu');
    var menuAnimating = false;
    var progressPieObj = $('#progresspie');
    var profressPieOptionPC = {
        value: 50,
        size: 48,
        ringWidth: 2,
        strokeWidth: 1,
        color: '#FFFFFF',
        strokeColor: '#2b2b2b',
        ringAlign: $.fn.progressPie.RingAlign.CENTER,
        update: true,
    };
    var profressPieOptionSP = {
        value: 50,
        size: 28,
        ringWidth: 1,
        strokeWidth: 1,
        color: '#FFFFFF',
        strokeColor: '#2b2b2b',
        ringAlign: $.fn.progressPie.RingAlign.CENTER,
        update: true,
    };

    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if (st > 100 && !wrapper.hasClass('scrolled')) {
            wrapper.addClass('scrolled');
        }
        if (st <= 100 && wrapper.hasClass('scrolled')) {
            wrapper.removeClass('scrolled');
        }
        var progressPer = st / ($(document).height() - $(window).height()) * 100;
        updateProgressCircle(progressPer);
    });
    updateProgressCircle(0);

    $('#openMenu').click(function() {
        if (menuAnimating) return false;
        menuAnimating = true;
        if (!wrapper.hasClass('openMenu')) {
            wrapper.addClass('openMenu');
            hiddenMenu.show();
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            setTimeout(function() {
                hiddenMenu.addClass('open');
                menuAnimating = false;
            }, 100);
        } else {
            hiddenMenu.removeClass('open');
            document.removeEventListener('touchmove', handleTouchMove, { passive: false });
            setTimeout(function() {
                wrapper.removeClass('openMenu');
            }, 400);
            setTimeout(function() {
                hiddenMenu.hide();
                menuAnimating = false;
            }, 1400);
        }
        return false;
    });

/*
    var showreelObj = $('#top02 .content .showreel');
    var showreelCenter = {
        x: showreelObj.outerWidth() / 2,
        y: showreelObj.outerHeight() / 2,
    };
*/
    if (!isTouchDevice()) {
        $('#top02 .content .showreel, #top .viewAllCirle').on({
            'mousemove': function(e) {
                var showreelCenter = {
                    x: $(this).outerWidth() / 2,
                    y: $(this).outerHeight() / 2,
                };
                var x =  (e.clientX - $(this).offset().left) - showreelCenter.x;
                var y =  (e.pageY - $(this).offset().top) - showreelCenter.y;
                if (x > showreelCenter.x || x < showreelCenter.x * -1 || y > showreelCenter.y || y < showreelCenter.y * -1) {
                    x = 0;
                    y = 0;
                }
                $(this).find('.arr').stop().animate({
                    left: x,
                    top: y,
                }, 300, 'easeOutExpo');
            },
            'mouseleave': function() {
                $(this).find('.arr').animate({
                    left: 0,
                    top: 0,
                }, 400, 'easeOutExpo');
            }
        });
    }

    function updateProgressCircle(value) {
        var defaultOption = $(window).width() > 1100 ? profressPieOptionPC : profressPieOptionSP;
        defaultOption.valueAdapter = function(){
            return value;
        };
        progressPieObj.setupProgressPie(defaultOption).progressPie();
    }

    window.updateProgress = function(value) {
        updateProgressCircle(value);
    }

    function handleTouchMove(event) {
        event.preventDefault();
    }

});

$(function() {

    setMouseStoker();

})

function setMouseStoker () {
    if (isTouchDevice()) {
        return;
    }

    var mouseStoker = $('#mouseStoker');
    var wrapper = $('#wrapper');
    var msWidth = $('#mouseStoker').width();
    var start = false;

    $(document).on('mousemove', function(e) {
        setTimeout(function(){
            mouseStoker.css({
                left: (e.pageX - (msWidth / 2)),
                top: e.pageY - (msWidth / 2) - $(window).scrollTop()
            });
        }, start ? 50 : 0);
        start = true;

    });

    $('a').on({
        'mouseenter': function() {
            mouseStoker.addClass('onAnchor');
        },
        'mouseleave': function() {
            mouseStoker.removeClass('onAnchor');
        }
    });
}


$(function() {

    var loadingTimer = null;

    $(window).load(function() {
        setTimeout(function() {
            clearInterval(loadingTimer);
            $('#wrapper').addClass('loaded');
            if (window.loadingCallback) {
                window.loadingCallback();
            }
            setTimeout(function() {
                window.updateProgress(0);
                // $("#globLoading").remove();
            }, 1000);
        }, 2000);
    });

    loadingTimer = setInterval(function() {
        for (var i = 1; i <= 100; i ++) {
            updateProgressExec(i, 0, 100, 800);
        }
    }, 1200);

    function updateProgressExec(step, fromVal, toVal, duration){
        setTimeout(function(){
            var val = jQuery.easing.easeOutCubic(null, (duration / 100) * step, fromVal, toVal, duration)
            window.updateProgress(val);
        }, (duration / 100) * step);
    }

    setLazyLoad($(".glichBG"));
    setLazyLoad($(".worksArticle"));
    setLazyLoad($('#news .newsArticle'));
    setLazyLoad($('#top03 .articles .newsArticle'));
});

function setLazyLoad(glichBGs){
    var target = [];
    if(glichBGs.length <= 0){
        return;
    }
    for(var i = 0; i < glichBGs.length; i++){
        target.push(glichBGs.eq(i).get(0));
    }
    let observer = new IntersectionObserver(onChange, {
        // rootMargin : '-10px'
    });
    function onChange(changes) {
        for(var i = 0; i < changes.length; i++){
            var change = changes[i];
            if(change.isIntersecting){
                $(change.target).addClass("active activated");
            } else {
                $(change.target).removeClass("active");
            }
        }
    }
    for(var i = 0; i < target.length; i++){
        observer.observe(target[i]);
    }
}
