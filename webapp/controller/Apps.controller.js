sap.ui.define([
		"cl/absys/jpl/desarrollos/launchpad/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/core/routing/History",
		"sap/m/MessageToast"
	], function (BaseController, JSONModel, formatter, FilterOperator, History, MessageToast) {
		"use strict";
		return BaseController.extend("cl.absys.jpl.desarrollos.launchpad.controller.Apps", {
			onInit : function (evt) {
				var oCont = this.getView().byId("container");
					oCont.addStyleClass("customBackground");
				// set mock model
				/*
				var sPath = jQuery.sap.getModulePath("cl.absys.jpl.desarrollos.menu.model", "/apps.json");
				var oModel = new JSONModel(sPath);
				this.getView().setModel(oModel);*/
			},
			/*handleTile : function(oEvent){
				var link = oEvent.getSource().getBindingContext().getProperty("link");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            	oRouter.navTo(link);
<<<<<<< HEAD

					oCont.addStyleClass("customBackground"); 
				// set mock model
				/*
				var sPath = jQuery.sap.getModulePath("cl.absys.jpl.desarrollos.menu.model", "/apps.json");
				var oModel = new JSONModel(sPath);
				this.getView().setModel(oModel);
			}, */
			/*handleTile : function(oEvent){
				var link = oEvent.getSource().getBindingContext("logondata").getProperty("link");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            	oRouter.navTo("appCont",{
	            	"objectId": link,
	            	"from": "apps"
	            },false);

					oCont.addStyleClass("customBackground"); 
				// set mock model
				/*
				var sPath = jQuery.sap.getModulePath("cl.absys.jpl.desarrollos.menu.model", "/apps.json");
				var oModel = new JSONModel(sPath);
				this.getView().setModel(oModel);
			},
			//Git*/
			handleTile : function(oEvent){
				var link = oEvent.getSource().getBindingContext("logondata").getProperty("link");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            	oRouter.navTo("appCont",{
	            	"objectId": link,
	            	"from": "apps"
	            },false);

			}
		});
	}	
);