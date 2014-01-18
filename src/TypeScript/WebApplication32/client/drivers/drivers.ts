module MyApp.drivers {
   
    class driversController implements IDriversModel {

        drivers: Array<IDriver>;
        teamName: string;
        name: string;

        filteredDrivers(): Array<IDriver> {
            return this.drivers.filter(driver => {
                var nameRx = new RegExp(this.name, "i"),
                    teamNameRx = new RegExp(this.teamName, "i");

                return (!this.teamName || teamNameRx.test(driver.teamName))
                    && (!this.name || nameRx.test(driver.firstName + " " + driver.lastName));
            });
        }

        constructor(routeParams: IDriverRouteParams, gravatar: utils.IGravatarService) {
            var model = this;

            model.teamName = routeParams.teamName;

            model.drivers = [
                { id: 1, firstName: "Damian", lastName: "Edwards", teamName: "BMW", points: 120, image: gravatar.url("damian@damianedwards.com") },
                { id: 2, firstName: "Eilon", lastName: "Lipton", teamName: "BMW", points: 90, image: null },
                { id: 3, firstName: "Scott", lastName: "Hunter", teamName: "Corvette", points: 105, image: gravatar.none },
                { id: 4, firstName: "David", lastName: "Fowler", teamName: "Lexus", points: 55, image: gravatar.url("davidfowl@gmail.com") }
            ];
        }
    }

    // Register the controller with angular
    driversModule.controller("MyApp.drivers.controller", [
        "$routeParams",
        "MyApp.utils.IGravatarService",
        driversController
    ]);
} 