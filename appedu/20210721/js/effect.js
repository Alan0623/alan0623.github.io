$(function() {
    var o = $.extend(!0, {}, $.fancybox.defaults, {
        caption: function(o, n) {
            return $(this).next("figcaption").html()
        }
    });
    $('[data-fancybox="images"]').fancybox(o)
});
/*------------------------------------------------------------------
老師照片
------------------------------------------------------------------*/
$(function(){
    $("body").removeClass("no_js");
    console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."), 
    console.log("Front-end programming By Ｗei-Ching Lin");
	// 先取得相關區塊及圖片的寬高
	// 並先計算出大圖片要垂直置中所需要的 top 值
	var $gallery = $('.teacher_img'), 
        timrt, speed = 3000;
		$frame = $gallery.find('ul.teacher'), 
		_frameHeight = $frame.height(), 
		_frameWidth = $frame.width(), 
		$li = $frame.find('li'), 
		$img = $li.find('img'), 
		_imgLength = $img.length, 
		_imgWidth = $img.width(),
		_imgHeight = $img.height(),
		_topDiff = (_frameHeight - _imgHeight) / 2, 
		_animateSpeed = 200;
 
	// 設定每張圖片縮放比例
	// _totalWidth 用來記錄寬度累加
	var resizeRatio = [ 0.9, 1, 0.9], 
		liCss = [], 
		_totalWidth = 0;
 
	// 預先算出每張圖片縮放後的總寬度
	var _m = 0;
	$img.each(function(i){ 
		_m += $(this).width() * resizeRatio[i];
	});
	// 平均分配要重疊的寬度
	var _leftDiff = Math.ceil((_m - _frameWidth) / (_imgLength - 1));
 
	// 設定每一個 li 的位置及圖片寬高
	$li.each(function(i){
		var $this = $(this), 
			_width = _imgWidth * resizeRatio[i],
			_height = _imgHeight * resizeRatio[i];
 
		liCss.push({
			height: _height, 
			width: _width, 
			left: _totalWidth  + (i == _imgLength - 1 ? 1 : 0), 
			top: _topDiff + (_imgHeight - _height) / 2, 
			zIndex: resizeRatio[i] * 10
		});
 
		$this.css(liCss[liCss.length-1]).css({
			position: 'absolute',
			border: '0px solid white'
		}).data('_index', i).find('img').css({
			width: '100%', 
			height: '100%'
		});
 
		_totalWidth += _width - _leftDiff;
	});
 
	// 當滑鼠點擊在 $gallery 中的 .controls 時
	$gallery.on('click', '.controls', function(){
		var $button = $(this);
 
		// 重新計算每一個 li 的位置及圖片寬高
		$li.each(function(){
			var $this = $(this), 
				_index = $this.data('_index');
 
			_index = ($button.hasClass('next') ? (_index - 1 + _imgLength) : (_index + 1)) % _imgLength;
			$this.data('_index', _index);
 
			$this.stop(false, true).animate(liCss[_index], _animateSpeed);
		});
        return false;
	});
});
$(function(){
    //左右鍵 點擊時 偵測 中間是哪位老師
    $(".controls.previous").on('click', function(){
        if ($(this).hasClass("B")) {
            $('.title li.A a').click();
            $('.controls').removeClass('B').removeClass('C').addClass('A');
        } else if ($(this).hasClass("A")) {
            $('.title li.C a').click();
            $('.controls').removeClass('A').removeClass('B').addClass('C');
        } else if ($(this).hasClass("C")) {
            $('.title li.B a').click();
            $('.controls').removeClass('A').removeClass('C').addClass('B');
        }
    });
    $(".controls.next").on('click', function(){
        if ($(this).hasClass("B")) {
            $('.title li.C a').click();
            $('.controls').removeClass('A').removeClass('B').addClass('C');
            
        } else if ($(this).hasClass("A")) {
            $('.title li.B a').click();
            $('.controls').removeClass('A').removeClass('C').addClass('B');
        } else if ($(this).hasClass("C")) {
            $('.title li.A a').click();
            $('.controls').removeClass('B').removeClass('C').addClass('A');
        }
    });
});

