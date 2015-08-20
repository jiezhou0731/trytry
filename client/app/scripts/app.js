'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://141.161.20.98/mongodb');

    $routeProvider
      .when('/', {
        templateUrl: '/mean/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/mean/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: '/mean/views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/create/movie', {
        templateUrl: '/mean/views/movie-add.html',
        controller: 'MovieAddCtrl'
      })
      .when('/movie/:id', {
        templateUrl: '/mean/views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .when('/movie/:id/edit', {
        templateUrl: '/mean/views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .when('/movie/:id/delete', {
        templateUrl: '/mean/views/movie-delete.html',
        controller: 'MovieDeleteCtrl'
      })
      .when('/about', {
        templateUrl: '/mean/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: '/mean/views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
