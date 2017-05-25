var animateApp = angular.module('animateApp', [ 'ngRoute', 'ngAnimate' ]);

animateApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
				templateUrl: "views/about-view.html"
			})
			.when('/resume', {
				templateUrl: "views/resume-view.html"
			})
			.when('/achievements', {
				templateUrl: "views/achievements-view.html"
			})
			.when('/bootcamp', {
				templateUrl: "views/bootcamp-view.html"
			})
			.when('/contact', {
				templateUrl: "views/contact-view.html"
			})
			.otherwise('/', {
				ridirectTo: '/'
			});
});

animateApp.controller('aboutController', function($scope) {
	$scope.pageClass = 'views/about-view';
});

animateApp.controller('resumeController', function($scope) {
	$scope.pageClass = 'views/resume-view';
});

animateApp.controller('achievementsController', function($scope) {
	$scope.pageClass = 'views/achievements-view';
});

animateApp.controller('bootcampController', function($scope) {
	$scope.pageClass = 'views/bootcamp-view';
});

animateApp.controller('contactController', function($scope) {
	$scope.pageClass = 'views/contact-view';
});