
app.controller('FrmRelatedFundsController', function($scope, FrmRelatedFundsHandler) {


   	$scope.getpopulatesfgfunds=function() {	
		FrmRelatedFundsHandler.populatesfgfunds($scope.TASAObject,$scope.getpopulatesfgfundsSuccess, $scope.getpopulatesfgfundsError);    
	};

	$scope.getpopulatesfgfundsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatesfgfundsError = function(response) {
	}; 

   	$scope.getpopulaterelatedfunds=function() {	
		FrmRelatedFundsHandler.populaterelatedfunds($scope.TASAObject,$scope.getpopulaterelatedfundsSuccess, $scope.getpopulaterelatedfundsError);    
	};

	$scope.getpopulaterelatedfundsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulaterelatedfundsError = function(response) {
	}; 

   	$scope.getcboallfundsclick=function() {	
		FrmRelatedFundsHandler.cboallfundsclick($scope.TASAObject,$scope.getcboallfundsclickSuccess, $scope.getcboallfundsclickError);    
	};

	$scope.getcboallfundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboallfundsclickError = function(response) {
	}; 

   	$scope.getcbosfgfundsclick=function() {	
		FrmRelatedFundsHandler.cbosfgfundsclick($scope.TASAObject,$scope.getcbosfgfundsclickSuccess, $scope.getcbosfgfundsclickError);    
	};

	$scope.getcbosfgfundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbosfgfundsclickError = function(response) {
	}; 

   	$scope.getcmdaddclick=function() {	
		FrmRelatedFundsHandler.cmdaddclick($scope.TASAObject,$scope.getcmdaddclickSuccess, $scope.getcmdaddclickError);    
	};

	$scope.getcmdaddclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdaddclickError = function(response) {
	}; 

   	$scope.getgetthehighestpriority=function() {	
		FrmRelatedFundsHandler.getthehighestpriority($scope.TASAObject,$scope.getgetthehighestprioritySuccess, $scope.getgetthehighestpriorityError);    
	};

	$scope.getgetthehighestprioritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetthehighestpriorityError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmRelatedFundsHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getreorderpriority=function() {	
		FrmRelatedFundsHandler.reorderpriority($scope.TASAObject,$scope.getreorderprioritySuccess, $scope.getreorderpriorityError);    
	};

	$scope.getreorderprioritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getreorderpriorityError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmRelatedFundsHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getcmddownclick=function() {	
		FrmRelatedFundsHandler.cmddownclick($scope.TASAObject,$scope.getcmddownclickSuccess, $scope.getcmddownclickError);    
	};

	$scope.getcmddownclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddownclickError = function(response) {
	}; 

   	$scope.getupdatepriority=function() {	
		FrmRelatedFundsHandler.updatepriority($scope.TASAObject,$scope.getupdateprioritySuccess, $scope.getupdatepriorityError);    
	};

	$scope.getupdateprioritySuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getupdatepriorityError = function(response) {
	}; 

   	$scope.getcmdmodifyclick=function() {	
		FrmRelatedFundsHandler.cmdmodifyclick($scope.TASAObject,$scope.getcmdmodifyclickSuccess, $scope.getcmdmodifyclickError);    
	};

	$scope.getcmdmodifyclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdmodifyclickError = function(response) {
	}; 

   	$scope.getcmdselfundclick=function() {	
		FrmRelatedFundsHandler.cmdselfundclick($scope.TASAObject,$scope.getcmdselfundclickSuccess, $scope.getcmdselfundclickError);    
	};

	$scope.getcmdselfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselfundclickError = function(response) {
	}; 

   	$scope.getcmdupclick=function() {	
		FrmRelatedFundsHandler.cmdupclick($scope.TASAObject,$scope.getcmdupclickSuccess, $scope.getcmdupclickError);    
	};

	$scope.getcmdupclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdupclickError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmRelatedFundsHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmRelatedFundsHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getlvrelfundsclick=function() {	
		FrmRelatedFundsHandler.lvrelfundsclick($scope.TASAObject,$scope.getlvrelfundsclickSuccess, $scope.getlvrelfundsclickError);    
	};

	$scope.getlvrelfundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlvrelfundsclickError = function(response) {
	}; 

   	$scope.getlvrelfundscolumnclick=function() {	
		FrmRelatedFundsHandler.lvrelfundscolumnclick($scope.TASAObject,$scope.getlvrelfundscolumnclickSuccess, $scope.getlvrelfundscolumnclickError);    
	};

	$scope.getlvrelfundscolumnclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlvrelfundscolumnclickError = function(response) {
	}; 

   	$scope.getselfundswithsameassetclass=function() {	
		FrmRelatedFundsHandler.selfundswithsameassetclass($scope.TASAObject,$scope.getselfundswithsameassetclassSuccess, $scope.getselfundswithsameassetclassError);    
	};

	$scope.getselfundswithsameassetclassSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getselfundswithsameassetclassError = function(response) {
	}; 

   	$scope.getshowallfunds=function() {	
		FrmRelatedFundsHandler.showallfunds($scope.TASAObject,$scope.getshowallfundsSuccess, $scope.getshowallfundsError);    
	};

	$scope.getshowallfundsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getshowallfundsError = function(response) {
	}; 

   	$scope.getoptsameassetclassclick=function() {	
		FrmRelatedFundsHandler.optsameassetclassclick($scope.TASAObject,$scope.getoptsameassetclassclickSuccess, $scope.getoptsameassetclassclickError);    
	};

	$scope.getoptsameassetclassclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptsameassetclassclickError = function(response) {
	}; 

   	$scope.getoptshowallclick=function() {	
		FrmRelatedFundsHandler.optshowallclick($scope.TASAObject,$scope.getoptshowallclickSuccess, $scope.getoptshowallclickError);    
	};

	$scope.getoptshowallclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptshowallclickError = function(response) {
	}; 
});