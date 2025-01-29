function factorial(n) {
    if(n < 0) {throw new Error("Invalid Number!")}
    let result = 1;
    for(let i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));  // Output - 120

// Recursive Way
function recursiveFac(n) {
    if(n < 0) {throw new Error("Invalid Number!")}
    if(n <= 1) {
        return 1;
    }
    return n * recursiveFac(n-1);
}

console.log(recursiveFac(0)); // Output - 1