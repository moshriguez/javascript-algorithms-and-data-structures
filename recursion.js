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

// Recursive helper method:
function collectOddValues(arr) {
    const result = []

    function helper(input) {
        if (input.length === 0) {
            return
        }
        if (input[0] % 2 !== 0) {
            result.push(input[0])
        }
        helper(input.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,13]))
console.log(collectOddValues([2,4,6,8,10,13]))
console.log(collectOddValues([4,2]))
