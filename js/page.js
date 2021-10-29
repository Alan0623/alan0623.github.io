/*---------------------------------------------
Scroll Effect
---------------------------------------------*/
$(function() {
  $('.to_article1').stop().click(function() {
    $('html,body').animate({scrollTop: 0}, 600);
    return false;
  });


  $('.to_article2').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article2').offset().top - 206}, 600);
    return false;
  });
  $('.to_article3').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article3').offset().top - 206}, 600);
    return false;
  });
  $('.to_article4').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article4').offset().top - 206}, 600);
    return false;
  });
  $('.to_article5').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article5').offset().top - 206}, 600);
    return false;
  });
  $('.to_article6').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article6').offset().top - 206}, 600);
    return false;
  });
  $('.to_article7').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article7').offset().top - 206}, 600);
    return false;
  });
  $('.to_article8').stop().click(function() {
    $('html,body').animate({scrollTop: $('#article8').offset().top - 206}, 600);
    return false;
  });
});
