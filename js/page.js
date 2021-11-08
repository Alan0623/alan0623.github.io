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

/*------------------------------------------------------------------
//products_detail.html 等高
------------------------------------------------------------------*/
$(function(){
  var maxHeight = 0;
  $('.products_show>li .products_name').each(function() {
      $(this).height('auto');
      if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
  });
  $('.products_show>li .products_name').each(function() {
      $(this).height(maxHeight);
  });

  $(window).resize(function() {
      var maxHeight = 0;
      $('.products_show>li .products_name').each(function() {
          $(this).height('auto');
          if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
      });
      $('.products_show>li .products_name').each(function() {
          $(this).height(maxHeight);
      });
  });
});
/*------------------------------------------------------------------
//QUALITY CENTER
------------------------------------------------------------------*/
$(function(){
	// 預設顯示第一個 Tab
	var _showTab = 0;
	$('.article_tab').each(function(){
		// 目前的頁籤區塊
		var $tab = $(this);
 
		var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).removeClass('hide_list').siblings().addClass('hide_list');
 
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li', $tab).click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().removeClass('hide_list').siblings().addClass('hide_list');
 
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
});