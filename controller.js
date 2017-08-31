// create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look! this is home page';
    });

  //  accountController

    scotchApp.controller("accountController", ['$scope','uiGridExporterService','uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    $scope.gridOptions = {
    paginationPageSizes: [10,15,20,25, 50, 75],
    paginationPageSize: 20,
    enableFiltering: false,
    enableColumnMenus: true,
    enableRowHeaderSelection: false,
    enableHorizontalScrollbar: 1,
    title:'main',
    columnDefs: [
    { field: 'General',width:250,cellTooltip:
        function( row, col ) {
          return 'General: ' + row.entity.General;
        }, headerTooltip:
        function( col ) {
          return 'Header: ' + col.displayName;
        }
      },
    { field: 'Ledger',width:200 },
    { field: 'Account',width:200},
    { field: 'Last_Upadated_By',width:240,enableFiltering: false },
    { field: 'LastUpdated',width:200,enableFiltering: false }    
    ],
        enableGridMenu: true,
        //enableSelectAll: true,
        enableRowSelection: true,
        multiSelect: true,
        noUnselect: false,
        shrinkToFit:false,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize:6},
        exporterPdfTableStyle: {margin: [0, 0, 0, 0]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red',width:150},
        exporterPdfHeader: { text: "GL Account Data", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = { fontSize: 14, bold: true };
          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
          return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth:450,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function (gridApi) {
    $scope.grid1Api = gridApi;
    }
    };
    $scope.users = [
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10},
    { General: "Madhav Sai", Ledger: 10, Account: 'Nagpur',Last_Upadated_By: "Madhav Sai", LastUpdated: 10}
    ];

  //  $http.get('/data/10000_complex.json')
  // .success(function(data) {
  //   $scope.gridOptions.data = data;
  // });
      $scope.gridOptions.data = $scope.users;
      $scope.exportPdf = function() {
         var grid = $scope.gridApi.grid;
         var rowTypes = uiGridExporterConstants.ALL;
         var colTypes = uiGridExporterConstants.ALL;
         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
       };
    }]);

//GL Period controller
    scotchApp.controller("periodController", ['$scope','uiGridExporterService', 'uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    $scope.gridOptions = {
    paginationPageSizes: [10,15,20,25, 50, 75],
    paginationPageSize: 20,
    enableFiltering: false,
    enableHorizontalScrollbar: 1,
    title:'main',
    columnDefs: [
    { field: 'Last_Updt_User_Id',width:250,cellTooltip:
        function( row, col ) {
          return 'Last_Updt_User_Id: ' + row.entity.Last_Updt_User_Id;
        }, headerTooltip:
        function( col ) {
          return 'Header: ' + col.displayName;
        }
      },
    { field: 'Last_Updt_Dt',width:250 },
    { field: 'MONTH',width:200 },
    { field: 'YEAR',width:200,enableFiltering: false },
    { field: 'Close_Date',width:200,enableFiltering: false }
    ],
    enableGridMenu: true,
        enableSelectAll: true,
        shrinkToFit:false,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
          return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth:400,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function (gridApi) {
    $scope.grid1Api = gridApi;
    }
    };
    $scope.saveRow = function( rowEntity ) {
        console.log( 'SaveRow called for: ' + rowEntity.id);
        // create a fake promise - normally you'd use the promise returned by $http or $resource
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( $scope.gridApi.grid, rowEntity, promise.promise );

        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
      };

    $scope.users = [
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10},
    { Last_Updt_User_Id: "Madhav Sai", Last_Updt_Dt: 10, MONTH: 'Nagpur',YEAR: "Madhav Sai", Close_Date: 10}
    ];

  //  $http.get('/data/10000_complex.json')
  // .success(function(data) {
  //   $scope.gridOptions.data = data;
  // });
      $scope.gridOptions.data = $scope.users;
      $scope.exportPdf = function() {
         var grid = $scope.gridApi.grid;
         var rowTypes = uiGridExporterConstants.ALL;
         var colTypes = uiGridExporterConstants.ALL;
         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
       };
    }]);

