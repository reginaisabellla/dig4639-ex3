let arrays = [[1,2,3], [4,5], [6]];

export function flattening(list){
    let result = list.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
    return result
}

console.log(flattening(arrays))

export function loop(value, test, update, body) {
    let curValue = value
    while(true) {
        console.log("Iteration, curValue" + curValue)
        if(test(curValue)){
            console.log("calling body..")
            body(curValue)
            curValue = update(curValue)
        } else {
            console.log("vurValue test is false")
            break;
        }
     }
}
// Your code here.
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

export function everyLoop(array, test) {
    let curResult = true
    for(let item of array) {
        console.log(test(array))
        curResult = curResult && test(item)
    }
    return curResult
}

export function everySome(array, test) {
    return !array.some((value)=>!test(value))
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true