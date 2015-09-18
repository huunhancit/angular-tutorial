app
	.config(function($stateProvider){
		$stateProvider
			.state('home.detail',{
				url:'/homedetail',
				templateUrl: 'views/home/detail-home.html',
				controller: 'HomeDetailController'
			});
	});