// Product Series And Rates Controller
    scotchApp.controller("productseriesratesController", ['$scope','uiGridExporterService', 'uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    $scope.gridOptions = {
    paginationPageSizes: [10,15,20,25, 50, 75],
    paginationPageSize: 20,
    enableFiltering: false,
    enableHorizontalScrollbar: 1,
    title:'main',
    columnDefs: [
    { field: 'Column_01',width:250,cellTooltip:
        function( row, col ) {
          return 'Column_01: ' + row.entity.Column_01;
        }, headerTooltip:
        function( col ) {
          return 'Header: ' + col.displayName;
        }
      },
    { field: 'Column_02',width:200 },
    { field: 'Column_03',width:200 },
    { field: 'Column_04',width:250,enableFiltering: false },
    { field: 'Column_05',width:220,enableFiltering: false }
    ],
    enableGridMenu: true,
        enableSelectAll: true,
        shrinkToFit:false,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
          return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth:500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function (gridApi) {
    $scope.grid1Api = gridApi;
    }
    };
    $scope.saveRow = function( rowEntity ) {
        console.log( 'SaveRow called for: ' + rowEntity.id);
        // create a fake promise - normally you'd use the promise returned by $http or $resource
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( $scope.gridApi.grid, rowEntity, promise.promise );

        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
          };

    $scope.users = [
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10}
    ];

  //  $http.get('/data/10000_complex.json')
  // .success(function(data) {
  //   $scope.gridOptions.data = data;
  // });
      $scope.gridOptions.data = $scope.users;
      $scope.exportPdf = function() {
         var grid = $scope.gridApi.grid;
         var rowTypes = uiGridExporterConstants.ALL;
         var colTypes = uiGridExporterConstants.ALL;
         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
       };
    }]);

//processController
    scotchApp.controller("processController", ['$scope','uiGridExporterService', 'uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    	$scope.gridOptions = {
    		    paginationPageSizes: [10,15,20,25, 50, 75],
    		    paginationPageSize: 20,
    		    enableFiltering: false,
    		    enableHorizontalScrollbar: 1,
    		    title:'main',
    		    columnDefs: [
    		    { field: 'Column_01',width:250,cellTooltip:
    		        function( row, col ) {
    		          return 'Column_01: ' + row.entity.Column_01;
    		        }, headerTooltip:
    		        function( col ) {
    		          return 'Header: ' + col.displayName;
    		        }
    		      },
    		    { field: 'Column_02',width:200 },
    		    { field: 'Column_03',width:200 },
    		    { field: 'Column_04',width:250,enableFiltering: false },
    		    { field: 'Column_05',width:220,enableFiltering: false }
    		    ],
    		    enableGridMenu: true,
    		        enableSelectAll: true,
    		        shrinkToFit:false,
    		        exporterCsvFilename: 'myFile.csv',
    		        exporterPdfDefaultStyle: {fontSize: 9},
    		        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
    		        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
    		        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
    		        exporterPdfFooter: function ( currentPage, pageCount ) {
    		          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    		        },
    		        exporterPdfCustomFormatter: function ( docDefinition ) {
    		          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
    		          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
    		          return docDefinition;
    		        },
    		        exporterPdfOrientation: 'portrait',
    		        exporterPdfPageSize: 'LETTER',
    		        exporterPdfMaxGridWidth:500,
    		        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    		    onRegisterApi: function (gridApi) {
    		    $scope.grid1Api = gridApi;
    		    }
    		    };
    		    $scope.saveRow = function( rowEntity ) {
    		        console.log( 'SaveRow called for: ' + rowEntity.id);
    		        // create a fake promise - normally you'd use the promise returned by $http or $resource
    		        var promise = $q.defer();
    		        $scope.gridApi.rowEdit.setSavePromise( $scope.gridApi.grid, rowEntity, promise.promise );

    		        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
    		          };

    		    $scope.users = [
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10}
    		    ];

    		  //  $http.get('/data/10000_complex.json')
    		  // .success(function(data) {
    		  //   $scope.gridOptions.data = data;
    		  // });
    		      $scope.gridOptions.data = $scope.users;
    		      $scope.exportPdf = function() {
    		         var grid = $scope.gridApi.grid;
    		         var rowTypes = uiGridExporterConstants.ALL;
    		         var colTypes = uiGridExporterConstants.ALL;
    		         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
    		       };
    		    }]);

