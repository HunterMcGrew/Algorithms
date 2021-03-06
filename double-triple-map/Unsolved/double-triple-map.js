// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function(arr) {

    let result = [];

    // console.log("arr", arr);

    arr.forEach (n => {

        if (n % 2 === 0) {
            result.push(n * 2);
        } else {
            result.push(n * 3);
        };

    });

    // console.log("result", result);

    return result;

};
