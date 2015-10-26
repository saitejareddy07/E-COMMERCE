'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('HeaderCtrl', function ($scope, $state) {

  	$scope.fnOpenCart = function(){
  		$state.go('cart');
  	};

  	$scope.navigateToHome = function(){
  		$state.go('home');
  	};

  });