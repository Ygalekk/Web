function initials(n){
    let arr = n.toLocaleUpperCase().split(' ');
    let f = arr.slice(-1)[0].charAt(0) + arr.slice(-1)[0].slice(1).toLocaleLowerCase();
    let fn = arr.slice(0,(arr.length - 1)).map((x) => x.charAt(0)).join('.');
    return fn + '.' + f;
}