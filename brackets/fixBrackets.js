function fixBrackets(str) {
    str = str.replace(/[^[\](){}<>]/g, '');

    const opening = {
        '[': ']',
        '{': '}',
        '(': ')',
        '<': '>'
    };

    const stack = [];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (c in opening) stack.push(c);
        else {
            if (stack.length === 0) return null;
            c = opening[stack.pop()];
        }

        result += c;
    }
    if (stack.length > 0) {
        return null;
    }

    return result;
}
module.exports = fixBrackets;
