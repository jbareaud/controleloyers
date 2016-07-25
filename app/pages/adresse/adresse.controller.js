(function() {

  'use strict';

  angular.module('controledesloyers.adresse', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/adresse', {
      templateUrl: 'pages/adresse/adresse.html',
      controllerAs : 'adresseVm',
      controller: 'AdresseCtrl'
    });
  }])

  .controller('AdresseCtrl', ['$location', 'geoService', 'criteriaService', function($location, geoService, criteriaService) {

    var adresseVm = this;

    adresseVm.reverseGeocode = reverseGeocode;
    adresseVm.format = format;
    adresseVm.poursuivre = poursuivre;

    function reverseGeocode (query) {
      return geoService.reverseGeocode(query);
    };

    function format (val) {
      if(!angular.isObject(val) || !val.hasOwnProperty("formatted_address")) return;
        return val.formatted_address;
    };

    function poursuivre () {
      angular.extend(criteriaService.adresseComplete,
          {
            geometry : {
              location : {
                lat : adresseVm.out.geometry.location.lat(),
                lng : adresseVm.out.geometry.location.lng()
              }
            }
          }
      );
      if (adresseVm.out.place_id){
        angular.extend(criteriaService.adresseComplete,
            { place_id : adresseVm.out.place_id }
        );
      }
      if (adresseVm.out.formatted_address){
        angular.extend(criteriaService.adresseComplete,
            { formatted_address : adresseVm.out.formatted_address }
        );
      }
      $location.url('/carte');
    }

  }]);

})();