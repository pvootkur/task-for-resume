
app.controller('FrmProductFundsController', function($scope, FrmProductFundsHandler) {

   	$scope.getdatagridaftercolupdate=function() {	
		FrmProductFundsHandler.datagridaftercolupdate($scope.TASAObject,$scope.getdatagridaftercolupdateSuccess, $scope.getdatagridaftercolupdateError);    
	};

	$scope.getdatagridaftercolupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridaftercolupdateError = function(response) {
	}; 

   	$scope.getdatagridbeforecolupdate=function() {	
		FrmProductFundsHandler.datagridbeforecolupdate($scope.TASAObject,$scope.getdatagridbeforecolupdateSuccess, $scope.getdatagridbeforecolupdateError);    
	};

	$scope.getdatagridbeforecolupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridbeforecolupdateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmProductFundsHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

});