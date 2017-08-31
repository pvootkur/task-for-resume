//create the controller and inject Angular's $scope
'use strict';

app
.controller(
		'mainController',
		function($scope) {
			// create a message to display in our view
			$scope.message = 'Everyone come and see how good I look! this is home page';
			var mManEnteredVal;
		});
app.controller('LoginController', [
	'$scope',
	'$rootScope',
	'$location',
	'AuthenticationService',
	function($scope, $rootScope, $location, AuthenticationService) {
		// reset login status
		AuthenticationService.ClearCredentials();

		$scope.login = function() {
			$scope.dataLoading = true;
			AuthenticationService.Login($scope.username, $scope.password,
					function(response) {
				if (response.success) {
					AuthenticationService.SetCredentials(
							$scope.username, $scope.password);
					$location.path('/');
				} else {
					$scope.error = response.message;
					$scope.dataLoading = false;
				}
			});
		};
	} ]);

app
.factory(
		'AuthenticationService',
		[
			'Base64',
			'$http',
			'$cookieStore',
			'$rootScope',
			'$timeout',
			function(Base64, $http, $cookieStore, $rootScope,
					$timeout) {
				var service = {};

				service.Login = function(username, password,
						callback) {

					/*
					 * Dummy authentication for testing, uses
					 * $timeout to simulate api call
					 * ----------------------------------------------
					 */
					$timeout(
							function() {
								var response = {
										success : username === 'test'
											&& password === 'test'
								};
								if (!response.success) {
									response.message = 'Username or password is incorrect';
								}
								callback(response);
							}, 1000);

					/*
					 * Use this for real authentication
					 * ----------------------------------------------
					 */
					// $http.post('/api/authenticate', { username:
					// username, password: password })
					// .success(function (response) {
					// callback(response);
					// });
				};

				service.SetCredentials = function(username,
						password) {
					var authdata = Base64.encode(username + ':'
							+ password);

					$rootScope.globals = {
							currentUser : {
								username : username,
								authdata : authdata
							}
					};

					$http.defaults.headers.common['Authorization'] = 'Basic '
						+ authdata; // jshint ignore:line
					$cookieStore.put('globals', $rootScope.globals);
				};

				service.ClearCredentials = function() {
					$rootScope.globals = {};
					$cookieStore.remove('globals');
					$http.defaults.headers.common.Authorization = 'Basic ';
				};

				return service;
			} ])

			.factory(
					'Base64',
					function() {
						/* jshint ignore:start */

						var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

						return {
							encode : function(input) {
								var output = "";
								var chr1, chr2, chr3 = "";
								var enc1, enc2, enc3, enc4 = "";
								var i = 0;

								do {
									chr1 = input.charCodeAt(i++);
									chr2 = input.charCodeAt(i++);
									chr3 = input.charCodeAt(i++);

									enc1 = chr1 >> 2;
									enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
									enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
									enc4 = chr3 & 63;

									if (isNaN(chr2)) {
										enc3 = enc4 = 64;
									} else if (isNaN(chr3)) {
										enc4 = 64;
									}

									output = output + keyStr.charAt(enc1)
									+ keyStr.charAt(enc2)
									+ keyStr.charAt(enc3)
									+ keyStr.charAt(enc4);
									chr1 = chr2 = chr3 = "";
									enc1 = enc2 = enc3 = enc4 = "";
								} while (i < input.length);

								return output;
							},

							decode : function(input) {
								var output = "";
								var chr1, chr2, chr3 = "";
								var enc1, enc2, enc3, enc4 = "";
								var i = 0;

								// remove all characters that are not A-Z, a-z, 0-9,
								// +, /, or =
								var base64test = /[^A-Za-z0-9\+\/\=]/g;
								if (base64test.exec(input)) {
									window
									.alert("There were invalid base64 characters in the input text.\n"
											+ "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n"
											+ "Expect errors in decoding.");
								}
								input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

								do {
									enc1 = keyStr.indexOf(input.charAt(i++));
									enc2 = keyStr.indexOf(input.charAt(i++));
									enc3 = keyStr.indexOf(input.charAt(i++));
									enc4 = keyStr.indexOf(input.charAt(i++));

									chr1 = (enc1 << 2) | (enc2 >> 4);
									chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
									chr3 = ((enc3 & 3) << 6) | enc4;

									output = output + String.fromCharCode(chr1);

									if (enc3 != 64) {
										output = output + String.fromCharCode(chr2);
									}
									if (enc4 != 64) {
										output = output + String.fromCharCode(chr3);
									}

									chr1 = chr2 = chr3 = "";
									enc1 = enc2 = enc3 = enc4 = "";

								} while (i < input.length);

								return output;
							}
						};

						/* jshint ignore:end */
					});
//accountController

app
.controller(
		"frmGLAccountController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			'frmGLAccountHandler',
			function($scope, uiGridExporterService,
					uiGridExporterConstants, frmGLAccountHandler) {
				$scope.gridOptions = {
						paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
						paginationPageSize : 20,
						enableFiltering : false,
						enableColumnMenus : true,
						enableRowHeaderSelection : false,
						enableHorizontalScrollbar : 1,
						multiSelect : true,
						enableCellSelection : true,
						enableRowSelection : true,
						enableCellEditOnFocus : true,
						title : 'main',
						columnDefs : [
							{
								field : 'general',
								width : 250,
								enableCellEdit : true,
								cellTooltip : function(row, col) {
									return 'general: '
									+ row.entity.general;
								},
								headerTooltip : function(col) {
									return 'Header: '
									+ col.displayName;
								}
							}, {
								field : 'ledger',
								width : 200,
								enableCellEdit : true
							}, {
								field : 'account',
								width : 200,
								enableCellEdit : true
							}, {
								field : 'glAccountProductId',
								width : 200,
								enableCellEdit : true
							}, {
								field : 'glAccountProjectId',
								width : 200,
								enableCellEdit : true
							}, {
								field : 'clearingControl',
								width : 200,
								enableCellEdit : true
							}, {
								field : 'lastUpdatedBy',
								width : 240,
								enableFiltering : false,
								enableCellEdit : true
							}, {
								field : 'lastUpdated',
								width : 230,
								enableFiltering : false,
								enableCellEdit : true
							}, {
								field : 'sequenceNo',
								width : 200,
								enableCellEdit : true
							} ],
							enableGridMenu : true,
							// enableSelectAll: true,
							enableRowSelection : true,
							multiSelect : true,
							noUnselect : false,
							shrinkToFit : false,
							exporterCsvFilename : 'myFile.csv',
							exporterPdfDefaultStyle : {
								fontSize : 6
							},
							exporterPdfTableStyle : {
								margin : [ 0, 0, 0, 0 ]
							},
							exporterPdfTableHeaderStyle : {
								fontSize : 10,
								bold : true,
								italics : true,
								color : 'red',
								width : 150
							},
							exporterPdfHeader : {
								text : "GL Account Data",
								style : 'headerStyle'
							},
							exporterPdfFooter : function(currentPage,
									pageCount) {
								return {
									text : currentPage.toString() + ' of '
									+ pageCount.toString(),
									style : 'footerStyle'
								};
							},
							exporterPdfCustomFormatter : function(
									docDefinition) {
								docDefinition.styles.headerStyle = {
										fontSize : 14,
										bold : true
								};
								docDefinition.styles.footerStyle = {
										fontSize : 10,
										bold : true
								};
								return docDefinition;
							},
							exporterPdfOrientation : 'portrait',
							exporterPdfPageSize : 'LETTER',
							exporterPdfMaxGridWidth : 450,
							exporterCsvLinkElement : angular
							.element(document
									.querySelectorAll(".custom-csv-link-location")),
									onRegisterApi : function(gridApi) {
										$scope.grid1Api = gridApi;
									}
				};
				$scope.gridOptions.multiSelect = true;
				$scope.gridOptions.onRegisterApi = function(gridApi) {
					// set gridApi on scope
					$scope.gridApi = gridApi;
					gridApi.edit.on
					.afterCellEdit(
							$scope,
							function(rowEntity, colDef,
									newValue, oldValue) {
								if (newValue != oldValue) {
									$scope.items = [];
									$scope.items
									.push({
										general : rowEntity.general,
										ledger : rowEntity.ledger,
										account : rowEntity.account,
										glAccountProductId : rowEntity.glAccountProductId,
										glAccountProjectId : rowEntity.glAccountProjectId,
										clearingControl : rowEntity.clearingControl,
										lastUpdatedBy : rowEntity.lastUpdatedBy,
										lastUpdated : rowEntity.lastUpdated,
										sequenceNo : rowEntity.sequenceNo
									});
									$scope.getTotalItems();

								}
							});
				};

				$scope.myData = [];
				$scope.getTotalItems = function() {
					for (var i = 0; i < $scope.items.length; i++) {
						$scope.myData.push($scope.items[i]);
					}
					return $scope.myData;
				};

				$scope.getformload = function() {
					frmGLAccountHandler.formload(
							$scope.frmGLAccount,
							$scope.getformloadSuccess,
							$scope.getformloadError);
					angular.element(document
							.getElementById('query1'))[0].disabled = true;
				};

				$scope.getformloadSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
				};

				$scope.getformloadError = function(response) {

				};

				$scope.getqueryenable1 = function() {
					if ($scope.frmGLAccount.txtA.length === 0
							|| typeof $scope.frmGLAccount.txtA === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
				};

				$scope.getqueryenable2 = function() {
					if ($scope.frmGLAccount.txtB.length === 0
							|| typeof $scope.frmGLAccount.txtB === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
				};

				$scope.getqueryenable3 = function() {
					if ($scope.frmGLAccount.txtC.length === 0
							|| typeof $scope.frmGLAccount.txtC === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
				};

				$scope.getqueryenable4 = function() {
					if ($scope.frmGLAccount.txtD.length === 0
							|| typeof $scope.frmGLAccount.txtD === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
				};

				$scope.getcmdqueryclick = function() {
					frmGLAccountHandler.cmdqueryclick(
							$scope.frmGLAccount,
							$scope.getcmdqueryclickSuccess,
							$scope.getcmdqueryclickError);
				};

				$scope.getcmdqueryclickSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
				};

				$scope.getcmdqueryclickError = function(response) {
				};

				$scope.getcmdrefreshclick = function() {
					$scope.myData = [];
					$scope.getformload();
					$scope.frmGLAccount.txtA = null;
					$scope.frmGLAccount.txtB = null;
					$scope.frmGLAccount.txtC = null;
					$scope.frmGLAccount.txtD = null;
				};

				$scope.getcmdinsertclick = function() {
					$scope.inputData = [];
					$scope.inputData.push({
						txtB : $scope.frmGLAccount.txtB,
						txtC : $scope.frmGLAccount.txtC
					});
					frmGLAccountHandler.cmdinsertclick(
							$scope.inputData,
							$scope.getcmdinsertclickSuccess,
							$scope.getcmdinsertclickError);
					$scope.frmGLAccount.txtB = null;
					$scope.frmGLAccount.txtC = null;
				};

				$scope.getcmdinsertclickSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
					;
				};

				$scope.getcmdinsertclickError = function(response) {
				};

				$scope.redirect = function() {
					window.location.href = "http://localhost:8080/Tasa/#/";
				}

				$scope.getcmdsaveclick = function() {
					frmGLAccountHandler.cmdsaveclick($scope.myData,
							$scope.getcmdsaveclickSuccess,
							$scope.getcmdsaveclickError);

				}

				$scope.getcmdsaveclickSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
					;
				};

				$scope.getcmdcmdsaveclickError = function(response) {
				};

				$scope.exportPdf = function() {
					var grid = $scope.gridApi.grid;
					var rowTypes = uiGridExporterConstants.ALL;
					var colTypes = uiGridExporterConstants.ALL;
					uiGridExporterService.pdfExport(grid, rowTypes,
							colTypes);
				};

			} ]);

