(function() {

    'use strict';

    angular.module('controledesloyers.partenaires', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/partenaires', {
            templateUrl: 'pages/partenaires/partenaires.html',
            controllerAs : 'partenaireVm',
            controller: 'PartenairesCtrl'
        });
    }])

    .controller('PartenairesCtrl', ['$scope', '$location', 'criteriaService', function($scope, $location, criteriaService) {

        var partenaireVm = this;


    }]);

})();