//Given a low and a high number, filter out and only return the odd numbers in an array form
let l = 1
let r = 5
const range =(l, r)=>{
    let n = l
    let arr = []
    do{
        arr.push(n)
        n++;
    }while(n> l && n<=r)
    return arr.filter(odd => odd % 2 !== 0)
}

console.log(range(1, 10))