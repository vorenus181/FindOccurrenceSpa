(function () {
    angular
        .module('FindOccurrences', ['ngRoute'])
        .config(configure)
        .factory('logger', logger);


    function logger() {
        return {
            logError: function (msg) {
                console.log(msg);
            }
        }
    }

    function configure($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
                templateUrl: './app/occurrences/occurrences.html',
                controller: 'OccurrencesController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})();