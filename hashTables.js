// hash function
function hash(key, arrayLen) {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total += value
    }
    return total % arrayLen
}
// hash('pink', 100)