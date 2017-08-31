app.service('ajaxService', function ($http) {
    this.AjaxGetWithData = function (data, route, successFunction, errorFunction) {
        setTimeout(function () {
            $http({ method: 'GET', url: route, params: data }).success(function (response, status, headers, config) {
                successFunction(response, status);
            }).error(function (response) {
                errorFunction(response);
            });
        }, 1);

    };
    
    this.AjaxPost = function (data1, route, successFunction, errorFunction) {
    
        setTimeout(function () {
               var jsonData = angular.toJson(data1);
           //var objectToSerialize = { 'object': jsonData };
           // $http.post(route, data, config).success(function (response, status, headers, config) {
            $http({
                method: 'POST', url: route,
                data: jsonData
			   //  headers: [{'Content-Type': 'application/json'}] 				
            }).success(function (response, status, headers, config) {
                successFunction(response, status);
            }).error(function (response) {
            
                errorFunction(response);
            });
        }, 1);

    };
    this.AjaxGet = function (route, successFunction, errorFunction) {
    
        setTimeout(function () {
            $http({ method: 'GET', url: route }).success(function (response, status, headers, config) {
            
                successFunction(response, status);
            }).error(function (response) {
            
                errorFunction(response);
            });
        }, 1);

    };
    
    this.AjaxDelete = function (data1, route, successFunction, errorFunction) {
    
        setTimeout(function () {
		// alert(data1.userIdNo);
            var jsonData = angular.toJson(data1);
           //var objectToSerialize = { 'object': jsonData };
           // $http.post(route, data, config).success(function (response, status, headers, config) {
            $http({
            	 url: route, method: 'delete', data: jsonData 
			   //  headers: [{'Content-Type': 'application/json'}] 				
            }).success(function (response, status, headers, config) {
                successFunction(response, status);
            }).error(function (response) {
            
                errorFunction(response);
            });
        }, 1);

    };
});