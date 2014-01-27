/// <reference path="_module.ts" />

module MyApp.Drivers {

    class DriversService implements IDriversService {
        private static _drivers:Array<IDriver>;

        private _gravatar: MyApp.Utils.IGravatarService;

        constructor(gravatar: MyApp.Utils.IGravatarService) {
            this._gravatar = gravatar;
        }

        public getAllDrivers() {
            if (!DriversService._drivers) {
                this.initializeData();
            }

            return DriversService._drivers;
        }

        private initializeData() {
            DriversService._drivers = [
                { id: 1, firstName: "Damian", lastName: "Edwards", teamName: "BMW", points: 120, image: this._gravatar.url("damian@damianedwards.com") },
                { id: 2, firstName: "Eilon", lastName: "Lipton", teamName: "BMW", points: 90, image: null },
                { id: 3, firstName: "Scott", lastName: "Hunter", teamName: "Corvette", points: 105, image: this._gravatar.none },
                { id: 4, firstName: "David", lastName: "Fowler", teamName: "Lexus", points: 55, image: this._gravatar.url("davidfowl@gmail.com") }
            ];
        }
    }

    // #region ##Compiler generated##
    // Register the service with angular
    _module.service("MyApp.Drivers.IDriversService", ["MyApp.Utils.IGravatarService", DriversService]);
    // #endregion
} 