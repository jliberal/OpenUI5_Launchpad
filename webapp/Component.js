sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"cl/absys/jpl/desarrollos/launchpad/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("cl.absys.jpl.desarrollos.launchpad.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});