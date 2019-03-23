/**
 * @param {Array<String>} urls
 * @param {Number} limit
 * @param {async (...args: any) => any} func
 * @param {async (...args: any) => any} fetch - for tests
 */
function asyncRequestTurn(urls, limit, func, fetch) {
    limit = Math.min(urls.length, limit);
    const res = [];

    let nextIdx = limit;

    const next = async i => {
        await fetch(urls[i])
            .then(e => {
                res[i] = e;
                if (nextIdx >= urls.length) return res.map(e => func(e));
                next(nextIdx++);
            });
    };

    for (let i = 0; i < limit; i++) next(i);
}

module.exports = asyncRequestTurn;
