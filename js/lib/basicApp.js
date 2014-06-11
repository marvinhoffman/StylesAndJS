/**
 * Created by mhoffman on 5/10/14.
 */

var basicApp = angular.module("basicApp",[]);

var basicCtrl = basicApp.controller("basicCtrl", function($scope) {
    $scope.visitCount = 2 + 5;
});