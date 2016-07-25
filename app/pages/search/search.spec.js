'use strict';

describe('controledesloyers.search module', function() {

    beforeEach(module('controledesloyers.search'));

    beforeEach(function () {
        module(function ($provide) {
            $provide.value('criteriaService', {
                appartement : {
                    nbPieces : null,
                    epoque : null
                }
            });
        });
    });

    beforeEach(inject(function ($controller) {
        var SearchCtrl = $controller('SearchCtrl', {});
    }));

    describe('search controller', function(){

        it('should define the controller', inject(function($controller) {
            var view1Ctrl = $controller('SearchCtrl');
            expect(view1Ctrl).toBeDefined();
        }));

        it('should define its ViewModel', inject(function($controller) {
            var view1Ctrl = $controller('SearchCtrl');

            expect(view1Ctrl.optionsNbPieces).toBeDefined();
            expect(angular.isArray(view1Ctrl.optionsNbPieces)).toBeTruthy();

            expect(view1Ctrl.optionesEpoques).toBeDefined();
            expect(angular.isArray(view1Ctrl.optionesEpoques)).toBeTruthy();

            expect(view1Ctrl.nbPieces).toBeDefined();
            expect(view1Ctrl.nbPieces).toBeNull();

            expect(view1Ctrl.epoque).toBeDefined();
            expect(view1Ctrl.epoque).toBeNull();

            expect(view1Ctrl.poursuivre).toBeDefined();
        }));

        it('should have the correct values in its NbPieces array', inject(function($controller) {
            var view1Ctrl = $controller('SearchCtrl');
            expect(view1Ctrl.optionsNbPieces.length).toBe(4);
            expect(view1Ctrl.optionsNbPieces[0].id).toBe(1);
            expect(view1Ctrl.optionsNbPieces[0].libelle).toBe('1');
            expect(view1Ctrl.optionsNbPieces[1].id).toBe(2);
            expect(view1Ctrl.optionsNbPieces[1].libelle).toBe('2');
            expect(view1Ctrl.optionsNbPieces[2].id).toBe(3);
            expect(view1Ctrl.optionsNbPieces[2].libelle).toBe('3');
            expect(view1Ctrl.optionsNbPieces[3].id).toBe(4);
            expect(view1Ctrl.optionsNbPieces[3].libelle).toBe('4+');
        }));

        it('should have the correct values in its Epoques array', inject(function($controller) {
            var view1Ctrl = $controller('SearchCtrl');
            expect(view1Ctrl.optionesEpoques.length).toBe(4);
            expect(view1Ctrl.optionesEpoques[0].id).toBe('inf1946');
            expect(view1Ctrl.optionesEpoques[0].libelle).toBe('< 1946');
            expect(view1Ctrl.optionesEpoques[1].id).toBe('1946_1970');
            expect(view1Ctrl.optionesEpoques[1].libelle).toBe('1946-1970');
            expect(view1Ctrl.optionesEpoques[2].id).toBe('1971_1990');
            expect(view1Ctrl.optionesEpoques[2].libelle).toBe('1971-1990');
            expect(view1Ctrl.optionesEpoques[3].id).toBe('sup1990');
            expect(view1Ctrl.optionesEpoques[3].libelle).toBe('> 1990');
        }));

        /*
        it('', inject(function($controller) {
            var view1Ctrl = $controller('SearchCtrl');
            view1Ctrl.nbPieces = {libelle:'4+', id:4};
            view1Ctrl.epoque = {libelle:'> 1990', id:'sup1990'};
            view1Ctrl.poursuivre();
            expect(criteriaService.appartement.nbPieces).toBeDefined();
        }));
        */

    });

});