const linearSearch = (arr, ele) => {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === ele) {
            return i
        }
    }
    return -1
}

// console.log(linearSearch([1, 2, 3, 4, 5], 3))
// console.log(linearSearch([1, 2, 3, 4, 5], 8))
// console.log(linearSearch([3, 2, 3,], 3))

// Binary Search

const binarySearch = (arr, ele) => {
    if (arr.length === 0) return -1
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        console.log('mid', mid)
        if (ele === arr[mid]) {return mid}
        if (ele < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,65], 4))
console.log(binarySearch([1,2,3,4,5,65], 0))
console.log(binarySearch([1,2,3,4,5,65], 65))