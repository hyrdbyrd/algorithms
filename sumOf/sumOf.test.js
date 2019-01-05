const {expect} = require('chai');
const sumOf = require('./sumOf');

describe('sumOf', () => {
    describe('Returns correct result', () => {
        it('should return sum for numbers', () => {
            expect(sumOf([1, 2, 3, 4])).to.eq(10);
        });

        it('should return sum for numbers and strings', () => {
            expect(sumOf([1, '2', '3', 4])).to.eq(10);
        });

        it('should return sum for strings', () => {
            expect(sumOf(['1', '2', '3', '4'])).to.eq(10);
        });

        it('should return sum with not valid but sequince strings', () => {
            expect(sumOf(['1x', 2])).to.eq(3);
        });

        it('should return sum with not valid but sequince strings', () => {
            expect(sumOf(['1x', 2])).to.eq(3);
        });

        it('should return sum with not valid strings', () => {
            expect(sumOf(['x1', 2])).to.eq(2);
        });

        it('should return 0 if all args is not correct', () => {
            expect(sumOf(['xf1', 'falafe'])).to.eq(0);
        });
    });
});