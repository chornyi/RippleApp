'use strict';

/* Controllers */

var controllerModule = angular.module('rippleApp.controllers', []);

controllerModule.controller('RippleController', function ($scope, rippleService) {

    function init() {
        $scope.transactions = new kendo.data.DataSource({
            pageSize: 20
        });

        $scope.ledger = null;
    }

    init();

    rippleService.onTransactionUpdate(function (data) {
        if (data && data.transaction && data.transaction.date) {
            data.transaction.date = new Date(data.transaction.date * 1000);
        }
        $scope.transactions.add(data);
    });

    rippleService.onLedgerUpdate(function (data) {
        $scope.ledger = data;
    });
});

controllerModule.controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
