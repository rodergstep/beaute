jQuery(window).on("load", function() {
    "use strict";

});

jQuery(document).ready(function($) {
    "use strict";

    /* -----------------------------------------
     Main Navigation Init
     ----------------------------------------- */
    $('ul#navigation').superfish({
        delay: 300,
        cssArrows: false,
        animation: { opacity: 'show', height: 'show' },
        speed: 'fast',
        dropShadows: false
    });

    /* -----------------------------------------
     Homepage Fullscreen Slider Init
     ----------------------------------------- */
    $(document).on('init.slides', function() {
        $('.loading-container').fadeOut(function() {
            $(this).remove();
        });
    });

    if ($("#slides").length) {
        $("#slides").superslides({
            animation: 'fade',
            play: 6000,

        });
    }


    /* -----------------------------------------
     Lightbox Init (Fancybox)
     ----------------------------------------- */
    $(".fb").fancybox();


});