//GL Period controller
app
.controller(
		"frmGLPeriodController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			'frmGLPeriodHandler',
			function($scope, uiGridExporterService,
					uiGridExporterConstants, frmGLPeriodHandler) {
				$scope.gridOptions = {
						paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
						paginationPageSize : 20,
						enableFiltering : false,
						enableHorizontalScrollbar : 1,
						title : 'main',
						columnDefs : [
							{
								field : 'Last_Updt_User_Id',
								width : 250,
								cellTooltip : function(row, col) {
									return 'Last_Updt_User_Id: '
									+ row.entity.Last_Updt_User_Id;
								},
								headerTooltip : function(col) {
									return 'Header: '
									+ col.displayName;
								}
							}, {
								field : 'Last_Updt_Dt',
								width : 250
							}, {
								field : 'MONTH',
								width : 200
							}, {
								field : 'YEAR',
								width : 200,
								enableFiltering : false
							}, {
								field : 'Close_Date',
								width : 220,
								type : 'date',
								cellFilter : "date:'MM/dd/yyyy'"
							} ],
							enableGridMenu : true,
							enableSelectAll : true,
							shrinkToFit : false,
							exporterCsvFilename : 'myFile.csv',
							exporterPdfDefaultStyle : {
								fontSize : 9
							},
							exporterPdfTableStyle : {
								margin : [ 30, 30, 30, 30 ]
							},
							exporterPdfTableHeaderStyle : {
								fontSize : 10,
								bold : true,
								italics : true,
								color : 'red'
							},
							exporterPdfHeader : {
								text : "My Header",
								style : 'headerStyle'
							},
							exporterPdfFooter : function(currentPage,
									pageCount) {
								return {
									text : currentPage.toString() + ' of '
									+ pageCount.toString(),
									style : 'footerStyle'
								};
							},
							exporterPdfCustomFormatter : function(
									docDefinition) {
								docDefinition.styles.headerStyle = {
										fontSize : 22,
										bold : true
								};
								docDefinition.styles.footerStyle = {
										fontSize : 10,
										bold : true
								};
								return docDefinition;
							},
							exporterPdfOrientation : 'portrait',
							exporterPdfPageSize : 'LETTER',
							exporterPdfMaxGridWidth : 400,
							exporterCsvLinkElement : angular
							.element(document
									.querySelectorAll(".custom-csv-link-location")),
									onRegisterApi : function(gridApi) {
										$scope.grid1Api = gridApi;
									}
				};
				$scope.saveRow = function(rowEntity) {
					console.log('SaveRow called for: '
							+ rowEntity.id);
					// create a fake promise - normally you'd use
					// the promise returned by
					// $http or $resource
					var promise = $q.defer();
					$scope.gridApi.rowEdit.setSavePromise(
							$scope.gridApi.grid, rowEntity,
							promise.promise);

					// fake a delay of 3 seconds whilst the save
					// occurs, return error if
					// gender is "male"
				};

				$scope.users = [ {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'January',
					YEAR : "2006",
					Close_Date : "01/01/2006"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'Febraury',
					YEAR : "2007",
					Close_Date : "02/28/2007"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'March',
					YEAR : "2008",
					Close_Date : "03/25/2008"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'April',
					YEAR : "2009",
					Close_Date : "04/19/2009"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'May',
					YEAR : "2010",
					Close_Date : "05/15/2010"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'June',
					YEAR : "2011",
					Close_Date : "06/10/2011"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'July',
					YEAR : "2012",
					Close_Date : "07/14/2012"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'August',
					YEAR : "2013",
					Close_Date : "08/18/2013"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'September',
					YEAR : "2014",
					Close_Date : "09/09/2014"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'October',
					YEAR : "2015",
					Close_Date : "10/28/2015"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'November',
					YEAR : "2016",
					Close_Date : "11/05/2016"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'December',
					YEAR : "2017",
					Close_Date : "12/08/2017"
				}, {
					Last_Updt_User_Id : "Madhav Sai",
					Last_Updt_Dt : 10,
					MONTH : 'January',
					YEAR : "2018",
					Close_Date : "01/02/2005"
				} ];

				$scope.gridOptions.data = $scope.users;
				$scope.exportPdf = function() {
					var grid = $scope.gridApi.grid;
					var rowTypes = uiGridExporterConstants.ALL;
					var colTypes = uiGridExporterConstants.ALL;
					uiGridExporterService.pdfExport(grid, rowTypes,
							colTypes);
				};

				$scope.getadodcerror = function() {
					frmGLPeriodHandler.adodcerror(
							$scope.TASAObject,
							$scope.getadodcerrorSuccess,
							$scope.getadodcerrorError);
				};

				$scope.getadodcerrorSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getadodcerrorError = function(response) {
				};

				$scope.getcmdcloseclick = function() {
					frmGLPeriodHandler.cmdcloseclick(
							$scope.TASAObject,
							$scope.getcmdcloseclickSuccess,
							$scope.getcmdcloseclickError);
				};

				$scope.getcmdcloseclickSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdcloseclickError = function(response) {
				};

				$scope.getcmdinsertclick = function() {
					frmGLPeriodHandler.cmdinsertclick(
							$scope.TASAObject,
							$scope.getcmdinsertclickSuccess,
							$scope.getcmdinsertclickError);
				};

				$scope.getcmdinsertclickSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdinsertclickError = function(response) {
				};

				$scope.getcmdqueryclick = function() {
					console.log($scope.frmGLPeriod.test2);
					console.log(frmGLPeriodHandler);
					frmGLPeriodHandler.cmdqueryclick(
							$scope.frmGLPeriod,
							$scope.getcmdqueryclickSuccess,
							$scope.getcmdqueryclickError);
				};

				$scope.getcmdqueryclickSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdqueryclickError = function(response) {
				};

				$scope.getcmdrefreshclick = function() {
					frmGLPeriodHandler.cmdrefreshclick(
							$scope.TASAObject,
							$scope.getcmdrefreshclickSuccess,
							$scope.getcmdrefreshclickError);
				};

				$scope.getcmdrefreshclickSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdrefreshclickError = function(response) {
				};

				$scope.getdatagridafterupdate = function() {
					frmGLPeriodHandler.datagridafterupdate(
							$scope.TASAObject,
							$scope.getdatagridafterupdateSuccess,
							$scope.getdatagridafterupdateError);
				};

				$scope.getdatagridafterupdateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridafterupdateError = function(
						response) {
				};

				$scope.getdatagridbeforecolupdate = function() {
					frmGLPeriodHandler
					.datagridbeforecolupdate(
							$scope.TASAObject,
							$scope.getdatagridbeforecolupdateSuccess,
							$scope.getdatagridbeforecolupdateError);
				};

				$scope.getdatagridbeforecolupdateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridbeforecolupdateError = function(
						response) {
				};

				$scope.getdatagridbeforeupdate = function() {
					frmGLPeriodHandler.datagridbeforeupdate(
							$scope.TASAObject,
							$scope.getdatagridbeforeupdateSuccess,
							$scope.getdatagridbeforeupdateError);
				};

				$scope.getdatagridbeforeupdateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridbeforeupdateError = function(
						response) {
				};

				$scope.getvalidate = function() {
					frmGLPeriodHandler.validate($scope.TASAObject,
							$scope.getvalidateSuccess,
							$scope.getvalidateError);
				};

				$scope.getvalidateSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getvalidateError = function(response) {
				};

				$scope.getdatagriderror = function() {
					frmGLPeriodHandler.datagriderror(
							$scope.TASAObject,
							$scope.getdatagriderrorSuccess,
							$scope.getdatagriderrorError);
				};

				$scope.getdatagriderrorSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagriderrorError = function(response) {
				};

				$scope.getdatagridkeypress = function() {
					frmGLPeriodHandler.datagridkeypress(
							$scope.TASAObject,
							$scope.getdatagridkeypressSuccess,
							$scope.getdatagridkeypressError);
				};

				$scope.getdatagridkeypressSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridkeypressError = function(response) {
				};

				$scope.getdatagridlostfocus = function() {
					frmGLPeriodHandler.datagridlostfocus(
							$scope.TASAObject,
							$scope.getdatagridlostfocusSuccess,
							$scope.getdatagridlostfocusError);
				};

				$scope.getdatagridlostfocusSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridlostfocusError = function(
						response) {
				};

				$scope.getdatagridonaddnew = function() {
					frmGLPeriodHandler.datagridonaddnew(
							$scope.TASAObject,
							$scope.getdatagridonaddnewSuccess,
							$scope.getdatagridonaddnewError);
				};

				$scope.getdatagridonaddnewSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridonaddnewError = function(response) {
				};

				$scope.getdatagridrowcolchange = function() {
					frmGLPeriodHandler.datagridrowcolchange(
							$scope.TASAObject,
							$scope.getdatagridrowcolchangeSuccess,
							$scope.getdatagridrowcolchangeError);
				};

				$scope.getdatagridrowcolchangeSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getdatagridrowcolchangeError = function(
						response) {
				};

				$scope.getformactivate = function() {
					frmGLPeriodHandler.formactivate(
							$scope.TASAObject,
							$scope.getformactivateSuccess,
							$scope.getformactivateError);
				};

				$scope.getformactivateSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformactivateError = function(response) {
				};

				$scope.getformdeactivate = function() {
					frmGLPeriodHandler.formdeactivate(
							$scope.TASAObject,
							$scope.getformdeactivateSuccess,
							$scope.getformdeactivateError);
				};

				$scope.getformdeactivateSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformdeactivateError = function(response) {
				};

				$scope.getformload = function() {
					frmGLPeriodHandler.formload($scope.TASAObject,
							$scope.getformloadSuccess,
							$scope.getformloadError);
				};

				$scope.getformloadSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformloadError = function(response) {
				};

				$scope.getformatdatagrid = function() {
					frmGLPeriodHandler.formatdatagrid(
							$scope.TASAObject,
							$scope.getformatdatagridSuccess,
							$scope.getformatdatagridError);
				};

				$scope.getformatdatagridSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformatdatagridError = function(response) {
				};

				$scope.getmnufileexitclick = function() {
					frmGLPeriodHandler.mnufileexitclick(
							$scope.TASAObject,
							$scope.getmnufileexitclickSuccess,
							$scope.getmnufileexitclickError);
				};

				$scope.getmnufileexitclickSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getmnufileexitclickError = function(response) {
				};

				$scope.getformresize = function() {
					frmGLPeriodHandler.formresize(
							$scope.TASAObject,
							$scope.getformresizeSuccess,
							$scope.getformresizeError);
				};

				$scope.getformresizeSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformresizeError = function(response) {
				};

				$scope.getformunload = function() {
					frmGLPeriodHandler.formunload(
							$scope.TASAObject,
							$scope.getformunloadSuccess,
							$scope.getformunloadError);
				};

				$scope.getformunloadSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformunloadError = function(response) {
				};

				$scope.gettxtdatevalidate = function() {
					frmGLPeriodHandler.txtdatevalidate(
							$scope.TASAObject,
							$scope.gettxtdatevalidateSuccess,
							$scope.gettxtdatevalidateError);
				};

				$scope.gettxtdatevalidateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtdatevalidateError = function(response) {
				};

				$scope.gettxtmonthkeypress = function() {
					frmGLPeriodHandler.txtmonthkeypress(
							$scope.TASAObject,
							$scope.gettxtmonthkeypressSuccess,
							$scope.gettxtmonthkeypressError);
				};

				$scope.gettxtmonthkeypressSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtmonthkeypressError = function(response) {
				};

				$scope.gettxtdatekeypress = function() {
					frmGLPeriodHandler.txtdatekeypress(
							$scope.TASAObject,
							$scope.gettxtdatekeypressSuccess,
							$scope.gettxtdatekeypressError);
				};

				$scope.gettxtdatekeypressSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtdatekeypressError = function(response) {
				};

				$scope.gettxtmonthvalidate = function() {
					frmGLPeriodHandler.txtmonthvalidate(
							$scope.TASAObject,
							$scope.gettxtmonthvalidateSuccess,
							$scope.gettxtmonthvalidateError);
				};

				$scope.gettxtmonthvalidateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtmonthvalidateError = function(response) {
				};

				$scope.gettxtyearkeypress = function() {
					frmGLPeriodHandler.txtyearkeypress(
							$scope.TASAObject,
							$scope.gettxtyearkeypressSuccess,
							$scope.gettxtyearkeypressError);
				};

				$scope.gettxtyearkeypressSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtyearkeypressError = function(response) {
				};

				$scope.gettxtyearvalidate = function() {
					frmGLPeriodHandler.txtyearvalidate(
							$scope.TASAObject,
							$scope.gettxtyearvalidateSuccess,
							$scope.gettxtyearvalidateError);
				};

				$scope.gettxtyearvalidateSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.gettxtyearvalidateError = function(response) {
				};
			} ]);

