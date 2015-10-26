'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('CartCtrl', function ($scope, $state, cartService) {

  	$scope.products = cartService.cartData;

  	function calculateTotal(){
  		$scope.grandTotal = 0;
  		for (var i = 0; i < $scope.products.length; i++) {
	  		$scope.grandTotal += $scope.products[i].total;
	  	}
  	}
  	
  	calculateTotal();

  	$scope.fnGotoMainPage = function(){
    	$state.go('home');
    };

    $scope.fnEditOrder = function(product){
      $state.go('edit',{cartId: product.cartId});
    };

    $scope.fnRemoveFromCart = function(product){
    	cartService.removeItem(product);
  		$scope.products = cartService.cartData;
  		calculateTotal();
    };

  });
