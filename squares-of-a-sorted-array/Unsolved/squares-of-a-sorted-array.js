// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {

    let result = [];

    // console.log("arr", arr);
        
    arr.forEach(n => {

        result.push(n * n);

    });

    // console.log("result", result);

    return result.sort((a, b) => a - b);

};
