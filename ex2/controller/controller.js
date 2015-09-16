var app = angular.module('App3',[]);
app
	.controller('App3Ctr',function($scope){
		$scope.data = {};
		$scope.data.clickButton = function(){
			alert('Hello Nhan Dinh');
		}
		$scope.click2 = function(event){
			alert('Clicked:' + event.clientX + ', ' + event.clientY);
		};
		$scope.data.versions = [{nameVersion: 1},{nameVersion: 2},{nameVersion: 3},{nameVersion: 4},{nameVersion: 5}];
		$scope.click3 = function(version,event){
			alert('Version: '+ version.nameVersion);
		}
	});