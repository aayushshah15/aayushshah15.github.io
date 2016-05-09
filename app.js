/*global angular */

var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/pages/about.html',
        controller: 'aboutController'
    })
    .when('/projects', {
        templateUrl: '/pages/projects.html',
        controller: 'projectController'
    })
    .when('/resume', {
        templateUrl: '/pages/resume.html',
        controller: 'resumeController'
    })
    .otherwise({
        templateUrl: '/pages/about.html',
        controller: 'aboutController'
    })
});

mainApp.controller('mainController', function ($scope, $log, $anchorScroll, $location, $timeout) {
    "use strict";
    $scope.show_resume = false;
    $scope.resume = function () {
        $scope.show_resume = !$scope.show_resume;
    }
    $scope.manage = function () {
        if ($scope.show_resume) {
            $scope.show_resume = !$scope.show_resume;
        }
    }
}); 

mainApp.controller('aboutController', function($scope, $log, $anchorScroll, $timeout){
    "use strict";
});

