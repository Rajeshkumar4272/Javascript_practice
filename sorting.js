const myArr =[12,45,2,5,1,73,8]
myArr.sort((a,b) =>{
    if (a>b) return 1
    else if (a<b) return -1
    else return 0
})
console.log(myArr);