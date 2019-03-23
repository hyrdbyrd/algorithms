const polishSet = require('./polishSet');
const { expect, assert } = require('chai');

describe('polishSet', () => {
    describe('Correct result', () => {
        it('should add', () => {
            expect(polishSet('3 5 +')).to.eq(8);
        });

        it('should devide', () => {
            expect(polishSet('5 10 /')).to.eq(2);
        });

        it('should mult', () => {
            expect(polishSet('2 5 *')).to.eq(10);
        });

        it('should minus', () => {
            expect(polishSet('10 2 -')).to.eq(-8);
        });

        it('should summ with multiple slugs', () => {
            expect(polishSet('5 5 5 5 + / -')).to.eq(-3);
        });

        it('should throw error on incorrect input', () => {
            assert.throws(() => polishSet('5 5 5 5 + '));
        });
    });
});
