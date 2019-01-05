const {expect} = require('chai');
const sortByField = require('./sortByField');

describe('sortByField', () => {
    const arr = [
        {name: 'b', age: 1},
        {name: 'a', age: 0},
        {name: 'c', age: 2}
    ];

    describe('Returns correct result', () => {
        it('should sort by name', () => {
            expect(arr.sort(sortByField('name'))).to.deep.eq([
                {name: 'a', age: 0},
                {name: 'b', age: 1},
                {name: 'c', age: 2}
            ]);
        });

        it('should sort by age', () => {
            expect(arr.sort(sortByField('age'))).to.deep.eq([
                {name: 'a', age: 0},
                {name: 'b', age: 1},
                {name: 'c', age: 2}
            ]);
        });

        it('should sort as reversed', () => {
            expect(arr.sort(sortByField('age', true))).to.deep.eq([
                {name: 'c', age: 2},
                {name: 'b', age: 1},
                {name: 'a', age: 0}
            ]);
        });
    });
});