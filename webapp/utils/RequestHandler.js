sap.ui.define([
  'com/diegodossantos95/MMPSFrontend/utils/connector/BackendConnector'
], function (BackendConnector) {
  "use strict";

  return {
    getEntityList: function(sEntityName, fnSuccess, fnError){
      BackendConnector.doGet({
        urlConstant:'ENTITY',
        keys: [sEntityName]
      }, fnSuccess, fnError);
    },
      
    getEntityDetail: function(sEntityName, sEntityId, fnSuccess, fnError){
      BackendConnector.doGet({
        urlConstant:'BY_ID',
        keys: [sEntityName, sEntityId]
      }, fnSuccess, fnError);
    },
      
    saveEntityDetail: function(sEntityName, sEntityId, oData, fnSuccess, fnError){
      BackendConnector.doPut({
        urlConstant:'BY_ID',
        keys: [sEntityName, sEntityId]
      }, oData, fnSuccess, fnError);
    },
      
    deleteEntity: function(sEntityName, sEntityId, fnSuccess, fnError){
      BackendConnector.doDelete({
        urlConstant:'BY_ID',
        keys: [sEntityName, sEntityId]
      }, fnSuccess, fnError);
    },
      
    saveCreateEntity: function(sEntityName, oData, fnSuccess, fnError){
      BackendConnector.doPost({
        urlConstant:'ENTITY',
        keys: [sEntityName]
      }, oData, fnSuccess, fnError);
    }
  };
});