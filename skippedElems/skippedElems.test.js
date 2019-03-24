const { expect } = require('chai');
const skElems = require('./skippedElems');

describe('skippedElems', () => {
    describe('Correct result', () => {
        it('should set skipped elems', () => {
            expect(skElems([1, 3])).to.deep.eq([1, 2, 3]);
        });

        it('should set skipped elems with sub values', () => {
          expect(skElems([-1, 3])).to.deep.eq([-1, 0, 1, 2, 3]);
        });

        it('should sort', () => {
            expect(skElems([3, 1])).to.deep.eq([1, 2, 3]);
        });
    });
});
