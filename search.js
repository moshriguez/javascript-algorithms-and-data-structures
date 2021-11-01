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
// my solution
const binarySearch = (arr, ele) => {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (ele === arr[mid]) return mid;
        if (ele < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,65], 4)) // 3
console.log(binarySearch([1,2,3,4,5,65], 0)) // -1
console.log(binarySearch([1,2,3,4,5,65], 65)) // 5

// instructor solution
function search_binary(arr, ele) {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)
    while(arr[mid] !== ele && start <= end) {
        if (ele < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] === ele ? mid : -1
}

console.log(search_binary([2, 4, 6, 7, 8, 11, 23, 34, 45], 4)) // 1
console.log(search_binary([2, 6, 7, 8, 11, 23, 34, 45], 4)) // -1
console.log(search_binary([2, 4, 6, 7, 8, 11, 23, 34, 45], 45)) // 8 

// String Search

function stringSearch(long, short) {
    let count = 0
    for (let i = 0; i<long.length; i++) {
        for(let j=0; j<short.length; j++) {
            if (long[i+j] !== short[j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count
}

console.log(stringSearch('herold laughed haha at sara haha', 'haha'))
console.log(stringSearch('hhhhha', 'hhhha'))