function titleToNumber(title) {
    return title.split('').map(x => x.charCodeAt(0)-64).reduce((x, y)=> x * 26 + y);
}