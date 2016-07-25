'use strict';

describe('controledesloyers.carte module', function() {

  beforeEach(module('controledesloyers.carte'));

  // http://stackoverflow.com/questions/23705051/how-do-i-mock-a-service-that-returns-promise-in-angularjs-jasmine-unit-test
  //http://www.bradoncode.com/blog/2015/07/13/unit-test-promises-angualrjs-q/

  beforeEach(function () {
    module(function ($provide) {  // $q
      /*
      $provide.value('geoService', {
        initMap : function () {
          var deferred = $q.defer();
          deferred.resolve({});   // TODO data
          return deferred.promise;
        }
      });
      */
      $provide.value('criteriaService', {
        adresseComplete : {
          geometry : {}
        }
      });
      $provide.value('loyersService', {});
    });
  });

  /*
  beforeEach(inject(function ($controller) {
    var CarteCtrl = $controller('CarteCtrl', {});
  }));
  */

  describe('carte controller', function(){

    var $scope;
    var $q;
    var deferred;

    beforeEach(module('initMap'));

    beforeEach(inject(function($controller, _$rootScope_, _$q_, geoService) {
      $q = _$q_;
      $scope = _$rootScope_.$new();

      deferred = _$q_.defer();

      spyOn(geoService, 'initMap').and.returnValue(deferred.promise);

      $controller('CarteCtrl', {
        $scope: $scope,
        geoService: geoService
      });
    }));

    /*
    it('should define the controller', inject(function($controller) {

      deferred.resolve({});
      $scope.$apply();

      var view1Ctrl = $controller('CarteCtrl');
      expect(view1Ctrl).toBeDefined();
    }));
    */

/*
    it('should define its ViewModel', inject(function($controller) {
      var view1Ctrl = $controller('CarteCtrl');
      expect(view1Ctrl.result).toBeDefined();
      expect(view1Ctrl.map).toBeDefined();
      expect(view1Ctrl.options).toBeDefined();
      expect(view1Ctrl.marker).toBeDefined();


      /*
      carteVm.result = null;
      carteVm.map = {};
      carteVm.options = {};
      carteVm.marker = null;

    }));
*/


  });
  
});