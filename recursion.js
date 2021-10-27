function oddNumber(arr) {
    if (arr.length === 0) {
        return false
    }
    if (arr[0] % 2 !== 0) {
        return true
    }
    arr.shift()
    return oddNumber(arr)
}

console.log(oddNumber([3142, 5798, 6550, 5914]))
console.log(oddNumber([3142, 5798, 6551, 5914]))
console.log(oddNumber([]))

function factorial(num) {
    if(num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(3))
console.log(factorial(6))
console.log(factorial(2))