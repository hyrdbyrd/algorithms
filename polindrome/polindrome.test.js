const isPolindrome = require('./isPolindrome');
const multiplePolindrome = require('./multiple-polindrome');

const {assert, expect} = require('chai');

describe('Polindrome', () => {
    describe('isPolindrome', () => {
        describe('Returns correct result', () => {
            it('should return correct result for div string', () => {
                assert.isTrue(isPolindrome('faaf'));
            });

            it('should return correct result for mod word', () => {
                assert.isTrue(isPolindrome('falaf'), 'return false for polindrome');
            });

            it('should return correct result for words more than 1', () => {
                assert.isTrue(isPolindrome('fa af'));
            });

            it('should return correct result for not used symbols', () => {
                assert.isTrue(isPolindrome('ak, u! k-a'));
            });

            it('should return correct result for not polindrome', () => {
                assert.isFalse(isPolindrome('not polindrome'));
            });
        });

        describe('Speed less than 50ms', () => {
            it('should works speedy on 10 symbols', () => {
                const start = Date.now();

                isPolindrome('f'.repeat(10));

                expect(Date.now() - start).lessThan(50);
            });

            it('should works speedy on 100 symbols', () => {
                const start = Date.now();

                isPolindrome('f'.repeat(100));

                expect(Date.now() - start).lessThan(50);
            });

            it('should works speedy on 100 symbols', () => {
                const start = Date.now();

                isPolindrome('f'.repeat(1000));

                expect(Date.now() - start).lessThan(50);
            });
        });
    });

    describe('multiplePolindrome', () => {
        describe('Returns correct result', () => {
            it('should return correct result for simple args', () => {
                expect(multiplePolindrome('fafcucuc')).to.eq('cucuc');
            });

            it('should return correct result for ordered simple args', () => {
                expect(multiplePolindrome('fafcuccuccaha')).to.eq('cuccuc');
            });

            it('should return correct result for not simple args', () => {
                expect(multiplePolindrome('')).to.eq('');
            });
        });

        describe('Speed less than 50ms', () => {
            it('should works speedy on 10 symbols', () => {
                const start = Date.now();

                multiplePolindrome('f'.repeat(10));

                expect(Date.now() - start).lessThan(50);
            });

            it('should works speedy on 50 symbols', () => {
                const start = Date.now();

                multiplePolindrome('f'.repeat(50));

                expect(Date.now() - start).lessThan(50);
            });

            it('should works speedy on 100 symbols', () => {
                const start = Date.now();

                multiplePolindrome('f'.repeat(100));

                expect(Date.now() - start).lessThan(50);
            });
        });
    });
});
