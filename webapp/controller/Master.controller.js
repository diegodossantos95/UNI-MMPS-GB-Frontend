sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/controller/BaseController",
  "com/diegodossantos95/MMPSFrontend/model/models"
], function (Controller, models) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Master", {
    _sEntity: null,
      
    onInit: function () {
      this._initRoute();
    },
      
    //ACTIONS
    onItemPress: function(oEvent) {
      var oSource = oEvent.getSource();
      var sBinding = oSource.getBindingContextPath("Master");
      var oEntity = this.getModel("Master").getProperty(sBinding);
      var iId = oEntity.id;
      this.getRouter().navTo("Detail", {
        entity: this._sEntity,
        id: iId
      });
    },
      
    // private function
    _initRoute: function () {
      this.getRouter().getRoute('SplitApp').attachPatternMatched(this._routeMatch, this);
      this.getRouter().getRoute('Detail').attachPatternMatched(this._routeMatch, this);
    },
      
    _routeMatch: function (oEvent) {
      this._sEntity = oEvent.getParameter("arguments").entity;
      var oModel = models.getEntityListModel(this._sEntity);
      this.getView().setModel(oModel, "Master");
    }
  });
});