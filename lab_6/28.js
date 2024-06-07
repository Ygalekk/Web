function add() {
    if (arguments.length == 0) {
        return 0;
    }

    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i]/(i+1);
    }

    return Math.round(res);
}