//Product Series And Rates Controller
app
.controller(
		"frmProductSeriesController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			'frmProductSeriesHandler',
			function($scope, uiGridExporterService,
					uiGridExporterConstants,
					frmProductSeriesHandler) {
				$scope.gridOptions = {
						paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
						paginationPageSize : 20,
						enableFiltering : false,
						enableHorizontalScrollbar : 1,
						title : 'main',
						columnDefs : [
							{
								field : 'shortName',
								width : 250,
								cellTooltip : function(row, col) {
									return 'shortName: '
									+ row.entity.shortName;
								},
								headerTooltip : function(col) {
									return 'Header: '
									+ col.displayName;
								}
							}, {
								field : 'irmaPrintFile',
								width : 200
							}, {
								field : 'name',
								width : 200
							}, {
								field : 'description',
								width : 200
							}, {
								field : 'irmaFootNote',
								width : 200
							}, {
								field : 'lastUpdated',
								width : 200
							} ],
							enableGridMenu : true,
							enableSelectAll : true,
							shrinkToFit : false,
							exporterCsvFilename : 'myFile.csv',
							exporterPdfDefaultStyle : {
								fontSize : 9
							},
							exporterPdfTableStyle : {
								margin : [ 30, 30, 30, 30 ]
							},
							exporterPdfTableHeaderStyle : {
								fontSize : 10,
								bold : true,
								italics : true,
								color : 'red'
							},
							exporterPdfHeader : {
								text : "My Header",
								style : 'headerStyle'
							},
							exporterPdfFooter : function(currentPage,
									pageCount) {
								return {
									text : currentPage.toString() + ' of '
									+ pageCount.toString(),
									style : 'footerStyle'
								};
							},
							exporterPdfCustomFormatter : function(
									docDefinition) {
								docDefinition.styles.headerStyle = {
										fontSize : 22,
										bold : true
								};
								docDefinition.styles.footerStyle = {
										fontSize : 10,
										bold : true
								};
								return docDefinition;
							},
							exporterPdfOrientation : 'portrait',
							exporterPdfPageSize : 'LETTER',
							exporterPdfMaxGridWidth : 500,
							exporterCsvLinkElement : angular
							.element(document
									.querySelectorAll(".custom-csv-link-location")),
									onRegisterApi : function(gridApi) {
										$scope.grid1Api = gridApi;
									}
				};
				$scope.saveRow = function(rowEntity) {
					console.log('SaveRow called for: '
							+ rowEntity.id);
					// create a fake promise - normally you'd use
					// the promise returned by
					// $http or $resource
					var promise = $q.defer();
					$scope.gridApi.rowEdit.setSavePromise(
							$scope.gridApi.grid, rowEntity,
							promise.promise);

					// fake a delay of 3 seconds whilst the save
					// occurs, return error if
					// gender is "male"
				};

				$scope.getformload = function() {
					frmProductSeriesHandler.formload(
							$scope.frmProductSeries,
							$scope.getformloadSuccess,
							$scope.getformloadError);
					angular.element(document
							.getElementById('query1'))[0].disabled = true;
				};

				$scope.getformloadSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
				};

				$scope.getformloadError = function(response) {

				};

				$scope.getqueryenable1 = function() {
					if ($scope.frmProductSeries.txtName.length === 0
							|| typeof $scope.frmProductSeries.txtIrma === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
				};

				$scope.getqueryenable2 = function() {
					if ($scope.frmProductSeries.txtIrma.length === 0
							|| typeof $scope.frmProductSeries.txtIrma === 'undefined') {
						angular.element(document
								.getElementById('query1'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query1'))[0].disabled = false;
					}
					$scope.getcboappclick();
				};

				$scope.getcmdqueryclick = function() {
					frmProductSeriesHandler.cmdqueryclick(
							$scope.frmProductSeries,
							$scope.getcmdqueryclickSuccess,
							$scope.getcmdqueryclickError);
				};

				$scope.getcmdqueryclickSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
				};

				$scope.getcmdqueryclickError = function(response) {
				};
				
				$scope.names = ["A","B","C"];
				
				$scope.getcboappclick = function() {
					
					if($scope.frmProductSeries.txtIrma != "" || $scope.frmProductSeries.txtirma !="undefined"||$scope.frmProductSeries.txtirma !=null){
						$scope.value = $scope.frmProductSeries.txtIrma;
						frmProductSeriesHandler.cmdqueryclick(
								$scope.value,
								$scope.getcmdqueryclickSuccess,
								$scope.getcmdqueryclickError);
					}
				};

				$scope.getcmdrefreshclick = function() {
					$scope.getformload();
					$scope.frmProductSeries.txtName = null;
					$scope.frmProductSeries.txtIrma = null;
				};

				$scope.redirect = function() {
					window.location.href = "http://localhost:8080/Tasa/#/";
				}

				$scope.exportPdf = function() {
					var grid = $scope.gridApi.grid;
					var rowTypes = uiGridExporterConstants.ALL;
					var colTypes = uiGridExporterConstants.ALL;
					uiGridExporterService.pdfExport(grid, rowTypes,
							colTypes);
				};

			} ]);

