const {expect} = require('chai');
const getWord = require('./getWord');

describe('getWord', () => {
    describe('Returns correct result', () => {
        it('should return correct result for simply args', () => {
            expect(getWord('falafel quala ba', 2)).to.eq('quala');
        });

        it('should return return correct result for not correct args', () => {
            expect(getWord('fasdf', 100)).to.eq('');
        });
    });
});