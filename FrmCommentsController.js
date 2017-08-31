
app.controller('FrmCommentsController', function($scope, FrmCommentsHandler) {


   	$scope.getcmdcancelclick=function() {	
		FrmCommentsHandler.cmdcancelclick($scope.TASAObject,$scope.getcmdcancelclickSuccess, $scope.getcmdcancelclickError);    
	};

	$scope.getcmdcancelclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcancelclickError = function(response) {
	}; 

   	$scope.getcmdokclick=function() {	
		FrmCommentsHandler.cmdokclick($scope.TASAObject,$scope.getcmdokclickSuccess, $scope.getcmdokclickError);    
	};

	$scope.getcmdokclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdokclickError = function(response) {
	}; 

   	$scope.getcmdprintclick=function() {	
		FrmCommentsHandler.cmdprintclick($scope.TASAObject,$scope.getcmdprintclickSuccess, $scope.getcmdprintclickError);    
	};

	$scope.getcmdprintclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdprintclickError = function(response) {
	}; 

   	$scope.getprintheader=function() {	
		FrmCommentsHandler.printheader($scope.TASAObject,$scope.getprintheaderSuccess, $scope.getprintheaderError);    
	};

	$scope.getprintheaderSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getprintheaderError = function(response) {
	}; 

   	$scope.getpageeject=function() {	
		FrmCommentsHandler.pageeject($scope.TASAObject,$scope.getpageejectSuccess, $scope.getpageejectError);    
	};

	$scope.getpageejectSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpageejectError = function(response) {
	}; 

   	$scope.getpageend=function() {	
		FrmCommentsHandler.pageend($scope.TASAObject,$scope.getpageendSuccess, $scope.getpageendError);    
	};

	$scope.getpageendSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpageendError = function(response) {
	}; 

   	$scope.getfgetlinecount=function() {	
		FrmCommentsHandler.fgetlinecount($scope.TASAObject,$scope.getfgetlinecountSuccess, $scope.getfgetlinecountError);    
	};

	$scope.getfgetlinecountSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getfgetlinecountError = function(response) {
	}; 

   	$scope.getfgetline=function() {	
		FrmCommentsHandler.fgetline($scope.TASAObject,$scope.getfgetlineSuccess, $scope.getfgetlineError);    
	};

	$scope.getfgetlineSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getfgetlineError = function(response) {
	}; 
});