sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox"		
	], function (Controller, MessageBox) {
		"use strict";

		return Controller.extend("cl.absys.jpl.desarrollos.launchpad.controller.BaseController", {
			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this component
			 */
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},
			sendMessage: function(Messtype,message){
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
				var style = "{styleClass: bCompact? 'sapUiSizeCompact' : ''}";
				switch (Messtype) {
					case "E":
						MessageBox.error(message, style);
						break;
					case "S":
						MessageBox.success(message, style);
						break;
					case "W":
						MessageBox.warning(message, style);
						break;
					default:
						MessageBox.information(message, style);
					break;	
				}
			},
			/**
			 * Convenience method for getting the view model by name.
			 * @public
			 * @param {string} [sName] the model name
			 * @returns {sap.ui.model.Model} the model instance
			 */
			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			/**
			 * Convenience method for setting the view model.
			 * @public
			 * @param {sap.ui.model.Model} oModel the model instance
			 * @param {string} sName the model name
			 * @returns {sap.ui.mvc.View} the view instance
			 */
			setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},

			/**
			 * Getter for the resource bundle.
			 * @public
			 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
			 */
			getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},

			/**
			 * Event handler when the share by E-Mail button has been clicked
			 * @public
			 */
			onShareEmailPress : function () {
				var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
				sap.m.URLHelper.triggerEmail(
					null,
					oViewModel.getProperty("/shareSendEmailSubject"),
					oViewModel.getProperty("/shareSendEmailMessage")
				);
			}
		});

	}
);