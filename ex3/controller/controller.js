"use strict";
var app = angular.module('App2',[]);
app
	.controller('App2Ctr', function ($scope){
		$scope.myData = {};
		$scope.myData.printText = function(){
			return "Hello word";
		};
		$scope.myData.show = true;
		$scope.myData.clickShowHide = function(show){
			if (show) {
				$scope.myData.show=false;
			}
			else {
				$scope.myData.show=true;
			}
		};
		$scope.myData.switchData = 1;
		
		$scope.myData.changeData = function(data){
			console.log(data);
		};

		$scope.datas = ['1','2','3'];
		$scope.listObject = [
			{name : "Vang Ngo",age : 26},
			{name : "Nhan Dinh",age : 24},
			{name : "Tinh Pham",age : 23}
		];
		// filter age > 23
		$scope.filterList = function (object){
			if(object.age > 23)
				return true;
			return false;
		};
		$scope.myData.items = [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
		$scope.sortFeild = "text";
		$scope.reverse = true;
	});
