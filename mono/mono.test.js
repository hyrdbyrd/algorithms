const {isMono, isLess, isMore} = require('./mono');
const {expect, assert} = require('chai');

describe('mono', () => {
    describe('isLess', () => {
        describe('Returns correct result', () => {
            it('should return boolean', () => {
                assert.isBoolean(isLess(1, 1, [0, 1]));
            });

            it('should return false', () => {
                expect(isLess(1, 1, [0, 1])).to.eq(false);
            });

            it('should return true', () => {
                expect(isLess(0, 1, [1, 0])).to.eq(true);
            });
        });
    });

    describe('isMore', () => {
        it('should return boolean', () => {
            assert.isBoolean(isMore(1, 1, [0, 1]));
        });

        it('should return true', () => {
            expect(isMore(1, 1, [0, 1])).to.eq(true);
        });

        it('should return false', () => {
            expect(isMore(0, 1, [1, 0])).to.eq(false);
        });
    });

    describe('isMono', () => {
        it('should return boolean', () => {
            assert.isBoolean(isMono([0, 1]));
        });

        it('should return true', () => {
            expect(isMono([1, 2, 3])).to.eq(true);
        });

        it('should return false', () => {
            expect(isMono([1, 4, 2])).to.eq(false);
        });
    });
});