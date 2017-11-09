sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function (JSONModel, Device) {
  "use strict";

  return {
    getDeviceModel: function () {
      var oDeviceModel = new JSONModel({
        isTouch : Device.support.touch,
        isNoTouch : !Device.support.touch,
        isPhone : Device.system.phone,
        isNoPhone : !Device.system.phone
      });
      oDeviceModel.setDefaultBindingMode("OneWay");
      return oDeviceModel;
    },
      
    getDashboardModel: function(){
      var oModel = new JSONModel();
      oModel.loadData("./model/data/DashboardTiles.json", {}, false);
      return oModel;
    }
  };
});