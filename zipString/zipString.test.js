const zipString = require('./zipString');
const {expect} = require('chai');

describe('zipString', () => {
    describe('Returns correct result', () => {
        it('should return correct result for simply arg', () => {
            expect(zipString('AAaBBBb')).to.eq('A2aB3b');
        });

        it('should return correct result for last letter slice', () => {
            expect(zipString('AAaBBBbb')).to.eq('A2aB3b2');
        });
    });
});