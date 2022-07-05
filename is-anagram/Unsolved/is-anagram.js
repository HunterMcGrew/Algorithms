// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    
    // check length of both strings
    let lenA = strA.length;
    let lenB = strB.length;
    
    if (lenA != lenB) {
        return false;
    };
    
    // check same characters in both strings
    let sortA = strA.split("").sort().join("");
    let sortB = strB.split("").sort().join("");

    if (sortA === sortB) {
        return true;
    } else {
        return false;
    };

};
