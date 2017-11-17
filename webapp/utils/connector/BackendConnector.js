sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/utils/connector/UrlProvider"
], function (UrlProvider) {
  "use strict";

  var BackendConnector = sap.ui.base.Object.extend("com.diegodossantos95.MMPSFrontend.utils.connector.BackendConnector", {
    _sDefaultContentType: "application/json",

    doGet: function (sUrlConstant, fnSuccess, fnError) {
      return this._doAjaxCall('GET', sUrlConstant, null, fnSuccess, fnError, null);
    },
     
    doDelete: function (sUrlConstant, fnSuccess, fnError) {
      return this._doAjaxCall('DELETE', sUrlConstant, null, fnSuccess, fnError);
    },
      
    doPost: function (sUrlConstant, oData, fnSuccess, fnError) {
      return this._doAjaxCall('POST', sUrlConstant, oData, fnSuccess, fnError);
    },
      
    doPatch: function (sUrlConstant, oData, fnSuccess, fnError) {
      return this._doAjaxCall('PATCH', sUrlConstant, oData, fnSuccess, fnError);
    },

    doPut: function (sUrlConstant, oData, fnSuccess, fnError) {
      return this._doAjaxCall('PUT', sUrlConstant, oData, fnSuccess, fnError);
    },

    _doAjaxCall: function (sHttpMethod, sUrlConstant, oData, fnSuccess, fnError, oHeaders) {
      var mConfig = {};
      mConfig.type = sHttpMethod;
      mConfig.success = fnSuccess;
      mConfig.error = fnError;
            
      if (oHeaders){
        mConfig.headers = oHeaders;   
      }
            
      if (sHttpMethod !== 'GET' && !!oData) {
        mConfig.data = JSON.stringify(oData);
        mConfig.contentType = this._sDefaultContentType;
      }
            
      if (typeof sUrlConstant === "object") {
        var mParams = sUrlConstant;
        mConfig.url = UrlProvider.getUrl(mParams.urlConstant, mParams.keys);
      } else {
        mConfig.url = UrlProvider.getUrl(sUrlConstant);
      }
            
      return jQuery.ajax(mConfig);
    }

  });

  return new BackendConnector();
});