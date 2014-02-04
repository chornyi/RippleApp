'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers',
        'kendo.directives',
        'ui.bootstrap'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/transactions', {templateUrl: 'partials/transactions.html', controller: 'RippleController'});
        $routeProvider.when('/ledger', {templateUrl: 'partials/ledger.html', controller: 'RippleController'});
        $routeProvider.otherwise({redirectTo: '/transactions'});
    }]);