//processStatusController
app.controller("processStatusController", [
	'$scope',
	'uiGridExporterService',
	'uiGridExporterConstants', 'processStatusHandler', 
	function($scope, uiGridExporterService, uiGridExporterConstants, processStatusHandler) {
		$scope.gridOptions = {
				paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
				paginationPageSize : 20,
				enableFiltering : false,
				enableHorizontalScrollbar : 1,
				title : 'main',
				columnDefs : [ {
					field : 'processNumber',
					width : 250,
					cellTooltip : function(row, col) {
						return 'processNumber: ' + row.entity.processNumber;
					},
					headerTooltip : function(col) {
						return 'Header: ' + col.displayName;
					}
				}, {
					field : 'processDate',
					width : 200
				}, {
					field : 'application',
					width : 200
				}, {
					field : 'name',
					width : 250,
					enableFiltering : false
				}, {
					field : 'returnCode',
					width : 220,
					enableFiltering : false
				}, {
					field : 'step',
					width : 220,
					enableFiltering : false
				}, {
					field : 'returnText',
					width : 220,
					enableFiltering : false
				}],
				enableGridMenu : true,
				enableSelectAll : true,
				shrinkToFit : false,
				exporterCsvFilename : 'myFile.csv',
				exporterPdfDefaultStyle : {
					fontSize : 9
				},
				exporterPdfTableStyle : {
					margin : [ 30, 30, 30, 30 ]
				},
				exporterPdfTableHeaderStyle : {
					fontSize : 10,
					bold : true,
					italics : true,
					color : 'red'
				},
				exporterPdfHeader : {
					text : "My Header",
					style : 'headerStyle'
				},
				exporterPdfFooter : function(currentPage, pageCount) {
					return {
						text : currentPage.toString() + ' of '
						+ pageCount.toString(),
						style : 'footerStyle'
					};
				},
				exporterPdfCustomFormatter : function(docDefinition) {
					docDefinition.styles.headerStyle = {
							fontSize : 22,
							bold : true
					};
					docDefinition.styles.footerStyle = {
							fontSize : 10,
							bold : true
					};
					return docDefinition;
				},
				exporterPdfOrientation : 'portrait',
				exporterPdfPageSize : 'LETTER',
				exporterPdfMaxGridWidth : 500,
				exporterCsvLinkElement : angular.element(document
						.querySelectorAll(".custom-csv-link-location")),
						onRegisterApi : function(gridApi) {
							$scope.grid1Api = gridApi;
						}
		};
		$scope.saveRow = function(rowEntity) {
			console.log('SaveRow called for: ' + rowEntity.id);
			// create a fake promise - normally you'd use the promise
			// returned by
			// $http or $resource
			var promise = $q.defer();
			$scope.gridApi.rowEdit.setSavePromise($scope.gridApi.grid,
					rowEntity, promise.promise);

			// fake a delay of 3 seconds whilst the save occurs, return
			// error if
			// gender is "male"
		};
		
		$scope.getformload = function() {
			processStatusHandler.formload(
					$scope.processStatus,
					$scope.getformloadSuccess,
					$scope.getformloadError);
			angular.element(document
					.getElementById('query'))[0].disabled = true;
		};

		$scope.getformloadSuccess = function(response) {
			if (response != null) {
				console.log(response);
				$scope.gridOptions.data = response;
			}
		};

		$scope.getformloadError = function(response) {

		};

		$scope.getqueryenable1 = function() {
			if ($scope.processStatus.txtApp.length === 0
					|| typeof $scope.processStatus.txtApp === 'undefined') {
				angular.element(document
						.getElementById('query'))[0].disabled = true;
			} else {
				angular.element(document
						.getElementById('query'))[0].disabled = false;
			}
		};
		$scope.getqueryenable2 = function() {
			if ($scope.processStatus.txtName.length === 0
					|| typeof $scope.processStatus.txtName === 'undefined') {
				angular.element(document
						.getElementById('query'))[0].disabled = true;
			} else {
				angular.element(document
						.getElementById('query'))[0].disabled = false;
			}
		};
		$scope.getqueryenable3 = function() {
			if ($scope.processStatus.txtDate.length === 0
					|| typeof $scope.processStatus.txtDate === 'undefined') {
				angular.element(document
						.getElementById('query'))[0].disabled = true;
			} else {
				angular.element(document
						.getElementById('query'))[0].disabled = false;
			}
		};

		$scope.getcmdqueryclick = function() {
			processStatusHandler.cmdqueryclick(
					$scope.processStatus,
					$scope.getcmdqueryclickSuccess,
					$scope.getcmdqueryclickError);
		};

		$scope.getcmdqueryclickSuccess = function(response) {
			if (response != null) {
				$scope.gridOptions.data = response;
			}
		};

		$scope.getcmdqueryclickError = function(response) {
		};

		$scope.getcmdrefreshclick = function() {
			$scope.processStatus.txtApp = null;
			$scope.processStatus.txtName = null;
			$scope.processStatus.txtDate = null;
			$scope.getformload();
		};

		$scope.redirect = function() {
			window.location.href = "http://localhost:8080/Tasa/#/";
		}
		$scope.exportPdf = function() {
			var grid = $scope.gridApi.grid;
			var rowTypes = uiGridExporterConstants.ALL;
			var colTypes = uiGridExporterConstants.ALL;
			uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
		};
	} ]);

