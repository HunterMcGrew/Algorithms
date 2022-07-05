// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    
    if (num <= 2 && num >= -2) {
        return true;
    };

    let start = 0;
    let end = (num / 2);
    let res = 0;

    while (start <= end) {
        let mid = Math.round((start + end) / 2);
        let sqr = mid * mid;

        if (sqr === num) {
            return true;
        } else if (sqr < num) {
            start = mid + 1;
            res = mid;
        } else {
            end = mid - 1;
        };
    }
    return false;

};