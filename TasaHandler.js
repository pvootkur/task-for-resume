var constants = {
		'PROTOCOL': 'http',	   
		'URL':'10.146.166.25',
		'PORT':'8080',
		'APPNAME': 'Tasa'
};

var URL =constants.PROTOCOL+"://"+constants.URL+":"+constants.PORT+"/"+constants.APPNAME;

app.service('frmGLAccountHandler',function(ajaxService){
	var	curURL =URL+"/FrmGLAccountController";
	
	this.cmdinsertclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxPost(itemData, curURL+"/cmdinsertclick",successFunction,errorFunction);
	}
	this.cmdqueryclick=function(itemData,successFunction,errorFunction){	 
		ajaxService.AjaxPost(itemData, curURL+"/cmdqueryclick",successFunction,errorFunction);
	}
	this.formload=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(itemData, curURL+"/formload",successFunction,errorFunction);
	}
	this.cmdsaveclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxPost(itemData, curURL+"/cmdsaveclick",successFunction,errorFunction);
	}
});



app.service('frmGLPeriodHandler',function(ajaxService){
	var curURL =URL+"/FrmGLAccountController";
	this.adodcerror=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/adodcerror",successFunction,errorFunction);
	}
	this.cmdcloseclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdcloseclick",successFunction,errorFunction);
	}
	this.cmdinsertclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdinsertclick",successFunction,errorFunction);
	}
	this.cmdqueryclick=function(itemData,successFunction,errorFunction){
	}
	this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdrefreshclick",successFunction,errorFunction);
	}
	this.datagridafterupdate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridafterupdate",successFunction,errorFunction);
	}
	this.datagridbeforecolupdate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridbeforecolupdate",successFunction,errorFunction);
	}
	this.datagridbeforeupdate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridbeforeupdate",successFunction,errorFunction);
	}
	this.validate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/validate",successFunction,errorFunction);
	}
	this.datagriderror=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagriderror",successFunction,errorFunction);
	}
	this.datagridkeypress=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridkeypress",successFunction,errorFunction);
	}
	this.datagridlostfocus=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridlostfocus",successFunction,errorFunction);
	}
	this.datagridonaddnew=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridonaddnew",successFunction,errorFunction);
	}
	this.datagridrowcolchange=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/datagridrowcolchange",successFunction,errorFunction);
	}
	this.formactivate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formactivate",successFunction,errorFunction);
	}
	this.formdeactivate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formdeactivate",successFunction,errorFunction);
	}
	this.formload=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formload",successFunction,errorFunction);
	}
	this.formatdatagrid=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formatdatagrid",successFunction,errorFunction);
	}
	this.mnufileexitclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mnufileexitclick",successFunction,errorFunction);
	}
	this.formresize=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formresize",successFunction,errorFunction);
	}
	this.formunload=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formunload",successFunction,errorFunction);
	}
	this.txtdatevalidate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtdatevalidate",successFunction,errorFunction);
	}
	this.txtmonthkeypress=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtmonthkeypress",successFunction,errorFunction);
	}
	this.txtdatekeypress=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtdatekeypress",successFunction,errorFunction);
	}
	this.txtmonthvalidate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtmonthvalidate",successFunction,errorFunction);
	}
	this.txtyearkeypress=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtyearkeypress",successFunction,errorFunction);
	}
	this.txtyearvalidate=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/txtyearvalidate",successFunction,errorFunction);
	}
});

app.service('BatchProcessControlHandler',function(ajaxService){
	var curURL =URL+"/FrmGLAccountController";

	this.cmdqueryclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdqueryclick",successFunction,errorFunction);
	}
	this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdrefreshclick",successFunction,errorFunction);
	}
	this.formload=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formload",successFunction,errorFunction);
	}
	this.formatdatagrid=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formatdatagrid",successFunction,errorFunction);
	}
	this.mshflexgrid1dragdrop=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mshflexgrid1dragdrop",successFunction,errorFunction);
	}
	this.mshflexgrid1mousedown=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mshflexgrid1mousedown",successFunction,errorFunction);
	}
	this.mshflexgrid1mousemove=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mshflexgrid1mousemove",successFunction,errorFunction);
	}
	this.mshflexgrid1mouseup=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mshflexgrid1mouseup",successFunction,errorFunction);
	}
	this.mshflexgrid1dblclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/mshflexgrid1dblclick",successFunction,errorFunction);
	}
	this.docolumnsort=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/docolumnsort",successFunction,errorFunction);
	}
	this.formresize=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/formresize",successFunction,errorFunction);
	}
	this.cmdcloseclick=function(itemData,successFunction,errorFunction){
		ajaxService.AjaxGetWithData(curURL+"/cmdcloseclick",successFunction,errorFunction);
	}
});




