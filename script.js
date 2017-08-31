//script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute',"ui.grid", "ui.grid.pagination",'ui.grid.selection','ui.grid.exporter'
            ]);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'html/home.html',
                controller  : 'mainController'
            })
			 .when('/account', {
                templateUrl : 'html/account.html',
                controller  : 'accountController'
            })
            .when('/glperiod', {
                templateUrl : 'html/glperiod.html',
                controller  : 'periodController'
              })
            .when('/dividendmaintenance', {
                templateUrl : 'html/Dividend Maintenance.html',
                controller  : 'periodController'
              })
            .when('/adjfactory', {
                templateUrl : 'html/Adjustment factory Entry.html'
                })
            .when('/productseriesrates', {
                templateUrl : 'html/Product series rates.html',
                controller  : 'productseriesratesController'
                })
            .when('/pdmretrotrans', {
                templateUrl : 'html/Pdm Retro Transaction.html'
                })
            .when('/dividendreturnrate', {
                templateUrl : 'html/Dividend Return Rate Maintenance.html'
                })
            .when('/nonsfgfunds', {
                templateUrl : 'html/Non SFG Funds.html'
                })
            .when('/relatefund', {
                templateUrl : 'html/Relate Fund.html'
                })
            .when('/DailyNavMaintenance', {
                templateUrl : 'html/DailydNavMaintenance.html',
                controller  : 'frmDailyNavMaintenanceController'
                })
            .when('/AuditedNavMaintenance', {
                templateUrl : 'html/AuditedNavMaintenance.html'
                })
            .when('/UVEntry', {
                templateUrl : 'html/UVEntry.html',
                controller  : 'frmUVEntryController'
                })
            .when('/ProcessStatus', {
                templateUrl : 'html/ProcessStatus.html',
                controller  : 'processController'
                })
            .when('/BatchProcess', {
                templateUrl : 'html/BatchProcess.html',
                controller  : 'BatchProcessController'
                })
            .when('/AdjFactorHistory', {
                templateUrl : 'html/AdjFactorHistory.html'
                })
            .when('/NavDivAdjFacHistory', {
                templateUrl : 'html/NavDivAdjFacHistory.html'
                })
            .when('/Planid', {
                templateUrl : 'html/Planid.html'
                })
            .when('/RPD', {
                templateUrl : 'html/RPD.html',
                controller  : 'frmProductFundsController'
                });
    });



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
