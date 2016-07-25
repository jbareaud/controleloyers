'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /adresse when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/adresse");
  });


  describe('adresse', function() {

    beforeEach(function() {
      browser.get('index.html#!/adresse');
    });


    it('should render adresse when user navigates to /adresse', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('carte', function() {

    beforeEach(function() {
      browser.get('index.html#!/carte');
    });


    it('should render carte when user navigates to /carte', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
