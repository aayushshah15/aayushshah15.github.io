/*global angular */

var mainApp = angular.module('mainApp', []);


mainApp.controller('mainController', function ($scope, $log, $anchorScroll, $location, $timeout) {
    "use strict";
    $scope.showDiv = false;
    $scope.intro = false;
    $scope.intro2 = false;
    $scope.intro3 = false;
    $scope.intro4 = false;
    $timeout(function () { $scope.intro = true; }, 4000);
    $timeout(function () { $scope.intro2 = true; }, 5000);
    $timeout(function () { $scope.intro3 = true; }, 7000);
    $timeout(function () { $scope.intro4 = true; }, 2000)
    $scope.resumeShow = function () {
        $scope.showDiv = !$scope.showDiv;
    };
    
    $scope.scrollDown = function () {
        $location.hash('bottom');
        $anchorScroll();
    };       
}); 