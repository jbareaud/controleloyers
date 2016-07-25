(function() {

    'use strict';

    angular.module('controledesloyers.search', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'pages/search/search.html',
            controllerAs : 'searchVm',
            controller: 'SearchCtrl'
        });
    }])

    .controller('SearchCtrl', ['$location', 'criteriaService', function($location, criteriaService) {

        var searchVm = this;

        searchVm.optionsNbPieces = [];
        searchVm.optionesEpoques= [];
        searchVm.nbPieces = null;
        searchVm.epoque = null;
        searchVm.poursuivre = poursuivre;

        activate();

        function activate() {
            searchVm.optionsNbPieces = [
                {libelle:'1', id:1},
                {libelle:'2', id:2},
                {libelle:'3', id:3},
                {libelle:'4+', id:4}
            ];
            searchVm.optionesEpoques= [
                {libelle:'< 1946', id:'inf1946'},
                {libelle:'1946-1970', id:'1946_1970'},
                {libelle:'1971-1990', id:'1971_1990'},
                {libelle:'> 1990', id:'sup1990'}
            ];
            searchVm.nbPieces = criteriaService.appartement.nbPieces;
            searchVm.epoque = criteriaService.appartement.epoque;
        };

        function poursuivre() {
            criteriaService.appartement.nbPieces = searchVm.nbPieces;
            criteriaService.appartement.epoque = searchVm.epoque ;
            $location.url('/adresse');
        };

    }]);

})();