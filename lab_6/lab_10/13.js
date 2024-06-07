function flatten(arr) {
    return arr.reduce((result, item) => result.concat(item), []);
}

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = flatten(nestedArray);
console.log(flatArray);