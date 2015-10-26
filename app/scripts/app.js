'use strict';

/**
 * @ngdoc overview
 * @name eCommerceApp
 * @description
 * # eCommerceApp
 *
 * Main module of the application.
 */
angular
  .module('eCommerceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
    
    // Setting up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'        
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'        
      })
      .state('edit', {
        url: '/edit/:cartId',
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'        
      })
      .state('success', {
        url: '/success',
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl'        
      });
  });
