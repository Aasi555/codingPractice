const str = ["a"]

function checkType(a){
    const val = typeof(a)
    console.log(val)
}
const b = [1,4,4,4,7,8,5,9,5]
function uniqurArray(arr){
    const a = [...new Set(arr)]
    console.log(a)
}
function printUniqueValue(arr){
    let u = []
    for(let value of arr){
        if(value.indexOf===-1){
            u.push(value)
        }
    }
    console.log(u)
}

function emptyArray(arr){
    arr.length=0
    console.log(arr)
}
printUniqueValue([1,2,2,3,55,3,9,3,9,])
