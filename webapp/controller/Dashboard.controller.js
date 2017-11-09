sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/diegodossantos95/MMPSFrontend/model/models"
], function (Controller, models) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Dashboard", {
    onInit: function(){
      this.getView().setModel(models.getDashboardModel(), "Dashboard");
    },
    
    onTilePress: function(oEvent){
      var oTile = oEvent.getSource();
      var sView = oTile.data("view");
      console.log(sView); 
    }
  });
});