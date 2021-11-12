class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    // hash function
    _hash(key) {
        let total = 0
        let prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total += value + prime
        }
        return total % this.keyMap.length
    }

    set(key, value) {
        const idx = this._hash(key)
        if(!this.keyMap[idx]) {
            this.keyMap[idx] = []
        }
        this.keyMap[idx].push([key, value])
    }
    
    get(key) {
        const idx = this._hash(key)
        if (!this.keyMap[idx]) return undefined
        for(let item of this.keyMap[idx]){
            if (item[0] === key) {
                return item[1]
            }
        }
        return undefined
        // this.keyMap[idx].find(ele => ele[0] === key)
    }
    keys() {
        const keys = []
        for(let item of this.keyMap) {
            if(item) item.forEach(pair => keys.push(pair[0]))
        }
        return keys
    }
    values() {
        const values = new Set()
        for (let item of this.keyMap) {
            if(item) item.forEach(pair => values.add(pair[1]))
        }
        return values
    }
}

let ht = new HashTable(5)
ht.set('name', 'Marc')
ht.set('age', '36')
ht.set('hair', 'brown')
ht.set('eyes', 'blue')
ht.set('height', `5'8"`)