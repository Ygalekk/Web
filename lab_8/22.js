function tiaosheng(failedCount) {
    if (failedCount.length === 0) {
        return 60;
    }

    let jumps = 60;
    let number = 0;

    for (var key = 0; key < failedCount.length; key++) {
        key = Number(key);
        let current = failedCount[key];
        number = current + 3 * key;

        if (number < 57) {
            jumps = current - 3 * key;
        } else if (number >= 57 && number <= 60) {
            return current;
        } else {
            return 60 - (3 * key);
        }
    }

    if (number < 57) {
        return 60 - (3 * key);
    }

    return jumps;
}

console.log(tiaosheng([3, 7, 12, 13, 15, 17, 19, 20, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 36, 38, 40, 42, 47, 48, 50, 51, 56, 57, 58]))