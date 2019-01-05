function getValByStr (obj, str) {
    const keys = str.split('.');

    let i = 0;
    let val = Object.assign({}, obj);

    while (true) {
        val = val[keys[i]];

        if (i === keys.length - 1) return val;
        if (!isObject(val)) return undefined;

        i++;
    }
}

function isObject(val) {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
}

module.exports = {getValByStr, isObject};