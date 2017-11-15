sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "com/diegodossantos95/MMPSFrontend/utils/RequestHandler"
], function (JSONModel, RequestHandler) {
  "use strict";

  return {
    _entityListModel: new JSONModel(),
      
    getDashboardModel: function(){
      var oModel = new JSONModel();
      oModel.loadData("./model/data/DashboardTiles.json", {}, false);
      return oModel;
    },
      
    getEntityListModel: function(sEntityName){
      this._getEntityList(sEntityName);
      return this._entityListModel;
    },
      
    //PRIVATE FUNCTIONS
    _getEntityList: function(sEntityName){
      RequestHandler.getEntityList(sEntityName, this._getEntityListSuccess.bind(this), this._requestError.bind(this));
    },
      
    _getEntityListSuccess: function(oResponse){
       this._entityListModel.setData(oResponse); 
    },
      
    _requestError: function(){
      alert("error");
    }
  };
});