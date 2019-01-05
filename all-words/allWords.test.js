const allWords = require('./allWords');
const {expect} = require('chai');

describe('allWords', () => {
    describe('Return correct result', () => {
        it('should return correct result', () => {
            expect(allWords('abc')).to.deep.eq(['ab', 'abc', 'bc']);
        });

        it('should return correct result for not simple args', () => {
            expect(allWords('a')).to.deep.eq([]);
        });

        it('should return correct result', () => {
            expect(allWords('ab')).to.deep.eq(['ab']);
        });
    });

    describe('Speed less than 50ms', () => {
        it('should works speedy on 10 symbols', () => {
            const start = Date.now();

            allWords('f'.repeat(10));

            expect(Date.now() - start).lessThan(50);
        });

        it('should works speedy on 100 symbols', () => {
            const start = Date.now();

            allWords('f'.repeat(100));

            expect(Date.now() - start).lessThan(50);
        });
    });
});