app.service('frmPdmRetroHandler',function(ajaxService){
	var curURL =URL+"/FrmPdmRetroController";

   this.cboconfirmationchange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboconfirmationchange",successFunction,errorFunction);
}
   this.cboconfirmationclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboconfirmationclick",successFunction,errorFunction);
}
   this.cboconfirmationkeypress=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboconfirmationkeypress",successFunction,errorFunction);
}
   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdcloseclick",successFunction,errorFunction);
}
   this.cmdsaveclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdsaveclick",successFunction,errorFunction);
}
   this.confirmdata=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//confirmdata",successFunction,errorFunction);
}
   this.getretrotradedate=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//getretrotradedate",successFunction,errorFunction);
}
   this.validate=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//validate",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxPost(itemData, curURL+"/formload",successFunction,errorFunction);
}
   this.cboconfirmationvalidate=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboconfirmationvalidate",successFunction,errorFunction);
}
   this.formunload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formunload",successFunction,errorFunction);
}
   this.txtplanidchange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtplanidchange",successFunction,errorFunction);
}
   this.txttradedatechange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txttradedatechange",successFunction,errorFunction);
}
   this.txttradedatevalidate=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txttradedatevalidate",successFunction,errorFunction);
}
});

app.service('frmDailyNavMaintenanceHandler',function(ajaxService){
	var	curURL =URL+"/FrmDailyNavMaintenanceController";
	this.populatesfgfund=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxPost(itemData,curURL+"/populatesfgfund",successFunction,errorFunction);
	}
	   this.cmdaddmodifyclick1=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/cmdaddmodifyclick1",successFunction,errorFunction);
	}
	   this.cmdaddmodifyclick2=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/cmdaddmodifyclick2",successFunction,errorFunction);
	}
	   this.cmdaddmodifyclick3=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/cmdaddmodifyclick3",successFunction,errorFunction);
	}
	   this.cmddeleteclick=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/cmddeleteclick",successFunction,errorFunction);
	}
	   this.populateselectedfunddetails1=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/populateselectedfunddetails1",successFunction,errorFunction);
	}
	    this.populateselectedfunddetails2=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxPost(itemData,curURL+"/populateselectedfunddetails2",successFunction,errorFunction);
	}
	   this.cmdselfundclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxPost(itemData,curURL+"/cmdselfundclick",successFunction,errorFunction);
	}
});


app.service('frmBatchProcessControlHandler',function(ajaxService){
	var	curURL =URL+"/FrmBatchProcessControlController";
	this.cmdqueryclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxPost(itemData, curURL+"/cmdqueryclick",successFunction,errorFunction);
	}
	   this.formload=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData, curURL+"/formload",successFunction,errorFunction);
	}
});

app.service('frmSEIMaintHandler',function(ajaxService){
    var curURL =URL+"/FrmSEIMaintController";
    this.cbofundsclick=function(itemData,successFunction,errorFunction){
    	console.log('handler')
        ajaxService.AjaxPost(curURL+"/cbofundsclick",successFunction,errorFunction);
    }
    this.cmdclearclick=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(curURL+"/cmdclearclick",successFunction,errorFunction);
    }
    this.cmdcloseclick=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData, curURL+"/cmdcloseclick",successFunction,errorFunction);
    }
    this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/cmdrefreshclick",successFunction,errorFunction);
    }
    this.cmdsaveclick=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/cmdsaveclick",successFunction,errorFunction);
    }
    this.dtpestexdatechange=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/dtpestexdatechange",successFunction,errorFunction);
    }
    this.formload=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/formload",successFunction,errorFunction);
    }
    this.lvwdivdreturnrateitemclick=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/lvwdivdreturnrateitemclick",successFunction,errorFunction);
    }
    this.txtestratechange=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/txtestratechange",successFunction,errorFunction);
    }
    this.txtestrategotfocus=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/txtestrategotfocus",successFunction,errorFunction);
    }
    this.txtestratekeypress=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/txtestratekeypress",successFunction,errorFunction);
    }
    this.txtestratelostfocus=function(itemData,successFunction,errorFunction){
        ajaxService.AjaxPost(itemData,curURL+"/txtestratelostfocus",successFunction,errorFunction);
    }
});

