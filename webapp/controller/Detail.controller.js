sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/controller/BaseController",
  "com/diegodossantos95/MMPSFrontend/model/models",
  "com/diegodossantos95/MMPSFrontend/model/formatter" 
], function (Controller, models, formatter) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Detail", {
    formatter: formatter,
    _sEntity: null,
    _sId: null,
      
    onInit: function () {
      this._initRoute();
    },
      
    //Actions
    onSavePress: function(){
      models.saveEntityDetailModel(this._sEntity, this._sId);  
    },
      
    onCancelPress: function(){
      models.resetEntityDetailModel(this._sEntity, this._sId);
    },
      
    onDeletePress: function(){
      models.deleteEntityDetailModel(this._sEntity, this._sId, this._deleteSuccess.bind(this));
    },
    
    // private function
    _initRoute: function () {
      this.getRouter().getRoute('Detail').attachPatternMatched(this._routeMatch, this);
    },
      
    _routeMatch: function (oEvent) {
      this._sEntity = oEvent.getParameter("arguments").entity;
      this._sId = oEvent.getParameter("arguments").id;
      this._requestModels();
    },
      
    _requestModels: function(){
      var oModel = models.getEntityDetailModel(this._sEntity, this._sId);
      this.getView().setModel(oModel, "Detail"); 
    },
      
    _deleteSuccess: function(){
      this.getRouter().navTo("SplitApp", {
        entity: this._sEntity
      });    
    }
  });
});