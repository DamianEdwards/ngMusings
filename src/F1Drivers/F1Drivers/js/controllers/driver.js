/* global angular:false */
(function () {
    "use strict";

    var controllersModule = angular.module("F1FeederApp.controllers"),
        controllerName = "driver";

    controllersModule.controller(controllerName, [

        // Dependencies
        "$scope",
        "$routeParams",
        "ergastAPI",

        // Constructor function
        function ($scope, $routeParams, ergastAPI) {
            $scope.id = $routeParams.id;
            $scope.races = [];
            $scope.driver = null;

            ergastAPI.getDriverDetails($scope.id).success(function (response) {
                $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            });

            ergastAPI.getDriverRaces($scope.id).success(function (response) {
                $scope.races = response.MRData.RaceTable.Races;
            });
        }
    ]);

}());