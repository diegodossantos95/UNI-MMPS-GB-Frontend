sap.ui.define([
  'com/diegodossantos95/MMPSFrontend/utils/connector/URLS'
],function(URLS){
  "use strict";
    
  var UrlProvider = sap.ui.base.Object.extend("com.diegodossantos95.MMPSFrontend.utils.connector.BaseConnector", {
    _mURLS: URLS,
    
    getUrl: function(sUrlConstant, aKeys){
      var sURL = this._mURLS[sUrlConstant];
      
      if (!sURL){
        throw new Error('Url defined by Constant: ' + sUrlConstant + ' not found in UrlProvider.js');
      }
      
      if (aKeys) {
        aKeys.forEach(function(sKey){
          sURL = sURL.replace('$', sKey);
        });
      }
        
      return sURL;
    }
  });
    
  return new UrlProvider();
});