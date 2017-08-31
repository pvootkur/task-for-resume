
app.controller('frmGLPeriodController', function($scope, frmGLPeriodHandler) {


   	$scope.getadodcerror=function() {	
		frmGLPeriodHandler.adodcerror($scope.TASAObject,$scope.getadodcerrorSuccess, $scope.getadodcerrorError);    
	};

	$scope.getadodcerrorSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getadodcerrorError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		frmGLPeriodHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdinsertclick=function() {	
		frmGLPeriodHandler.cmdinsertclick($scope.TASAObject,$scope.getcmdinsertclickSuccess, $scope.getcmdinsertclickError);    
	};

	$scope.getcmdinsertclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdinsertclickError = function(response) {
	}; 

   	$scope.getcmdqueryclick=function() {	
		frmGLPeriodHandler.cmdqueryclick($scope.TASAObject,$scope.getcmdqueryclickSuccess, $scope.getcmdqueryclickError);    
	};

	$scope.getcmdqueryclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdqueryclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		frmGLPeriodHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getdatagridafterupdate=function() {	
		frmGLPeriodHandler.datagridafterupdate($scope.TASAObject,$scope.getdatagridafterupdateSuccess, $scope.getdatagridafterupdateError);    
	};

	$scope.getdatagridafterupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridafterupdateError = function(response) {
	}; 

   	$scope.getdatagridbeforecolupdate=function() {	
		frmGLPeriodHandler.datagridbeforecolupdate($scope.TASAObject,$scope.getdatagridbeforecolupdateSuccess, $scope.getdatagridbeforecolupdateError);    
	};

	$scope.getdatagridbeforecolupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridbeforecolupdateError = function(response) {
	}; 

   	$scope.getdatagridbeforeupdate=function() {	
		frmGLPeriodHandler.datagridbeforeupdate($scope.TASAObject,$scope.getdatagridbeforeupdateSuccess, $scope.getdatagridbeforeupdateError);    
	};

	$scope.getdatagridbeforeupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridbeforeupdateError = function(response) {
	}; 

   	$scope.getvalidate=function() {	
		frmGLPeriodHandler.validate($scope.TASAObject,$scope.getvalidateSuccess, $scope.getvalidateError);    
	};

	$scope.getvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getvalidateError = function(response) {
	}; 

   	$scope.getdatagriderror=function() {	
		frmGLPeriodHandler.datagriderror($scope.TASAObject,$scope.getdatagriderrorSuccess, $scope.getdatagriderrorError);    
	};

	$scope.getdatagriderrorSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagriderrorError = function(response) {
	}; 

   	$scope.getdatagridkeypress=function() {	
		frmGLPeriodHandler.datagridkeypress($scope.TASAObject,$scope.getdatagridkeypressSuccess, $scope.getdatagridkeypressError);    
	};

	$scope.getdatagridkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridkeypressError = function(response) {
	}; 

   	$scope.getdatagridlostfocus=function() {	
		frmGLPeriodHandler.datagridlostfocus($scope.TASAObject,$scope.getdatagridlostfocusSuccess, $scope.getdatagridlostfocusError);    
	};

	$scope.getdatagridlostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridlostfocusError = function(response) {
	}; 

   	$scope.getdatagridonaddnew=function() {	
		frmGLPeriodHandler.datagridonaddnew($scope.TASAObject,$scope.getdatagridonaddnewSuccess, $scope.getdatagridonaddnewError);    
	};

	$scope.getdatagridonaddnewSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridonaddnewError = function(response) {
	}; 

   	$scope.getdatagridrowcolchange=function() {	
		frmGLPeriodHandler.datagridrowcolchange($scope.TASAObject,$scope.getdatagridrowcolchangeSuccess, $scope.getdatagridrowcolchangeError);    
	};

	$scope.getdatagridrowcolchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridrowcolchangeError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		frmGLPeriodHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformdeactivate=function() {	
		frmGLPeriodHandler.formdeactivate($scope.TASAObject,$scope.getformdeactivateSuccess, $scope.getformdeactivateError);    
	};

	$scope.getformdeactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformdeactivateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		frmGLPeriodHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformatdatagrid=function() {	
		frmGLPeriodHandler.formatdatagrid($scope.TASAObject,$scope.getformatdatagridSuccess, $scope.getformatdatagridError);    
	};

	$scope.getformatdatagridSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformatdatagridError = function(response) {
	}; 

   	$scope.getmnufileexitclick=function() {	
		frmGLPeriodHandler.mnufileexitclick($scope.TASAObject,$scope.getmnufileexitclickSuccess, $scope.getmnufileexitclickError);    
	};

	$scope.getmnufileexitclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmnufileexitclickError = function(response) {
	}; 

   	$scope.getformresize=function() {	
		frmGLPeriodHandler.formresize($scope.TASAObject,$scope.getformresizeSuccess, $scope.getformresizeError);    
	};

	$scope.getformresizeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformresizeError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		frmGLPeriodHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtdatevalidate=function() {	
		frmGLPeriodHandler.txtdatevalidate($scope.TASAObject,$scope.gettxtdatevalidateSuccess, $scope.gettxtdatevalidateError);    
	};

	$scope.gettxtdatevalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtdatevalidateError = function(response) {
	}; 

   	$scope.gettxtmonthkeypress=function() {	
		frmGLPeriodHandler.txtmonthkeypress($scope.TASAObject,$scope.gettxtmonthkeypressSuccess, $scope.gettxtmonthkeypressError);    
	};

	$scope.gettxtmonthkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmonthkeypressError = function(response) {
	}; 

   	$scope.gettxtdatekeypress=function() {	
		frmGLPeriodHandler.txtdatekeypress($scope.TASAObject,$scope.gettxtdatekeypressSuccess, $scope.gettxtdatekeypressError);    
	};

	$scope.gettxtdatekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtdatekeypressError = function(response) {
	}; 

   	$scope.gettxtmonthvalidate=function() {	
		frmGLPeriodHandler.txtmonthvalidate($scope.TASAObject,$scope.gettxtmonthvalidateSuccess, $scope.gettxtmonthvalidateError);    
	};

	$scope.gettxtmonthvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmonthvalidateError = function(response) {
	}; 

   	$scope.gettxtyearkeypress=function() {	
		frmGLPeriodHandler.txtyearkeypress($scope.TASAObject,$scope.gettxtyearkeypressSuccess, $scope.gettxtyearkeypressError);    
	};

	$scope.gettxtyearkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtyearkeypressError = function(response) {
	}; 

   	$scope.gettxtyearvalidate=function() {	
		frmGLPeriodHandler.txtyearvalidate($scope.TASAObject,$scope.gettxtyearvalidateSuccess, $scope.gettxtyearvalidateError);    
	};

	$scope.gettxtyearvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtyearvalidateError = function(response) {
	}; 
});