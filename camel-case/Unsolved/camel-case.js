// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {

    console.log("str", str);

    let arr = str.toLowerCase().split(" ");

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    };

    camel = arr.join("");

    console.log("camel", camel);

    return camel;

};
