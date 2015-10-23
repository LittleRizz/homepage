var app = angular.module("leagueARAM", [
	'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'aram/views/profile-page.html',
            title: 'Top Free Games',
            controller: 'ListChampionsController',
            controllerAs: 'PR'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);
