
app.controller('FrmAdjFctrMaintController', function($scope, FrmAdjFctrMaintHandler) {


   	$scope.getcbofundsclick=function() {	
		FrmAdjFctrMaintHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdaddclick=function() {	
		FrmAdjFctrMaintHandler.cmdaddclick($scope.TASAObject,$scope.getcmdaddclickSuccess, $scope.getcmdaddclickError);    
	};

	$scope.getcmdaddclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdaddclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmAdjFctrMaintHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmAdjFctrMaintHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getcmdsaveclick=function() {	
		FrmAdjFctrMaintHandler.cmdsaveclick($scope.TASAObject,$scope.getcmdsaveclickSuccess, $scope.getcmdsaveclickError);    
	};

	$scope.getcmdsaveclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsaveclickError = function(response) {
	}; 

   	$scope.getcmdshowcommentsclick=function() {	
		FrmAdjFctrMaintHandler.cmdshowcommentsclick($scope.TASAObject,$scope.getcmdshowcommentsclickSuccess, $scope.getcmdshowcommentsclickError);    
	};

	$scope.getcmdshowcommentsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdshowcommentsclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmAdjFctrMaintHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmAdjFctrMaintHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.gettxtadjustfactorgotfocus=function() {	
		FrmAdjFctrMaintHandler.txtadjustfactorgotfocus($scope.TASAObject,$scope.gettxtadjustfactorgotfocusSuccess, $scope.gettxtadjustfactorgotfocusError);    
	};

	$scope.gettxtadjustfactorgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtadjustfactorgotfocusError = function(response) {
	}; 

   	$scope.gettxtadjustfactorkeypress=function() {	
		FrmAdjFctrMaintHandler.txtadjustfactorkeypress($scope.TASAObject,$scope.gettxtadjustfactorkeypressSuccess, $scope.gettxtadjustfactorkeypressError);    
	};

	$scope.gettxtadjustfactorkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtadjustfactorkeypressError = function(response) {
	}; 

   	$scope.gettxtadjustfactorlostfocus=function() {	
		FrmAdjFctrMaintHandler.txtadjustfactorlostfocus($scope.TASAObject,$scope.gettxtadjustfactorlostfocusSuccess, $scope.gettxtadjustfactorlostfocusError);    
	};

	$scope.gettxtadjustfactorlostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtadjustfactorlostfocusError = function(response) {
	}; 
});