
app.controller('UtilitiesController', function($scope, UtilitiesHandler) {


   	$scope.getsetcombo=function() {	
		UtilitiesHandler.setcombo($scope.TASAObject,$scope.getsetcomboSuccess, $scope.getsetcomboError);    
	};

	$scope.getsetcomboSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getsetcomboError = function(response) {
	}; 

   	$scope.getsetadjfactorcombo=function() {	
		UtilitiesHandler.setadjfactorcombo($scope.TASAObject,$scope.getsetadjfactorcomboSuccess, $scope.getsetadjfactorcomboError);    
	};

	$scope.getsetadjfactorcomboSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getsetadjfactorcomboError = function(response) {
	}; 
});