//BatchProcessController
app
.controller(
		"frmBatchProcessControlController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			'frmBatchProcessControlHandler',
			function($scope, uiGridExporterService,
					uiGridExporterConstants,
					frmBatchProcessControlHandler) {
				$scope.gridOptions = {
						paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
						paginationPageSize : 20,
						enableFiltering : false,
						enableHorizontalScrollbar : 1,
						title : 'main',
						columnDefs : [
							{
								field : 'processDate',
								width : 250,
								cellTooltip : function(row, col) {
									return 'processDate: '
									+ row.entity.processDate;
								},
								headerTooltip : function(col) {
									return 'Header: '
									+ col.displayName;
								}
							}, {
								field : 'asOfDate',
								width : 200,
								enableFiltering : false
							}, {
								field : 'completedStep',
								width : 200,
								enableFiltering : false
							}, {
								field : 'completedFlag',
								width : 250,
								enableFiltering : false
							}, {
								field : 'glPostingCode',
								width : 220,
								enableFiltering : false
							}, {
								field : 'executedFrom',
								width : 220,
								enableFiltering : false
							} ],
							enableGridMenu : true,
							enableSelectAll : true,
							shrinkToFit : false,
							exporterCsvFilename : 'myFile.csv',
							exporterPdfDefaultStyle : {
								fontSize : 9
							},
							exporterPdfTableStyle : {
								margin : [ 30, 30, 30, 30 ]
							},
							exporterPdfTableHeaderStyle : {
								fontSize : 10,
								bold : true,
								italics : true,
								color : 'red'
							},
							exporterPdfHeader : {
								text : "My Header",
								style : 'headerStyle'
							},
							exporterPdfFooter : function(currentPage,
									pageCount) {
								return {
									text : currentPage.toString() + ' of '
									+ pageCount.toString(),
									style : 'footerStyle'
								};
							},
							exporterPdfCustomFormatter : function(
									docDefinition) {
								docDefinition.styles.headerStyle = {
										fontSize : 22,
										bold : true
								};
								docDefinition.styles.footerStyle = {
										fontSize : 10,
										bold : true
								};
								return docDefinition;
							},
							exporterPdfOrientation : 'portrait',
							exporterPdfPageSize : 'LETTER',
							exporterPdfMaxGridWidth : 500,
							exporterCsvLinkElement : angular
							.element(document
									.querySelectorAll(".custom-csv-link-location")),
									onRegisterApi : function(gridApi) {
										$scope.grid1Api = gridApi;
									}
				};
				$scope.saveRow = function(rowEntity) {
					console.log('SaveRow called for: '
							+ rowEntity.id);
					// create a fake promise - normally you'd use
					// the promise returned by
					// $http or $resource
					var promise = $q.defer();
					$scope.gridApi.rowEdit.setSavePromise(
							$scope.gridApi.grid, rowEntity,
							promise.promise);

					// fake a delay of 3 seconds whilst the save
					// occurs, return error if
					// gender is "male"
				};

				$scope.getformload = function() {
					frmBatchProcessControlHandler.formload(
							$scope.frmBatchProcessControl,
							$scope.getformloadSuccess,
							$scope.getformloadError);
					angular.element(document
							.getElementById('query'))[0].disabled = true;
				};

				$scope.getformloadSuccess = function(response) {
					if (response != null) {
						console.log(response);
						$scope.gridOptions.data = response;
					}
				};

				$scope.getformloadError = function(response) {

				};

				$scope.getqueryenable1 = function() {
					if ($scope.frmBatchProcessControl.txtApp.length === 0
							|| typeof $scope.frmBatchProcessControl.txtApp === 'undefined') {
						angular.element(document
								.getElementById('query'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query'))[0].disabled = false;
					}
				};
				$scope.getqueryenable2 = function() {
					if ($scope.frmBatchProcessControl.txtDate.length === 0
							|| typeof $scope.frmBatchProcessControl.txtDate === 'undefined') {
						angular.element(document
								.getElementById('query'))[0].disabled = true;
					} else {
						angular.element(document
								.getElementById('query'))[0].disabled = false;
					}
				};

				$scope.getcmdqueryclick = function() {
					frmBatchProcessControlHandler.cmdqueryclick(
							$scope.frmBatchProcessControl,
							$scope.getcmdqueryclickSuccess,
							$scope.getcmdqueryclickError);
				};

				$scope.getcmdqueryclickSuccess = function(response) {
					if (response != null) {
						$scope.gridOptions.data = response;
					}
				};

				$scope.getcmdqueryclickError = function(response) {
				};

				$scope.getcmdrefreshclick = function() {
					$scope.frmBatchProcessControl.txtApp = null;
					$scope.frmBatchProcessControl.txtDate = null;
					$scope.getformload();
				};

				$scope.redirect = function() {
					window.location.href = "http://localhost:8080/Tasa/#/";
				}

				$scope.exportPdf = function() {
					var grid = $scope.gridApi.grid;
					var rowTypes = uiGridExporterConstants.ALL;
					var colTypes = uiGridExporterConstants.ALL;
					uiGridExporterService.pdfExport(grid, rowTypes,
							colTypes);
				};
			} ]);

//Daily NAV Maintenance Controller
app
.controller(
		"frmDailyNavMaintenanceController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			'frmDailyNavMaintenanceHandler',
			function($scope, uiGridExporterService,
					uiGridExporterConstants,
					frmDailyNavMaintenanceHandler) {
				$scope.getpopulatesfgfund = function() {
					frmDailyNavMaintenanceHandler.populatesfgfund(
							$scope.frmDailyNavMaintenance,
							$scope.getpopulatesfgfundSuccess,
							$scope.getpopulatesfgfundError);
				};

				$scope.getpopulatesfgfundSuccess = function(
						response) {
					if (response != null) {
						$
						.each(
								response,
								function(i, value) {
									$('#myselect')
									.append(
											$(
											'<option>')
											.text(
													value.cbofunds)
													.attr(
															'value',
															value.cbofunds));
								});
					}
					;
				};

				$scope.getpopulatesfgfundError = function(response) {
					alert("Error in PopulateSFGFund:  & Err.Description, vbExclamation");
				};

				$scope.getcbofundsclick = function() {

					$scope.clearallfields();
					// disable the manual value fields when the user
					// selects a fund
					$scope.enablemanualvalfields();
					// when an item is selected enable the select a
					// fund button
					if ($scope.frmDailyNavMaintenance.cbofunds != "") {
						$scope.frmDailyNavMaintenance.cmdselfund = false;
					}
				};

				$scope.getcbofundsclickError = function(response) {
					alert("Error in cboFunds_Click.  & Err.Description, vbExclamation");
				};

				$scope.clearallfields = function() {
					$scope.frmDailyNavMaintenance.txtmanualrepeat = "";
					$scope.frmDailyNavMaintenance.txtmanualval = "";
				};

				$scope.enablemanualvalfields = function() {
					$scope.frmDailyNavMaintenance.txtmanualrepeatdisplay = false;
					$scope.frmDailyNavMaintenance.txtmanualvaldisplay = false;

				};

				$scope.formload = function() {
					$scope.frmDailyNavMaintenance = new frmDailyNavMaintenance();
					$scope.frmDailyNavMaintenance.cmdaddmodify = 'ADD'
						$scope.getpopulatesfgfund(); // Populate the
					// fund names
					$scope.frmDailyNavMaintenance.cmdselfund = true;
					$scope.clearallfields();
					$scope.enablemanualvalfields();
					$scope.frmDailyNavMaintenance.cmddeletedisplay = true;

				};

				$scope.getformloadSuccess = function(response) {
					if (response != null) {
					}
					;
				};

				$scope.getformloadError = function(response) {
				};

				$scope.getcmdaddmodifyclick = function() {
					if ($scope.frmDailyNavMaintenance.cmdaddmodify == "ADD") {
						frmDailyNavMaintenanceHandler
						.cmdaddmodifyclick1(
								$scope.frmDailyNavMaintenance,
								$scope.getcmdaddmodifyclick1Success,
								$scope.getcmdaddmodifyclick1Error);
					}

					$scope.getcmdaddmodifyclick1Success = function(
							response) {
						if (response != null) {
							if (response.length > 0) {
								alert("Manually entered value exists for  "
										+ $scope.frmDailyNavMaintenance.cbofunds
										+ " as of date:  & rs!as_of_dt & . Please contact rponcall!, vbExclamation");
							} else {
								if ($scope.frmDailyNavMaintenance.txtmanualval
										.trim() == "") {
									alert("Please enter a manual value! , vbInformation");
									return;
								} else {
									$scope.frmDailyNavMaintenance.manval = $scope.frmDailyNavMaintenance.txtmanualval
								}

								if ($scope.frmDailyNavMaintenance.txtmanualrepeat
										.trim() == "") {
									alert("Please enter a manual value in the re-enter box. , vbInformation");
									return;
								} else {
									$scope.frmDailyNavMaintenance.manvalrepeat = $scope.frmDailyNavMaintenance.txtmanualrepeat
								}

								if ($scope.frmDailyNavMaintenance.manval != $scope.frmDailyNavMaintenance.manvalrepeat) {
									alert("anually entered value doesn't match with the Re-enter Value. Nothing is changed in the database!, vbExclamation");
									return;
								}

								if ($scope.frmDailyNavMaintenance.cmdaddmodify == "ADD") {
									frmDailyNavMaintenanceHandler
									.cmdaddmodifyclick2(
											$scope.frmDailyNavMaintenance,
											$scope.getcmdaddmodifyclick2Success,
											$scope.getcmdaddmodifyclick2Error);
									$scope.getcmdaddmodifyclick2Success = function(
											response) {
										if (response != null) {
											alert("Record added successfully!, vbInformation");
											$scope.frmDailyNavMaintenance.cmddeletedisplay = false;
											$scope.frmDailyNavMaintenance.cmdaddmodify = "MODIFY";
											mManEnteredVal = $scope.frmDailyNavMaintenance.txtmanualval;
											$scope.frmDailyNavMaintenance.txtmanualrepeat = "";
										}
										;
									};

									$scope.getcmdaddmodifyclick2Error = function(
											response) {
									};

								} else {
									if (mManEnteredVal == $scope.frmDailyNavMaintenance.manval) {
										alert("There is no change in the manual value, so no updates are done!, vbInformation");
										return;
									}
									frmDailyNavMaintenanceHandler
									.cmdaddmodifyclick3(
											$scope.frmDailyNavMaintenance,
											$scope.getcmdaddmodifyclick3Success,
											$scope.getcmdaddmodifyclick3Error);
									$scope.getcmdaddmodifyclick3Success = function(
											response) {
										if (response != null) {
											alert("Record updated successfully!, vbInformation");
											$scope.frmDailyNavMaintenance.cmdaddmodifydisplay = true;
											$scope.frmDailyNavMaintenance.cmddeletedisplay = false;
											$scope.frmDailyNavMaintenance.cmdaddmodify = "MODIFY";
											mManEnteredVal = $scope.frmDailyNavMaintenance.txtmanualval;
											$scope.frmDailyNavMaintenance.txtmanualrepeat = "";
										}
										;
									};

									$scope.getcmdaddmodifyclick3Error = function(
											response) {
									};
								}
							}
							;
						}
						;

						$scope.getcmdaddmodifyclick1Error = function(
								response) {
						};

					}

				};

				$scope.getcmdaddmodifyclickSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdaddmodifyclickError = function(
						response) {
					alert("Error in cmdAddModify_Click:  & Err.Description, vbExclamation");
				};

				$scope.getcmddeleteclick = function() {
					frmDailyNavMaintenanceHandler.cmddeleteclick(
							$scope.frmDailyNavMaintenance,
							$scope.getcmddeleteclickSuccess,
							$scope.getcmddeleteclickError);
				};

				$scope.getcmddeleteclickSuccess = function(response) {
					if (response != null) {
						$scope.frmDailyNavMaintenance.txtmanualrepeat = "";
						$scope.frmDailyNavMaintenance.txtmanualval = "";
						$scope.frmDailyNavMaintenance.cmddeletedisplay = true;
						$scope.frmDailyNavMaintenance.cmdaddmodify = "ADD";
					}
					;
				};

				$scope.getcmddeleteclickError = function(response) {
					alert("Error in cmdDelete_Click: & Err.Description, vbExclamation");
				};

				$scope.getpopulateselectedfunddetails = function() {
					frmDailyNavMaintenanceHandler
					.populateselectedfunddetails1(
							$scope.frmDailyNavMaintenance,
							$scope.getpopulateselectedfunddetails1Success,
							$scope.getpopulateselectedfunddetails1Error);

					$scope.getpopulateselectedfunddetails1Success = function(
							response) {
						if (response != null) {
							if (response.length > 0) {
								$
								.each(
										response,
										function(i, value) {
											if (value.SRC_CD == "UNAUDITED") {
												$scope.frmDailyNavMaintenance.lblunaudited = value.NAV_AMT;
											}
											if (value.SRC_CD == "MANUAL_ENTERED") {
												$scope.frmDailyNavMaintenance.txtmanualval = value.NAV_AMT;
												mManEnteredVal = value.NAV_AMT;
											}
										});

								frmDailyNavMaintenanceHandler
								.populateselectedfunddetails2(
										$scope.frmDailyNavMaintenance,
										$scope.getpopulateselectedfunddetails2Success,
										$scope.getpopulateselectedfunddetails2Error);

								$scope.getpopulateselectedfunddetails2Success = function(
										response) {
									if (response != null) {
										if (response.length > 0) {
											$scope.frmDailyNavMaintenance.lblestimatedval = value.NAV_AMT;
										}

										if ($scope.frmDailyNavMaintenance.txtmanualval != "") {
											$scope.frmDailyNavMaintenance.cmdaddmodify = "MODIFY";
											$scope.frmDailyNavMaintenance.cmdaddmodifydisplay = false;
											$scope.frmDailyNavMaintenance.cmddeletedisplay = false;
										} else {
											$scope.frmDailyNavMaintenance.cmdaddmodify = "ADD";
											$scope.frmDailyNavMaintenance.cmdaddmodifydisplay = false;
											$scope.frmDailyNavMaintenance.cmddeletedisplay = true;
										}
									}
									;
								};

								$scope.getpopulateselectedfunddetails2Error = function(
										response) {
								};

							}

						}
						;
					};

					$scope.getpopulateselectedfunddetails1Error = function(
							response) {
					};

				};

				$scope.getpopulateselectedfunddetailsSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getpopulateselectedfunddetailsError = function(
						response) {
				};

				$scope.getcmdselfundclick = function() {
					$scope.clearallfields();
					$scope.getpopulateselectedfunddetails();
					// Enable the manually entered value
					$scope.enablemanualvalfields();
				};

				$scope.getcmdselfundclickSuccess = function(
						response) {
					if (response != null) {
					}
					;
				};

				$scope.getcmdselfundclickError = function(response) {
					alert("Error in CmdSelFund_Click. ERROR:  & Err.Description, vbExclamation");
				};

			} ]);

