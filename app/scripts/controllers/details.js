'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('DetailsCtrl', function ($scope, $stateParams, $state, productsService, cartService) {

  	$scope.item = {};

  	function productDetails(response){
  		$scope.item = response;
  		$scope.total = Math.round($scope.quantity * $scope.item.price * 100) / 100;
  	}

    $scope.id = $stateParams.id;

    $scope.quantity = 1;

    $scope.$watch('quantity', function(){
    	if($scope.quantity === undefined){
    		$scope.quantity = 1;    		
    	}
    	if($scope.item.price !== undefined){    		
			$scope.total = Math.round($scope.quantity * $scope.item.price * 100) / 100;
    	}
    });

    $scope.fnAddtoCart = function(){
      $scope.item.cartId = new Date().getTime();
    	$scope.item.quantity = $scope.quantity;
    	$scope.item.total = $scope.total;
    	cartService.addToCart($scope.item);
    	$state.go('cart');
    };

    $scope.fnGotoMainPage = function(){
    	$state.go('home');
    };

    productsService.getItem($scope.id,productDetails);
    
  });
