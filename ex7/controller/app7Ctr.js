app
	.controller('app7Ctr', function($scope){
		$scope.firstName = "Dinh";
		$scope.lastName = "Nhan";
		$scope.email = "dhnhan@tma.com.vn";
		$scope.reset = function(){
			$scope.firstName = "Dinh";
			$scope.lastName = "Nhan";
			$scope.email = "dhnhan@tma.com.vn";
		};
	});