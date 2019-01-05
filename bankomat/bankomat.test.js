const {expect, assert} = require('chai');
const bankomat = require('./bankomat');

describe('bankomat', () => {
    describe('Returns correct result', () => {
        it('should return correct result for simply args', () => {
            expect(bankomat({100: 1, 50: 3}, 200)).to.deep.eq({100: 0, 50: 1});
        });

        it('should return correct result for simply args', () => {
            expect(bankomat({100: 1, 50: 3}, 1000)).to.deep.eq({100: 1, 50: 3});
        });

        // it('should return correct result for not %% values', () => {
        //     expect(bankomat({100: 1, 30: 4}, 120)).to.deep.eq({100: 1, 30: 0});
        // });
    });
});