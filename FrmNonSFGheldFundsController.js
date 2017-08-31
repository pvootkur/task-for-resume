
app.controller('FrmNonSFGheldFundsController', function($scope, FrmNonSFGheldFundsHandler) {


   	$scope.getpopulateassetclasscombo=function() {	
		FrmNonSFGheldFundsHandler.populateassetclasscombo($scope.TASAObject,$scope.getpopulateassetclasscomboSuccess, $scope.getpopulateassetclasscomboError);    
	};

	$scope.getpopulateassetclasscomboSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulateassetclasscomboError = function(response) {
	}; 

   	$scope.getpopulatefunds=function() {	
		FrmNonSFGheldFundsHandler.populatefunds($scope.TASAObject,$scope.getpopulatefundsSuccess, $scope.getpopulatefundsError);    
	};

	$scope.getpopulatefundsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatefundsError = function(response) {
	}; 

   	$scope.getpopassetclasscombowithunassigned=function() {	
		FrmNonSFGheldFundsHandler.popassetclasscombowithunassigned($scope.TASAObject,$scope.getpopassetclasscombowithunassignedSuccess, $scope.getpopassetclasscombowithunassignedError);    
	};

	$scope.getpopassetclasscombowithunassignedSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopassetclasscombowithunassignedError = function(response) {
	}; 

   	$scope.getmakeunassignedastext=function() {	
		FrmNonSFGheldFundsHandler.makeunassignedastext($scope.TASAObject,$scope.getmakeunassignedastextSuccess, $scope.getmakeunassignedastextError);    
	};

	$scope.getmakeunassignedastextSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getmakeunassignedastextError = function(response) {
	}; 

   	$scope.getselectassetclass=function() {	
		FrmNonSFGheldFundsHandler.selectassetclass($scope.TASAObject,$scope.getselectassetclassSuccess, $scope.getselectassetclassError);    
	};

	$scope.getselectassetclassSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getselectassetclassError = function(response) {
	}; 

   	$scope.getcboassetclasschange=function() {	
		FrmNonSFGheldFundsHandler.cboassetclasschange($scope.TASAObject,$scope.getcboassetclasschangeSuccess, $scope.getcboassetclasschangeError);    
	};

	$scope.getcboassetclasschangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboassetclasschangeError = function(response) {
	}; 

   	$scope.getcboassetclassclick=function() {	
		FrmNonSFGheldFundsHandler.cboassetclassclick($scope.TASAObject,$scope.getcboassetclassclickSuccess, $scope.getcboassetclassclickError);    
	};

	$scope.getcboassetclassclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboassetclassclickError = function(response) {
	}; 

   	$scope.getcbofundschange=function() {	
		FrmNonSFGheldFundsHandler.cbofundschange($scope.TASAObject,$scope.getcbofundschangeSuccess, $scope.getcbofundschangeError);    
	};

	$scope.getcbofundschangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundschangeError = function(response) {
	}; 

   	$scope.getcbofundsclick=function() {	
		FrmNonSFGheldFundsHandler.cbofundsclick($scope.TASAObject,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcboselassetclassclick=function() {	
		FrmNonSFGheldFundsHandler.cboselassetclassclick($scope.TASAObject,$scope.getcboselassetclassclickSuccess, $scope.getcboselassetclassclickError);    
	};

	$scope.getcboselassetclassclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboselassetclassclickError = function(response) {
	}; 

   	$scope.getcmdclearclick=function() {	
		FrmNonSFGheldFundsHandler.cmdclearclick($scope.TASAObject,$scope.getcmdclearclickSuccess, $scope.getcmdclearclickError);    
	};

	$scope.getcmdclearclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdclearclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmNonSFGheldFundsHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getgetsfgfundnames=function() {	
		FrmNonSFGheldFundsHandler.getsfgfundnames($scope.TASAObject,$scope.getgetsfgfundnamesSuccess, $scope.getgetsfgfundnamesError);    
	};

	$scope.getgetsfgfundnamesSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetsfgfundnamesError = function(response) {
	}; 

   	$scope.getcmddeleteclick=function() {	
		FrmNonSFGheldFundsHandler.cmddeleteclick($scope.TASAObject,$scope.getcmddeleteclickSuccess, $scope.getcmddeleteclickError);    
	};

	$scope.getcmddeleteclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmddeleteclickError = function(response) {
	}; 

   	$scope.getduplicatecusip=function() {	
		FrmNonSFGheldFundsHandler.duplicatecusip($scope.TASAObject,$scope.getduplicatecusipSuccess, $scope.getduplicatecusipError);    
	};

	$scope.getduplicatecusipSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getduplicatecusipError = function(response) {
	}; 

   	$scope.getsavechanges=function() {	
		FrmNonSFGheldFundsHandler.savechanges($scope.TASAObject,$scope.getsavechangesSuccess, $scope.getsavechangesError);    
	};

	$scope.getsavechangesSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getsavechangesError = function(response) {
	}; 

   	$scope.getcmdsaveclick=function() {	
		FrmNonSFGheldFundsHandler.cmdsaveclick($scope.TASAObject,$scope.getcmdsaveclickSuccess, $scope.getcmdsaveclickError);    
	};

	$scope.getcmdsaveclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsaveclickError = function(response) {
	}; 

   	$scope.getpopulatefunddetails=function() {	
		FrmNonSFGheldFundsHandler.populatefunddetails($scope.TASAObject,$scope.getpopulatefunddetailsSuccess, $scope.getpopulatefunddetailsError);    
	};

	$scope.getpopulatefunddetailsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpopulatefunddetailsError = function(response) {
	}; 

   	$scope.getcmdselfundclick=function() {	
		FrmNonSFGheldFundsHandler.cmdselfundclick($scope.TASAObject,$scope.getcmdselfundclickSuccess, $scope.getcmdselfundclickError);    
	};

	$scope.getcmdselfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselfundclickError = function(response) {
	}; 

   	$scope.getenabledisablecontrols=function() {	
		FrmNonSFGheldFundsHandler.enabledisablecontrols($scope.TASAObject,$scope.getenabledisablecontrolsSuccess, $scope.getenabledisablecontrolsError);    
	};

	$scope.getenabledisablecontrolsSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getenabledisablecontrolsError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmNonSFGheldFundsHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmNonSFGheldFundsHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getoptfilterbyassetclassclick=function() {	
		FrmNonSFGheldFundsHandler.optfilterbyassetclassclick($scope.TASAObject,$scope.getoptfilterbyassetclassclickSuccess, $scope.getoptfilterbyassetclassclickError);    
	};

	$scope.getoptfilterbyassetclassclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptfilterbyassetclassclickError = function(response) {
	}; 

   	$scope.getoptshowallclick=function() {	
		FrmNonSFGheldFundsHandler.optshowallclick($scope.TASAObject,$scope.getoptshowallclickSuccess, $scope.getoptshowallclickError);    
	};

	$scope.getoptshowallclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getoptshowallclickError = function(response) {
	}; 

   	$scope.gettxtcusipchange=function() {	
		FrmNonSFGheldFundsHandler.txtcusipchange($scope.TASAObject,$scope.gettxtcusipchangeSuccess, $scope.gettxtcusipchangeError);    
	};

	$scope.gettxtcusipchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtcusipchangeError = function(response) {
	}; 

   	$scope.gettxtcusipkeypress=function() {	
		FrmNonSFGheldFundsHandler.txtcusipkeypress($scope.TASAObject,$scope.gettxtcusipkeypressSuccess, $scope.gettxtcusipkeypressError);    
	};

	$scope.gettxtcusipkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtcusipkeypressError = function(response) {
	}; 

   	$scope.gettxtnamechange=function() {	
		FrmNonSFGheldFundsHandler.txtnamechange($scope.TASAObject,$scope.gettxtnamechangeSuccess, $scope.gettxtnamechangeError);    
	};

	$scope.gettxtnamechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnamechangeError = function(response) {
	}; 

   	$scope.gettxttickersymbolchange=function() {	
		FrmNonSFGheldFundsHandler.txttickersymbolchange($scope.TASAObject,$scope.gettxttickersymbolchangeSuccess, $scope.gettxttickersymbolchangeError);    
	};

	$scope.gettxttickersymbolchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxttickersymbolchangeError = function(response) {
	}; 
});