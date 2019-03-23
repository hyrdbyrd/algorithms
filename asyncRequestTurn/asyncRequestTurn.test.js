const asyncReq = require('./asyncRequestTurn');
const { expect } = require('chai');

function sleep(millis) {
    const t = Date.now();
    while (Date.now() - t < millis);
}

describe('AsyncRequestTurn', () => {
    describe('Correct results', () => {
        it('should return with correct order', () => {

            const res = [];
            asyncReq([1, 2, 3, 4, 5], 2, e => res.push(e), async d => {
                console.log(d);
                if (d === 2) sleep(1000);
                return d;
            });
        });
    });
});
