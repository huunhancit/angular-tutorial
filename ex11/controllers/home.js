app
	.config(function($stateProvider){
		$stateProvider
			.state('logout',{
				url:'/logout',
				templateUrl: 'views/login.html'
			})
			.state('home.about',{
				url: '/about',
				templateUrl: 'views/about.html'
			})
			.state('home',{
				url:'/home',
				templateUrl: 'views/home.html'
			});
	});