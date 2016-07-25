(function() {

  'use strict';

  angular.module('controledesloyers', [
    'ngRoute',
    'controledesloyers.criteria',
    'controledesloyers.search',
    'controledesloyers.adresse',
    'controledesloyers.carte',
    'controledesloyers.partenaires',
    'controledesloyers.geo',
    'controledesloyers.loyers',
    'controledesloyers.data',
    'uiGmapgoogle-maps',
     'ui.bootstrap'
  ])

  .config(function($httpProvider) {
    // permettre le caching en particulier pour les fichier data/data*.json
    $httpProvider.defaults.cache = true;
  })

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/search'});
  }]);

})();