//RPD 157 Controller
app.controller("frmProductFundsController", ['$scope','uiGridExporterService', 'uiGridExporterConstants','frmProductFundsHandler',function ($scope,uiGridExporterService, uiGridExporterConstants, frmProductFundsHandler) {
			$scope.gridOptions = {
				paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
				paginationPageSize : 20,
				enableFiltering : false,
				enableColumnMenus : true,
				enableRowHeaderSelection : false,
				enableHorizontalScrollbar : 1,
				multiSelect : true,
				enableCellSelection : true,
				enableRowSelection : true,
				enableCellEditOnFocus : true,
				title : 'main',
				columnDefs : [ {
					field : 'asOfDateonFPU',
					width : 250,
					enableCellEdit : true,
					cellTooltip : function(row, col) {
						return 'asOfDateonFPU: ' + row.entity.asOfDateonFPU;
					},
					headerTooltip : function(col) {
						return 'Header: ' + col.displayName;
					}
				}, {
					field : 'invFundCategory',
					enableCellEdit : true
				}, {
					field : 'description',
					enableCellEdit : true
				}, {
					field : 'lastUpdated',
					enableCellEdit : true
				}, {
					field : 'updatedBy',
					enableCellEdit : true
				}],
				enableGridMenu : true,
				// enableSelectAll: true,
				enableRowSelection : true,
				multiSelect : true,
				noUnselect : false,
				shrinkToFit : false,
				exporterCsvFilename : 'myFile.csv',
				exporterPdfDefaultStyle : {
					fontSize : 6
				},
				exporterPdfTableStyle : {
					margin : [ 0, 0, 0, 0 ]
				},
				exporterPdfTableHeaderStyle : {
					fontSize : 10,
					bold : true,
					italics : true,
					color : 'red',
					width : 150
				},
				exporterPdfHeader : {
					text : "RPD 157 Data",
					style : 'headerStyle'
				},
				exporterPdfFooter : function(currentPage, pageCount) {
					return {
						text : currentPage.toString() + ' of '
								+ pageCount.toString(),
						style : 'footerStyle'
					};
				},
				exporterPdfCustomFormatter : function(docDefinition) {
					docDefinition.styles.headerStyle = {
						fontSize : 14,
						bold : true
					};
					docDefinition.styles.footerStyle = {
						fontSize : 10,
						bold : true
					};
					return docDefinition;
				},
				exporterPdfOrientation : 'portrait',
				exporterPdfPageSize : 'LETTER',
				exporterPdfMaxGridWidth : 450,
				exporterCsvLinkElement : angular.element(document
						.querySelectorAll(".custom-csv-link-location")),
				onRegisterApi : function(gridApi) {
					$scope.grid1Api = gridApi;
				}
			};
		$scope.gridOptions.multiSelect = true;
		$scope.gridOptions.onRegisterApi = function(gridApi) {
			// set gridApi on scope
			$scope.gridApi = gridApi;
			gridApi.edit.on
			.afterCellEdit(
					$scope,
					function(rowEntity, colDef,
							newValue, oldValue) {
						if (newValue != oldValue) {
							$scope.items = [];
							$scope.items
							.push({
								asOfDateonFPU : rowEntity.asOfDateonFPU,
								invFundCategory : rowEntity.invFundCategory,
								description : rowEntity.description,
								lastUpdated : rowEntity.lastUpdated,
								updatedBy : rowEntity.updatedBy,
							});
							$scope.getTotalItems();
		
						}
					});
		};
	
		$scope.myData = [];
		$scope.getTotalItems = function() {
			for (var i = 0; i < $scope.items.length; i++) {
				$scope.myData.push($scope.items[i]);
			}
			return $scope.myData;
		};

	//  $http.get('/data/10000_complex.json')
	// .success(function(data) {
	//   $scope.gridOptions.data = data;
	// });
	
	$scope.getdatagridaftercolupdate=function() {
		frmProductFundsHandler.datagridaftercolupdate($scope.myData,$scope.getdatagridaftercolupdateSuccess, $scope.getdatagridaftercolupdateError);    
	};

	$scope.getdatagridaftercolupdateSuccess = function (response) {
		if (response != null) {
			alert("Update complete!");
		};
	};

	$scope.getdatagridaftercolupdateError = function(response) {
	}; 

   	$scope.getdatagridbeforecolupdate=function() {	
		frmProductFundsHandler.datagridbeforecolupdate($scope.frmProductFunds,$scope.getdatagridbeforecolupdateSuccess, $scope.getdatagridbeforecolupdateError);    
	};

	$scope.getdatagridbeforecolupdateSuccess = function (response) {
		if (response != null) {
		};
	};

	$scope.getdatagridbeforecolupdateError = function(response) {
	}; 

   	$scope.getformload=function() {	
		frmProductFundsHandler.formload($scope.frmProductFunds,$scope.getformloadSuccess, $scope.getformloadError);    
	};

	$scope.getformloadSuccess = function (response) {
		if (response != null) {
			$scope.gridOptions.data = response;
		};
	};

	$scope.getformloadError = function(response) {
	}; 
}]);

