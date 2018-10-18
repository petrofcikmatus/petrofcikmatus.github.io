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

  $('.section__paragraph').each(function () {
    var str = $(this).html();
    str = str.replace(/(\s|^)(a|i|k|o|s|u|v|z)(\s+)([^\p{Cc}\p{Cf}\p{zL}\p{Zp}]+)/gmi, '$1$2&nbsp;$4');
    $(this).html(str);
  });
});
