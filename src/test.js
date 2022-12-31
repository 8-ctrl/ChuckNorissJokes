// combining two arrays to create a 3rd array that has alternate elements from the first 2 arrays. 

//             E.g input ["a","b","c"],["d","e","f","g"] 

// Output: [“a”,”d”,”b”,”e”,”c”,”f”,”g”] 

let x = ["a","b"]
let y = ["d","e","f","g","c","k","p","l","m"]
let res= []
let len = 0
let remainingArray = []
if (x.length<y.length){
    len = x.length
     remainingArray = (y.slice(len))
    
}
else{
    len = y.length
     remainingArray = (x.slice(len))
}

for(let i = 0;i<len;i++){
res.push(x[i])
res.push(y[i])
}



remainingArray.forEach((i)=>{
    res.push(i)
})

console.log(res)

