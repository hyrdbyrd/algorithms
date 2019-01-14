/**
 * @param {Array<String>} urls
 * @param {Number} limit
 * @param {async (...args: any) => any} func
 */
function asyncRequestTurn(urls, limit, func) {
    const res = [];
    limit = Math.min(urls.length, limit);

    let counter = 0;
    for (let i = 0; i < limit; i++) {
        next(i);
    }

    function next(idx) {
        fn(urls[idx]).then(val => {
            if (counter === urls.length) return func(res);

            counter++;
            res[idx] = val;

            const nextIdx = idx + limit;

            if (!(idx in res) || nextIdx !== urls.length) next(nextIdx);
        });
    }
}