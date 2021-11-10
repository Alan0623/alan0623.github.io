const appedu = {
  post: (elem, done, fail) => {
      const form = $(elem), btn = form.find(':submit,button[type="submit"]')

      btn.prop("disabled", true)

      let opts = {
          url: form.attr('action'),
          type: 'post',
          dataType: 'json',
          data: form.serialize() + '&_token=' + $('meta[name="csrf-token"]').attr('content'),
          success: function (r) {
              if (done) done.call(elem, r)
              else swal('申請完成', '表單申請已成功送出', 'success')
          },
          error: function (x, s, t) {
              if (fail) fail.call(elem, x, s, t)
              else if (t) {
                  swal('錯誤', s + ': ' + t + '!', 'error')
              } else {
                  const json = JSON.parse(x.responseText),
                      msg = json.error ?? json.msg ?? x.responseText;
                  swal('錯誤', msg, 'error')
              }
          }
      }

      $.ajax(opts).always(() => {
          btn.prop('disabled', false)
      })
  },
  scrollTo: (elem, top) => {
      const pos = $(elem).offset()
      if ( ! pos) return false;
      window.scrollTo({
          top: pos.top - 100 - (top ?? 0),
          behavior: 'smooth'
      })
  }
}
/*------------------------------------------------------------------
預約諮詢
------------------------------------------------------------------*/
$(function(){
  if ($(window).width() > 501) {
    setTimeout(function(){
      $(".audit_fixed").removeClass("selected");
      $(".audit_btn").removeClass("open");
    }, 3000);
  } else {
    $(".audit_fixed").removeClass("selected");
    $(".audit_btn").removeClass("open");
  };

  $(".audit_btn").on('click', function () {
    $(this).toggleClass("open"),
    $(".audit_fixed").toggleClass("selected");
  });

  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $(".audit_fixed").removeClass("selected")
      $(".audit_btn").removeClass("open")
    }
  })

  $('#social_audit').on('click', function(){
    $('.audit_btn').trigger('click')
  })

  // 視聽課程
  var course_options = '';
  var data = [
    '商業視覺平面設計',
    '前端網頁設計',
    'UI視覺介面設計',
    '數位繪畫',
    '創意工業產品設計',
    '商業攝影',
    '微電影導演',
    'AE影視特效實戰',
    '數位成音',
    '2D動畫製作',
    '遊戲角色美術企劃',
    'Unity3D遊戲設計',
    '4D動態影像設計',
    'AutoCad設計實務',
    '室內設計實務',
    'SketchUp空間建模',
    '室內設計乙級認證班',
    '網路行銷玩起來',
    'Keynote創意簡報製作',
    '創意Line貼圖製作',
    '創意插畫實用技法',
    '手機也能玩出單眼樂趣',
    'Final Cut Pro風格影片剪輯',
    '職場生涯規劃',
    '個人作品集製作'
  ];
  $.each(data, function(index, value){
      course_options += '<option>' + value + '</option>';
  });
  $('select.courses').append(course_options);

  // 縣市選單 init
  $.ajax({
    type: "GET",
    url: '/cities',
    dataType: "json",
    success: function(data){
      var html = "";
      $.each(data, function(index, value){
          html += '<option value="' + value.id + '">' + value.name + '</option>';
      });
      $("select.cities").append(html);
    },
    error: function (xhr, ajaxOptions, thrownError){
      console.log(xhr, ajaxOptions, thrownError);
    }
  });

  // 鄉鎮市區 init
  $("select.cities").on('change',function(){
    var _this = $(this);
    var id = _this.val();
    var zips = _this.parents(".zones").find("select.zips");
    $.ajax({
      type: "GET",
      url: "/" + id + "/zip",
      dataType: "json",
      success: function(data){
        var html = '<option value="">請選擇居住地區</option>';
        $.each(data, function(index, value){
          html += '<option value="' + value.id + '">' + value.name + '</option>';
        });
        zips.html(html);
        zips.show();
      },
      error: function (xhr, ajaxOptions, thrownError){
        console.log(xhr, ajaxOptions, thrownError);
      }
    });
  });

  // Form Submit Disabled
  $("form.interactive_form").on('change', ':input:not(:button,:submit)', function(){
    const submit = $(this.form).find(".form_submit_btn");
    if(this.value.trim() == ""){
      submit.prop("disabled",true).removeClass("no_disabled");
      return true;
    }
    const emptys = $(this.form).find(':input:visible:not(:button,:submit)').filter(function(){
      return this.value.trim() == "";
    });
    const disable = emptys.length > 0;
    submit.prop("disabled",disable).toggleClass("no_disabled", !disable);
  });
  $('form.auditForm').on('submit', function(e){
    e.preventDefault();
    const form = $(this);
    appedu.post(this, function(){
      if (form.is('#audit_form')) {
        form.parent('.audit_fixed').removeClass('selected');
        swal('申請完成', '表單申請已成功送出', 'success');
      } else {
        form.hide().siblings('.success_inform_box').fadeIn(500);
      }
      qg('event', 'form_submit_sign up');
      qg('identify', {
        'course' : form.find('select[name="course"] option:selected').text(),
        'email': form.find('input[name="email"]').val(),
        'phoneNo': form.find('input[name="cellphone"]').val()
      });
    });
  });

  // if ($(window).width() > 502) {
  //   $(window).scroll(function() {
  //     if ( $(this).scrollTop() > 34){
  //         $(".audit_fixed").removeClass("selected"),
  //         $(".audit_btn").removeClass("open");
  //     } else {
  //     }
  //   });
  // } else {
  //   $(".audit_fixed").removeClass("selected");
  //   $(".audit_btn").removeClass("open");
  // };

  // $(window).resize(function() {
  //   if ($(window).width() > 502) {
  //     $(window).scroll(function() {
  //       if ( $(this).scrollTop() > 34){
  //           $(".audit_fixed").removeClass("selected"),
  //           $(".audit_btn").removeClass("open");
  //       } else {
  //       }
  //     });
  //   } else {
  //     $(".audit_fixed").removeClass("selected");
  //     $(".audit_btn").removeClass("open");
  //   };
  // });


  $(".mobile_modal_close_btn").click(function () {
    $(".audit_fixed").removeClass("selected");
    $(".audit_btn").removeClass("open");
  });
});
/*------------------------------------------------------------------
主選單
------------------------------------------------------------------*/
$(function(){
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 34){
        $('.header').addClass('fixed');
        // $(".audit_fixed").removeClass("selected"),
        // $(".audit_btn").removeClass("open");
    } else {
        $('.header').removeClass('fixed');
    }
  });
  $("body").removeClass("no_js");
  console.log("Hello!! Nice to see you.(\u30fb\u2200\u30fb)."),
  console.log("Front-end programming By Ｗei-Ching Lin");
  $(".open_nav").click(function () {
      $(this).toggleClass("open"),
      $(".menu").toggleClass("open_menu");
      window.addEventListener("resize", function () {
        $(window).width() > 768 && ($(".menu").removeAttr("style").removeClass("open_menu"),
          $(".open_nav").removeClass("open"))
      })
  });
  $(".sub_menu_title,sub_menu").on('mouseenter', function() {
    $(this).addClass("open");
    $(".sub_menu,.main_menu").addClass("open");
  }).on('mouseleave', function() {
    $(this).removeClass("open");
    $(".sub_menu,.main_menu").removeClass("open");
  });
});
/*------------------------------------------------------------------
手機版選單
------------------------------------------------------------------*/
$(function(){
  $("#mobile_menu").on('click', function(e) {
    $(this).toggleClass('open');
    $("#mobile_scroll_menu").toggleClass('menu_show');
  });
});

/*------------------------------------------------------------------
社群
------------------------------------------------------------------*/
$(function(){
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 800){
        $('.social_links').addClass('show');
    } else {
        $('.social_links').removeClass('show');
    }
  });
});

/*------------------------------------------------------------------
//回最上面
------------------------------------------------------------------*/
$(function(){
  $(".footer a.gotop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});