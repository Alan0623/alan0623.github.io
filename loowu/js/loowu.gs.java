function doGet(e) {
  //取得參數
  var params = e.parameter; 
  var checkedInputRegionValues = params.checkedInputRegionValues;
  var addressValue = params.addressValue;
  var checkedInputPriceValues = params.checkedInputPriceValues;
  var checkedInputTimeValues = params.checkedInputTimeValues;
  var info_personal_name = params.info_personal_name;
  var info_decoration_age = params.info_decoration_age;
  var info_line_id = params.info_line_id;
  var info_indoor_decoration = params.info_indoor_decoration;
  var info_contact_number = params.info_contact_number;
  var shopTypeValue = params.shopTypeValue;
  var special_needs_description = params.special_needs_description;
  var checkedInputinterior_styleValues = params.checkedInputinterior_styleValues;
  var checkedInputplanning_needsValues = params.checkedInputplanning_needsValues;

  //sheet資訊
  var SpreadSheet = SpreadsheetApp.openById("1OjQ_NRANkgbAKzNEX8Wsa4Kg9y_9i4V65ITDFZvmrW8");
  var Sheet = SpreadSheet.getSheets()[0];
  var LastRow = Sheet.getLastRow();

  //存入資訊
  Sheet.getRange(LastRow+1, 1).setValue(checkedInputRegionValues);
  Sheet.getRange(LastRow+1, 2).setValue(addressValue);
  Sheet.getRange(LastRow+1, 3).setValue(checkedInputPriceValues);
  Sheet.getRange(LastRow+1, 4).setValue(checkedInputTimeValues);
  Sheet.getRange(LastRow+1, 5).setValue(info_personal_name);
  Sheet.getRange(LastRow+1, 6).setValue(info_decoration_age);
  Sheet.getRange(LastRow+1, 7).setValue(info_line_id);
  Sheet.getRange(LastRow+1, 8).setValue(info_indoor_decoration);
  Sheet.getRange(LastRow+1, 9).setValue(info_contact_number);
  Sheet.getRange(LastRow+1, 10).setValue(shopTypeValue);
  Sheet.getRange(LastRow+1, 11).setValue(special_needs_description);
  Sheet.getRange(LastRow+1, 12).setValue(checkedInputinterior_styleValues);
  Sheet.getRange(LastRow+1, 13).setValue(checkedInputplanning_needsValues);

  //回傳資訊
  return ContentService.createTextOutput("成功");
}