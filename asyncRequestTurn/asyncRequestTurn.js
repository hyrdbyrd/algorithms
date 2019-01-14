/**
 * @param {Array<String>} urls
 * @param {Number} limit
 * @param {async (...args: any) => any} func
 */
function asyncRequestTurn(urls, limit, func) {
    const res = {};
    limit = Math.min(urls.length, limit);


    for (let i = 0; i < urls.length; i++) {
        next(urls[i], i);
    }

    async function next(url, idx) {
        await fn(url + idx).then(val => res[idx] = (val));

        idx += limit;

        if (idx === urls.length - 1 + limit) func(Object.values(res));
        else if (idx >= urls.length) return;
        next(urls[idx], idx);
    }
}

async function fn(arg) {
    for (let i = 0; i < 100000; i++) arg += i;

    return await arg;
}

asyncRequestTurn(['falafe.com', 'jojo.ru', 'kinco11.ua'], 1, console.log);