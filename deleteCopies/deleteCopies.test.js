const { expect } = require('chai');
const delCp = require('./deleteCopies');

describe('deleteCopies', () => {
    describe('Correct result', () => {
        [
            [[1, 2, 1], [1, 2]],
            [[0, 2, 2, 2, 2, 3], [0, 2, 3]],
            [[2, 3], [2, 3]]
        ].forEach(([exp, eq], i) => {
            it(`should detele copy elems #${i}`, () => {
                expect(delCp(exp)).to.deep.eq(eq);
            });
        })
    });
});
