//Form
$(function(){

    const $form = $(".form-distribution");
    const GET_LOCATION_ENDPOINT = "https://www.appedu.com.tw/Librarys/_ajax/Address.php";
    const DISTRIBUTION_ENDPOINT = "https://www.appedu.com.tw/Librarys/_ajax/Distribution.php";

    $(".checkbox").on("click",function(){
        $(".checkbox").removeClass("selected");
        $(this).addClass("selected");
    });
    function loadLocation(options){
        let $cityElement = options.city.element;
        let $areaElement = options.area.element;
        $cityElement.html(
            $("<option>").text(options.city.defaultLabel).val("")
        );
        $areaElement.html(
            $("<option>").text(options.area.defaultLabel).val("")
        );
        //load city data
        $.ajax({
            url: GET_LOCATION_ENDPOINT,
            type: "POST",
            dataType: "json",
            data: {postFlag: "LoadCity"}
        })
        .done(function(response){
            if(response.result == "true"){
                response.data.forEach(function(v){
                    $cityElement.append(
                        $("<option>").val(v.id).text(v.name)
                    );
                });
            }
        })
        .fail(function(){
            alert(options.city.errorMessage);
        });
        //listen to city and load area data
        $cityElement.change(function(){
            $areaElement.html(
                $("<option>").text(options.area.defaultLabel).val("")
            );
            $.ajax({
                url: GET_LOCATION_ENDPOINT,
                type: "POST",
                dataType: "json",
                data:{
                    postFlag: "LoadArea",
                    CityID: $(this).val()
                }
            })
            .done(function(response){
                if(response.result == "true"){
                    response.data.forEach(function(v){
                        $areaElement.append(
                            $("<option>").val(v.id).text(v.name)
                        );
                    });
                }
            })
            .fail(function(){
                alert(options.area.errorMessage);
            });
        });
    }

    $.validator.addMethod(
        "cellphone",
        function(value,element){
            var reg = /^[09]{2}[0-9]{8}$/;
            return this.optional(element) || reg.test(value);
        },
        "Please enter a valid cellphone."
    );

    function distributionSubmitHandler(options){
        return function(form){
            let $attended = $(form).find(".attend :checked");
            let $level_checkbox = $(form).find(".level :checked");
            let $message_area = $("#message_area");
            let $eip_remark_text = "我對UI介面設計的熟悉程度是:"+$level_checkbox.val()+"，是否參與講座活動:"+$attended.val()+"，我想詢問:"+$message_area.val();
            $.ajax({
                url: DISTRIBUTION_ENDPOINT,
                type: "POST",
                dataType: "json",
                data: {
                    postFlag: "InsertData",
                    distribution_id: form.distribution.value,
                    media_sub_id: form.mediaSub.value,
                    outlet_sub_id: form.outletSub.value,
                    type: form.type.value,
                    course: form.course.value,
                    name: form.name.value,
                    cellphone: form.cellphone.value,
                    email: form.email.value,
                    zip_id: form.area.value,
                    remark: $eip_remark_text,
                    gift: form.gift && form.gift.value
                }
            })
            .done(function(response){
                if($attended.val() == "想參加"){
                    window.location.href="https://www.accupass.com/event/2109150326502129819220";
                }else if($attended.val() == "不想參加"){
                    window.location.href="https://www.facebook.com/events/882436036000543/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22page_admin_bar%22%2C%22surface%22%3A%22page%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22events_admin_tool%22%2C%22surface%22%3A%22page%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22create_dialog%22%7D]%2C%22ref_notif_type%22%3Anull%7D&onload_action=online_event_upsell_dialog";
                }
                if(response.result == "true"){
                    alert(options.successMessage);
                    // $("body").addClass("lightbox");
                }else{
                    console.error(response);
                    alert("資料送出失敗，請聯絡我們或再試一次");
                    // $(".lightbox_article p").text("資料送出失敗，請聯絡我們或再試一次");
                    // $("body").addClass("lightbox");
                }
            })
            .fail(function(error){
                console.error(error)
                alert("網路問題無法傳送資料，請聯絡我們或再試一次");
                // $(".lightbox_article p").text("網路問題無法傳送資料，請聯絡我們或再試一次");
                // $("body").addClass("lightbox");
            });
            return false;
        };
    }

    loadLocation({
        city:{
            element:$form.find("[name=city]"),
            defaultLabel:"請選縣市",
            errorMessage:"無法載入縣市資料"
        },
        area:{
            element:$form.find("[name=area]"),
            defaultLabel:"請選地區",
            errorMessage:"無法載入地區資料"
        }
    });
    $form.validate({
        submitHandler: distributionSubmitHandler({
            successMessage: "資料已送出，將安排專人與您聯絡",
            errorMessage: "您輸入的資料有誤或者已輸入過相同資料"
        }),
        rules:{
            name:"required",
            email: {required:true, email:true},
            cellphone: {required:true, cellphone:true},
            city:"required",
            area:"required",
            remark:"required",
            level_checkbox:"required",
            attended:"required",
            course:"required",
            agreement:"required"
        },
        messages:{
            name: "請輸入您的姓名",
            email:{
                required:"請輸入您的E-mail信箱",
                email:"請輸入有效的E-mail信箱"
            },
            cellphone:{
                required:"請輸入您的聯絡電話",
                cellphone:"請輸入有效的聯絡電話"
            },
            city:"請選擇縣市",
            area:"請選擇地區",
            remark:"您尚未選擇您對攝影的熟悉程度",
            level_checkbox:"此選項必須勾選一個",
            attended:"此選項必須勾選一個",
            course:"請選擇想學課程",
            agreement:"您尚未接受隱私權使用條款"
        }
    });
});