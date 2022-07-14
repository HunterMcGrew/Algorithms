// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {

    // filters through arr1 and compares it to arr2 as Set objects to see if they have the same elements or intersection pairs.
    return arr1.filter(Set.prototype.has, new Set(arr2));


};
