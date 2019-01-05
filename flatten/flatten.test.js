const {expect, assert} = require('chai');
const flatten = require('./flatten');

describe('flatten', () => {
    describe('Returns correct result', () => {
        it('should return array', () => {
            assert.isArray(flatten([1, 2, 3, 4, 5]));
        });

        it('should works without error', () => {
            assert.doesNotThrow(() => flatten([1, 2, ['3'], null]), 'Throws');
        });

        it('should return correct result for flat array', () => {
            expect(flatten([1, 2, 3, 4])).to.deep.eq([1, 2, 3, 4]);
        });

        it('should return correct result for deep array', () => {
            expect(flatten([1, [2, [3, [4]]]])).to.deep.eq([1, 2, 3, 4]);
        });
    });
});