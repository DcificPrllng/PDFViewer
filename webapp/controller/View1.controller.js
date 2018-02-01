sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("PD.TotalCompStatement.controller.View1", {
		onInit: function() {
			var oViewModel = new JSONModel({
				busy: false,
				title: ""
			});
			this.getView().setModel(oViewModel, "view");
		},
		onAfterRendering: function() {
			// this.viewPDF();
		},
		onLoadComplete: function() {
			this.getView().getModel("view").setProperty("/busy", false);
		},
		onPressPrint: function() {
			this.getView().byId("form").print();
		},
		onPressDownload: function() {
			var sUrl = this.getView().byId("form").getSrc();
			window.open(sUrl.replace("FileUsage=''", "FileUsage='download'"));
		},
		onPressZoomIn: function() {
			var oForm = this.getView().byId("form");
			oForm.zoomIn();
		},
		onPressZoomOut: function() {
			var oForm = this.getView().byId("form");
			oForm.zoomOut();
		},
		viewPDF: function() {
			var oViewModel = this.getView().getModel("view");
			oViewModel.setProperty("/busy", true);
			var requestURL = "/sap/opu/odata/sap/ZTCS_SRV/TCSFormSet('1')/$value";
			this.getView().byId("form").setUrl(requestURL);
		}
	});
});