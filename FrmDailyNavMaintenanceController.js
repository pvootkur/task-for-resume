
app.controller('FrmDailyNavMaintenanceController', function($scope, FrmDailyNavMaintenanceHandler) {


   	$scope.getpopulatesfgfund=function() {	
		FrmDailyNavMaintenanceHandler.populatesfgfund($scope.TASAObject,$scope.getpopulatesfgfundSuccess, $scope.getpopulatesfgfundError);    
	};

	$scope.getpopulatesfgfundSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatesfgfundError = function(response) {
	}; 

   	$scope.getshowcurrentdate=function() {	
		FrmDailyNavMaintenanceHandler.showcurrentdate($scope.TASAObject,$scope.getshowcurrentdateSuccess, $scope.getshowcurrentdateError);    
	};

	$scope.getshowcurrentdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getshowcurrentdateError = function(response) {
	}; 

   	$scope.getclearallfields=function() {	
		FrmDailyNavMaintenanceHandler.clearallfields($scope.TASAObject,$scope.getclearallfieldsSuccess, $scope.getclearallfieldsError);    
	};

	$scope.getclearallfieldsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getclearallfieldsError = function(response) {
	}; 

   	$scope.getcbofundsclick=function() {	
		FrmDailyNavMaintenanceHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdaddmodifyclick=function() {	
		FrmDailyNavMaintenanceHandler.cmdaddmodifyclick($scope.TASAObject,$scope.getcmdaddmodifyclickSuccess, $scope.getcmdaddmodifyclickError);    
	};

	$scope.getcmdaddmodifyclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdaddmodifyclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmDailyNavMaintenanceHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmDailyNavMaintenanceHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getpopulateselectedfunddetails=function() {	
		FrmDailyNavMaintenanceHandler.populateselectedfunddetails($scope.TASAObject,$scope.getpopulateselectedfunddetailsSuccess, $scope.getpopulateselectedfunddetailsError);    
	};

	$scope.getpopulateselectedfunddetailsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulateselectedfunddetailsError = function(response) {
	}; 

   	$scope.getenablemanualvalfields=function() {	
		FrmDailyNavMaintenanceHandler.enablemanualvalfields($scope.TASAObject,$scope.getenablemanualvalfieldsSuccess, $scope.getenablemanualvalfieldsError);    
	};

	$scope.getenablemanualvalfieldsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getenablemanualvalfieldsError = function(response) {
	}; 

   	$scope.getcmdselfundclick=function() {	
		FrmDailyNavMaintenanceHandler.cmdselfundclick($scope.TASAObject,$scope.getcmdselfundclickSuccess, $scope.getcmdselfundclickError);    
	};

	$scope.getcmdselfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselfundclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmDailyNavMaintenanceHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.gettxtmanualrepeatchange=function() {	
		FrmDailyNavMaintenanceHandler.txtmanualrepeatchange($scope.TASAObject,$scope.gettxtmanualrepeatchangeSuccess, $scope.gettxtmanualrepeatchangeError);    
	};

	$scope.gettxtmanualrepeatchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmanualrepeatchangeError = function(response) {
	}; 

   	$scope.gettxtmanualrepeatkeypress=function() {	
		FrmDailyNavMaintenanceHandler.txtmanualrepeatkeypress($scope.TASAObject,$scope.gettxtmanualrepeatkeypressSuccess, $scope.gettxtmanualrepeatkeypressError);    
	};

	$scope.gettxtmanualrepeatkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmanualrepeatkeypressError = function(response) {
	}; 

   	$scope.gettxtmanualvalchange=function() {	
		FrmDailyNavMaintenanceHandler.txtmanualvalchange($scope.TASAObject,$scope.gettxtmanualvalchangeSuccess, $scope.gettxtmanualvalchangeError);    
	};

	$scope.gettxtmanualvalchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmanualvalchangeError = function(response) {
	}; 

   	$scope.gettxtmanualvalkeypress=function() {	
		FrmDailyNavMaintenanceHandler.txtmanualvalkeypress($scope.TASAObject,$scope.gettxtmanualvalkeypressSuccess, $scope.gettxtmanualvalkeypressError);    
	};

	$scope.gettxtmanualvalkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtmanualvalkeypressError = function(response) {
	}; 
});