// BatchProcessController
    scotchApp.controller("BatchProcessController", ['$scope','uiGridExporterService', 'uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    	$scope.gridOptions = {
    		    paginationPageSizes: [10,15,20,25, 50, 75],
    		    paginationPageSize: 20,
    		    enableFiltering: false,
    		    enableHorizontalScrollbar: 1,
    		    title:'main',
    		    columnDefs: [
    		    { field: 'Column_01',width:250,cellTooltip:
    		        function( row, col ) {
    		          return 'Column_01: ' + row.entity.Column_01;
    		        }, headerTooltip:
    		        function( col ) {
    		          return 'Header: ' + col.displayName;
    		        }
    		      },
    		    { field: 'Column_02',width:200 },
    		    { field: 'Column_03',width:200 },
    		    { field: 'Column_04',width:250,enableFiltering: false },
    		    { field: 'Column_05',width:220,enableFiltering: false }
    		    ],
    		    enableGridMenu: true,
    		        enableSelectAll: true,
    		        shrinkToFit:false,
    		        exporterCsvFilename: 'myFile.csv',
    		        exporterPdfDefaultStyle: {fontSize: 9},
    		        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
    		        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
    		        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
    		        exporterPdfFooter: function ( currentPage, pageCount ) {
    		          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    		        },
    		        exporterPdfCustomFormatter: function ( docDefinition ) {
    		          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
    		          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
    		          return docDefinition;
    		        },
    		        exporterPdfOrientation: 'portrait',
    		        exporterPdfPageSize: 'LETTER',
    		        exporterPdfMaxGridWidth:500,
    		        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    		    onRegisterApi: function (gridApi) {
    		    $scope.grid1Api = gridApi;
    		    }
    		    };
    		    $scope.saveRow = function( rowEntity ) {
    		        console.log( 'SaveRow called for: ' + rowEntity.id);
    		        // create a fake promise - normally you'd use the promise returned by $http or $resource
    		        var promise = $q.defer();
    		        $scope.gridApi.rowEdit.setSavePromise( $scope.gridApi.grid, rowEntity, promise.promise );

    		        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
    		          };

    		    $scope.users = [
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10},
    		    { Column_01: "Madhav Sai", Column_02: 10, Column_03: 'Nagpur',Column_04: "Madhav Sai", Column_05: 10}
    		    ];

    		  //  $http.get('/data/10000_complex.json')
    		  // .success(function(data) {
    		  //   $scope.gridOptions.data = data;
    		  // });
    		      $scope.gridOptions.data = $scope.users;
    		      $scope.exportPdf = function() {
    		         var grid = $scope.gridApi.grid;
    		         var rowTypes = uiGridExporterConstants.ALL;
    		         var colTypes = uiGridExporterConstants.ALL;
    		         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
    		       };
    		    }]);

// PrdController
    scotchApp.controller("PrdController", ['$scope','uiGridExporterService', 'uiGridExporterConstants',function ($scope,uiGridExporterService, uiGridExporterConstants) {
    $scope.gridOptions = {
    paginationPageSizes: [10,15,20,25, 50, 75],
    paginationPageSize: 20,
    enableFiltering: false,
    enableHorizontalScrollbar: 1,
    title:'main',
    columnDefs: [
    { field: 'InvFundCategory',width:360,cellTooltip:
        function( row, col ) {
          return 'InvFundCategory: ' + row.entity.InvFundCategory;
        }, headerTooltip:
        function( col ) {
          return 'Header: ' + col.displayName;
        }
      },
    { field: 'LastUpdated',width:360 },
    { field: 'UpdatedBy',width:350}
    ],
    enableGridMenu: true,
        enableSelectAll: true,
        shrinkToFit:false,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
          return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth:500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function (gridApi) {
    $scope.grid1Api = gridApi;
    }
    };
    $scope.saveRow = function( rowEntity ) {
        console.log( 'SaveRow called for: ' + rowEntity.id);
        // create a fake promise - normally you'd use the promise returned by $http or $resource
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( $scope.gridApi.grid, rowEntity, promise.promise );

        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
        $interval( function() {
          if (rowEntity.Location=== 'Nagpur' ){
            promise.reject();
          } else {
            promise.resolve();
          }
        }, 3000, 1);
      };

    $scope.users = [
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'},   
    { InvFundCategory: "Madhav Sai", LastUpdated: 10, UpdatedBy: 'Nagpur'}    
    ];

    //  $http.get('/data/10000_complex.json')
    // .success(function(data) {
    //   $scope.gridOptions.data = data;
    // });
      $scope.gridOptions.data = $scope.users;
      $scope.exportPdf = function() {
         var grid = $scope.gridApi.grid;
         var rowTypes = uiGridExporterConstants.ALL;
         var colTypes = uiGridExporterConstants.ALL;
         uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
       };
    }]);
