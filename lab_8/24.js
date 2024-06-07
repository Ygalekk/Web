function countTriangles(n) {
    return Math.floor(n + n*n*(6*n+9)/2)
}

console.log(countTriangles(4));