var app = angular.module("myHomepage", [
	'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/mainpage/views/aboutme.html',
            title: 'Home',
            controller: 'MainController',
            controllerAs: 'MC'
        })
        .when('/resume', {
            templateUrl: '/static/mainpage/views/resume.html',
            title: 'Ruselowski Resume',
            controller: 'ResumeController',
            controllerAs: 'RC'
        })
        .when('/projects', {
            templateUrl: '/static/mainpage/views/projects.html',
            title: 'Past and Current Projects',
            controller: 'ProjectsController',
            controllerAs: 'PC'
        })
        .when('/blog', {
            templateUrl: '/static/mainpage/views/blog.html',
            title: 'The Blog',
            controller: 'BlogController',
            controllerAs: 'BC'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);