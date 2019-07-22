module.exports.throttle = (func, ms = 1000, defaultResult = null) => {
    let canCall = true;

    return () => {
        if (canCall) {
            canCall = false;

            setTimeout(() => {
                canCall = true;
            }, ms);

            return func.apply(func, arguments);
        }

        return defaultResult;
    };
};
