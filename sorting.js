// Bubble Sort

function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i>=0; i--) {
        noSwaps = true
        for(let j=0; j<i-1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

// console.log(bubbleSort([1,3,4,2,6,8,2,3]))
// console.log(bubbleSort([8,1,2,3,4,5,6,7]))

// Selection Sort

function selectionSort(arr) {
    for(let i = 0; i<arr.length; i++) {
        let min = i
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        if(min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

// console.log(selectionSort([1,3,4,2,6,8,2,3]))
// console.log(selectionSort([8,1,2,3,4,5,6,7]))

// Insertion Sort

function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        for(let j=i; j>0; j--) {
            if (arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            } else {
                break
            }
        }
    }
    return arr
}

// instructor solution - not a fan of using var to get around the scope issue with j
function insertionSort2(arr) {
    for(var i=1; i<arr.length; i++){
        var currentVal = arr[i]
        for(var j=i -1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

// a solution more similar to the instructors, but with let and fixing the scoping issue
function insertionSort3(arr) {
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i]
        let j = i - 1
        while(arr[j] > currentVal && j >= 0){
            arr[j+1] = arr[j]
            j--
        }
        arr[j + 1] = currentVal
    }
    return arr
}

// console.log(insertionSort3([1,3,4,2,6,8,2,3]))
// console.log(insertionSort3([8,1,2,3,4,5,6,7]))
// console.log(insertionSort([1,2,3,4,5,6,7,0]))

// Merge Sort

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function merge(arr1, arr2) {
    const newArr = []
    let i1 = 0
    let i2 = 0
    while(i1<arr1.length || i2<arr2.length){
        if(arr1[i1] <= arr2[i2] || i2 >= arr2.length) {
            newArr.push(arr1[i1])
            i1++
        } else if (arr2[i2] < arr1[i1] || i1 >= arr1.length){
            newArr.push(arr2[i2])
            i2++
        }
    }
    return newArr
}

// console.log(mergeSort([1,3,5,7,0,6,8,3,11]))

// Quick Sort

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotInx = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotInx - 1)
        // right
        quickSort(arr, pivotInx + 1, right)
    }

    return arr
}

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]]  
    }
    // we are assuming for now that the pivot is always the first element
    const pivot = arr[start]
    let pivotIdx = start
    for (let i=start+1; i<=end; i++) {
        if(pivot > arr[i]) {
            pivotIdx++
            swap(arr, i, pivotIdx)
        }
    }
    // swap the pivot from the start to the swap point
    swap(arr, start, pivotIdx)
    return pivotIdx
}

const sample = [2, 5, 1, 7, 5, 9, 2, 5, 0]
// console.log(quickSort(sample))

// Radix Sort
// helpers
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
    if(num === 0 || num === 1) return 1
    return Math.ceil(Math.log10(Math.abs(num)))
}

function mostDigits(arr) {
    let count = 0
    arr.forEach(el => count = Math.max(digitCount(el), count))
    return count
}

function radixSort(arr) {
    const maxDigits = mostDigits(arr)
    for(let k=0; k<maxDigits; k++) {
        const buckets = Array.from({length: 10}, () => [])
        for(let i=0; i<arr.length; i++) {
            let j = getDigit(arr[i], k)
            buckets[j].push(arr[i])
        }
        arr = buckets.flat()
    }
    return arr
}

console.log(radixSort([23, 1, 34, 456, 2345, 75, 133, 3535, 975]))