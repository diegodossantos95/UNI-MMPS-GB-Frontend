sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Dashboard", {
    onInit: function(){
      var oModel = new JSONModel({
        tiles: [
          {
            icon:"",
            title:"Categoria"
          },
          {
            icon:"",
            title:"Area de processo"
          }
        ]
      });
      this.getView().setModel(oModel, "Dashboard");
    },
    
    onTilePress: function(oEvent){
      console.log(oEvent); 
    }
  });
});