angular
	.module("ResumeApp")
	.config(ResumeCfg);

ResumeCfg.$inject = ["$routeProvider"];

function ResumeCfg($routeProvider) {
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
};