/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />

module MyApp {
    var myAppModule = angular.module("MyApp", [
        // Dependencies
        "ngRoute",
        "MyApp.drivers",
        "MyApp.utils"
    ]);
     
    myAppModule.config([
        // Dependencies
        "$routeProvider",

        // Config method
        function ($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/drivers", { templateUrl: "client/drivers/drivers.cshtml" })
                .otherwise({ redirectTo: "/drivers" });
        }
    ]);

}