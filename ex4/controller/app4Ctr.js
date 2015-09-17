var app = angular.module('App4',[]);
app
	.controller('app4Ctr', function($scope){
		$scope.title="Angular JS Tutorial Example";
		$scope.searchInput = '';
		$scope.shows = [
		{
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
		];
		$scope.orders=[
		{
			id: 1,
			title: 'Year Ascending',
			key: 'year',
			reverse: false
		},
		{
			id: 2,
			title: 'Year Descending',
			key: 'year',
			reverse: true
		},
		{
			id: 3,
			title: 'Title Ascending',
			key: 'title',
			reverse: false
		},
		{
			id: 4,
			title: 'Title Descending',
			key: 'title',
			reverse: true
		}
		];
		$scope.newShow={};
		$scope.addShow = function (){
			$scope.shows.push($scope.newShow);
			$scope.newShow={};	
		}
	});