$(function(){
	// 先取得 #teacher_img , 必要參數及輪播間隔
	var $block = $('.teacher_img'), 
		timrt, speed = 3000;
 
	// 幫 #teacher_img .title ul li 加上 hover() 事件
	var $li = $('.title ul li', $block).hover(function(){
		// 當滑鼠移上時加上 .over 樣式
		$(this).addClass('over').siblings('.over').removeClass('over');
	}, function(){
		// 當滑鼠移出時移除 .over 樣式
		$(this).removeClass('over');
	}).click(function(){
		// 當滑鼠點擊時, 顯示相對應的 div.info
		// 並加上 .on 樣式
		var $this = $(this);
		$this.add($('.intro .info', $block).eq($this.index())).addClass('on').siblings('.on').removeClass('on');
	});
 
	// 幫 $block 加上 hover() 事件
	// $block.hover(function(){
	// 	// 當滑鼠移上時停止計時器
	// 	clearTimeout(timer);
	// }, function(){
	// 	// 當滑鼠移出時啟動計時器
	// 	timer = setTimeout(move, 3000);
	// });
 
	// // 控制輪播
	// function move(){
	// 	var _index = $('.title ul li.on', $block).index();
	// 		_index = (_index + 1) % $li.length;
	// 	$li.eq(_index).click();
        
	// 	timer = setTimeout(move, speed);
	// }
 
	// // 啟動計時器
	// timer = setTimeout(move, speed);
});

/*------------------------------------------------------------------
頁籤

$(function(){
	// 預設顯示第一個頁籤
	// 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
	// 同時也要取得 .tab_content 的寬
	var _default = 0, 
		$block = $('.block_tips'), 
		$tabs = $block.find('.tabs'), 
		$tabsLi = $tabs.find('a'), 
		$tab_content = $block.find('.tab_content'), 
		$tab_contentLi = $tab_content.find('.li'), 
		_width = $tab_content.width();
 
	// 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
	// 移出時要移除 .hover 樣式
	$tabsLi.hover(function(){
		var $this = $(this);
 
		// 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
		if($this.hasClass('active')) return;
 
		$this.toggleClass('hover');
	}).click(function(){	// 當滑鼠點擊 .tabs li 時
		// 先取出被點擊及目前顯示的頁籤與索引
		var $active = $tabsLi.filter('.active').removeClass('active'), 
			_activeIndex = $active.index(),  
			$this = $(this).addClass('active').removeClass('hover'), 
			_index = $this.index(), 
			isNext = _index > _activeIndex;
 
		// 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
		if(_activeIndex == _index) return;
 
		// 依索引大或小來決定移動的位置
		$tab_contentLi.eq(_activeIndex).stop().animate({
			left: isNext ? -_width : _width
		}).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
			left: 0
		});

	});
 
	// 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
	$tabsLi.eq(_default).addClass('active');
	$tab_contentLi.eq(_default).siblings().css({
		left: _width
	});

});
------------------------------------------------------------------*/
$(function(){
	$('.tabs1').on('click', function(){
		$('.tabs > a').removeClass("active");
		$('.tab_content > li').removeClass("active");
		$('.tabs1').addClass('active');
		$('.li1').addClass('active');
	});
	$('.tabs2').on('click', function(){
		$('.tabs > a').removeClass("active");
		$('.tab_content > li').removeClass("active");
		$('.tabs2').addClass('active');
		$('.li2').addClass('active');
	});
	$('.tabs3').on('click', function(){
		$('.tabs > a').removeClass("active");
		$('.tab_content > li').removeClass("active");
		$('.tabs3').addClass('active');
		$('.li3').addClass('active');
	});
});
/*------------------------------------------------------------------
問卷等高
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

	$('.sameHeight2').each(function() {
        $(this).height('auto');
        if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
    });
    $('.sameHeight2').each(function() {
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

		$('.sameHeight2').each(function() {
            $(this).height('auto');
            if (maxHeight < $(this).height()) { maxHeight = $(this).height() }
        });
        $('.sameHeight2').each(function() {
            $(this).height(maxHeight);
        });
    });
});


/*------------------------------------------------------------------
第一次出場動畫
------------------------------------------------------------------*/
$(function(){
	
	$('.content_main_Visual .title').removeClass('ready-animate').addClass('run-animate');
	$('.content_questions').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_questions').offset().top;
		if(  $WS >  $RO ) {
			$('.content_questions').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_teacher').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_teacher').offset().top;
		if(  $WS >  $RO ) {
			$('.content_teacher').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.intro').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.intro').offset().top;
		if(  $WS >  $RO ) {
			$('.intro').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_tips').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_tips').offset().top;
		if(  $WS >  $RO ) {
			$('.content_tips').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.ol_animate').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.ol_animate').offset().top;
		if(  $WS >  $RO ) {
			$('.ol_animate').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_download').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_download').offset().top;
		if(  $WS >  $RO ) {
			$('.content_download').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_lottery').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_lottery').offset().top;
		if(  $WS >  $RO ) {
			$('.content_lottery').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();

	$('.content_form').addClass('ready-animate');
	$(window).on('scroll', function(){
		var $WH = $(window).height() * 0.75;
		var $WS = $(window).scrollTop() + $WH;
		var $RO = $('.content_form').offset().top;
		if(  $WS >  $RO ) {
			$('.content_form').removeClass('ready-animate').addClass('run-animate');
		}
	}).scroll();
});
