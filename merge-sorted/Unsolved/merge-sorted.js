// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {

    console.log("arr1", arr1);

    console.log("arr2", arr2);

    // let newArr = [];

    // arr1.forEach(n => {
    //    newArr.push(n);
    // });

    // arr2.forEach(n => {
    //     newArr.push(n);
    // });

    // console.log("newArr", newArr);

    // return newArr.sort((a, b) => a - b);


    arr2.forEach(n => {
        arr1.push(n);
    })

    console.log("arr1", arr1);

    return arr1.sort((a, b) => a - b);

};
