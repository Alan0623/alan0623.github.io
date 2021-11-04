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
/*------------------------------------------------------------------
//products_detail_list.html 切換樣式
------------------------------------------------------------------*/
$(function() {
  $('.display_block').stop().click(function() {
    $(this).toggleClass("active");
    $('.display_list').removeClass("active");
    $('.products_show').removeClass("show_list");
    $('.products_show').addClass("show_block");
    return false;
  });
  $('.display_list').stop().click(function() {
    $(this).toggleClass("active");
    $('.display_block').removeClass("active");
    $('.products_show').removeClass("show_block");
    $('.products_show').addClass("show_list");
    return false;
  });
});
/*------------------------------------------------------------------
//products_detail.html 等高
------------------------------------------------------------------*/
$(function(){
  var maxHeight = 0;
  $('.sameHeight').each(function() {
      $(this).height('auto');
      if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
  });
  $('.sameHeight').each(function() {
      $(this).height(maxHeight);
  });

  $(window).resize(function() {
      var maxHeight = 0;
      $('.sameHeight').each(function() {
          $(this).height('auto');
          if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
      });
      $('.sameHeight').each(function() {
          $(this).height(maxHeight);
      });
  });
});