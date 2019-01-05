function makeBuffer(startStr = '') {
    let str = startStr;

    function buffer(addsStr = '') {
        str += addsStr;
        return str;
    }

    buffer.clear = () => str = '';
    buffer.set = (newStr = '') => str = newStr;
    buffer.get = () => str;

    return buffer;
}

module.exports = makeBuffer;