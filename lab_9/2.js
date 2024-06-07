function formatString(separator, ...args) {
    let result = '';
    for (let i = 0; i < args.length; i++) {
        if (args[i] !== '') {
            if (result !== '') {
                result += separator;
            }
            result += args[i];
        }
    }
    return result;
}

console.log(formatString('*', '', '1', 'b', '1c'));