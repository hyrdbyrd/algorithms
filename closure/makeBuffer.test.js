const {expect} = require('chai');
const makeBuffer = require('./makeBuffer');

describe('makeBuffer', () => {
    describe('Returns correct result', () => {
        it('should return correct result for simply arg', () => {
            expect(makeBuffer('falafel')()).to.eq('falafel');
        });

        it('should return correct result for simply arg in closure', () => {
            expect(makeBuffer()('falafel')).to.eq('falafel');
        });

        it('should return clears result', () => {
            const buffer = makeBuffer('falafel');
            buffer.clear();

            expect('').to.eq(buffer.get());
        });
    });
});