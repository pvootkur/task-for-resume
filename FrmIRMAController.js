
app.controller('FrmIRMAController', function($scope, FrmIRMAHandler) {


   	$scope.getcbocontactclick=function() {	
		FrmIRMAHandler.cbocontactclick($scope.TASAObject,$scope.getcbocontactclickSuccess, $scope.getcbocontactclickError);    
	};

	$scope.getcbocontactclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbocontactclickError = function(response) {
	}; 

   	$scope.getcbocontactlostfocus=function() {	
		FrmIRMAHandler.cbocontactlostfocus($scope.TASAObject,$scope.getcbocontactlostfocusSuccess, $scope.getcbocontactlostfocusError);    
	};

	$scope.getcbocontactlostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbocontactlostfocusError = function(response) {
	}; 

   	$scope.getcbocontactvalidate=function() {	
		FrmIRMAHandler.cbocontactvalidate($scope.TASAObject,$scope.getcbocontactvalidateSuccess, $scope.getcbocontactvalidateError);    
	};

	$scope.getcbocontactvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbocontactvalidateError = function(response) {
	}; 

   	$scope.getcbohotsheetclick=function() {	
		FrmIRMAHandler.cbohotsheetclick($scope.TASAObject,$scope.getcbohotsheetclickSuccess, $scope.getcbohotsheetclickError);    
	};

	$scope.getcbohotsheetclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbohotsheetclickError = function(response) {
	}; 

   	$scope.getcbohotsheetvalidate=function() {	
		FrmIRMAHandler.cbohotsheetvalidate($scope.TASAObject,$scope.getcbohotsheetvalidateSuccess, $scope.getcbohotsheetvalidateError);    
	};

	$scope.getcbohotsheetvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbohotsheetvalidateError = function(response) {
	}; 

   	$scope.getcboprinterclick=function() {	
		FrmIRMAHandler.cboprinterclick($scope.TASAObject,$scope.getcboprinterclickSuccess, $scope.getcboprinterclickError);    
	};

	$scope.getcboprinterclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboprinterclickError = function(response) {
	}; 

   	$scope.getcboprinterdropdown=function() {	
		FrmIRMAHandler.cboprinterdropdown($scope.TASAObject,$scope.getcboprinterdropdownSuccess, $scope.getcboprinterdropdownError);    
	};

	$scope.getcboprinterdropdownSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboprinterdropdownError = function(response) {
	}; 

   	$scope.getcboprintervalidate=function() {	
		FrmIRMAHandler.cboprintervalidate($scope.TASAObject,$scope.getcboprintervalidateSuccess, $scope.getcboprintervalidateError);    
	};

	$scope.getcboprintervalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboprintervalidateError = function(response) {
	}; 

   	$scope.getcboruntypevalidate=function() {	
		FrmIRMAHandler.cboruntypevalidate($scope.TASAObject,$scope.getcboruntypevalidateSuccess, $scope.getcboruntypevalidateError);    
	};

	$scope.getcboruntypevalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboruntypevalidateError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmIRMAHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdreportclick=function() {	
		FrmIRMAHandler.cmdreportclick($scope.TASAObject,$scope.getcmdreportclickSuccess, $scope.getcmdreportclickError);    
	};

	$scope.getcmdreportclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdreportclickError = function(response) {
	}; 

   	$scope.getgetcontractnumbers=function() {	
		FrmIRMAHandler.getcontractnumbers($scope.TASAObject,$scope.getgetcontractnumbersSuccess, $scope.getgetcontractnumbersError);    
	};

	$scope.getgetcontractnumbersSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetcontractnumbersError = function(response) {
	}; 

   	$scope.getirmareport=function() {	
		FrmIRMAHandler.irmareport($scope.TASAObject,$scope.getirmareportSuccess, $scope.getirmareportError);    
	};

	$scope.getirmareportSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getirmareportError = function(response) {
	}; 

   	$scope.getparsecontractnumbers=function() {	
		FrmIRMAHandler.parsecontractnumbers($scope.TASAObject,$scope.getparsecontractnumbersSuccess, $scope.getparsecontractnumbersError);    
	};

	$scope.getparsecontractnumbersSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getparsecontractnumbersError = function(response) {
	}; 

   	$scope.getformatform=function() {	
		FrmIRMAHandler.formatform($scope.TASAObject,$scope.getformatformSuccess, $scope.getformatformError);    
	};

	$scope.getformatformSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformatformError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmIRMAHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getpopulateform=function() {	
		FrmIRMAHandler.populateform($scope.TASAObject,$scope.getpopulateformSuccess, $scope.getpopulateformError);    
	};

	$scope.getpopulateformSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulateformError = function(response) {
	}; 

   	$scope.getreporterror=function() {	
		FrmIRMAHandler.reporterror($scope.TASAObject,$scope.getreporterrorSuccess, $scope.getreporterrorError);    
	};

	$scope.getreporterrorSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getreporterrorError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmIRMAHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 
});