app.service('frmProductFundsHandler',function(ajaxService){
	var	curURL = URL+"/FrmProductFundsController";
   this.datagridaftercolupdate=function(itemData,successFunction,errorFunction){
	   ajaxService.AjaxPost(itemData,curURL+"/datagridaftercolupdate",successFunction,errorFunction);
}
   this.datagridbeforecolupdate=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxPost(itemData,curURL+"/datagridbeforecolupdate",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
	   ajaxService.AjaxPost(itemData,curURL+"/formload",successFunction,errorFunction);
}
});

app.service('frmProductSeriesHandler',function(ajaxService){
	var curURL =URL+"/FrmProductSeriesController";
	
	   this.cboappclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cboappclick",successFunction,errorFunction);
	}
	   this.cboappdropdown=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cboappdropdown",successFunction,errorFunction);
	}
	   this.cmdqueryclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxPost(itemData,curURL+"/cmdqueryclick",successFunction,errorFunction);
	}
	   this.datagridmouseup=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/datagridmouseup",successFunction,errorFunction);
	}
	   this.datagridrowcolchange=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/datagridrowcolchange",successFunction,errorFunction);
	}
	   this.formload=function(itemData,successFunction,errorFunction){
		   ajaxService.AjaxGetWithData(itemData, curURL+"/formload",successFunction,errorFunction);
	}
	   this.formmouseup=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formmouseup",successFunction,errorFunction);
	}
	   this.formactivate=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formactivate",successFunction,errorFunction);
	}
	   this.formresize=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formresize",successFunction,errorFunction);
	}
	   this.formunload=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formunload",successFunction,errorFunction);
	}
	   this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cmdrefreshclick",successFunction,errorFunction);
	}
	   this.cmdcancelclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cmdcancelclick",successFunction,errorFunction);
	}
	   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cmdcloseclick",successFunction,errorFunction);
	}
	   this.txtirmakeypress=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/txtirmakeypress",successFunction,errorFunction);
	}
	   this.txtnamekeypress=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/txtnamekeypress",successFunction,errorFunction);
	}
	});
app.service('processStatusHandler',function(ajaxService){
	var curURL =URL+"/ProcessStatusController";
	
		this.cmdqueryclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxPost(itemData, curURL+"/cmdqueryclick",successFunction,errorFunction);
	}
	   this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/cmdrefreshclick",successFunction,errorFunction);
	}
	   this.flexgriddragdrop=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgriddragdrop",successFunction,errorFunction);
	}
	   this.flexgridmousedown=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgridmousedown",successFunction,errorFunction);
	}
	   this.flexgridmousemove=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgridmousemove",successFunction,errorFunction);
	}
	   this.flexgridmouseup=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgridmouseup",successFunction,errorFunction);
	}
	   this.flexgriddblclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgriddblclick",successFunction,errorFunction);
	}
	   this.docolumnsort=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/docolumnsort",successFunction,errorFunction);
	}
	   this.flexgridrowcolchange=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/flexgridrowcolchange",successFunction,errorFunction);
	}
	   this.formactivate=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formactivate",successFunction,errorFunction);
	}
	   this.formload=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formload",successFunction,errorFunction);
	}
	   this.formatflexgrid=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formatflexgrid",successFunction,errorFunction);
	}
	   this.mshflexgriddblclick=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/mshflexgriddblclick",successFunction,errorFunction);
	}
	   this.columnsort=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/columnsort",successFunction,errorFunction);
	}
	   this.formresize=function(itemData,successFunction,errorFunction){
	       ajaxService.AjaxGetWithData(itemData,curURL+"/formresize",successFunction,errorFunction);
	}
});

app.service('frmUVEntryHandler',function(ajaxService){
		var curURL =URL+"/FrmUVEntryHandler";
		this.populatecontract=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/populatecontract",successFunction,errorFunction);
		}
		   this.populatefunds=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/populatefunds",successFunction,errorFunction);
		}
		   this.cbocontractclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cbocontractclick",successFunction,errorFunction);
		}
		   this.cbofundclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cbofundclick",successFunction,errorFunction);
		}
		   this.cmdaddmodifyclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cmdaddmodifyclick1",successFunction,errorFunction);
		}
		    this.cmdaddmodifyclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cmdaddmodifyclick2",successFunction,errorFunction);
		}
		   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cmdcloseclick",successFunction,errorFunction);
		}
		   this.cmddeleteclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cmddeleteclick",successFunction,errorFunction);
		}
		   this.cmdselfundclick=function(itemData,successFunction,errorFunction){
		       ajaxService.AjaxPost(itemData,curURL+"/cmdselfundclick",successFunction,errorFunction);
		}
});
   