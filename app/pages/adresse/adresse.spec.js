'use strict';

describe('controledesloyers.adresse module', function() {

  beforeEach(module('controledesloyers.adresse'));

  beforeEach(function () {
    module(function ($provide) {
      $provide.value('geoService', {
        reverseGeocode : function (query) {
          return 'toto';
        }
      });
      $provide.value('criteriaService', {});
    });
  });

  beforeEach(inject(function ($controller) {
    var AdresseCtrl = $controller('AdresseCtrl', {});
  }));

  describe('adresse controller', function(){

    it('should define the controller', inject(function($controller) {
      var view1Ctrl = $controller('AdresseCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

    it('should define its ViewModel', inject(function($controller) {
      var view1Ctrl = $controller('AdresseCtrl');
      expect(view1Ctrl.reverseGeocode).toBeDefined();
      expect(view1Ctrl.format).toBeDefined();
      expect(view1Ctrl.poursuivre).toBeDefined();
    }));

    it('should be able to call the reverse geocoding service', inject(function($controller) {
      var view1Ctrl = $controller('AdresseCtrl');
      expect(view1Ctrl.reverseGeocode({})).toBe('toto');
    }));

    it('should be able to take some data returned by gmap, extract its *formatted_address* field and return it', inject(function($controller) {
      var view1Ctrl = $controller('AdresseCtrl');
      expect(view1Ctrl.format({})).toBeFalsy();
      expect(view1Ctrl.format({formatted_address:'toto'})).toBe('toto');
    }));

  });
  
});