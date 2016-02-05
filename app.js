/*global angular */

var mainApp = angular.module('mainApp', []);


mainApp.controller('mainController', function ($scope, $log) {
    "use strict";
    $scope.showDiv = false;
    
    $scope.resumeShow = function () {
        $scope.showDiv = !$scope.showDiv;
    };
        
});