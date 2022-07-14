// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {

    console.log("arr1", arr1);

    console.log("arr2", arr2);

    // go through each array and compare each number and push in sorted order
    // new array to return 
    let result = [];

    let new1 = 0;
    let new2 = 0;

    // checks the num values against each other on every push request until every 
    // item in the arrays are pushed.
    // this works because the arrays are ALREADY sorted.
    while (new1 < arr1.length && new2 < arr2.length) {
        let num1 = arr1[new1];
        let num2 = arr2[new2];

        if (num1 < num2) {
            result.push(num1);
            new1++;
        } else {
            result.push(num2);
            new2++;
        };
    };

    // starts at index 0, num = arr1[index], tries to push to result.
    // on successful push new1 + 1
    while (new1 < arr1.length) {
        let num1 = arr1[new1];
        result.push(num1);
        new1++;
    };

    while (new2 < arr2.length) {
        let num2 = arr2[new2];
        result.push(num2);
        new2++;
    };                                      
                        
    console.log("result", result);

    return result; 
};