
app.controller('FrmLoginController', function($scope, FrmLoginHandler) {


   	$scope.getformload=function() {	
		FrmLoginHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getcmdcancelclick=function() {	
		FrmLoginHandler.cmdcancelclick($scope.TASAObject,$scope.getcmdcancelclickSuccess, $scope.getcmdcancelclickError);    
	};

	$scope.getcmdcancelclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcancelclickError = function(response) {
	}; 

   	$scope.getcmdokclick=function() {	
		FrmLoginHandler.cmdokclick($scope.TASAObject,$scope.getcmdokclickSuccess, $scope.getcmdokclickError);    
	};

	$scope.getcmdokclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdokclickError = function(response) {
	}; 

   	$scope.getvalidate=function() {	
		FrmLoginHandler.validate($scope.TASAObject,$scope.getvalidateSuccess, $scope.getvalidateError);    
	};

	$scope.getvalidateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getvalidateError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmLoginHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 
});