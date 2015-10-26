'use strict';

angular.module('eCommerceApp')
  .factory('cartService', function () {
    var service = {};
    service.cartData = [];  	
    service.addToCart = function(item){
    	service.cartData.push(item);
    };

    service.getItem = function(id){
        var i;
    	for (i = 0; i < service.cartData.length; i++) {
    		if(service.cartData[i].cartId === id){
    			break;
    		}
    	}
        var item = service.cartData[i];
        service.cartData.splice(i,1);
    	return item;
    };

    service.removeItem = function(product){
    	for (var i = 0; i < service.cartData.length; i++) {
    		if(service.cartData[i].cartId === product.cartId){
    			service.cartData.splice(i,1);
    			break;
    		}
    	}
    };

  	return service;
  });