/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("PD.TotalCompStatement.controls.EmbedPdfRenderer");PD.TotalCompStatement.controls.EmbedPdfRenderer={};
PD.TotalCompStatement.controls.EmbedPdfRenderer.render=function(r,c){var a=r;a.write("<iframe ");a.writeControlData(c);a.write("src='");a.write(c.getSrc());a.write("#view=fitH'");a.addClass("embedPdf");a.writeClasses();a.addStyle("width","99.6%");a.addStyle("height","99.1%");a.writeStyles();a.write("type='application/pdf'");a.write(">");a.write("</iframe>");};