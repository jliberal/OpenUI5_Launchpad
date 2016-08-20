sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("cl.absys.jpl.desarrollos.launchpad.controller.Menu", {
		onInit: function(){
			//Visibilidad
			var	oViewModel = new JSONModel({
					busy : true,
					delay : 0
			});
			this.getView().setModel(oViewModel, "appView");			
			//Router
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.attachRouteMatched(this.handleRouteMatched, this);
			//Device
			this._oRouter = this.getOwnerComponent().getModel("device");
			//css
			var oCont = this.getView().byId("sidePageId");
			oCont.addStyleClass("sideBar");
			oCont = this.getView().byId("docPic");
			oCont.addStyleClass("centerFlex");
			oCont = this.getView().byId("docImgId");
			oCont.addStyleClass("imageRadius");
			oCont = this.getView().byId("appList");
		},
		onAfterRendering : function() {
    		// busy
    		var oModel = this.getView().getModel("appView");
    		var iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
			this.fnSetAppNotBusy(oModel,iOriginalBusyDelay);
		 },
		fnSetAppNotBusy: function(oViewModel, vDelay) {
			oViewModel.setProperty("/busy", false);
			oViewModel.setProperty("/delay", vDelay);
		},
		handlePressHome: function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("apps", {}, true /*no history*/);
		},
		handleRouteMatched: function(evt) {
			//Check whether is the detail page is matched.
			if (evt.getParameter("name") === "Grafico") {
				return;
			}	
		},
		handleUserItemPressed: function(oEvent){
			var oButton = oEvent.getSource();
			if(!this._oPopover){
				this._oPopover = sap.ui.xmlfragment("cl.absys.jpl.desarrollos.launchpad.view.Reminders",this);
				this.getView().addDependent(this._oPopover);
			}
			jQuery.sap.delayedCall(0, this, function () {
				this._oPopover.openBy(oButton);
			});
		} 
	});

});