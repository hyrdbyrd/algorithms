const joinFor = require('./joinFor');
const {expect} = require('chai');

describe('joinFor', () => {
    describe('Returns correct result', () => {
        it('should return correct result for any args', () => {
            expect(joinFor(',', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).to.eq('1,2,3,4,5,6,7,8,9,10');
        });
    });
});