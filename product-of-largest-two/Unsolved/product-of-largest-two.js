// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {

    console.log("arr", arr);
    let max = arr[0];
    let second = arr[0];

    // arr.sort((a, b) => { return a - b});

    // console.log("sorted", arr);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        };
    };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > second && arr[i] < max) {
            second = arr[i];
        };
    };

    console.log("max", max);
    console.log("second", second);

    return max * second;

};
