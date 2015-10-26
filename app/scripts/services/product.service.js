'use strict';

angular.module('eCommerceApp')
  .factory('productsService', function ($http) {
    var service = {};
  	service.getProducts = function(callback){
			$http({
			  method: 'GET',
			  url: 'fixtures/products.json'
			}).then(function successCallback(response) {
			  callback(response);
		  }, function errorCallback() {
		    var data = {
		    	data: []
		    };
		    callback(data);
		  });  			
  	};

  	service.getItem = function(id, callback){
  		$http({
			  method: 'GET',
			  url: 'fixtures/products.json'
			}).then(function successCallback(response) {
				var i;
				for (i = 0; i < response.data.length; i++) {
					if(response.data[i].id === parseInt(id)){
						break;
					}
				}
			  callback(response.data[i]);
		  }, function errorCallback() {
		    var data = [];
		    callback(data);
		  });
  	};

  	return service;
  });
