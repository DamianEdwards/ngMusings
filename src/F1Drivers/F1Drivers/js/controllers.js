/* global angular:false */
(function () {
    "use strict";

    var name = "F1FeederApp.controllers";

    angular.module(name, []);
}());
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
