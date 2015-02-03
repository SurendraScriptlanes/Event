'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ui.router',
  'ui.calendar'

])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
          .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            controller:'LoginCtrl'
          })
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller:'LoginCtrl'
            })
    });
