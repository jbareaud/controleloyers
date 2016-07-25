(function() {

    'use strict';

    angular.module('controledesloyers.loyers', [])

        .service('loyersService', ['dataService', function (dataService) {

            // source des données : https://www.observatoire-des-loyers.fr/sites/default/files/olap_documents/donnees_annees/Medianes%20plus%20de%2050%20obs-diffusion%20site.pdf

            var correspondances = {};
            dataService.correspondances().then(function (response) {
                angular.extend(correspondances, response.data);
            });

            var loyers = {};
            dataService.loyers().then(function (response) {
                angular.extend(loyers, response.data);
            });

            function isNotDefined(zone, appartement)  {
              return !zone
                  || !appartement.nbPieces
                  || !appartement.nbPieces.id
                  || !appartement.epoque
                  || !appartement.epoque.id
                  || !loyers[zone]
                  || !loyers[zone][appartement.nbPieces.id]
                  || !loyers[zone][appartement.nbPieces.id][appartement.epoque.id];
            };

            this.isVisible = function (quartier, appartement) {
              var zone = correspondances[quartier];
              if (isNotDefined(zone, appartement)) return false;
              else return true;
            };

            this.calculLoyer = function (quartier, appartement) {
              var zone = correspondances[quartier];
              if (isNotDefined(zone, appartement)) return 0;
              return loyers[zone][appartement.nbPieces.id][appartement.epoque.id];
            };

        }]);

})();
