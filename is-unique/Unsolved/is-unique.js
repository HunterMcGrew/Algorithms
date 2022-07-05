// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {

    console.log("arr", arr);

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]]++;
            if (arr[i] <= 2) {
                return false;
            };
        } else {
            map[arr[i]] = 1;
        };
    };

    console.log("map", map);
    return true;

    

};
