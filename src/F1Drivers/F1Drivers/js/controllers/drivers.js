/* global angular:false */
(function () {
    "use strict";

    var controllersModule = angular.module("F1FeederApp.controllers"),
        controllerName = "drivers";

    controllersModule.controller(controllerName, [

        // Dependencies
        "$scope",
        "ergastAPI",

        // Constructor function
        function ($scope, ergastAPI) {
            $scope.nameFilter = null;
            $scope.driversList = [];

            $scope.searchFilter = function (driver) {
                var keyword = new RegExp($scope.nameFilter, "i");
                return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
            };

            ergastAPI.getDrivers().success(function (response) {
                // Dig into the responde to get the relevant data
                $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            });
        }
    ]);

}());