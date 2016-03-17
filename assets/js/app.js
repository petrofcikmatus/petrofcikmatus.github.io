(function (window, document, $, undefined) {
    $(document).ready(function () {
        // hide charmander loading
        //$('.loading-container').fadeOut();

        // set GA triggers
        $('.ga-mailto').on('click', function(){
            ga('send', 'event', 'link', 'mailto');
        });

        $('.ga-tel').on('click', function(){
            ga('send', 'event', 'link', 'tel');
        });

        $('.ga-itnetwork.cz').on('click', function(){
            ga('send', 'event', 'link', 'itnetwork.cz');
        });

        $('.ga-webissimo.sk').on('click', function(){
            ga('send', 'event', 'link', 'webissimo.sk');
        });

        $('.ga-fvojtas.com').on('click', function(){
            ga('send', 'event', 'link', 'fvojtas.com');
        });

        $('.ga-other').on('click', function(){
            ga('send', 'event', 'link', 'other');
        });
    });
})(window, document, jQuery);