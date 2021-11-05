// Stacks
// LIFO - Last In First Out
// implementation via an array:
const stack = []
// adding and removing from the end of array satisfies stack rule
stack.push('google')
stack.push('instagram')
stack.push('youtube')
stack.pop()
stack.pop()
stack.pop()
// so does adding and removing from the beginning of array
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned out wrinkle')
stack.shift()
stack.shift()
stack.shift()
// however push/pop is better BigO due to the reindexing that occurs with unshift/shift
