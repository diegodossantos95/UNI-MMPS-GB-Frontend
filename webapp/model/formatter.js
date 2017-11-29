sap.ui.define([
], function() {
  "use strict";

  return {
    isAvailable: function(oValue){
      return oValue !== undefined;
    },
      
    formatTreeName: function(sInitials, sName){
      if(sInitials != "" && sInitials != undefined){
        sInitials = "[" + sInitials + "] ";
      }else{
        sInitials = "";
      }
      return sInitials + sName;
    }
  };
});