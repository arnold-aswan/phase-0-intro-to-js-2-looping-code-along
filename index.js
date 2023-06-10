// Code your solutions in this file
function writeCards(inputArray, eventName) {
    const arr1 = [];
    for(let i = 0; i < inputArray.length; i++) {
        arr1.push(`Thank you, ${inputArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return arr1
}

function countDown(n) {
    while(n >= 0) {
        console.log(n--)
    }
}