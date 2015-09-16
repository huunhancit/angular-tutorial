"use strict";
app.
	filter('myFilter',function(){
		return function(input){
			return input.substring(0,3);
		};
	});
app
	.filter('filter1', function(){
		return function(input,start,end){
			return input.substring(parseInt(start),parseInt(end));
		};
	});
app
	.filter('filter2' ,function(){
		return function(items,key){
			var result = [];
			var letter = new RegExp(key,'i');
			for(var i=0;i<items.length;i++){
				var item = items[i];
				// check text begin with key
				if(letter.test(item.text.substring(0,1))){
					result.push(item);
				}
			}
			return result;
		};
	});