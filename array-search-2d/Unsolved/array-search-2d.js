// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {

    // console.log("arr", arr);
    let map = {};
    // goes through each array within the array
    arr.forEach(item => {
        // goes through each item in the array and gives it a number based on
        // how many times it appears in the array
        for (let i = 0; i < item.length; i++) {
            if (item[i] in map) {
                map[item[i]]++;
            } else {
                map[item[i]] = 1;
            };
        };        
    });
    
    // if X doesnt exist, it equals 0
    if (!map.X) {
        map.X = 0;
    };

    return map.X;
};