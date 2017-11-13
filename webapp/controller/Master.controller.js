sap.ui.define([
  "com/diegodossantos95/MMPSFrontend/controller/BaseController"
], function (Controller) {
  "use strict";
  return Controller.extend("com.diegodossantos95.MMPSFrontend.controller.Master", {
      
    onInit: function () {
      this._initRoute();
    },
      
    // private function
      
    _initRoute: function () {
      this.getRouter().getRoute('SplitApp').attachPatternMatched(this._routeMatch, this);
    },
      
    _routeMatch: function (oEvent) {
      var sEntity = oEvent.getParameter("arguments").entity;
      console.log(sEntity);
    }
  });
});