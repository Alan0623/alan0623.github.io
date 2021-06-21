// JavaScript Document
//城市資料
function LoadCityData(ObjectName) {

	$(ObjectName + " #selLiveCity").empty();
	$(ObjectName + " #selLiveCity").append($("<option></option>").val("").text("請選擇縣市"));
	$(ObjectName + " #selLiveArea").empty();
	$(ObjectName + " #selLiveArea").append($("<option></option>").val("").text("請選擇地區"));


	$(ObjectName + " #selLiveArea").val("");
	$(ObjectName + " #selLiveArea").change();

	$.ajax({
		url: "/Librarys/_ajax/Address.php",

		type: "POST",
		dataType: "json",
		data: {
			postFlag: "LoadCity"
		},
		success: function(response) {
			if (response.result == "true") {

				$.each(response.data, function(k, v) {
					$(ObjectName + " #selLiveCity").append($("<option></option>").val(v.id).text(v.name));
				});


			}
			$(ObjectName + " #selLiveCity").change(function(e) {
				LoadAreaData(ObjectName,$(this).val());
			});



		}


	});


}			



//地區資料
function LoadAreaData(ObjectName,CityID) {



	$(ObjectName + " #selLiveArea").empty();
	$(ObjectName + " #selLiveArea").append($("<option></option>").val("").text("請選擇地區"));
	$(ObjectName + " #selLiveArea").change();




	$.ajax({
		url: "/Librarys/_ajax/Address.php",
		type: "POST",
		dataType: "json",
		data: {
			postFlag: "LoadArea",
			CityID: CityID
		},
		success: function(response) {

			if (response.result == "true") {

				$.each(response.data, function(k, v) {
					$(ObjectName + " #selLiveArea").append($("<option></option>").val(v.id).text(v.name));
				});

			}



		}


	});




}			



function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test($email);
}

function validateCellPhone($CellPhone) {
	var CellPhoneReg = /^[09]{2}[0-9]{8}$/;
	return CellPhoneReg.test($CellPhone);

}