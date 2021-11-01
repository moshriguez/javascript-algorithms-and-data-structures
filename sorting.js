// Bubble Sort

function bubbleSort(arr) {
    for(let i = arr.length; i>=0; i--) {
        for(let j=0; j<i-1; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([1,3,4,2,6,8,2,3]))