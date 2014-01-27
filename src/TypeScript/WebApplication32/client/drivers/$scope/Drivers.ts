/// <reference path="_module.ts" />

module MyApp.Drivers.UsingScope {
   
    class DriversController {

        constructor($scope: IDriversScope, routeParams: IDriverRouteParams, driversService: IDriversService) {
            $scope.teamName = routeParams.teamName;
            $scope.name = "";
            $scope.drivers = driversService.getAllDrivers();
            $scope.driverFilter = function (driver: IDriver) {
                var nameRx = new RegExp($scope.name, "i"),
                    teamNameRx = new RegExp($scope.teamName, "i");

                return (!$scope.teamName || teamNameRx.test(driver.teamName))
                    && (!$scope.name || nameRx.test(driver.firstName + " " + driver.lastName));
            };
        }
    }

    // #region ##Compiler generated##
    // Register the controller with angular
    _module.controller("MyApp.Drivers.UsingScope.DriversController", [
        "$scope",
        "$routeParams",
        "MyApp.Drivers.IDriversService",
        DriversController
    ]);
    // #endregion
} 