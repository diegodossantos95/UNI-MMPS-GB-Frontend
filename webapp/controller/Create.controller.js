sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/controller/BaseController",
  "com/diegodossantos95/MMPSFrontend/model/formatter",
  "com/diegodossantos95/MMPSFrontend/model/models"
], function (Controller, formatter, models) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Create", {
    formatter: formatter,
    _sEntity: null,
      
    onInit: function () {
      var oRouter, oTarget;
      oRouter = this.getRouter();
      oTarget = oRouter.getTarget("Create");
      oTarget.attachDisplay(function (oEvent) {
        this._sEntity = oEvent.getParameter("data").entity; //store the data
        this._loadModel();
      }, this);
    },
      
    //Actions
    onSavePress: function(){
      var oModel = this.getView().getModel("Create");
      models.saveCreateEntityModel(this._sEntity, oModel.getData(), this._createEntitySuccess.bind(this));
    },
      
    onCancelPress: function(){
      this.getRouter().getTargets().display("Empty");
    },
      
    // Private functions
    _loadModel: function(){
      var oModel = models.getCreateEntityModel(this._sEntity);
      this.getView().setModel(oModel, "Create");
    },
      
    _createEntitySuccess: function(oResponse){
      var iId = oResponse.id;
      this.getRouter().navTo("Detail", {
        entity: this._sEntity,
        id: iId
      });
    }
  });
});