// Challenge 1 Reverse a String
// example reverseString("hello") return "olleh"

const reverseString=(input = '')=>{
//  str = input.split('')
//  reversed = str.reduce((pv, cv)=>cv+pv)
//     return reversed
    return input.split('').reduce((pv, cv)=>cv+pv,"")
}
console.log(reverseString('hello'))

function reverseStr(input=''){
    let rev =''
    for(let i = input.length - 1; i >= 0; i--){
        rev = rev + input[i]; 
    }
    return rev;
}
console.log(reverseStr('hey'))

reverseStringAgain()