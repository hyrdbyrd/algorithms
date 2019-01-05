const {expect} = require('chai');
const rotate2DArray = require('./rotate2DArray');

describe('rotate2DArray', () => {
    it('should rotate square', () => {
        expect(rotate2DArray([
            [2, 4],
            [1, 3]
        ])).to.deep.eq([
            [1, 2],
            [3, 4]
        ]);
    });

    it('should rotate any form (with 90deg off course)', () => {
        expect(rotate2DArray([
            [3, 6],
            [2, 5],
            [1, 4]
        ])).to.deep.eq([
            [1, 2, 3],
            [4, 5, 6]
        ]);
    });
});