'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('EditCtrl', function ($scope, $stateParams, $state, cartService) {

  	$scope.cartId = parseInt($stateParams.cartId);
  	$scope.product = cartService.getItem($scope.cartId);

  	$scope.$watch('product.quantity', function(){
  		$scope.product.total = Math.round($scope.product.quantity * $scope.product.price * 100)/100;
  	});

  	$scope.fnGotoMainPage = function(){
    	$state.go('home');
    };

    $scope.fnAddtoCart = function(){
    	cartService.addToCart($scope.product);
    	$state.go('cart');
    };

  });
