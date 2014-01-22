module MyApp.Drivers.ControllerAs {
   
    class DriversController implements IDriversModel {

        constructor(routeParams: IDriverRouteParams, driversService: IDriversService) {
            var model = this;

            model.teamName = routeParams.teamName;
            
            model.drivers = driversService.getAllDrivers();

            // #region ##Compiler generated##
            //         Capture the instance for each public method as 'this'
            model.driverFilter = this.driverFilter.bind(this); // This is ES5 only
            //var tempF = model.driverFilter; // For ES3
            //var tempThis = this;
            //model.driverFilter = function (d) {
            //    return tempF.apply(tempThis, [d]);
            //};
            // #endregion
        }

        public drivers: Array<IDriver>;

        public teamName: string;

        public name: string;

        public driverFilter(driver:IDriver) {
            var nameRx = new RegExp(this.name, "i"),
                teamNameRx = new RegExp(this.teamName, "i");

            return (!this.teamName || teamNameRx.test(driver.teamName))
                && (!this.name || nameRx.test(driver.firstName + " " + driver.lastName));
        }

    }

    // #region ##Compiler generated##
    // Register the controller with angular
    _module.controller("MyApp.Drivers.ControllerAs.DriversController", [
        "$routeParams",
        "MyApp.Drivers.IDriversService",
        DriversController
    ]);
    // #endregion
} 