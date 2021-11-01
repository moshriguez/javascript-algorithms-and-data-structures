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

console.log(selectionSort([1,3,4,2,6,8,2,3]))
console.log(selectionSort([8,1,2,3,4,5,6,7]))
