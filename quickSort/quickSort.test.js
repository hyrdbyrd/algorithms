const {expect} = require('chai');
const quickSort = require('./quickSort');

describe('quickSort', () => {
    describe('Correct works', () => {
        it('should return expected array', () => {
            expect(quickSort([5, -100, 10000, -3, 0, 11])).to.deep.eq([-100, -3, 0, 5, 11, 10000])
        });

        it('should return expected array with however equals elems', () => {
            expect(quickSort([5, -100, 10000, -3, 0, -3, 11])).to.deep.eq([-100, -3, -3, 0, 5, 11, 10000])
        });
    });
});