function curry(func, arity = func.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            var args = [...prevArgs, nextArg];
            if (args.length >= arity) {
                return func(...args);
            } else {
                return nextCurried(args);
            }
        };
    })([]);
}

function multiply(a, b, c) {
    return a * b * c;
}

module.exports = { curry, multiply };