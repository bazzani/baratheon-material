'use strict';

(function(){
	var app = angular.module('eventsApp', ['ui.router', 'firebase', 'ngAnimate', 'ngAria', 'ngMaterial']);
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl'
		})
		.state('home.detail', {
			url: '/',
			templateUrl: 'app/views/home.detail.html',
			controller: 'DetailController'
		})
		.state('home.events', {
			url: '/',
			templateUrl: 'app/views/home.events.html',
			controller: 'EventsController'
		})
		.state('home.other', {
			url: '/',
			templateUrl: 'app/views/home.other.html',
			controller: 'OtherController'
		});

		$urlRouterProvider.otherwise('/');
		
	}])

	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('pink')
			.accentPalette('orange');
	});



	////controller as syntax
	//app.controller('SampleController', function(){
	//	this.welcome = 'Welcome to the first AngularJS workshop.'
	//});
    //
	//app.controller("SecondController", function($scope){
	//	$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	//});

})();


