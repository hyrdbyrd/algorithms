const zipArray = require('./zipArray');
const {expect} = require('chai');

describe('zipArray', () => {
    describe('Correct result', () => {
        it('should return correct result for simple slices', () => {
            expect(zipArray([-1, 1, 2, 4, 6, 7, 9])).to.eq('-1,1-2,4,6-7,9');
        });

        it('should return correct result for slice from second elem', () => {
            expect(zipArray([-1, 0, 1, 2, 4])).to.eq('-1-2,4');
        });

        it('should return correct result for slice to last elem', () => {
            expect(zipArray([-1, 0, 2, 3, 4])).to.eq('-1-0,2-4');
        });

        it('should return correct result for not correct array size', () => {
            expect(zipArray([0])).to.eq('0');
        });

        it('should return correct result for every slicy', () => {
            expect(zipArray([-1, 0, 1])).to.eq('-1-1');
        });

        it('should return correct mark for value', () => {
            expect(zipArray([-3, -2, -1])).to.eq('-3--1');
        });

        it('should return slice for 2 elems', () => {
            expect(zipArray([0, 1])).to.eq('0-1');
        });
    });

    describe('Speed less than 50ms', () => {
        it('should works speedy on 100 items', () => {
            const start = Date.now();
            const bigArray = (new Array(100)).map((e, i) => i);

            zipArray(bigArray);
            expect(Date.now() - start).lessThan(50);
        });

        it('should works speedy on 1000 items', () => {
            const start = Date.now();
            const bigArray = (new Array(1000)).map((e, i) => i);

            zipArray(bigArray);
            expect(Date.now() - start).lessThan(50);
        });

        it('should works speedy on 10000 items', () => {
            const start = Date.now();
            const bigArray = (new Array(10000)).map((e, i) => i);

            zipArray(bigArray);
            expect(Date.now() - start).lessThan(50);
        });
    });
});