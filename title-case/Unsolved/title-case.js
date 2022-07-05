// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {

    console.log(str);
    console.log("split", str.split(" "));
    let arr = str.split(" ")

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return result = arr.join(" ");
};
