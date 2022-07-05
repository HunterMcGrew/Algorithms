// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {

    let arr = str.split("");
    console.log("arr", arr);
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }

    console.log("map", map);
    return map;

};
