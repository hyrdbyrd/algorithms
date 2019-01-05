const {expect} = require('chai');
const {isObject, getValByStr} = require('./getValByStr');

describe('getValByStr', () => {
    describe('isObject', () => {
        it('should return true', () => {
            expect(isObject({a: 0})).to.eq(true);
        });

        it('should return false for array', () => {
            expect(isObject([])).to.eq(false);
        });

        it('should return false for null', () => {
            expect(isObject(null)).to.eq(false);
        });

        it('should return false for primitive type', () => {
            expect(isObject('falafel')).to.eq(false);
        });
    });

    describe('getValByStr', () => {
        it('should return undefined for not exists query', () => {
            expect(getValByStr({}, 'a')).to.eq(undefined);
        });

        it('should return deep query', () => {
            expect(getValByStr({a: {b: {c: 2}}}, 'a.b.c')).to.eq(2);
        });

        it ('should return undefined for query in not object', () => {
            expect(getValByStr({a: 2}, 'a.b')).to.eq(undefined);
        });
    });
});