
app.controller('FrmAdjFctrQueryController', function($scope, FrmAdjFctrQueryHandler) {


   	$scope.getcbofundsclick=function() {	
		FrmAdjFctrQueryHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmAdjFctrQueryHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdshowcommentsclick=function() {	
		FrmAdjFctrQueryHandler.cmdshowcommentsclick($scope.TASAObject,$scope.getcmdshowcommentsclickSuccess, $scope.getcmdshowcommentsclickError);    
	};

	$scope.getcmdshowcommentsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdshowcommentsclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmAdjFctrQueryHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getlvwfundsitemclick=function() {	
		FrmAdjFctrQueryHandler.lvwfundsitemclick($scope.TASAObject,$scope.getlvwfundsitemclickSuccess, $scope.getlvwfundsitemclickError);    
	};

	$scope.getlvwfundsitemclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlvwfundsitemclickError = function(response) {
	}; 
});