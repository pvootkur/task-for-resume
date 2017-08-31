
app.controller('FrmBatchProcessControlController', function($scope, FrmBatchProcessControlHandler) {


   	$scope.getcmdqueryclick=function() {	
		FrmBatchProcessControlHandler.cmdqueryclick($scope.TASAObject,$scope.getcmdqueryclickSuccess, $scope.getcmdqueryclickError);    
	};

	$scope.getcmdqueryclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdqueryclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		FrmBatchProcessControlHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		FrmBatchProcessControlHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmBatchProcessControlHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformatdatagrid=function() {	
		FrmBatchProcessControlHandler.formatdatagrid($scope.TASAObject,$scope.getformatdatagridSuccess, $scope.getformatdatagridError);    
	};

	$scope.getformatdatagridSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformatdatagridError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmBatchProcessControlHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getmshflexgrid1dragdrop=function() {	
		FrmBatchProcessControlHandler.mshflexgrid1dragdrop($scope.TASAObject,$scope.getmshflexgrid1dragdropSuccess, $scope.getmshflexgrid1dragdropError);    
	};

	$scope.getmshflexgrid1dragdropSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1dragdropError = function(response) {
	}; 

   	$scope.getmshflexgrid1mousedown=function() {	
		FrmBatchProcessControlHandler.mshflexgrid1mousedown($scope.TASAObject,$scope.getmshflexgrid1mousedownSuccess, $scope.getmshflexgrid1mousedownError);    
	};

	$scope.getmshflexgrid1mousedownSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mousedownError = function(response) {
	}; 

   	$scope.getmshflexgrid1mousemove=function() {	
		FrmBatchProcessControlHandler.mshflexgrid1mousemove($scope.TASAObject,$scope.getmshflexgrid1mousemoveSuccess, $scope.getmshflexgrid1mousemoveError);    
	};

	$scope.getmshflexgrid1mousemoveSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mousemoveError = function(response) {
	}; 

   	$scope.getmshflexgrid1mouseup=function() {	
		FrmBatchProcessControlHandler.mshflexgrid1mouseup($scope.TASAObject,$scope.getmshflexgrid1mouseupSuccess, $scope.getmshflexgrid1mouseupError);    
	};

	$scope.getmshflexgrid1mouseupSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mouseupError = function(response) {
	}; 

   	$scope.getmshflexgrid1dblclick=function() {	
		FrmBatchProcessControlHandler.mshflexgrid1dblclick($scope.TASAObject,$scope.getmshflexgrid1dblclickSuccess, $scope.getmshflexgrid1dblclickError);    
	};

	$scope.getmshflexgrid1dblclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1dblclickError = function(response) {
	}; 

   	$scope.getdocolumnsort=function() {	
		FrmBatchProcessControlHandler.docolumnsort($scope.TASAObject,$scope.getdocolumnsortSuccess, $scope.getdocolumnsortError);    
	};

	$scope.getdocolumnsortSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdocolumnsortError = function(response) {
	}; 

   	$scope.getformresize=function() {	
		FrmBatchProcessControlHandler.formresize($scope.TASAObject,$scope.getformresizeSuccess, $scope.getformresizeError);    
	};

	$scope.getformresizeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformresizeError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmBatchProcessControlHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.gettxtappchange=function() {	
		FrmBatchProcessControlHandler.txtappchange($scope.TASAObject,$scope.gettxtappchangeSuccess, $scope.gettxtappchangeError);    
	};

	$scope.gettxtappchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtappchangeError = function(response) {
	}; 

   	$scope.gettxtdatechange=function() {	
		FrmBatchProcessControlHandler.txtdatechange($scope.TASAObject,$scope.gettxtdatechangeSuccess, $scope.gettxtdatechangeError);    
	};

	$scope.gettxtdatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtdatechangeError = function(response) {
	}; 
});