//NAVMaintController
app.controller("dummyController", [
	'$scope',
	'uiGridExporterService',
	'uiGridExporterConstants',
	'frmDailyNavMaintenanceHandler',
	function($scope, uiGridExporterService, uiGridExporterConstants,
			frmDailyNavMaintenanceHandler) {
		$scope.getpopulatesfgfund = function() {
			frmDailyNavMaintenanceHandler.populatesfgfund(
					$scope.frmDailyNavMaintenance,
					$scope.getpopulatesfgfundSuccess,
					$scope.getpopulatesfgfundError);
		};

		$scope.getpopulatesfgfundSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getpopulatesfgfundError = function(response) {
		};

		$scope.getformload = function() {
			frmDailyNavMaintenanceHandler.formload(
					$scope.frmDailyNavMaintenance,
					$scope.getformloadSuccess, $scope.getformloadError);
		};

		$scope.getformloadSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getformloadError = function(response) {
		};

		$scope.getcmdaddmodifyclick = function() {
			frmDailyNavMaintenanceHandler.cmdaddmodifyclick(
					$scope.frmDailyNavMaintenance,
					$scope.getcmdaddmodifyclickSuccess,
					$scope.getcmdaddmodifyclickError);
		};

		$scope.getcmdaddmodifyclickSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getcmdaddmodifyclickError = function(response) {
		};

		$scope.getcmdcloseclick = function() {
			frmDailyNavMaintenanceHandler.cmdcloseclick(
					$scope.frmDailyNavMaintenance,
					$scope.getcmdcloseclickSuccess,
					$scope.getcmdcloseclickError);
		};

		$scope.getcmdcloseclickSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getcmdcloseclickError = function(response) {
		};

		$scope.getcmddeleteclick = function() {
			frmDailyNavMaintenanceHandler.cmddeleteclick(
					$scope.frmDailyNavMaintenance,
					$scope.getcmddeleteclickSuccess,
					$scope.getcmddeleteclickError);
		};

		$scope.getcmddeleteclickSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getcmddeleteclickError = function(response) {
		};

		$scope.getpopulateselectedfunddetails = function() {
			frmDailyNavMaintenanceHandler.populateselectedfunddetails(
					$scope.frmDailyNavMaintenance,
					$scope.getpopulateselectedfunddetailsSuccess,
					$scope.getpopulateselectedfunddetailsError);
		};

		$scope.getpopulateselectedfunddetailsSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getpopulateselectedfunddetailsError = function(response) {
		};

		$scope.getcmdselfundclick = function() {
			frmDailyNavMaintenanceHandler.cmdselfundclick(
					$scope.frmDailyNavMaintenance,
					$scope.getcmdselfundclickSuccess,
					$scope.getcmdselfundclickError);
		};

		$scope.getcmdselfundclickSuccess = function(response) {
			if (response != null) {
			}
			;
		};

		$scope.getcmdselfundclickError = function(response) {
		};

	} ]);

//fsteController
app
.controller(
		"fsteController",
		[
			'$scope',
			'uiGridExporterService',
			'uiGridExporterConstants',
			function($scope, uiGridExporterService,
					uiGridExporterConstants) {
				$scope.gridOptions = {
						paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
						paginationPageSize : 20,
						enableFiltering : false,
						enableHorizontalScrollbar : 1,
						title : 'main',
						columnDefs : [
							{
								field : 'Code',
								width : 230,
								displayName : 'Code',
								name : 'Code',
								editableCellTemplate : 'ui-grid/dropdownEditor',
								width : '220',
								cellFilter : 'Code',
								editDropdownValueLabel : 'Code',
								editDropdownOptionsArray : [ {
									id : '3',
									Code : 'abcd'
								}, {
									id : '4',
									Code : 'efgh'
								} ]
							},
							{
								field : 'ShortName',
								width : 220,
								cellTemplate : '<input type="text" class="form-control input-sm"/>',
								type : 'number'
							},
							{

								field : 'TransCode',
								displayName : 'TransCode',
								name : 'TransCode',
								editableCellTemplate : 'ui-grid/dropdownEditor',
								width : '220',
								cellFilter : 'TransCode',
								editDropdownValueLabel : 'TransCode',
								editDropdownOptionsArray : [ {
									id : '1',
									TransCode : 'abcd'
								}, {
									id : '2',
									TransCode : 'efgh'
								} ]
							},
							{
								field : 'UnitQuantity',
								width : 220,
								cellTemplate : '<input type="text" class="form-control input-sm"/>',
								type : 'number'
							},
							{
								field : 'Amount',
								width : 225,
								cellTemplate : '<input type="text" class="form-control input-sm"/>',
								type : 'number'
							}

							],
							enableGridMenu : true,
							enableSelectAll : true,
							shrinkToFit : false,
							exporterCsvFilename : 'myFile.csv',
							exporterPdfDefaultStyle : {
								fontSize : 9
							},
							exporterPdfTableStyle : {
								margin : [ 30, 30, 30, 30 ]
							},
							exporterPdfTableHeaderStyle : {
								fontSize : 10,
								bold : true,
								italics : true,
								color : 'red'
							},
							exporterPdfHeader : {
								text : "My Header",
								style : 'headerStyle'
							},
							exporterPdfFooter : function(currentPage,
									pageCount) {
								return {
									text : currentPage.toString() + ' of '
									+ pageCount.toString(),
									style : 'footerStyle'
								};
							},
							exporterPdfCustomFormatter : function(
									docDefinition) {
								docDefinition.styles.headerStyle = {
										fontSize : 22,
										bold : true
								};
								docDefinition.styles.footerStyle = {
										fontSize : 10,
										bold : true
								};
								return docDefinition;
							},
							exporterPdfOrientation : 'portrait',
							exporterPdfPageSize : 'LETTER',
							exporterPdfMaxGridWidth : 500,
							exporterCsvLinkElement : angular
							.element(document
									.querySelectorAll(".custom-csv-link-location")),
									onRegisterApi : function(gridApi) {
										$scope.grid1Api = gridApi;
									}
				};

				$scope.users = [ {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "2",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "2",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "2",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "3",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "2",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "2",
					UnitQuantity : "10",
					Amount : "10"
				}, {
					Code : "4",
					ShortName : 10,
					Db_Cr : 'Nagpur',
					TransCode : "1",
					UnitQuantity : "10",
					Amount : "10"
				} ];

				// $http.get('/data/10000_complex.json')
				// .success(function(data) {
				//   $scope.gridOptions.data = data;
				// });
				$scope.gridOptions.data = $scope.users;
				$scope.exportPdf = function() {
					var grid = $scope.gridApi.grid;
					var rowTypes = uiGridExporterConstants.ALL;
					var colTypes = uiGridExporterConstants.ALL;
					uiGridExporterService.pdfExport(grid, rowTypes,
							colTypes);
				};
			} ]).filter('TransCode', function() {
				var TransCoderHash = {
						'1' : 'abcd',
						'2' : 'efgh'
				};

				return function(input) {
					if (!input) {
						return '';
					} else {
						return TransCoderHash[input];
					}
				};
			}).filter('Code', function() {
				var CoderHash = {
						'3' : 'abcd',
						'4' : 'efgh'
				};

				return function(input) {
					if (!input) {
						return '';
					} else {
						return CoderHash[input];
					}
				};
			});

//RbpcController
app.controller("RbpcController", [
	'$scope',
	'uiGridExporterService',
	'uiGridExporterConstants',
	function($scope, uiGridExporterService, uiGridExporterConstants) {
		$scope.gridOptions = {
				paginationPageSizes : [ 10, 15, 20, 25, 50, 75 ],
				paginationPageSize : 20,
				enableFiltering : false,
				enableHorizontalScrollbar : 1,
				title : 'main',
				columnDefs : [ {
					field : 'Column_01',
					width : 300,
					cellTooltip : function(row, col) {
						return 'Column_01: ' + row.entity.Column_01;
					},
					headerTooltip : function(col) {
						return 'Header: ' + col.displayName;
					}
				}, {
					field : 'Column_02',
					width : 250
				}, {
					field : 'Column_03',
					width : 260
				}, {
					field : 'Column_04',
					width : 300,
					enableFiltering : false
				} ],
				enableGridMenu : true,
				enableSelectAll : true,
				shrinkToFit : false,
				exporterCsvFilename : 'myFile.csv',
				exporterPdfDefaultStyle : {
					fontSize : 9
				},
				exporterPdfTableStyle : {
					margin : [ 30, 30, 30, 30 ]
				},
				exporterPdfTableHeaderStyle : {
					fontSize : 10,
					bold : true,
					italics : true,
					color : 'red'
				},
				exporterPdfHeader : {
					text : "My Header",
					style : 'headerStyle'
				},
				exporterPdfFooter : function(currentPage, pageCount) {
					return {
						text : currentPage.toString() + ' of '
						+ pageCount.toString(),
						style : 'footerStyle'
					};
				},
				exporterPdfCustomFormatter : function(docDefinition) {
					docDefinition.styles.headerStyle = {
							fontSize : 22,
							bold : true
					};
					docDefinition.styles.footerStyle = {
							fontSize : 10,
							bold : true
					};
					return docDefinition;
				},
				exporterPdfOrientation : 'portrait',
				exporterPdfPageSize : 'LETTER',
				exporterPdfMaxGridWidth : 500,
				exporterCsvLinkElement : angular.element(document
						.querySelectorAll(".custom-csv-link-location")),
						onRegisterApi : function(gridApi) {
							$scope.grid1Api = gridApi;
						}
		};
		$scope.users = [ {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		}, {
			Column_01 : "Madhav Sai",
			Column_02 : 10,
			Column_03 : 'Nagpur',
			Column_04 : "Madhav Sai",
			Column_05 : 10
		} ];

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
	} ]);

