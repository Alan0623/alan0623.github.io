$(function() {
    var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
        caption : function( instance, item ) {
            return $(this).next('figcaption').html();
        }
    });

    // Shortcut to apply options to image gallery
    function applyImgOpts() {
        $('[data-fancybox="images"]').fancybox(imgOpts);
    }

    $("#imgOpts select").change(function () {
        var opt = $(this).attr("id");
        var val = $(this).val();

        imgOpts[opt] = val === "" ? false : val;

        // Make "fade" transiton faster than others
        if (opt === 'transitionEffect') {
            imgOpts['transitionDuration'] = opt === 'fade' ? 330 : 550;
        }

        applyImgOpts();
    });

    $("#imgOpts input[type=radio][name=lang]").on("change", function () {
        imgOpts.lang = $(this).val();

        applyImgOpts();
    });

    $("#imgOpts .toggle").change(function () {
        if (this.id === 'thumbs') {
            imgOpts.thumbs.autoStart = this.checked ? true : false;
        } else {
            imgOpts[this.id] = this.checked ? true : false;
        }

        applyImgOpts();
    });

    $("#imgOpts .buttons").change(function () {
        var buttonArr = $('input:checkbox:checked.buttons').map(function () {
            return this.value;
        }).get();

        buttonArr.push('close');

        imgOpts.buttons = buttonArr;

        applyImgOpts();
    });

    applyImgOpts();
});