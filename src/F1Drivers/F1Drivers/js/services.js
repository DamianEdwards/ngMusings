/* global angular:false */
(function () {
    "use strict";

    var name = "F1FeederApp.services";

    angular.module(name, []);
}());
/* global angular:false */
(function () {
    "use strict";

    var servicesModule = angular.module("F1FeederApp.services"),
        serviceName = "ergastAPI";

    servicesModule.factory(serviceName, [

        // Dependencies
        "$http",
        "$cacheFactory",
        "$log",

        // Factory method
        function ($http, $cacheFactory, $log) {
            var cache = $cacheFactory(serviceName, { capacity: 50 }),
                cacheTimeout = 60 * 1000; // 60s

            function cachedJsonp(cacheKey, url) {
                var result = cache.get(cacheKey),
                    now = new Date();

                if (result && (now - result._retrievedAt < cacheTimeout)) {
                    // Return cached result
                    $log.info(serviceName + ": Result from cache for " + url);
                    return result;
                }

                result = $http({
                    method: "JSONP",
                    url: url
                });

                result._retrievedAt = now;

                cache.put(cacheKey, result);

                $log.info(serviceName + ": Result from calling " + url);
                return result;
            }

            return {
                getDrivers: function () {
                    return cachedJsonp("getDrivers", "http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK");
                },

                getDriverDetails: function (id) {
                    return cachedJsonp("getDriverDetails." + id, "http://ergast.com/api/f1/2013/drivers/" + id + "/driverStandings.json?callback=JSON_CALLBACK");
                },

                getDriverRaces: function (id) {
                    return cachedJsonp("getDriverRaces." + id, "http://ergast.com/api/f1/2013/drivers/" + id + "/results.json?callback=JSON_CALLBACK");
                }
            };
        }
    ]);

}());

/* global angular:false */
(function () {
    "use strict";

    var name = "version";

    angular.module("F1FeederApp.services")
        .value(name, "0.1");

}());