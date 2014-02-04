'use strict';

/* Controllers */

var controllerModule = angular.module('myApp.controllers', []);

controllerModule.controller('LedgerController', function ($scope, rippleService) {

    function init() {
        $scope.transactions = [];
        $scope.ledger = null;
    }

    init();

    rippleService.onTransactionUpdate(function (data) {
        $scope.transactions.push(data);
    });

    rippleService.onLedgerUpdate(function (data) {
        $scope.ledger = data;
    });
});
