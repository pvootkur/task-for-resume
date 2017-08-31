
app.controller('FrmUVEntryController', function($scope, FrmUVEntryHandler) {


   	$scope.getpopulatecontract=function() {	
		FrmUVEntryHandler.populatecontract($scope.TASAObject,$scope.getpopulatecontractSuccess, $scope.getpopulatecontractError);    
	};

	$scope.getpopulatecontractSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatecontractError = function(response) {
	}; 

   	$scope.getasofdatetoday=function() {	
		FrmUVEntryHandler.asofdatetoday($scope.TASAObject,$scope.getasofdatetodaySuccess, $scope.getasofdatetodayError);    
	};

	$scope.getasofdatetodaySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getasofdatetodayError = function(response) {
	}; 

   	$scope.getpopulatefunds=function() {	
		FrmUVEntryHandler.populatefunds($scope.TASAObject,$scope.getpopulatefundsSuccess, $scope.getpopulatefundsError);    
	};

	$scope.getpopulatefundsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatefundsError = function(response) {
	}; 

   	$scope.getdecimalpointexist=function() {	
		FrmUVEntryHandler.decimalpointexist($scope.TASAObject,$scope.getdecimalpointexistSuccess, $scope.getdecimalpointexistError);    
	};

	$scope.getdecimalpointexistSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdecimalpointexistError = function(response) {
	}; 

   	$scope.getenabledisable=function() {	
		FrmUVEntryHandler.enabledisable($scope.TASAObject,$scope.getenabledisableSuccess, $scope.getenabledisableError);    
	};

	$scope.getenabledisableSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getenabledisableError = function(response) {
	}; 

   	$scope.getcbocontractclick=function() {	
		FrmUVEntryHandler.cbocontractclick($scope.TASAObject,$scope.getcbocontractclickSuccess, $scope.getcbocontractclickError);    
	};

	$scope.getcbocontractclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbocontractclickError = function(response) {
	}; 

   	$scope.getcbofundclick=function() {	
		FrmUVEntryHandler.cbofundclick($scope.TASAObject,$scope.getcbofundclickSuccess, $scope.getcbofundclickError);    
	};

	$scope.getcbofundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundclickError = function(response) {
	}; 

   	$scope.getcmdaddmodifyclick=function() {	
		FrmUVEntryHandler.cmdaddmodifyclick($scope.TASAObject,$scope.getcmdaddmodifyclickSuccess, $scope.getcmdaddmodifyclickError);    
	};

	$scope.getcmdaddmodifyclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdaddmodifyclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmUVEntryHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmUVEntryHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getcmdselfundclick=function() {	
		FrmUVEntryHandler.cmdselfundclick($scope.TASAObject,$scope.getcmdselfundclickSuccess, $scope.getcmdselfundclickError);    
	};

	$scope.getcmdselfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselfundclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmUVEntryHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.gettxtreenteruvoverridechange=function() {	
		FrmUVEntryHandler.txtreenteruvoverridechange($scope.TASAObject,$scope.gettxtreenteruvoverridechangeSuccess, $scope.gettxtreenteruvoverridechangeError);    
	};

	$scope.gettxtreenteruvoverridechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtreenteruvoverridechangeError = function(response) {
	}; 

   	$scope.gettxtreenteruvoverridekeypress=function() {	
		FrmUVEntryHandler.txtreenteruvoverridekeypress($scope.TASAObject,$scope.gettxtreenteruvoverridekeypressSuccess, $scope.gettxtreenteruvoverridekeypressError);    
	};

	$scope.gettxtreenteruvoverridekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtreenteruvoverridekeypressError = function(response) {
	}; 

   	$scope.gettxtuvoverridechange=function() {	
		FrmUVEntryHandler.txtuvoverridechange($scope.TASAObject,$scope.gettxtuvoverridechangeSuccess, $scope.gettxtuvoverridechangeError);    
	};

	$scope.gettxtuvoverridechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtuvoverridechangeError = function(response) {
	}; 

   	$scope.gettxtuvoverridekeypress=function() {	
		FrmUVEntryHandler.txtuvoverridekeypress($scope.TASAObject,$scope.gettxtuvoverridekeypressSuccess, $scope.gettxtuvoverridekeypressError);    
	};

	$scope.gettxtuvoverridekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtuvoverridekeypressError = function(response) {
	}; 
});