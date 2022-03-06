const array = [1,2,3,5,6,7,8,9,10,4,11]

function hasDupes(array) {
    const newArray = [array.length]
    let steps = 0
    for (let i = 0; i < array.length; i++) {
        const currValue = array[i]
        if (!newArray[currValue]) {
            steps += 1
            console.log('steps ', steps)
            newArray[currValue] = currValue
        } else {
            return true
        }
    }
    return false
}

console.log('hasDupes ', hasDupes(array))