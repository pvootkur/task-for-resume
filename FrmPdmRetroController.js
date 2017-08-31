
app.controller('frmPdmRetroHandler', function($scope, frmPdmRetroHandler) {


   	$scope.getcboconfirmationchange=function() {	
		frmPdmRetroHandler.cboconfirmationchange($scope.TASAObject,$scope.getcboconfirmationchangeSuccess, $scope.getcboconfirmationchangeError);    
	};

	$scope.getcboconfirmationchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboconfirmationchangeError = function(response) {
	}; 

   	$scope.getcboconfirmationclick=function() {	
		frmPdmRetroHandler.cboconfirmationclick($scope.TASAObject,$scope.getcboconfirmationclickSuccess, $scope.getcboconfirmationclickError);    
	};

	$scope.getcboconfirmationclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboconfirmationclickError = function(response) {
	}; 

   	$scope.getcboconfirmationkeypress=function() {	
		frmPdmRetroHandler.cboconfirmationkeypress($scope.TASAObject,$scope.getcboconfirmationkeypressSuccess, $scope.getcboconfirmationkeypressError);    
	};

	$scope.getcboconfirmationkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboconfirmationkeypressError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		frmPdmRetroHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdsaveclick=function() {	
		frmPdmRetroHandler.cmdsaveclick($scope.TASAObject,$scope.getcmdsaveclickSuccess, $scope.getcmdsaveclickError);    
	};

	$scope.getcmdsaveclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsaveclickError = function(response) {
	}; 

   	$scope.getconfirmdata=function() {	
		frmPdmRetroHandler.confirmdata($scope.TASAObject,$scope.getconfirmdataSuccess, $scope.getconfirmdataError);    
	};

	$scope.getconfirmdataSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getconfirmdataError = function(response) {
	}; 

   	$scope.getgetretrotradedate=function() {	
		frmPdmRetroHandler.getretrotradedate($scope.TASAObject,$scope.getgetretrotradedateSuccess, $scope.getgetretrotradedateError);    
	};

	$scope.getgetretrotradedateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetretrotradedateError = function(response) {
	}; 

   	$scope.getvalidate=function() {	
		frmPdmRetroHandler.validate($scope.TASAObject,$scope.getvalidateSuccess, $scope.getvalidateError);    
	};

	$scope.getvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getvalidateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		frmPdmRetroHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getcboconfirmationvalidate=function() {	
		frmPdmRetroHandler.cboconfirmationvalidate($scope.TASAObject,$scope.getcboconfirmationvalidateSuccess, $scope.getcboconfirmationvalidateError);    
	};

	$scope.getcboconfirmationvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboconfirmationvalidateError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		frmPdmRetroHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtplanidchange=function() {	
		frmPdmRetroHandler.txtplanidchange($scope.TASAObject,$scope.gettxtplanidchangeSuccess, $scope.gettxtplanidchangeError);    
	};

	$scope.gettxtplanidchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtplanidchangeError = function(response) {
	}; 

   	$scope.gettxttradedatechange=function() {	
		frmPdmRetroHandler.txttradedatechange($scope.TASAObject,$scope.gettxttradedatechangeSuccess, $scope.gettxttradedatechangeError);    
	};

	$scope.gettxttradedatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxttradedatechangeError = function(response) {
	}; 

   	$scope.gettxttradedatevalidate=function() {	
		frmPdmRetroHandler.txttradedatevalidate($scope.TASAObject,$scope.gettxttradedatevalidateSuccess, $scope.gettxttradedatevalidateError);    
	};

	$scope.gettxttradedatevalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxttradedatevalidateError = function(response) {
	}; 
});