
app.controller('BatchProcessControlController', function($scope, BatchProcessControlHandler) {


   	$scope.getcmdqueryclick=function() {	
		BatchProcessControlHandler.cmdqueryclick($scope.TASAObject,$scope.getcmdqueryclickSuccess, $scope.getcmdqueryclickError);    
	};

	$scope.getcmdqueryclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdqueryclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		BatchProcessControlHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		BatchProcessControlHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformatdatagrid=function() {	
		BatchProcessControlHandler.formatdatagrid($scope.TASAObject,$scope.getformatdatagridSuccess, $scope.getformatdatagridError);    
	};

	$scope.getformatdatagridSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformatdatagridError = function(response) {
	}; 

   	$scope.getmshflexgrid1dragdrop=function() {	
		BatchProcessControlHandler.mshflexgrid1dragdrop($scope.TASAObject,$scope.getmshflexgrid1dragdropSuccess, $scope.getmshflexgrid1dragdropError);    
	};

	$scope.getmshflexgrid1dragdropSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1dragdropError = function(response) {
	}; 

   	$scope.getmshflexgrid1mousedown=function() {	
		BatchProcessControlHandler.mshflexgrid1mousedown($scope.TASAObject,$scope.getmshflexgrid1mousedownSuccess, $scope.getmshflexgrid1mousedownError);    
	};

	$scope.getmshflexgrid1mousedownSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mousedownError = function(response) {
	}; 

   	$scope.getmshflexgrid1mousemove=function() {	
		BatchProcessControlHandler.mshflexgrid1mousemove($scope.TASAObject,$scope.getmshflexgrid1mousemoveSuccess, $scope.getmshflexgrid1mousemoveError);    
	};

	$scope.getmshflexgrid1mousemoveSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mousemoveError = function(response) {
	}; 

   	$scope.getmshflexgrid1mouseup=function() {	
		BatchProcessControlHandler.mshflexgrid1mouseup($scope.TASAObject,$scope.getmshflexgrid1mouseupSuccess, $scope.getmshflexgrid1mouseupError);    
	};

	$scope.getmshflexgrid1mouseupSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1mouseupError = function(response) {
	}; 

   	$scope.getmshflexgrid1dblclick=function() {	
		BatchProcessControlHandler.mshflexgrid1dblclick($scope.TASAObject,$scope.getmshflexgrid1dblclickSuccess, $scope.getmshflexgrid1dblclickError);    
	};

	$scope.getmshflexgrid1dblclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgrid1dblclickError = function(response) {
	}; 

   	$scope.getdocolumnsort=function() {	
		BatchProcessControlHandler.docolumnsort($scope.TASAObject,$scope.getdocolumnsortSuccess, $scope.getdocolumnsortError);    
	};

	$scope.getdocolumnsortSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdocolumnsortError = function(response) {
	}; 

   	$scope.getformresize=function() {	
		BatchProcessControlHandler.formresize($scope.TASAObject,$scope.getformresizeSuccess, $scope.getformresizeError);    
	};

	$scope.getformresizeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformresizeError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		BatchProcessControlHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 
});