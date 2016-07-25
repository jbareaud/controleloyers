"use strict";

describe("controledesloyers.loyers service", function () {

  var dataService;
  //var loyersService;

  beforeEach(module("controledesloyers.loyers"));

  beforeEach(inject(function (_dataService_) {
    //dataService = _dataService_;
    dataService.correspondances = function() {
      var deferred = $q.defer();
      deferred.resolve({ "1": 2 });
      return deferred.promise;
    };
    dataService.quartiers = function() {
      var deferred = $q.defer();
      deferred.resolve(
        {
          "1": {
            "1": {
              "inf1946": {
                "mediane": 31.3
              }
            }
          }
        }
      );
      return deferred.promise;
    };
  }));

  it("have its criteria model defined", function () {
      expect(loyersService.isVisible).toBeDefined();
      expect(loyersService.calculLoyer).toBeDefined();
  });

});
