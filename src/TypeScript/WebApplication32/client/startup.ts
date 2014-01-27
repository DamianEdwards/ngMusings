/// <reference path="../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../bower_components/dt-angular/angular-route.d.ts" />

module MyApp {

    class Startup {
        private _routeProvider: ng.route.IRouteProvider;

        constructor(routeProvider: ng.route.IRouteProvider) {
            this._routeProvider = routeProvider;
        }

        public configuration() {
            this._routeProvider
                .when("/drivers-$scope", { templateUrl: "client/drivers/$scope/drivers.cshtml" })
                .when("/drivers-$scopeViewModel", { templateUrl: "client/drivers/$scopeViewModel/drivers.cshtml" })
                .when("/drivers-controllerAs", { templateUrl: "client/drivers/controllerAs/drivers.cshtml" })
                .otherwise({ redirectTo: "/drivers-$scope" });
        }
    }
    
    // #region ##Compiler generated##
    // Register the application module with AngularJS
    var _app = angular.module("MyApp", [
        // Dependencies
        "ngRoute",
        "MyApp.Drivers",
        "MyApp.Drivers.UsingScope",
        "MyApp.Drivers.UsingScopeViewModel",
        "MyApp.Drivers.ControllerAs",
        "MyApp.Utils"
    ]);

    _app.config([
        // Dependencies
        "$routeProvider",

        // Config method
        function ($routeProvider) {
            new Startup($routeProvider).configuration();
        }
    ]);
    // #endregion
}