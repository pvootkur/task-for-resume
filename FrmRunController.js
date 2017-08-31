
app.controller('FrmRunController', function($scope, FrmRunHandler) {


   	$scope.getcmdcloseclick=function() {	
		FrmRunHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdsubmitclick=function() {	
		FrmRunHandler.cmdsubmitclick($scope.TASAObject,$scope.getcmdsubmitclickSuccess, $scope.getcmdsubmitclickError);    
	};

	$scope.getcmdsubmitclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsubmitclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmRunHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getoptcalcunitvaluesclick=function() {	
		FrmRunHandler.optcalcunitvaluesclick($scope.TASAObject,$scope.getoptcalcunitvaluesclickSuccess, $scope.getoptcalcunitvaluesclickError);    
	};

	$scope.getoptcalcunitvaluesclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptcalcunitvaluesclickError = function(response) {
	}; 

   	$scope.getoptconfirmnavclick=function() {	
		FrmRunHandler.optconfirmnavclick($scope.TASAObject,$scope.getoptconfirmnavclickSuccess, $scope.getoptconfirmnavclickError);    
	};

	$scope.getoptconfirmnavclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptconfirmnavclickError = function(response) {
	}; 

   	$scope.getoptfinalizeunitvalueclick=function() {	
		FrmRunHandler.optfinalizeunitvalueclick($scope.TASAObject,$scope.getoptfinalizeunitvalueclickSuccess, $scope.getoptfinalizeunitvalueclickError);    
	};

	$scope.getoptfinalizeunitvalueclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptfinalizeunitvalueclickError = function(response) {
	}; 

   	$scope.getoptnaveditclick=function() {	
		FrmRunHandler.optnaveditclick($scope.TASAObject,$scope.getoptnaveditclickSuccess, $scope.getoptnaveditclickError);    
	};

	$scope.getoptnaveditclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptnaveditclickError = function(response) {
	}; 

   	$scope.getoptnavloadclick=function() {	
		FrmRunHandler.optnavloadclick($scope.TASAObject,$scope.getoptnavloadclickSuccess, $scope.getoptnavloadclickError);    
	};

	$scope.getoptnavloadclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptnavloadclickError = function(response) {
	}; 

   	$scope.getoptrelianceeditclick=function() {	
		FrmRunHandler.optrelianceeditclick($scope.TASAObject,$scope.getoptrelianceeditclickSuccess, $scope.getoptrelianceeditclickError);    
	};

	$scope.getoptrelianceeditclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptrelianceeditclickError = function(response) {
	}; 

   	$scope.getdisplaydescription=function() {	
		FrmRunHandler.displaydescription($scope.TASAObject,$scope.getdisplaydescriptionSuccess, $scope.getdisplaydescriptionError);    
	};

	$scope.getdisplaydescriptionSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdisplaydescriptionError = function(response) {
	}; 

   	$scope.getgetmodule=function() {	
		FrmRunHandler.getmodule($scope.TASAObject,$scope.getgetmoduleSuccess, $scope.getgetmoduleError);    
	};

	$scope.getgetmoduleSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetmoduleError = function(response) {
	}; 

   	$scope.getcmd1461click=function() {	
		FrmRunHandler.cmd1461click($scope.TASAObject,$scope.getcmd1461clickSuccess, $scope.getcmd1461clickError);    
	};

	$scope.getcmd1461clickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmd1461clickError = function(response) {
	}; 

   	$scope.getcmd1451click=function() {	
		FrmRunHandler.cmd1451click($scope.TASAObject,$scope.getcmd1451clickSuccess, $scope.getcmd1451clickError);    
	};

	$scope.getcmd1451clickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmd1451clickError = function(response) {
	}; 

   	$scope.getcmd1421click=function() {	
		FrmRunHandler.cmd1421click($scope.TASAObject,$scope.getcmd1421clickSuccess, $scope.getcmd1421clickError);    
	};

	$scope.getcmd1421clickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmd1421clickError = function(response) {
	}; 

   	$scope.getcmd1411click=function() {	
		FrmRunHandler.cmd1411click($scope.TASAObject,$scope.getcmd1411clickSuccess, $scope.getcmd1411clickError);    
	};

	$scope.getcmd1411clickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmd1411clickError = function(response) {
	}; 

   	$scope.getcmd161click=function() {	
		FrmRunHandler.cmd161click($scope.TASAObject,$scope.getcmd161clickSuccess, $scope.getcmd161clickError);    
	};

	$scope.getcmd161clickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmd161clickError = function(response) {
	}; 
});