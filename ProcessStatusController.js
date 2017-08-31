
app.controller('ProcessStatusController', function($scope, ProcessStatusHandler) {


   	$scope.getcmdqueryclick=function() {	
		ProcessStatusHandler.cmdqueryclick($scope.TASAObject,$scope.getcmdqueryclickSuccess, $scope.getcmdqueryclickError);    
	};

	$scope.getcmdqueryclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdqueryclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		ProcessStatusHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getflexgriddragdrop=function() {	
		ProcessStatusHandler.flexgriddragdrop($scope.TASAObject,$scope.getflexgriddragdropSuccess, $scope.getflexgriddragdropError);    
	};

	$scope.getflexgriddragdropSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgriddragdropError = function(response) {
	}; 

   	$scope.getflexgridmousedown=function() {	
		ProcessStatusHandler.flexgridmousedown($scope.TASAObject,$scope.getflexgridmousedownSuccess, $scope.getflexgridmousedownError);    
	};

	$scope.getflexgridmousedownSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgridmousedownError = function(response) {
	}; 

   	$scope.getflexgridmousemove=function() {	
		ProcessStatusHandler.flexgridmousemove($scope.TASAObject,$scope.getflexgridmousemoveSuccess, $scope.getflexgridmousemoveError);    
	};

	$scope.getflexgridmousemoveSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgridmousemoveError = function(response) {
	}; 

   	$scope.getflexgridmouseup=function() {	
		ProcessStatusHandler.flexgridmouseup($scope.TASAObject,$scope.getflexgridmouseupSuccess, $scope.getflexgridmouseupError);    
	};

	$scope.getflexgridmouseupSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgridmouseupError = function(response) {
	}; 

   	$scope.getflexgriddblclick=function() {	
		ProcessStatusHandler.flexgriddblclick($scope.TASAObject,$scope.getflexgriddblclickSuccess, $scope.getflexgriddblclickError);    
	};

	$scope.getflexgriddblclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgriddblclickError = function(response) {
	}; 

   	$scope.getdocolumnsort=function() {	
		ProcessStatusHandler.docolumnsort($scope.TASAObject,$scope.getdocolumnsortSuccess, $scope.getdocolumnsortError);    
	};

	$scope.getdocolumnsortSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdocolumnsortError = function(response) {
	}; 

   	$scope.getflexgridrowcolchange=function() {	
		ProcessStatusHandler.flexgridrowcolchange($scope.TASAObject,$scope.getflexgridrowcolchangeSuccess, $scope.getflexgridrowcolchangeError);    
	};

	$scope.getflexgridrowcolchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getflexgridrowcolchangeError = function(response) {
	}; 

   	$scope.getformactivate=function() {	
		ProcessStatusHandler.formactivate($scope.TASAObject,$scope.getformactivateSuccess, $scope.getformactivateError);    
	};

	$scope.getformactivateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformactivateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		ProcessStatusHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformatflexgrid=function() {	
		ProcessStatusHandler.formatflexgrid($scope.TASAObject,$scope.getformatflexgridSuccess, $scope.getformatflexgridError);    
	};

	$scope.getformatflexgridSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformatflexgridError = function(response) {
	}; 

   	$scope.getmshflexgriddblclick=function() {	
		ProcessStatusHandler.mshflexgriddblclick($scope.TASAObject,$scope.getmshflexgriddblclickSuccess, $scope.getmshflexgriddblclickError);    
	};

	$scope.getmshflexgriddblclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmshflexgriddblclickError = function(response) {
	}; 

   	$scope.getcolumnsort=function() {	
		ProcessStatusHandler.columnsort($scope.TASAObject,$scope.getcolumnsortSuccess, $scope.getcolumnsortError);    
	};

	$scope.getcolumnsortSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcolumnsortError = function(response) {
	}; 

   	$scope.getformresize=function() {	
		ProcessStatusHandler.formresize($scope.TASAObject,$scope.getformresizeSuccess, $scope.getformresizeError);    
	};

	$scope.getformresizeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformresizeError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		ProcessStatusHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		ProcessStatusHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtappkeypress=function() {	
		ProcessStatusHandler.txtappkeypress($scope.TASAObject,$scope.gettxtappkeypressSuccess, $scope.gettxtappkeypressError);    
	};

	$scope.gettxtappkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtappkeypressError = function(response) {
	}; 

   	$scope.gettxtapplostfocus=function() {	
		ProcessStatusHandler.txtapplostfocus($scope.TASAObject,$scope.gettxtapplostfocusSuccess, $scope.gettxtapplostfocusError);    
	};

	$scope.gettxtapplostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtapplostfocusError = function(response) {
	}; 

   	$scope.gettxtdatekeypress=function() {	
		ProcessStatusHandler.txtdatekeypress($scope.TASAObject,$scope.gettxtdatekeypressSuccess, $scope.gettxtdatekeypressError);    
	};

	$scope.gettxtdatekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtdatekeypressError = function(response) {
	}; 

   	$scope.gettxtnamekeypress=function() {	
		ProcessStatusHandler.txtnamekeypress($scope.TASAObject,$scope.gettxtnamekeypressSuccess, $scope.gettxtnamekeypressError);    
	};

	$scope.gettxtnamekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnamekeypressError = function(response) {
	}; 
});