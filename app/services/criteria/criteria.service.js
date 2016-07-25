(function() {

    'use strict';

    angular.module('controledesloyers.criteria', [])

    .service('criteriaService', [function () {

        var criteria = {};

        criteria.appartement = {
            nbPieces : null,
            epoque : null
        };

        criteria.adresseComplete = {
            geometry : {
                location : null
            },
            place_id : null,
            formatted_address : null
        };

        return criteria;
    }]);

})();
