
app.controller('FrmADOLogonController', function($scope, FrmADOLogonHandler) {


   	$scope.getcmdcancelclick=function() {	
		FrmADOLogonHandler.cmdcancelclick($scope.TASAObject,$scope.getcmdcancelclickSuccess, $scope.getcmdcancelclickError);    
	};

	$scope.getcmdcancelclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcancelclickError = function(response) {
	}; 

   	$scope.getcmdokclick=function() {	
		FrmADOLogonHandler.cmdokclick($scope.TASAObject,$scope.getcmdokclickSuccess, $scope.getcmdokclickError);    
	};

	$scope.getcmdokclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdokclickError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		FrmADOLogonHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmADOLogonHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmADOLogonHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtpwdgotfocus=function() {	
		FrmADOLogonHandler.txtpwdgotfocus($scope.TASAObject,$scope.gettxtpwdgotfocusSuccess, $scope.gettxtpwdgotfocusError);    
	};

	$scope.gettxtpwdgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtpwdgotfocusError = function(response) {
	}; 

   	$scope.getchecksecurity=function() {	
		FrmADOLogonHandler.checksecurity($scope.TASAObject,$scope.getchecksecuritySuccess, $scope.getchecksecurityError);    
	};

	$scope.getchecksecuritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getchecksecurityError = function(response) {
	}; 

   	$scope.gettxtuidgotfocus=function() {	
		FrmADOLogonHandler.txtuidgotfocus($scope.TASAObject,$scope.gettxtuidgotfocusSuccess, $scope.gettxtuidgotfocusError);    
	};

	$scope.gettxtuidgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtuidgotfocusError = function(response) {
	}; 
});