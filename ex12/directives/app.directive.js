app
	.directive('star',function(){
		return {
			restrict: 'A',
			templateUrl: 'template/app12.html',
			scope: {
				ratingValue: '=',
				max: '=',
				readonly: '@',
				onRatingSelected: '&'
			},
			link: function(scope, elem, attrs){
				var updateStars = function(){
					scope.stars = [];
					for(var i = 0;i < scope.max ; i++){
						scope.stars.push({ filled: i <scope.ratingValue });
					}
				};
				scope.toggle = function(index){
					if(scope.readonly && scope.readonly==='true'){
						return;
					}
					scope.ratingValue = index + 1;
					scope.onRatingSelected({rating : index + 1});
				};
				scope.$watch('ratingValue',function(oldVal, newVal){
					if(newVal){
						updateStars();
					}
				});
			}
		};
	});