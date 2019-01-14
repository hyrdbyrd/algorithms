const {expect} = require('chai');
const accumulate = require('./accumulate');

describe('accumulate', () => {
    it('should return repeats letters', () => {
        expect(accumulate('falafel')).to.eq('F-Aa-Lll-Aaaa-Fffff-Eeeeee-Lllllll');
    });
});