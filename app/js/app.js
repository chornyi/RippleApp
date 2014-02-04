'use strict';


// Declare app level module which depends on filters, and services
angular.module('rippleApp', [
        'ngRoute',
        'rippleApp.filters',
        'rippleApp.services',
        'rippleApp.directives',
        'rippleApp.controllers',
        'kendo.directives',
        'ui.bootstrap'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/transactions', {templateUrl: 'partials/transactions.html', controller: 'RippleController'});
        $routeProvider.when('/ledger', {templateUrl: 'partials/ledger.html', controller: 'RippleController'});
        $routeProvider.otherwise({redirectTo: '/transactions'});
    }]);
