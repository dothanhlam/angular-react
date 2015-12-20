'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.data = [];

        $scope.clickHandler = function () {
            console.log("in AngularJS");
        }
        $scope.refresh = function () {
            for (var i = 0; i < 10; ++i) {
                $scope.data[i] = {};
                for (var j = 0; j < 5; ++j) {
                    $scope.data[i][j] = Math.random();
                }
            }
        }
        $scope.refresh()

    }]);