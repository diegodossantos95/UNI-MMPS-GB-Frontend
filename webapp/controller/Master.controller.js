sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/controller/BaseController",
  "com/diegodossantos95/MMPSFrontend/model/models"
], function (Controller, models) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Master", {
      
    onInit: function () {
      this._initRoute();
    },
      
    // private function
    _initRoute: function () {
      this.getRouter().getRoute('SplitApp').attachPatternMatched(this._routeMatch, this);
    },
      
    _routeMatch: function (oEvent) {
      var sEntity = oEvent.getParameter("arguments").entity;
      var oModel = models.getEntityListModel(sEntity);
      this.getView().setModel(oModel, "Master");
    }
  });
});