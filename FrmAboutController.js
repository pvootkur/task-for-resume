
app.controller('FrmAboutController', function($scope, FrmAboutHandler) {


   	$scope.getcmdsysinfoclick=function() {	
		FrmAboutHandler.cmdsysinfoclick($scope.TASAObject,$scope.getcmdsysinfoclickSuccess, $scope.getcmdsysinfoclickError);    
	};

	$scope.getcmdsysinfoclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsysinfoclickError = function(response) {
	}; 

   	$scope.getcmdokclick=function() {	
		FrmAboutHandler.cmdokclick($scope.TASAObject,$scope.getcmdokclickSuccess, $scope.getcmdokclickError);    
	};

	$scope.getcmdokclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdokclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmAboutHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getstartsysinfo=function() {	
		FrmAboutHandler.startsysinfo($scope.TASAObject,$scope.getstartsysinfoSuccess, $scope.getstartsysinfoError);    
	};

	$scope.getstartsysinfoSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getstartsysinfoError = function(response) {
	}; 

   	$scope.getgetkeyvalue=function() {	
		FrmAboutHandler.getkeyvalue($scope.TASAObject,$scope.getgetkeyvalueSuccess, $scope.getgetkeyvalueError);    
	};

	$scope.getgetkeyvalueSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetkeyvalueError = function(response) {
	}; 
});