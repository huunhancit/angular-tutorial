app
	.controller('App12Ctr',function($scope, $window){
		$scope.rating = 5;
		$scope.saveRatingToServer = function(rating){
			$window.alert('Rating selected - '+ rating);
		};
	});