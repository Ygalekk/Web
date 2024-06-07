function areAnagrams(words) {
    function sortLetters(word) {
        return word.split('').sort().join('');
    }
    const sortedWords = words.map(sortLetters);
    return sortedWords.every((word, i) => word === sortedWords[0]);
}

const words = ['кот', 'ток', 'окт'];
console.log(areAnagrams(words));

const notAnagrams = ['кот', 'ток', 'око'];
console.log(areAnagrams(notAnagrams));