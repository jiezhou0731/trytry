var app = angular.module('dumplingApp',['ngSanitize','ngMaterial','ngRoute','restangular']).config(function($mdIconProvider) {
  $mdIconProvider
  .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
  .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
});


app.config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://141.161.20.98/mongodb');

    $routeProvider
      .when('/', {
        templateUrl: '/mean/app/view/client/index.html'
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
  .factory('AppleEventRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('AppleEvent', function(AppleEventRestangular) {
    return AppleEventRestangular.service('appleEvent');
  });