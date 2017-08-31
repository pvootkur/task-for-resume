
app.controller('FrmNAVMaintController', function($scope, FrmNAVMaintHandler) {


   	$scope.getgetsource=function() {	
		FrmNAVMaintHandler.getsource($scope.TASAObject,$scope.getgetsourceSuccess, $scope.getgetsourceError);    
	};

	$scope.getgetsourceSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetsourceError = function(response) {
	}; 

   	$scope.getenabledisablefields=function() {	
		FrmNAVMaintHandler.enabledisablefields($scope.TASAObject,$scope.getenabledisablefieldsSuccess, $scope.getenabledisablefieldsError);    
	};

	$scope.getenabledisablefieldsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getenabledisablefieldsError = function(response) {
	}; 

   	$scope.getcbofundsclick=function() {	
		FrmNAVMaintHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdaddclick=function() {	
		FrmNAVMaintHandler.cmdaddclick($scope.TASAObject,$scope.getcmdaddclickSuccess, $scope.getcmdaddclickError);    
	};

	$scope.getcmdaddclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdaddclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmNAVMaintHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmNAVMaintHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getcmdselectfundclick=function() {	
		FrmNAVMaintHandler.cmdselectfundclick($scope.TASAObject,$scope.getcmdselectfundclickSuccess, $scope.getcmdselectfundclickError);    
	};

	$scope.getcmdselectfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselectfundclickError = function(response) {
	}; 

   	$scope.getdtpasofdatechange=function() {	
		FrmNAVMaintHandler.dtpasofdatechange($scope.TASAObject,$scope.getdtpasofdatechangeSuccess, $scope.getdtpasofdatechangeError);    
	};

	$scope.getdtpasofdatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdtpasofdatechangeError = function(response) {
	}; 

   	$scope.getpopulatefundcombo=function() {	
		FrmNAVMaintHandler.populatefundcombo($scope.TASAObject,$scope.getpopulatefundcomboSuccess, $scope.getpopulatefundcomboError);    
	};

	$scope.getpopulatefundcomboSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatefundcomboError = function(response) {
	}; 

   	$scope.getdtpnotifieddatechange=function() {	
		FrmNAVMaintHandler.dtpnotifieddatechange($scope.TASAObject,$scope.getdtpnotifieddatechangeSuccess, $scope.getdtpnotifieddatechangeError);    
	};

	$scope.getdtpnotifieddatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdtpnotifieddatechangeError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmNAVMaintHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmNAVMaintHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtauditedratekeypress=function() {	
		FrmNAVMaintHandler.txtauditedratekeypress($scope.TASAObject,$scope.gettxtauditedratekeypressSuccess, $scope.gettxtauditedratekeypressError);    
	};

	$scope.gettxtauditedratekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtauditedratekeypressError = function(response) {
	}; 

   	$scope.gettxtamendauditedvalchange=function() {	
		FrmNAVMaintHandler.txtamendauditedvalchange($scope.TASAObject,$scope.gettxtamendauditedvalchangeSuccess, $scope.gettxtamendauditedvalchangeError);    
	};

	$scope.gettxtamendauditedvalchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtamendauditedvalchangeError = function(response) {
	}; 

   	$scope.gettxtamendauditedvalkeypress=function() {	
		FrmNAVMaintHandler.txtamendauditedvalkeypress($scope.TASAObject,$scope.gettxtamendauditedvalkeypressSuccess, $scope.gettxtamendauditedvalkeypressError);    
	};

	$scope.gettxtamendauditedvalkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtamendauditedvalkeypressError = function(response) {
	}; 

   	$scope.gettxtreenteramendedaudvalchange=function() {	
		FrmNAVMaintHandler.txtreenteramendedaudvalchange($scope.TASAObject,$scope.gettxtreenteramendedaudvalchangeSuccess, $scope.gettxtreenteramendedaudvalchangeError);    
	};

	$scope.gettxtreenteramendedaudvalchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtreenteramendedaudvalchangeError = function(response) {
	}; 

   	$scope.gettxtreenteramendedaudvalkeypress=function() {	
		FrmNAVMaintHandler.txtreenteramendedaudvalkeypress($scope.TASAObject,$scope.gettxtreenteramendedaudvalkeypressSuccess, $scope.gettxtreenteramendedaudvalkeypressError);    
	};

	$scope.gettxtreenteramendedaudvalkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtreenteramendedaudvalkeypressError = function(response) {
	}; 
});