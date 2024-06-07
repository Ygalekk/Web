var countLetters = function(s){
    var letters = {};
    for(var i = 0; i < s.length; i++){
        var letter = s[i];
        if(letter === " ") continue;
        letters[letter] = (letters[letter] || 0) + 1;
    }
    return letters;
};

var isAnagram = function(s1, s2){
    s1 = s1.toLowerCase().trim();
    s2 = s2.toLowerCase().trim();

    if(s1 === s2){
        return false;
    }

    return res.eq(countLetters(s1), countLetters(s2));
};

var res = {
    eq: function(a,b){
        for(var i in a) {
            if(b[i] !== a[i]) return false;
        }
        for(var i in b) {
            if(b[i] !== a[i]) return false;
        }
        return true;
    }

};


console.log(isAnagram('Тест', 'ЕТТс'));
console.log(isAnagram('Привет', 'Ворона'));