(function() {

    'use strict';

    angular.module('controledesloyers.data', [])

    .service('dataService', ['$http', function ($http) {

        var data = {};

        data.correspondances = function() {
          return $http.get('/data/data_corr.json');
        };

        data.loyers = function() {
          return $http.get('/data/data_loyers.json');
        };

        data.quartiers = function() {
          return $http.get('/data/data_quartiers.json');
        };

        return data;

    }]);

})();
