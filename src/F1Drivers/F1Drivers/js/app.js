/* global angular:false */
(function () {
    "use strict";
    
    var appModuleName = "F1FeederApp";

    // Declare app level module which depends on filters, and services
    angular
        .module(appModuleName, [
            // Dependencies
            "ngRoute",
            "F1FeederApp.services",
            "F1FeederApp.controllers"
        ])
        .config([
            // Dependencies
            "$routeProvider",

            // Config method
            function ($routeProvider) {
                $routeProvider
                    .when("/drivers", { templateUrl: "partials/drivers.cshtml", controller: "drivers" })
                    .when("/drivers/:id", { templateUrl: "partials/driver.cshtml", controller: "driver" })
                    .otherwise({ redirectTo: "/drivers" });
            }
        ]);
}());