
app.controller('ModUtilitiesController', function($scope, ModUtilitiesHandler) {


   	$scope.getgetnetusername=function() {	
		ModUtilitiesHandler.getnetusername($scope.TASAObject,$scope.getgetnetusernameSuccess, $scope.getgetnetusernameError);    
	};

	$scope.getgetnetusernameSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getgetnetusernameError = function(response) {
	}; 

   	$scope.getpmadmember=function() {	
		ModUtilitiesHandler.pmadmember($scope.TASAObject,$scope.getpmadmemberSuccess, $scope.getpmadmemberError);    
	};

	$scope.getpmadmemberSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getpmadmemberError = function(response) {
	}; 

   	$scope.getnewbizmember=function() {	
		ModUtilitiesHandler.newbizmember($scope.TASAObject,$scope.getnewbizmemberSuccess, $scope.getnewbizmemberError);    
	};

	$scope.getnewbizmemberSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getnewbizmemberError = function(response) {
	}; 

   	$scope.getfinsvcsmember=function() {	
		ModUtilitiesHandler.finsvcsmember($scope.TASAObject,$scope.getfinsvcsmemberSuccess, $scope.getfinsvcsmemberError);    
	};

	$scope.getfinsvcsmemberSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getfinsvcsmemberError = function(response) {
	}; 

   	$scope.getadminmember=function() {	
		ModUtilitiesHandler.adminmember($scope.TASAObject,$scope.getadminmemberSuccess, $scope.getadminmemberError);    
	};

	$scope.getadminmemberSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getadminmemberError = function(response) {
	}; 

   	$scope.getforcenav=function() {	
		ModUtilitiesHandler.forcenav($scope.TASAObject,$scope.getforcenavSuccess, $scope.getforcenavError);    
	};

	$scope.getforcenavSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getforcenavError = function(response) {
	}; 

   	$scope.getforcedollar=function() {	
		ModUtilitiesHandler.forcedollar($scope.TASAObject,$scope.getforcedollarSuccess, $scope.getforcedollarError);    
	};

	$scope.getforcedollarSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getforcedollarError = function(response) {
	}; 

   	$scope.getcenterform=function() {	
		ModUtilitiesHandler.centerform($scope.TASAObject,$scope.getcenterformSuccess, $scope.getcenterformError);    
	};

	$scope.getcenterformSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getcenterformError = function(response) {
	}; 

   	$scope.getdecimalpointexist=function() {	
		ModUtilitiesHandler.decimalpointexist($scope.TASAObject,$scope.getdecimalpointexistSuccess, $scope.getdecimalpointexistError);    
	};

	$scope.getdecimalpointexistSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdecimalpointexistError = function(response) {
	}; 

   	$scope.getopendatabase=function() {	
		ModUtilitiesHandler.opendatabase($scope.TASAObject,$scope.getopendatabaseSuccess, $scope.getopendatabaseError);    
	};

	$scope.getopendatabaseSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getopendatabaseError = function(response) {
	}; 

   	$scope.getdateformodel=function() {	
		ModUtilitiesHandler.dateformodel($scope.TASAObject,$scope.getdateformodelSuccess, $scope.getdateformodelError);    
	};

	$scope.getdateformodelSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdateformodelError = function(response) {
	}; 
});