function doGet(e) {
  //取得參數
  var params = e.parameter; 
  var checkedInputRegionValues = params.checkedInputRegionValues;
  var addressValue = params.addressValue;
  var checkedInputPriceValues = params.checkedInputPriceValues;
  var alltime = params.alltime;
  var time9 = params.time9;
  var time13 = params.time13;
  var time18 = params.time18;
  var info_personal_name = params.info_personal_name;
  var info_decoration_age = params.info_decoration_age;
  var info_line_id = params.info_line_id;
  var info_indoor_decoration = params.info_indoor_decoration;
  var info_contact_number = params.info_contact_number;
  var shopTypeValue = params.shopTypeValue;
  var special_needs_description = params.special_needs_description;
  var interior_style_modern = params.interior_style_modern;
  var interior_style_MUJI = params.interior_style_MUJI;
  var interior_style_luxurious = params.interior_style_luxurious;
  var interior_style_industrial = params.interior_style_industrial;
  var interior_style_nordic = params.interior_style_nordic;
  var renovation = params.renovation;
  var expansion = params.expansion;
  var structural_strengthening = params.structural_strengthening;
  var tin_house_renovation = params.tin_house_renovation;
  var water_and_electricity_reconnected = params.water_and_electricity_reconnected;
  var whole_room_door_and_window_planning = params.whole_room_door_and_window_planning;
  var soft_decoration_planning = params.soft_decoration_planning;
  var wall_cancer_and_wet_water_treatment = params.wall_cancer_and_wet_water_treatment;

  //sheet資訊
  var SpreadSheet = SpreadsheetApp.openById("1OjQ_NRANkgbAKzNEX8Wsa4Kg9y_9i4V65ITDFZvmrW8");
  var Sheet = SpreadSheet.getSheets()[0];
  var LastRow = Sheet.getLastRow();

  //存入資訊
  Sheet.getRange(LastRow+1, 1).setValue(checkedInputRegionValues);
  Sheet.getRange(LastRow+1, 2).setValue(addressValue);
  Sheet.getRange(LastRow+1, 3).setValue(checkedInputPriceValues);
  Sheet.getRange(LastRow+1, 4).setValue(alltime);
  Sheet.getRange(LastRow+1, 5).setValue(time9);
  Sheet.getRange(LastRow+1, 6).setValue(time13);
  Sheet.getRange(LastRow+1, 7).setValue(time18);
  Sheet.getRange(LastRow+1, 8).setValue(info_personal_name);
  Sheet.getRange(LastRow+1, 9).setValue(info_decoration_age);
  Sheet.getRange(LastRow+1, 10).setValue(info_line_id);
  Sheet.getRange(LastRow+1, 11).setValue(info_indoor_decoration);
  Sheet.getRange(LastRow+1, 12).setValue(info_contact_number);
  Sheet.getRange(LastRow+1, 13).setValue(shopTypeValue);
  Sheet.getRange(LastRow+1, 14).setValue(special_needs_description);
  Sheet.getRange(LastRow+1, 15).setValue(interior_style_modern);
  Sheet.getRange(LastRow+1, 16).setValue(interior_style_MUJI);
  Sheet.getRange(LastRow+1, 17).setValue(interior_style_luxurious);
  Sheet.getRange(LastRow+1, 18).setValue(interior_style_industrial);
  Sheet.getRange(LastRow+1, 19).setValue(interior_style_nordic);
  Sheet.getRange(LastRow+1, 20).setValue(renovation);
  Sheet.getRange(LastRow+1, 21).setValue(expansion);
  Sheet.getRange(LastRow+1, 22).setValue(structural_strengthening);
  Sheet.getRange(LastRow+1, 23).setValue(tin_house_renovation);
  Sheet.getRange(LastRow+1, 24).setValue(water_and_electricity_reconnected);
  Sheet.getRange(LastRow+1, 25).setValue(whole_room_door_and_window_planning);
  Sheet.getRange(LastRow+1, 26).setValue(soft_decoration_planning);
  Sheet.getRange(LastRow+1, 27).setValue(wall_cancer_and_wet_water_treatment);

  //回傳資訊
  return ContentService.createTextOutput("成功");
}