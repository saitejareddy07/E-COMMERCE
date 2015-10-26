'use strict';

/**
 * @ngdoc function
 * @name eCommerceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eCommerceApp
 */
angular.module('eCommerceApp')
  .controller('MainCtrl', function ($scope, $state, productsService) {

    $scope.items = [];

    $scope.categories = [];

    // $scope.cartCount = cartService.cartData.length;

    $scope.active = {
    	category: ''
    };

    $scope.fnFilterbyCategory = function(category){
    	$scope.active.category = category;
    };

    function receivedData(response){
    	$scope.items = response.data;
    	for (var i = 0; i < $scope.items.length; i++) {
    		if($scope.categories.indexOf($scope.items[i].category) === -1){
    			$scope.categories.push($scope.items[i].category);
    		}
    	}
    }

    function init(){
    	productsService.getProducts(receivedData);
    }

    $scope.fnGetDetails = function(id){
    	$state.go('details',{id:id});
    };

    init();

  });
	