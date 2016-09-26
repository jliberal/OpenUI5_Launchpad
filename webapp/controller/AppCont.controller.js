sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"cl/absys/jpl/desarrollos/launchpad/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function(Controller,BaseController, JSONModel, History) {
	"use strict";
	return BaseController.extend("cl.absys.jpl.desarrollos.launchpad.controller.AppCont", {
		onInit: function(){
			this._oView = this.getView();
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
			this._oRouter = this._oComponent.getRouter();
			this._oRouter.attachRoutePatternMatched(this._onRoutePatternMatched, this);	
			//Loading Model
			var oViewModel = new JSONModel({});
			//this.getView().setModel(oViewModel,"params");
		},
		_onRoutePatternMatched: function(oEvent){
			if (oEvent.getParameter("name") === "appCont") {
				var oKey = oEvent.getParameters();
				var vKey = oKey.arguments.objectId;
				this.createPanelContent(vKey);
			}else if(oEvent.getParameter("name") === "apps"){
				this.destroyPanelContent();
			}
			/*var oKey = oEvent.getParameters();
			var vKey = oKey.arguments.objectId;
			//Registramos origen
			var vOrigen = vKey.substring(0,1);
			var oModelData = this.getView().getModel("params").getData();
			oModelData.source = vOrigen;
			this.getView().getModel("params").setData(oModelData);
			//llamamos a creador
			var pdfURL = this.getPdfUrl(vKey);
			this.createPanelContent(pdfURL);*/
		},
		onNavBack: function(oEvent){
			this.destroyPanelContent();
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("apps", {}, true /*no history*/);
			}
		},
		destroyPanelContent: function(){
			//var lv_viewName = this.getView().sId;
            //var lv_panelName = lv_viewName + "--pdfPanel";
            var oPanel = this.getView().byId("pdfPanel");
            //var oPanel = sap.ui.getCore().byId(lv_panelName);
            //var oPanel = sap.ui.getCore().byId("pdfPanel");
            oPanel.destroyContent();			
		},
		createPanelContent: function(vURL){ 
            var oHtml = new sap.ui.core.HTML({  
              content:'<object type="application/pdf" data="'+vURL+'#toolbar=1&navpanes=1&scrollbar=1" width="100%" height="100%" id="appObj">'
            });
            //var oPanel = this.getView().byId("appContPanel");
            //oPanel.addStyleClass("sapUiNoContentPadding");
            //oPanel.addContent(oHtml);	
            //var oPage = this.getView().byId("appContPage");
            //oPage.addContent(oHtml);
    		// Create a Ui container 
    		var oCompCont1 = new sap.ui.core.ComponentContainer("CompCont1", {
    			component: ""
			});
    		// place this Ui Container with the Component inside into UI Area 
    		oCompCont1.placeAt("appContPage"); 
		},
		getPdfUrl: function(iv_request){
			var lv_url = "/sap/opu/odata/sap/ZGW_HR_MSS_SRV/";
			var lv_path = "pdfSet('" + iv_request + "')"; 
			var lv_query = "/$value";
			var pdfURL = lv_url+lv_path+lv_query;
			return pdfURL; 
		}
	});

});