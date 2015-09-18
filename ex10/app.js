'use strict';
var app = angular.module('App10',['ngRoute']);
app.
	config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'pages/home/home.html',
				controller: 'homeController'
			})
			.when('/about',{
				templateUrl: 'pages/about/about.html',
				controller: 'aboutController'
			})
			.when('/contact',{
				templateUrl: 'pages/contact/contact.html',
				controller: 'contactController'
			});
	});