function deepEqual(a, b) {
    if (typeof a === typeof b && (typeof a !== 'object' || a === null || b === null)) {
        return a === b;
    }

    if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }

        for (let key of aKeys) {
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1, '1'));
console.log(deepEqual([1, 2], [1, 2]));
console.log(deepEqual([1, 2], [1, 2, 3]));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(deepEqual(null, null));
console.log(deepEqual(null, undefined));