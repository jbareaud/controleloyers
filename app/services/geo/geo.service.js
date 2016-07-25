(function() {

    'use strict';

    angular.module('controledesloyers.geo', ['uiGmapgoogle-maps'])

    .constant('googleMapKey', 'AIzaSyBAw4VSa4JfisASG-204qtZyihvg217R14')

    .config(function(uiGmapGoogleMapApiProvider, googleMapKey) {
        uiGmapGoogleMapApiProvider.configure({
            key: googleMapKey,
            v: '3.20',
            libraries: 'weather,geometry,visualization,polygon'
        });
    })

    .service('geoService', ['$q', 'uiGmapGoogleMapApi', function ($q, uiGmapGoogleMapApi) {

        /* Page carte */

        this.initMap = function () {
            return uiGmapGoogleMapApi.then(function(maps) {
                console.log('API Google Map disponible');
            });
        };

        /* Page Adresse - requete geolocalisation inverse */

        function handle_reply (defer, results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                defer.resolve(results);
            } else if(status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                defer.resolve([]);
            } else if(status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                defer.reject("Over query limit");
            } else if(status === google.maps.GeocoderStatus.REQUEST_DENIED) {
                defer.reject("Request denied");
            } else {
                defer.reject("Unknown error");
            }
        };

        this.reverseGeocode = function (query) {
            return uiGmapGoogleMapApi.then(function (maps) {
                var defer = $q.defer();
                var geocoder = new maps.Geocoder();
                geocoder.geocode({address: query}, function(results, status) {
                    handle_reply(defer, results, status);
                });
                return defer.promise;
            });
        }

    }]);

})();
