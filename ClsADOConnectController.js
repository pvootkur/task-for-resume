
app.controller('ClsADOConnectController', function($scope, ClsADOConnectHandler) {


   	$scope.getconnect=function() {	
		ClsADOConnectHandler.connect($scope.TASAObject,$scope.getconnectSuccess, $scope.getconnectError);    
	};

	$scope.getconnectSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getconnectError = function(response) {
	}; 

   	$scope.getdisconnect=function() {	
		ClsADOConnectHandler.disconnect($scope.TASAObject,$scope.getdisconnectSuccess, $scope.getdisconnectError);    
	};

	$scope.getdisconnectSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdisconnectError = function(response) {
	}; 

   	$scope.getapplysecurity=function() {	
		ClsADOConnectHandler.applysecurity($scope.TASAObject,$scope.getapplysecuritySuccess, $scope.getapplysecurityError);    
	};

	$scope.getapplysecuritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getapplysecurityError = function(response) {
	}; 
});