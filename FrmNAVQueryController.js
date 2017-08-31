
app.controller('FrmNAVQueryController', function($scope, FrmNAVQueryHandler) {


   	$scope.getcbofundsclick=function() {	
		FrmNAVQueryHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmNAVQueryHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdexportclick=function() {	
		FrmNAVQueryHandler.cmdexportclick($scope.TASAObject,$scope.getcmdexportclickSuccess, $scope.getcmdexportclickError);    
	};

	$scope.getcmdexportclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdexportclickError = function(response) {
	}; 

   	$scope.getcmdselectclick=function() {	
		FrmNAVQueryHandler.cmdselectclick($scope.TASAObject,$scope.getcmdselectclickSuccess, $scope.getcmdselectclickError);    
	};

	$scope.getcmdselectclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselectclickError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		FrmNAVQueryHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmNAVQueryHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmNAVQueryHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getpopulatelvwhistory=function() {	
		FrmNAVQueryHandler.populatelvwhistory($scope.TASAObject,$scope.getpopulatelvwhistorySuccess, $scope.getpopulatelvwhistoryError);    
	};

	$scope.getpopulatelvwhistorySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatelvwhistoryError = function(response) {
	}; 

   	$scope.getaddadjfactorlvwhistory=function() {	
		FrmNAVQueryHandler.addadjfactorlvwhistory($scope.TASAObject,$scope.getaddadjfactorlvwhistorySuccess, $scope.getaddadjfactorlvwhistoryError);    
	};

	$scope.getaddadjfactorlvwhistorySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getaddadjfactorlvwhistoryError = function(response) {
	}; 

   	$scope.getadddividendlvwhistory=function() {	
		FrmNAVQueryHandler.adddividendlvwhistory($scope.TASAObject,$scope.getadddividendlvwhistorySuccess, $scope.getadddividendlvwhistoryError);    
	};

	$scope.getadddividendlvwhistorySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getadddividendlvwhistoryError = function(response) {
	}; 
});