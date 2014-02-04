'use strict';

/* Services */

var serviceModule = angular.module('myApp.services', [])

serviceModule.factory('rippleService', function ($rootScope) {

    var serviceInstance = {};
    var remote;

    function init() {

        var Remote = ripple.Remote;

        remote = new Remote({
            // see the API Reference for available options
            trusted: true,
            local_signing: true,
            local_fee: true,
            fee_cushion: 1.5,
            servers: [
                {
                    host: 's1.ripple.com', port: 443, secure: true
                }
            ]
        });

        remote.connect();
    }

    serviceInstance.onTransactionUpdate = function(callback) {
        remote.on('transaction_all', function (data) {
            var args = arguments;
            $rootScope.$apply(function () {
                callback.apply(undefined, args);
            });
        });
    };

    serviceInstance.onLedgerUpdate = function(callback) {
        remote.on('ledger_closed', function (data) {
            var args = arguments;
            $rootScope.$apply(function () {
                callback.apply(undefined, args);
            });
        });
    };

    init();

    return serviceInstance;
});
