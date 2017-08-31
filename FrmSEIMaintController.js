
app.controller('FrmSEIMaintController', function($scope, FrmSEIMaintHandler) {


   	$scope.getcbofundsclick=function() {	
		FrmSEIMaintHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdclearclick=function() {	
		FrmSEIMaintHandler.cmdclearclick($scope.TASAObject,$scope.getcmdclearclickSuccess, $scope.getcmdclearclickError);    
	};

	$scope.getcmdclearclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdclearclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmSEIMaintHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		FrmSEIMaintHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getcmdsaveclick=function() {	
		FrmSEIMaintHandler.cmdsaveclick($scope.TASAObject,$scope.getcmdsaveclickSuccess, $scope.getcmdsaveclickError);    
	};

	$scope.getcmdsaveclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsaveclickError = function(response) {
	}; 

   	$scope.getdtpestexdatechange=function() {	
		FrmSEIMaintHandler.dtpestexdatechange($scope.TASAObject,$scope.getdtpestexdatechangeSuccess, $scope.getdtpestexdatechangeError);    
	};

	$scope.getdtpestexdatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdtpestexdatechangeError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmSEIMaintHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getlvwdivdreturnrateitemclick=function() {	
		FrmSEIMaintHandler.lvwdivdreturnrateitemclick($scope.TASAObject,$scope.getlvwdivdreturnrateitemclickSuccess, $scope.getlvwdivdreturnrateitemclickError);    
	};

	$scope.getlvwdivdreturnrateitemclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlvwdivdreturnrateitemclickError = function(response) {
	}; 

   	$scope.gettxtestratechange=function() {	
		FrmSEIMaintHandler.txtestratechange($scope.TASAObject,$scope.gettxtestratechangeSuccess, $scope.gettxtestratechangeError);    
	};

	$scope.gettxtestratechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratechangeError = function(response) {
	}; 

   	$scope.gettxtestrategotfocus=function() {	
		FrmSEIMaintHandler.txtestrategotfocus($scope.TASAObject,$scope.gettxtestrategotfocusSuccess, $scope.gettxtestrategotfocusError);    
	};

	$scope.gettxtestrategotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestrategotfocusError = function(response) {
	}; 

   	$scope.gettxtestratekeypress=function() {	
		FrmSEIMaintHandler.txtestratekeypress($scope.TASAObject,$scope.gettxtestratekeypressSuccess, $scope.gettxtestratekeypressError);    
	};

	$scope.gettxtestratekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratekeypressError = function(response) {
	}; 

   	$scope.gettxtestratelostfocus=function() {	
		FrmSEIMaintHandler.txtestratelostfocus($scope.TASAObject,$scope.gettxtestratelostfocusSuccess, $scope.gettxtestratelostfocusError);    
	};

	$scope.gettxtestratelostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratelostfocusError = function(response) {
	}; 
});