// UV Entry Controller
app.controller("frmUVEntryController", [
		'$scope',
		'uiGridExporterService',
		'uiGridExporterConstants',
		'frmUVEntryHandler',
		function($scope, uiGridExporterService, uiGridExporterConstants,
				frmUVEntryHandler) {
			$scope.getpopulatecontract = function() {
				frmUVEntryHandler.populatecontract($scope.frmUVEntry,
						$scope.getpopulatecontractSuccess,
						$scope.getpopulatecontractError);
			};

			$scope.getpopulatecontractSuccess = function(response) {
//				 Me.cboContract.Clear
//				    Me.cboPlanName.Clear
				if (response != null) {
					$.each(response, function(i, value) {
			            $('#myselect').append($('<option>').text(value.rp_contract_id).attr('value', value.rp_contract_id));
			            if($scope.frmUVEntry.Legal_Plan_nm != ""){
			            	$('#myselect2').append($('<option>').text(value.Legal_Plan_nm).attr('value', value.Legal_Plan_nm));
			            } else{
			            	$('#myselect2').append($('<option>').text("No name found"));
			            }
			        });
				}
				;
			};

			$scope.getpopulatecontractError = function(response) {
			};

			$scope.getpopulatefunds = function() {
				frmUVEntryHandler.populatefunds($scope.frmUVEntry,
						$scope.getpopulatefundsSuccess,
						$scope.getpopulatefundsError);
			};

			$scope.getpopulatefundsSuccess = function(response) {
//				cboFund.Clear
				if (response != null) {
					$.each(response, function(i, value) {
			            $('#myselect1').append($('<option>').text(value.RP_CPSRPD_FUND_SEQ).attr('value', value.RP_CPSRPD_FUND_SEQ));
			        });
					
//				    Do While Not rs.EOF
//				        cboFund.AddItem rs!descp
//				        cboFund.ItemData(i) = rs!RP_CPSRPD_FUND_SEQ
//				        i = i + 1
//				        rs.MoveNext
//				    Loop
				}
				;
			};

			$scope.getpopulatefundsError = function(response) {
			};
			
			$scope.enabledisable=function() {
				$scope.frmUVEntry.txtreenteruvoverride = "";
				$scope.frmUVEntry.txtuvoverride = "";
				$scope.frmUVEntry.txtuvoverridedisplay = false;
				$scope.frmUVEntry.txtreenteruvoverridedisplay = false;
			};

			$scope.getcbocontractclick = function() {
				
				$scope.frmUVEntry.lblcontractname = "Test";
				
//				Me.lblContractName.Caption = cboPlanName.List(cboContract.ListIndex)
				$scope.getpopulatefunds();
				
				if($scope.frmUVEntry.cbofund == ""){
					$scope.frmUVEntry.cmdselfund = true;
				}else{
					$scope.frmUVEntry.cmdselfund = false;
				}
				$scope.enabledisable();
			};

			$scope.getcbocontractclickSuccess = function(response) {
				if (response != null) {
				}
				;
			};

			$scope.getcbocontractclickError = function(response) {
				alert("Error in cboContract_click.  & Err.Description, vbExclamation");
			};

			$scope.getcmdaddmodifyclick = function() {
				//make sure both unit value override and the re-enter boxes match for updates to take place
				
				if($scope.frmUVEntry.txtuvoverride != $scope.frmUVEntry.txtreenteruvoverride){
					alert("Unit Value Override doesn't match with the Re-enter value, so nothing is changed in the database., vbExclamation");
					return;
				}
				
				if($scope.frmUVEntry.cmdaddmodifydisplay == "MODIFY"){
//					insert a new value for unit value in rp_cntrct_unit_val_ovrrd
//			        if there is no change in the data, give the user the message and don't
//			        update the database
					if($scope.frmUVEntry.mUnitVal == $scope.frmUVEntry.txtuvoverride){
						alert("There is no change in the Unit Value Override. So nothing has changed in the database!, vbInformation");
						return;
					} else{
						frmUVEntryHandler.cmdaddmodifyclick1($scope.frmUVEntry,$scope.getcmdaddmodifyclick1Success,$scope.getcmdaddmodifyclick1Error);
					}
					
				} else{
					frmUVEntryHandler.cmdaddmodifyclick2($scope.frmUVEntry,$scope.getcmdaddmodifyclick2Success,$scope.getcmdaddmodifyclick2Error);
				}
			};
			
			$scope.getcmdaddmodifyclick1Success = function(response) {
				if (response != null) {
					if(response.length > 0){
						alert("Unit value added successfully!, vbInformation");
						$scope.frmUVEntry.cmdaddmodify = "MODIFY";
						$scope.frmUVEntry.cmddelete = false;
						$scope.frmUVEntry.txtreenteruvoverride = "";
						$scope.frmUVEntry.mUnitVal = $scope.frmUVEntry.txtuvoverride;
					}
				}
				;
			};

			$scope.getcmdaddmodifyclick1Error = function(response) {
			};
			
			$scope.getcmdaddmodifyclick2Success = function(response) {
				if (response != null) {
					if(response.length > 0){
					alert("Unit value updated successfully!, vbInformation");
					$scope.frmUVEntry.txtreenteruvoverride = "";
					$scope.frmUVEntry.mUnitVal = $scope.frmUVEntry.txtuvoverride;
					}
				}
				;
			};

			$scope.getcmdaddmodifyclick2Error = function(response) {
			};

			$scope.getcbofundclick = function() {
				if($scope.frmUVEntry.cbofund != ""){
					$scope.frmUVEntry.cmdselfund = false;
					$scope.enabledisable();
				}
			};

			$scope.getcmddeleteclick = function() {
//				iAnswer = MsgBox("Are you sure you want to delete the unit value override?", vbQuestion + vbOKCancel)
			    
				frmUVEntryHandler.cmddeleteclick($scope.frmUVEntry,
						$scope.getcmddeleteclickSuccess,
						$scope.getcmddeleteclickError);
			};

			$scope.getcmddeleteclickSuccess = function(response) {
				if (response != null) {
					if(response.length > 0){
						$scope.frmUVEntry.txtreenteruvoverride = "";
						$scope.frmUVEntry.txtuvoverride = "";
						$scope.frmUVEntry.cmdaddmodify = "ADD";
						$scope.frmUVEntry.cmddelete = true;
					} else{
			            alert("Error in deleting the record!, vbInformation");
			            return;
					}
				}
				;
			};

			$scope.getcmddeleteclickError = function(response) {
				alert("Error in cmdDelete_Click.  & Err.Description, vbExclamation")
			};

			$scope.getcmdselfundclick = function() {
				frmUVEntryHandler.cmdselfundclick($scope.frmUVEntry,
						$scope.getcmdselfundclickSuccess,
						$scope.getcmdselfundclickError);
			};

			$scope.getcmdselfundclickSuccess = function(response) {
				if (response != null) {
					if(response.length == 0){
						$scope.frmUVEntry.txtreenteruvoverride = "";
						$scope.frmUVEntry.txtuvoverride = "";
						$scope.frmUVEntry.cmdaddmodify = "ADD";
						$scope.frmUVEntry.cmddelete = false;
					} else{
						$.each(response, function(i, value) {
							$scope.frmUVEntry.txtuvoverride = value.UNIT_VALUE;
							$scope.frmUVEntry.mUnitVal = value.UNIT_VALUE;
							$scope.frmUVEntry.cmddelete = false;
							$scope.frmUVEntry.cmdaddmodify = "MODIFY";
//					        Me.txtUVOverride.Text = rs!UNIT_VALUE
//					        Me.mUnitVal = rs!UNIT_VALUE
				        });
						
					}
				}
				;
			};

			$scope.getcmdselfundclickError = function(response) {
				alert("Error in cmdSelFund_Click.  & Err.Description, vbExclamation");
			};

			$scope.getformload = function() {
				$scope.frmUVEntry =  new frmUVEntry();
				$scope.getpopulatecontract();
				
			   //disable the UV entry fields
				$scope.frmUVEntry.txtreenteruvoverridedisplay = true;
				$scope.frmUVEntry.txtuvoverridedisplay = true;
				$scope.frmUVEntry.cmdaddmodifydisplay = true;
				$scope.frmUVEntry.cmddelete = true;
				$scope.frmUVEntry.cmdselfund = true;
			};

			$scope.getformloadSuccess = function(response) {
				if (response != null) {
				}
				;
			};

			$scope.getformloadError = function(response) {
			};

		}]);

