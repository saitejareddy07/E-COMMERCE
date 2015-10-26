'use strict';

angular.module('eCommerceApp')
  .filter('imageURL', function () {
  	return function(input){
  		if(input < 10){
  			return 'images/0'+input+'.jpeg';
  		}else{
  			return 'images/'+input+'.jpeg';
  		}
  	};
  });