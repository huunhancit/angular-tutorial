app
	.controller('app6Ctr', function($scope){
		$scope.showAlert = function(){
			alert('Hello Nhan Dinh');
		}
		$scope.total = 0;
		
		$scope.clickTotal = function(){
			$scope.total +=1;
		}
	});