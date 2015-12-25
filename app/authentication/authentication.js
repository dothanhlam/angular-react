/**
 * Created by LamDo on 12/20/15.
 */
'use strict';

angular.module('myApp.authentication', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/authentication', {
            templateUrl: 'authentication/authentication.html',
            controller: 'AuthenticationController'
        });
    }]);