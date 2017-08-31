
app.controller('FrmDivdMaintController', function($scope, FrmDivdMaintHandler) {


   	$scope.getcboesttypecdclick=function() {	
		FrmDivdMaintHandler.cboesttypecdclick($scope.TASAObject,$scope.getcboesttypecdclickSuccess, $scope.getcboesttypecdclickError);    
	};

	$scope.getcboesttypecdclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcboesttypecdclickError = function(response) {
	}; 

   	$scope.getcbofundsclick=function() {	
     	FrmDivdMaintHandler.cbofundsclick($scope.FrmDivdMaint,$scope.getcbofundsclickSuccess, $scope.getcbofundsclickError);    
	};

	$scope.getcbofundsclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcbofundsclickError = function(response) {
	}; 

   	$scope.getcmdclearclick=function() {	
		FrmDivdMaintHandler.cmdclearclick($scope.TASAObject,$scope.getcmdclearclickSuccess, $scope.getcmdclearclickError);    
	};

	$scope.getcmdclearclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdclearclickError = function(response) {
	}; 

   	$scope.getcmdcloseclick=function() {	
		FrmDivdMaintHandler.cmdcloseclick($scope.TASAObject,$scope.getcmdcloseclickSuccess, $scope.getcmdcloseclickError);    
	};

	$scope.getcmdcloseclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcloseclickError = function(response) {
	}; 

   	$scope.getcmdcomputenavclick=function() {	
		FrmDivdMaintHandler.cmdcomputenavclick($scope.TASAObject,$scope.getcmdcomputenavclickSuccess, $scope.getcmdcomputenavclickError);    
	};

	$scope.getcmdcomputenavclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdcomputenavclickError = function(response) {
	}; 

   	$scope.getcmdrefreshclick=function() {	
		FrmDivdMaintHandler.cmdrefreshclick($scope.TASAObject,$scope.getcmdrefreshclickSuccess, $scope.getcmdrefreshclickError);    
	};

	$scope.getcmdrefreshclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdrefreshclickError = function(response) {
	}; 

   	$scope.getcmdsaveclick=function() {	
		FrmDivdMaintHandler.cmdsaveclick($scope.TASAObject,$scope.getcmdsaveclickSuccess, $scope.getcmdsaveclickError);    
	};

	$scope.getcmdsaveclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdsaveclickError = function(response) {
	}; 

   	$scope.getcmdselectfundclick=function() {	
		FrmDivdMaintHandler.cmdselectfundclick($scope.TASAObject,$scope.getcmdselectfundclickSuccess, $scope.getcmdselectfundclickError);    
	};

	$scope.getcmdselectfundclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcmdselectfundclickError = function(response) {
	}; 

   	$scope.getdtpactreinvesteddatechange=function() {	
		FrmDivdMaintHandler.dtpactreinvesteddatechange($scope.TASAObject,$scope.getdtpactreinvesteddatechangeSuccess, $scope.getdtpactreinvesteddatechangeError);    
	};

	$scope.getdtpactreinvesteddatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdtpactreinvesteddatechangeError = function(response) {
	}; 

   	$scope.getdtpexdatechange=function() {	
		FrmDivdMaintHandler.dtpexdatechange($scope.TASAObject,$scope.getdtpexdatechangeSuccess, $scope.getdtpexdatechangeError);    
	};

	$scope.getdtpexdatechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdtpexdatechangeError = function(response) {
	}; 

   	$scope.getformload=function() {	
		FrmDivdMaintHandler.formload($scope.TASAObject,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformloadError = function(response) {
	}; 

   	$scope.getformunload=function() {	
		FrmDivdMaintHandler.formunload($scope.TASAObject,$scope.getformunloadSuccess, $scope.getformunloadError);    
	};

	$scope.getformunloadSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getformunloadError = function(response) {
	}; 

   	$scope.getlvwdividenditemclick=function() {	
		FrmDivdMaintHandler.lvwdividenditemclick($scope.TASAObject,$scope.getlvwdividenditemclickSuccess, $scope.getlvwdividenditemclickError);    
	};

	$scope.getlvwdividenditemclickSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getlvwdividenditemclickError = function(response) {
	}; 

   	$scope.gettxtactdollarschange=function() {	
		FrmDivdMaintHandler.txtactdollarschange($scope.TASAObject,$scope.gettxtactdollarschangeSuccess, $scope.gettxtactdollarschangeError);    
	};

	$scope.gettxtactdollarschangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactdollarschangeError = function(response) {
	}; 

   	$scope.gettxtactdollarsgotfocus=function() {	
		FrmDivdMaintHandler.txtactdollarsgotfocus($scope.TASAObject,$scope.gettxtactdollarsgotfocusSuccess, $scope.gettxtactdollarsgotfocusError);    
	};

	$scope.gettxtactdollarsgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactdollarsgotfocusError = function(response) {
	}; 

   	$scope.gettxtactdollarskeypress=function() {	
		FrmDivdMaintHandler.txtactdollarskeypress($scope.TASAObject,$scope.gettxtactdollarskeypressSuccess, $scope.gettxtactdollarskeypressError);    
	};

	$scope.gettxtactdollarskeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactdollarskeypressError = function(response) {
	}; 

   	$scope.gettxtactdollarslostfocus=function() {	
		FrmDivdMaintHandler.txtactdollarslostfocus($scope.TASAObject,$scope.gettxtactdollarslostfocusSuccess, $scope.gettxtactdollarslostfocusError);    
	};

	$scope.gettxtactdollarslostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactdollarslostfocusError = function(response) {
	}; 

   	$scope.gettxtactrategotfocus=function() {	
		FrmDivdMaintHandler.txtactrategotfocus($scope.TASAObject,$scope.gettxtactrategotfocusSuccess, $scope.gettxtactrategotfocusError);    
	};

	$scope.gettxtactrategotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactrategotfocusError = function(response) {
	}; 

   	$scope.gettxtactratekeypress=function() {	
		FrmDivdMaintHandler.txtactratekeypress($scope.TASAObject,$scope.gettxtactratekeypressSuccess, $scope.gettxtactratekeypressError);    
	};

	$scope.gettxtactratekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactratekeypressError = function(response) {
	}; 

   	$scope.gettxtactratelostfocus=function() {	
		FrmDivdMaintHandler.txtactratelostfocus($scope.TASAObject,$scope.gettxtactratelostfocusSuccess, $scope.gettxtactratelostfocusError);    
	};

	$scope.gettxtactratelostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactratelostfocusError = function(response) {
	}; 

   	$scope.gettxtactshareschange=function() {	
		FrmDivdMaintHandler.txtactshareschange($scope.TASAObject,$scope.gettxtactshareschangeSuccess, $scope.gettxtactshareschangeError);    
	};

	$scope.gettxtactshareschangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactshareschangeError = function(response) {
	}; 

   	$scope.gettxtactsharesgotfocus=function() {	
		FrmDivdMaintHandler.txtactsharesgotfocus($scope.TASAObject,$scope.gettxtactsharesgotfocusSuccess, $scope.gettxtactsharesgotfocusError);    
	};

	$scope.gettxtactsharesgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactsharesgotfocusError = function(response) {
	}; 

   	$scope.gettxtactshareskeypress=function() {	
		FrmDivdMaintHandler.txtactshareskeypress($scope.TASAObject,$scope.gettxtactshareskeypressSuccess, $scope.gettxtactshareskeypressError);    
	};

	$scope.gettxtactshareskeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactshareskeypressError = function(response) {
	}; 

   	$scope.gettxtactshareslostfocus=function() {	
		FrmDivdMaintHandler.txtactshareslostfocus($scope.TASAObject,$scope.gettxtactshareslostfocusSuccess, $scope.gettxtactshareslostfocusError);    
	};

	$scope.gettxtactshareslostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtactshareslostfocusError = function(response) {
	}; 

   	$scope.gettxtestratechange=function() {	
		FrmDivdMaintHandler.txtestratechange($scope.TASAObject,$scope.gettxtestratechangeSuccess, $scope.gettxtestratechangeError);    
	};

	$scope.gettxtestratechangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratechangeError = function(response) {
	}; 

   	$scope.gettxtestrategotfocus=function() {	
		FrmDivdMaintHandler.txtestrategotfocus($scope.TASAObject,$scope.gettxtestrategotfocusSuccess, $scope.gettxtestrategotfocusError);    
	};

	$scope.gettxtestrategotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestrategotfocusError = function(response) {
	}; 

   	$scope.gettxtestratekeypress=function() {	
		FrmDivdMaintHandler.txtestratekeypress($scope.TASAObject,$scope.gettxtestratekeypressSuccess, $scope.gettxtestratekeypressError);    
	};

	$scope.gettxtestratekeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratekeypressError = function(response) {
	}; 

   	$scope.gettxtestratelostfocus=function() {	
		FrmDivdMaintHandler.txtestratelostfocus($scope.TASAObject,$scope.gettxtestratelostfocusSuccess, $scope.gettxtestratelostfocusError);    
	};

	$scope.gettxtestratelostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtestratelostfocusError = function(response) {
	}; 

   	$scope.gettxtnavauditedchange=function() {	
		FrmDivdMaintHandler.txtnavauditedchange($scope.TASAObject,$scope.gettxtnavauditedchangeSuccess, $scope.gettxtnavauditedchangeError);    
	};

	$scope.gettxtnavauditedchangeSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnavauditedchangeError = function(response) {
	}; 

   	$scope.gettxtnavauditedgotfocus=function() {	
		FrmDivdMaintHandler.txtnavauditedgotfocus($scope.TASAObject,$scope.gettxtnavauditedgotfocusSuccess, $scope.gettxtnavauditedgotfocusError);    
	};

	$scope.gettxtnavauditedgotfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnavauditedgotfocusError = function(response) {
	}; 

   	$scope.gettxtnavauditedkeypress=function() {	
		FrmDivdMaintHandler.txtnavauditedkeypress($scope.TASAObject,$scope.gettxtnavauditedkeypressSuccess, $scope.gettxtnavauditedkeypressError);    
	};

	$scope.gettxtnavauditedkeypressSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnavauditedkeypressError = function(response) {
	}; 

   	$scope.gettxtnavauditedlostfocus=function() {	
		FrmDivdMaintHandler.txtnavauditedlostfocus($scope.TASAObject,$scope.gettxtnavauditedlostfocusSuccess, $scope.gettxtnavauditedlostfocusError);    
	};

	$scope.gettxtnavauditedlostfocusSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.gettxtnavauditedlostfocusError = function(response) {
	}; 
});