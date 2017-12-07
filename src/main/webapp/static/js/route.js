'use strict';
angular.module('clubApp').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "user.html"
    });
});