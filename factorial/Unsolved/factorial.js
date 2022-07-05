// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {

    result = 1;
    for (let i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
    

};
