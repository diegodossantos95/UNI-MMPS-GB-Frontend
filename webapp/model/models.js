sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "com/diegodossantos95/MMPSFrontend/utils/RequestHandler"
], function (JSONModel, RequestHandler) {
  "use strict";

  return {
    _entityListModel: new JSONModel(),
    _entityDetailModel: new JSONModel(),
    _entityRelationshipModel: new JSONModel(),
      
    getDashboardModel: function(){
      var oModel = new JSONModel();
      oModel.loadData("./model/data/DashboardTiles.json", {}, false);
      return oModel;
    },
      
    getEntityListModel: function(sEntityName){
      this._getEntityList(sEntityName);
      return this._entityListModel;
    },
      
    //Entity Detail Model
    getEntityDetailModel: function(sEntityName, sEntityId, fnSuccess) {
      this._getEntityDetail(sEntityName, sEntityId, fnSuccess);
      return this._entityDetailModel; 
    },
      
    saveEntityDetailModel: function(sEntityName, sEntityId, fnSuccess){
      var oData = this._entityDetailModel.getData();
      RequestHandler.saveEntityDetail(sEntityName, sEntityId, oData, this._getEntityDetailSuccess.bind(this, fnSuccess), this._requestError.bind(this));
    },
      
    deleteEntityDetailModel: function(sEntityName, sEntityId, fnSuccess){
      RequestHandler.deleteEntity(sEntityName, sEntityId, fnSuccess, this._requestError.bind(this));
    },
      
    // Create Entity Model
    getCreateEntityModel: function(sEntityName) {
      var oModel = new JSONModel();
      oModel.loadData("./model/data/" + sEntityName + ".json", {}, false);
      this._loadRelationships(oModel.getData());
      return oModel; 
    },
      
    saveCreateEntityModel: function(sEntityName, oData, fnSuccess){
      RequestHandler.saveCreateEntity(sEntityName, oData, fnSuccess, this._requestError.bind(this));
    },
      
    // Relationships
    getRelationshipModel: function(){
      return this._entityRelationshipModel; 
    },
      
    //PRIVATE FUNCTIONS
    // List
    _getEntityList: function(sEntityName){
      RequestHandler.getEntityList(sEntityName, this._getEntityListSuccess.bind(this), this._requestError.bind(this));
    },
      
    _getEntityListSuccess: function(oResponse){
      this._entityListModel.setData(oResponse); 
    },
      
    // Detail
    _getEntityDetail: function(sEntityName, sEntityId, fnSuccess){
      this._entityDetailModel.setData({});
      RequestHandler.getEntityDetail(sEntityName, sEntityId, this._getEntityDetailSuccess.bind(this, fnSuccess), this._requestError.bind(this));
    },
      
    _getEntityDetailSuccess: function(fnSuccess, oResponse){
      this._entityDetailModel.setData(oResponse); 
      this._loadRelationships(oResponse);
      if(fnSuccess){
        fnSuccess();
      }
    },
      
    _loadRelationships: function(oResponse){
      this._entityRelationshipModel.setData({});
      var property;
      for (property in oResponse) {
        if(oResponse[property].id != undefined){
          this._loadCollection(property);
        }else if(property == "specificPractices"){
          this._loadCollection("specificPractice");      
        }
      }
    },
      
    _loadCollection: function(sCollectionName){
      RequestHandler.getEntityList(sCollectionName, this._loadCollectionSuccess.bind(this, sCollectionName), this._requestError.bind(this));
    },
      
    _loadCollectionSuccess: function(sCollectionName, oResponse){
      this._entityRelationshipModel.setProperty("/" + sCollectionName, oResponse);
    },
      
    _requestError: function(){
      alert("error");
    }
  };
});