$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var $nav = $('.nav');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $nav.height()
        }, 900, 'swing');
    });
});