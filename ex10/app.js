'use strict';
var app = angular.module('App10',['ngRoute']);
app.
	config(function($routeProvider){
		$routeProvider
			.when('/',{
				title: 'Home',
				templateUrl: 'pages/home/home.html',
				controller: 'homeController'
			})
			.when('/about',{
				title: 'About',
				templateUrl: 'pages/about/about.html',
				controller: 'aboutController'
			})
			.when('/contact',{
				title: 'Contact',
				templateUrl: 'pages/contact/contact.html',
				controller: 'contactController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
