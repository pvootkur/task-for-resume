
app.controller('FrmProductSeriesController', function($scope, FrmProductSeriesHandler) {


   	$scope.getcboappclick=function() {	
		FrmProductSeriesHandler.cboappclick($scope.TASAObject,$scope.getcboappclickSuccess, $scope.getcboappclickError);    
	};

	$scope.getcboappclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboappclickError = function(response) {
	}; 

   	$scope.getcboappdropdown=function() {	
		FrmProductSeriesHandler.cboappdropdown($scope.TASAObject,$scope.getcboappdropdownSuccess, $scope.getcboappdropdownError);    
	};

	$scope.getcboappdropdownSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboappdropdownError = function(response) {
	}; 

   	$scope.getcmdqueryclick=function() {	
		FrmProductSeriesHandler.cmdqueryclick($scope.TASAObject,$scope.getcmdqueryclickSuccess, $scope.getcmdqueryclickError);    
	};

	$scope.getcmdqueryclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdqueryclickError = function(response) {
	}; 

   	$scope.getdatagridmouseup=function() {	
		FrmProductSeriesHandler.datagridmouseup($scope.TASAObject,$scope.getdatagridmouseupSuccess, $scope.getdatagridmouseupError);    
	};

	$scope.getdatagridmouseupSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridmouseupError = function(response) {
	}; 

   	$scope.getdatagridrowcolchange=function() {	
		FrmProductSeriesHandler.datagridrowcolchange($scope.TASAObject,$scope.getdatagridrowcolchangeSuccess, $scope.getdatagridrowcolchangeError);    
	};

	$scope.getdatagridrowcolchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridrowcolchangeError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmProductSeriesHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformmouseup=function() {	
		FrmProductSeriesHandler.formmouseup($scope.TASAObject,$scope.getformmouseupSuccess, $scope.getformmouseupError);    
	};

	$scope.getformmouseupSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformmouseupError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		FrmProductSeriesHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformresize=function() {	
		FrmProductSeriesHandler.formresize($scope.TASAObject,$scope.getformresizeSuccess, $scope.getformresizeError);    
	};

	$scope.getformresizeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformresizeError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmProductSeriesHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		FrmProductSeriesHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getcmdcancelclick=function() {	
		FrmProductSeriesHandler.cmdcancelclick($scope.TASAObject,$scope.getcmdcancelclickSuccess, $scope.getcmdcancelclickError);    
	};

	$scope.getcmdcancelclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcancelclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmProductSeriesHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.gettxtirmakeypress=function() {	
		FrmProductSeriesHandler.txtirmakeypress($scope.TASAObject,$scope.gettxtirmakeypressSuccess, $scope.gettxtirmakeypressError);    
	};

	$scope.gettxtirmakeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtirmakeypressError = function(response) {
	}; 

   	$scope.gettxtnamekeypress=function() {	
		FrmProductSeriesHandler.txtnamekeypress($scope.TASAObject,$scope.gettxtnamekeypressSuccess, $scope.gettxtnamekeypressError);    
	};

	$scope.gettxtnamekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnamekeypressError = function(response) {
	}; 
});