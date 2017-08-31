
app.controller('FrmUpdateZeroUVController', function($scope, FrmUpdateZeroUVHandler) {


   	$scope.getlstprinteridgotfocus=function() {	
		FrmUpdateZeroUVHandler.lstprinteridgotfocus($scope.TASAObject,$scope.getlstprinteridgotfocusSuccess, $scope.getlstprinteridgotfocusError);    
	};

	$scope.getlstprinteridgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlstprinteridgotfocusError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmUpdateZeroUVHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdsubmitclick=function() {	
		FrmUpdateZeroUVHandler.cmdsubmitclick($scope.TASAObject,$scope.getcmdsubmitclickSuccess, $scope.getcmdsubmitclickError);    
	};

	$scope.getcmdsubmitclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsubmitclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmUpdateZeroUVHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmUpdateZeroUVHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtcommandkeypress=function() {	
		FrmUpdateZeroUVHandler.txtcommandkeypress($scope.TASAObject,$scope.gettxtcommandkeypressSuccess, $scope.gettxtcommandkeypressError);    
	};

	$scope.gettxtcommandkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtcommandkeypressError = function(response) {
	}; 
});