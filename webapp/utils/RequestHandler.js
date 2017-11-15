sap.ui.define([
  'com/diegodossantos95/MMPSFrontend/utils/connector/BackendConnector'
], function (BackendConnector) {
  "use strict";

  return {
    getEntityList: function(sEntityName, fnSuccess, fnError){
      BackendConnector.doGet({
        urlConstant: sEntityName
      }, fnSuccess, fnError);
    }
  };
});