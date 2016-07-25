(function() {

  'use strict';

  angular.module('controledesloyers.carte', ['ngRoute'])  // 'uiGmapgoogle-maps'

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/carte', {
      templateUrl: 'pages/carte/carte.html',
      controllerAs : 'carteVm',
      controller: 'CarteCtrl'
    });
  }])

  .controller('CarteCtrl', ['$location', '$http', 'geoService', 'criteriaService', 'loyersService', 'dataService',
        function($location, $http, geoService, criteriaService, loyersService, dataService) {

    var carteVm = this,
      fillColorRed = { color: '#ff0000', opacity: 0.2 },
      fillColorGreen = { color: '#ffff00', opacity: 0.2 };

    carteVm.result = null;
    carteVm.map = {};
    carteVm.options = {};
    carteVm.marker = null;

    activate();

    function activate() {
      angular.extend(carteVm.map, defaultMapOptions());
      createMarkerIfAdresseSelected();
      populateGmapWithPolygons();
    };

    function defaultMapOptions() {
      return   {
          center: { latitude: 48.858333, longitude: 2.294167 },
          zoom: 14,
          refresh: false,
          polys: [],
          polyEvents: {
            click: function (gPoly, eventName, polyModel) {
              $location.url('/partenaires');
            },
            mouseover:function (gPoly, eventName, polyModel) {
              carteVm.result = loyersService.calculLoyer(polyModel.id, criteriaService.appartement);
            }
          },
          options : {
            stroke: {
              color: '#6060FB',
              weight: 3
            },
            editable: true,
            draggable: true,
            static: true,
            geodesic: false,
            fit: false,
            visible: true,
            fill: function(polyModel) {
              if (loyersService.isVisible(polyModel.id, criteriaService.appartement)) return fillColorGreen;
              else return fillColorRed;
            }
          }
        };
    };

    function createMarkerIfAdresseSelected() {
      if (criteriaService.adresseComplete.geometry.location) {
        var latitude = criteriaService.adresseComplete.geometry.location.lat;
        var longitude = criteriaService.adresseComplete.geometry.location.lng;
        carteVm.marker = {
          id : 0,
          coords: {
            latitude: latitude,
            longitude: longitude
          },
          options: { label : '' }
        };
        carteVm.map.center.latitude = latitude;
        carteVm.map.center.longitude = longitude;
      }
    };

    function populateGmapWithPolygons() {
      geoService.initMap().then(function () {
        dataService.quartiers().then(function (response) {
          angular.forEach(response.data, function (value, key) {
            this.push(value);
          }, carteVm.map.polys);
        });
      });
    };

  }]);

})();
