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
      models.saveEntityDetailModel(this._sEntity, this._sId, this._loadDetailModelSuccess.bind(this));  
    },
      
    onCancelPress: function(){
      this.getRouter().navTo("SplitApp", {
        entity: this._sEntity
      }); 
    },
      
    onDeletePress: function(){
      models.deleteEntityDetailModel(this._sEntity, this._sId, this._deleteSuccess.bind(this));
    },
      
    onSpecificPraticesSelectionFinish: function(oEvent){
      var aItems = oEvent.getParameter("selectedItems");
      var aElements = [];
        
      for(var i = 0; i < aItems.length; i++){
        aElements.push({
          id: aItems[i].getKey()
        });
      }
        
      var oModel = this.getModel("Detail");
      oModel.setProperty("/specificPractices", aElements);
    },
      
    // private function
    _initRoute: function () {
      this.getRouter().getRoute('Detail').attachPatternMatched(this._routeMatch, this);
    },
      
    _routeMatch: function (oEvent) {
      this._sEntity = oEvent.getParameter("arguments").entity;
      this._sId = oEvent.getParameter("arguments").id;
      this._requestModels();
      this._setView();
    },
      
    _setView: function(){
      if(this._sEntity == "model"){
        this.byId("idModelTree").setVisible(true); 
      }else{
        this.byId("idModelTree").setVisible(false); 
      }  
    },
      
    _requestModels: function(){
      var oModel = models.getEntityDetailModel(this._sEntity, this._sId, this._loadDetailModelSuccess.bind(this));
      this.setModel(oModel, "Detail");
      
      var oModel2 = models.getRelationshipModel();
      this.setModel(oModel2, "Relationship");
    },
      
    _loadDetailModelSuccess: function(){
      if(this._sEntity == "workProduct"){
        this._loadComboBoxSelectedItems();  
      }
    },
    
    _loadComboBoxSelectedItems:function(){
      var oModel = this.getModel("Detail");
      var aItems = oModel.getProperty("/specificPractices");
      var aSelectedKeys = [];
        
      for(var i = 0; i < aItems.length; i++){
        aSelectedKeys.push(aItems[i].id); 
      }
        
      var oComboBox = this.byId("idComboBoxSpecificPractice");
      oComboBox.setSelectedKeys(aSelectedKeys);
    },
      
    _deleteSuccess: function(){
      this.getRouter().navTo("SplitApp", {
        entity: this._sEntity
      });    
    }
  });
});