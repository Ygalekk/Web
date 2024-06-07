function charToAscii(string) {
    string = string.replace(/[^A-Za-zА-Яа-я]/g, '');

    if (string.length <= 0) {
        return null;
    }

    let res = {};

    for (let key in string) {console.log(string[key])
        if (res[string[key]] !== undefined) {
            continue;
        }

        res[string[key]] = string[key].charCodeAt(0);
    }

    return res;
}