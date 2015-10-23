var app = angular.module("leagueARAM", [
	'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/aram/views/aram-pvp.html',
            title: 'Home',
            controller: 'ARAMController',
            controllerAs: 'AC'
        })
        .when('/profile', {
            templateUrl: '/static/aram/views/profile-page.html',
            title: 'Top Free Games',
            controller: 'ListChampionsController',
            controllerAs: 'PR'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);
