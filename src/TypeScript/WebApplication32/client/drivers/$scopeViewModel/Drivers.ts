module MyApp.Drivers.UsingScopeViewModel {
   
    class DriversController {

        constructor($scope: IDriversScope, routeParams: IDriverRouteParams, driversService: IDriversService) {
            var vm: IDriversViewModel;

            vm = {
                teamName: routeParams.teamName,

                name: "",

                drivers: driversService.getAllDrivers(),

                driverFilter: function (driver: IDriver) {
                    var nameRx = new RegExp(vm.name, "i"),
                        teamNameRx = new RegExp(vm.teamName, "i");

                    return (!vm.teamName || teamNameRx.test(driver.teamName))
                        && (!vm.name || nameRx.test(driver.firstName + " " + driver.lastName));
                }
            };

            $scope.viewModel = vm;
        }
    }

    // #region ##Compiler generated##
    // Register the controller with angular
    _module.controller("MyApp.Drivers.UsingScopeViewModel.DriversController", [
        "$scope",
        "$routeParams",
        "MyApp.Drivers.IDriversService",
        DriversController
    ]);
    // #endregion
} 