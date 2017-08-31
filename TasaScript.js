//script.js

//create the module and name it scotchApp
//also include ngRoute for all our routing needs
angular.module('Authentication', []);
var app = angular.module('tasaApp', ['Authentication','ngRoute','ngCookies','ui.grid', 'ui.grid.edit', "ui.grid.pagination",'ui.grid.selection','ui.grid.exporter'
	]);
app.constant("appConfig", {
	'PROTOCOL': 'http',	   
	'URL':'localhost',
	'PORT':'8080',
	'APPNAME': 'Tasa'
});
//configure our routes
app.config(['$routeProvider', function ($routeProvider)  {
	$routeProvider
	.when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/login.view.html',
        hideMenus: true
    })
	// route for the home page
    .when('/', {
		templateUrl : 'html/TASAindex.html'
	})
	.when('/glaccount', {
		templateUrl : 'html/GLAccount.html',
		controller  : 'frmGLAccountController'
	})
	.when('/glperiod', {
		templateUrl : 'html/GLPeriod.html',
		controller  : 'frmGLPeriodController'
	})
	.when('/dividendmaintenance', {
		templateUrl : 'html/DividendMaintenance.html',
		controller  : 'dummyController'
	})
	.when('/adjfactory', {
		templateUrl : 'html/Adjustment factory Entry.html',
		controller  : 'dummyController'
	})
	.when('/productseriesrates', {
		templateUrl : 'html/Product series rates.html',
		controller  : 'frmProductSeriesController'
	})
	.when('/pdmretrotrans', {
		templateUrl : 'html/Pdm Retro Transaction.html',
		controller  : 'dummyController'
	})
	.when('/dividendreturnrate', {
		templateUrl : 'html/Dividend Return Rate Maintenance.html',
		controller  : 'dummyController'
	})
	.when('/nonsfgfunds', {
		templateUrl : 'html/NonSFGFunds.html',
		controller  : 'dummyController'
	})
	.when('/relatefund', {
		templateUrl : 'html/Relate Fund.html',
		controller  : 'dummyController'
	})
	.when('/DailyNavMaintenance', {
		templateUrl : 'html/DailydNavMaintenance.html',
		controller  : 'frmDailyNavMaintenanceController'
	})
	.when('/AuditedNavMaintenance', {
		templateUrl : 'html/AuditedNavMaintenance.html',
		controller  : 'dummyController'
	})
	.when('/UVEntry', {
		templateUrl : 'html/UVEntry.html',
		controller  : 'dummyController'
	})
	.when('/ProcessStatus', {
		templateUrl : 'html/ProcessStatus.html',
		controller  : 'processStatusController'
	})
	.when('/BatchProcess', {
		templateUrl : 'html/BatchProcess.html',
		controller  : 'frmBatchProcessControlController'
	})
	.when('/CUVProcessControl', {
		templateUrl : 'html/CUVProcessControl.html'
	})
	.when('/AdjFactorHistory', {
		templateUrl : 'html/AdjFactorHistory.html',
		controller  : 'dummyController'
	})
	.when('/NavDivAdjFacHistory', {
		templateUrl : 'html/NavDivAdjFacHistory.html',
		controller  : 'dummyController'
	})
	.when('/Planid', {
		templateUrl : 'html/Planid.html',
		controller  : 'dummyController'
	})
	.when('/RPD', {
		templateUrl : 'html/RPD.html',
		controller  : 'frmProductFundsController'
	})
	.when('/Fste', {
		templateUrl : 'html/Fste.html',
		controller  : 'fsteController'
	})
	.when('/Rbpc', {
		templateUrl : 'html/Rbpc.html',
		controller  : 'RbpcController'
	})
	.when('/IrmaMailRun', {
		templateUrl : 'html/IrmaMailRun.html'
	})
	.when('/modalpopup', {
		templateUrl : 'html/modalpopup.html'
	})
	   .otherwise({ 
		   redirectTo: 'html/TASAindex.html'
	 })
	.when('/login', {
		 controller: 'LoginController',
	        templateUrl: 'html/login.view.html',
	        hideMenus: true
	});
}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);



(function($) {
	$('#exdate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#exdate1').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#redate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#applyate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#asofdate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#tradedate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "d/m/yy"
	});
	$('#Notifieddate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#Fromdate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#Todate').datepicker({
		changeMonth: true,
		changeYear: true,
		showButtonPanel:false,
		dateFormat: "m/d/yy"
	});
	$('#exdate-icon').click(function() {
		$("#exdate").datepicker().focus();
	});
	$('#exdate1-icon').click(function() {
		$("#exdate1").datepicker().focus();
	});
	$('#redate-icon').click(function() {
		$("#redate").datepicker().focus();
	});
	$('#applyate-icon').click(function() {
		$("#applyate").datepicker().focus();
	});
	$('#asofdate-icon').click(function() {
		$("#asofdate").datepicker().focus();
	});
	$('#tradedate-icon').click(function() {
		$("#tradedate").datepicker().focus();
	});
	$('#Notifieddate-icon').click(function() {
		$("#Notifieddate").datepicker().focus();
	});
	$('#Fromdate-icon').click(function() {
		$("#Fromdate").datepicker().focus();
	});
	$('#Todate-icon').click(function() {
		$("#Todate").datepicker().focus();
	});

})(jQuery);
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') ) {
		$(this).collapse('hide');
	}
});
$('#closebtn').click(function() {
    window.location.href = '../Tasa/#/';
    return false;
});
$('#image').click(function() {
    window.location.href = '../Tasa/#/';
    return false;
});
