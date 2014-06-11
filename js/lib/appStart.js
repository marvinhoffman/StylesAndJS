/**
 * Created by mhoffman on 6/5/14.
 */
/**
 * Created by MHoffman on 6/5/2014.
 */

var appStart = angular.module("appStart",[]);

appStart.factory("ProductsData",function() {
    var ProductsData = {};
    ProductsData.detailedList = [
        {"Id":1,"Name":"Tomato Soup","Category":"Groceries","Price":1.0},
        {"Id":2,"Name":"Yo-yo","Category":"Toys","Price":3.75},
        {"Id":3,"Name":"Hammer","Category":"Hardware","Price":16.99}
    ];
    return ProductsData;
});

appStart.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function(marvin) {
        // $http() returns a $promise that we can add handlers with .then()
        return $http({
            method: 'GET',
            url: marvin
        });
    }
});

appStart.controller('AppStartCtrl', function($scope, ProductsData, dataService) {
    $scope.appStartVar = "Let's do this thing.";

    $scope.productsData = null;

    //var uri = "http://192.168.168.240/RestApp/api/products/1";
    var uri = "http://192.168.168.240/RestApp/api/products";
     dataService.getData(uri).then(function(dataResponse) {
     $scope.productsData = dataResponse;
     });
/*$scope.productsData = ProductsData.detailedList;*/
});
