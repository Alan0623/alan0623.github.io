// JavaScript Document
$(function(){

    const $form = $(".form-distribution");
    const GET_LOCATION_ENDPOINT = "https://www.appedu.com.tw/Librarys/_ajax/Address.php";
    const DISTRIBUTION_ENDPOINT = "https://www.appedu.com.tw/Librarys/_ajax/Distribution.php";

    //Form
    $(".checkbox").on("click",function(){
        // $(this).data("value", $(".checkbox").val());
        $(".checkbox").removeClass("selected");
        $(".checkbox:checked").addClass("selected");
    });


    //當checkbox為透明 以before 當做假checkbox
    //出現.error訊息後 再次點擊checkbox 出現before
    $("#course1").on("click",function(){
        $("input#course1.error").parents("label").addClass("selected");
        $("input#course1[aria-invalid=false]").parent("label").removeClass("selected");
    });
    $(".form-check-input").on("click",function(){
        $("input.form-check-input.error").parents("label").addClass("selected");
        $("input.form-check-input[aria-invalid=false]").parent("label").removeClass("selected");
    });

    //關lightbox
    $(".gopage,.close_lightbox").on("click",function(){
        $("body").removeClass("lightbox");
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
            let $checkbox1 = $("#course1.selected").val();
            let $checkbox2 = $("#course2.selected").val();
            let $checkbox3 = $("#course3.selected").val();
            let $checkbox4 = $("#course4.selected").val();
            let $checkbox5 = $("#course5.selected").val();
            let $checkbox6 = $("#course6.selected").val();
            let $checkbox7 = $("#course7.selected").val();
            let $checkbox8 = $("#course8.selected").val();
            let $checkbox9 = $("#course9.selected").val();
            let $checkbox10 = $("#course10.selected").val();
            let $checkbox = $checkbox1+$checkbox2+$checkbox3+$checkbox4+$checkbox5+$checkbox6+$checkbox7+$checkbox8+$checkbox9+$checkbox10;
            // let $message_area = $("#message_area");
            let remark_text = "我想參與"+$checkbox;
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
                    remark: remark_text,
                    gift: form.gift && form.gift.value
                }
            })
            .done(function(response){
                if(response.result == "true"){
                    // alert(options.successMessage);
                    $("body").addClass("lightbox");
                    // top.location.href = "https://bit.ly/3dqYVhD";
                }else{
                    console.error(response);
                    alert("資料送出失敗，請聯絡我們或再試一次");
                }
            })
            .fail(function(error){
                console.error(error)
                alert("網路問題無法傳送資料，請聯絡我們或再試一次");
            });
            return false;
        };
    }

    loadLocation({
        city:{
            element:$form.find("[name=city]"),
            defaultLabel:"選擇縣市",
            errorMessage:"無法載入縣市資料"
        },
        area:{
            element:$form.find("[name=area]"),
            defaultLabel:"選擇地區",
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
            remark:"您尚未選擇想學課程",
            course:"請選擇想學課程",
            agreement:"您尚未接受隱私權使用條款"
        }
    });
});