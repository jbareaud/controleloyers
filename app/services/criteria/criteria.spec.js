"use strict";

describe("controledesloyers.criteria service", function () {
  var criteriaService;

  beforeEach(module("controledesloyers.criteria"));

  beforeEach(inject(function (_criteriaService_) {
    criteriaService = _criteriaService_;
  }));

  it("have its criteria model defined", function () {
      expect(criteriaService.appartement).toBeDefined();
      expect(criteriaService.appartement.nbPieces).toBeDefined();
      expect(criteriaService.appartement.nbPieces).toBeNull();
      expect(criteriaService.appartement.epoque).toBeDefined();
      expect(criteriaService.appartement.epoque).toBeNull();
      expect(criteriaService.adresseComplete).toBeDefined();
      expect(criteriaService.adresseComplete.geometry).toBeDefined();
      expect(criteriaService.adresseComplete.geometry.location).toBeDefined();
      expect(criteriaService.adresseComplete.geometry.location).toBeNull();
      expect(criteriaService.adresseComplete.place_id).toBeDefined();
      expect(criteriaService.adresseComplete.place_id).toBeNull();
      expect(criteriaService.adresseComplete.formatted_address).toBeDefined();
      expect(criteriaService.adresseComplete.formatted_address).toBeNull();
  });

});
