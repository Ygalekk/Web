function xPlusY(n) {
    if (!/^[01]+$/.test(n)) {
        return 0;
    }
    n = n.split('');

    let turns = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            if (n[i + 1] !== undefined && n[i + 1] === '0') {
                n[i] = '0';
                n[i + 1] = '1'
                turns++;
            } else if (n[i + 1] !== undefined && n[i + 1] === '1') {
                n[i] = '0';
                n[i + 1] = '0'
                turns++;
            }
        }
    }

    if (n[n.length - 1] === '1') {
        turns++;
    }

    return turns;
}

console.log(xPlusY('11'))