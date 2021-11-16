// starting with a recursive solution for Fibinacci sequence
const fib = n => {
    if(n<3) return 1
    return fib(n-1) + fib(n-2)
}

// This solution is simple by not performant - BigO(2^n)
// It repeats work over and over. for example to calculate fib(10), fib(8) is calculated twice, fib(7) is calculated 3 times, fib(6) is calculated 5 times, fib(5) is calculated 7 times, etc.
// fib(5) is always the same value, why calculate it each time it is called?

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))

// using memoization - BigO(n):
// this solves the issue of the above function by remembering the value of a function call and recalling that value rather than calculating each time
const fibWMemo = (n, memo=[undefined, 1, 1]) => {
    if(memo[n]) return memo[n]
    memo[n] = fibWMemo(n-1, memo) + fibWMemo(n-2, memo)
    return memo[n]
}

// using tabulation - BigO(n):
// because this solution does not use recursion, we can pass very large numbers to this function without stack overflow (but JS cannot actully handle numbers that big...)
const fibWTab = n => {
    if(n<3) return 1
    const fibTable = [0, 1, 1]
    for (let i=3; i<=n; i++) {
        fibTable[i] = fibTable[i-1] + fibTable[i-2]
    }
    return fibTable[n]
}