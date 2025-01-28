function fibonacci(n) {
    if(n === 0) return 0;   // checking especially for 0 & 1 
    if(n === 1) return 1;      
    let x = 0, y = 1, result;   
    for(let i = 2; i <= n; ++i) {    // Starting from 2 to number
        result = x + y;
        x = y;
        y = result;
    }
    return result;
}
console.log(fibonacci(6)); // Output - 8

// Recursive Way

function recursiveFib(n) {

}
console.log(recursiveFib(6)); // Output - 8