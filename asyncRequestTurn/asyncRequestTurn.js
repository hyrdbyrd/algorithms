/**
 * @param {Array<String>} urls
 * @param {Number} limit
 * @param {async (...args: any) => any} func
 * @param {async (...args: any) => any} fetch - for tests
 */
async function asyncRequestTurn(urls, limit, func, fetch) {
    const res = [];
    limit = Math.min(urls.length, limit);
    let count = 0;

    urls
        .slice(0, limit)
        .map((_, i) => i)
        .forEach(async i => {
            for (; i < urls.length; i += limit) {
                fetch(urls[i]).then(e => {
                    res[i] = e;
                    count++;
                    if (count === urls.length) res.forEach((e, i) => urls[i] = func(e));
                });
            }
        });
}

module.exports = asyncRequestTurn;
