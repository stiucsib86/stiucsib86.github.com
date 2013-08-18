'use strict';

angular.module('GbinghanComApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/pages/about.html',
        controller: 'AboutCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/pages/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/pages/resume.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
