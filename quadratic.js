function loopWithinLoop(array) {
    const length = array.length
    let steps = 0
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++)
            if (i !== j) {
                steps += 1
            }
    }
    console.log('Length: ' + length + ' steps: ', steps)
}
const array4 = [1,2,3,4]
const array8 = [1,2,3,4,5,6,7,8]
const array10 = [1,2,3,4,5,6,7,8,9,10]
const array14 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
loopWithinLoop(array4)
loopWithinLoop(array8)
loopWithinLoop(array10)
loopWithinLoop(array14)