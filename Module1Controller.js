
app.controller('Module1Controller', function($scope, Module1Handler) {


   	$scope.getgetnetusername=function() {	
		Module1Handler.getnetusername($scope.TASAObject,$scope.getgetnetusernameSuccess, $scope.getgetnetusernameError);    
	};

	$scope.getgetnetusernameSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetnetusernameError = function(response) {
	}; 

   	$scope.getisadminuser=function() {	
		Module1Handler.isadminuser($scope.TASAObject,$scope.getisadminuserSuccess, $scope.getisadminuserError);    
	};

	$scope.getisadminuserSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getisadminuserError = function(response) {
	}; 

   	$scope.getcenterform=function() {	
		Module1Handler.centerform($scope.TASAObject,$scope.getcenterformSuccess, $scope.getcenterformError);    
	};

	$scope.getcenterformSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcenterformError = function(response) {
	}; 

   	$scope.getapplysecurity=function() {	
		Module1Handler.applysecurity($scope.TASAObject,$scope.getapplysecuritySuccess, $scope.getapplysecurityError);    
	};

	$scope.getapplysecuritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getapplysecurityError = function(response) {
	}; 
});