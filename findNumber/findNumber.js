//find a number in an array and return yes or no
// Two solutions!
console.log("Answers in here")
const findNumber = (arr, k)=>{
    // mixed findIndex with indexOf
    //indexOf searches and returns the index number of the thing you want to find
    // findIndex searches for the thing you want and then returns the index number of it.

    // if(arr.indexOf(k) != -1){
    //     return "YES"
    // }else{
    //     return "NO"
    // }
    const isThere = (item)=>{
      if(k == item) return true
    }
    //needs a function passed in or on the find or findIndex methods
return (arr.find(isThere) ? "YES" : "NO")
}



    // return arr.find((k, )=>{
    //     return "yes"
    // },k)



console.log(findNumber([1, 2, 3, 4, 5, 6], 6 ))