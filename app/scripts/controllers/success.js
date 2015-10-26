'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:SuccessCtrl
 * @description
 * # SuccessCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('SuccessCtrl', function ($scope, $state, cartService) {

  	cartService.cartData = [];

  	$scope.confirmationNumber = Math.round(Math.random()*10000000000);

  	$scope.fnGotoMainPage = function(){
  		$state.go('home');
  	};

  });