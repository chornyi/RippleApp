'use strict';

/* Controllers */

var controllerModule = angular.module('myApp.controllers', []);

controllerModule.controller('LedgerController', function ($scope, rippleService) {

    function init() {
        $scope.transactions = new kendo.data.DataSource({
            "pageSize":10
        });
        $scope.ledger = null;
    }

    init();

    rippleService.onTransactionUpdate(function (data) {
        $scope.transactions.add(data);
    });

    rippleService.onLedgerUpdate(function (data) {
        $scope.ledger = data;
    });
});
