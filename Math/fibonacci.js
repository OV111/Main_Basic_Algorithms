function fibonacci(n) {
    if(n === 0) return 0;   // checking especially for 0 & 1 
    if(n === 1) return 1;      
    let x = 0, y = 1, result;   
    for(let i = 2; i <= n; ++i) {  // Starting from 2 to number (because already checked(0,1))
        result = x + y;
        x = y;
        y = result;  // Initial because updating y then adding to result
    }
    return result;
}
console.log(fibonacci(133)); // Output - 2.791715456571052e+27

// Recursive Way

function recursiveFib(n) {
    if(n === 0 || n === 1) {  // Checking
        return n;
    } 
    return recursiveFib(n - 1) + recursiveFib(n - 2); // Will decrease until n === 1, then n === 0
}
console.log(recursiveFib(6)); // Output - 8