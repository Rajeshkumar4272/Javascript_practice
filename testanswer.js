

// function getlength( arr = [2,3[4,5[6]]]){
//     const newArray = arr.flat(Infinity)
//     return newArray.length
// }

// function obj(arr = ["A", "B", "A", "A", "A"]) {
//     let b = {
//         // this is my object
//     }
//     arr.forEach(function (value) {
//         if (b.hasOwnProperty(value)) {
           
//             b[value] += 1
//         }
//         else {
//             b[value] = 1
//         }
//     }

//     )
// console.log(b);
//     return b

// }


arr= ['Simrandeep kaur', 'Taniya saini', 'Rajesh kumar', 'Aman mishra']
arr.sort(function(a , b){
    const firstsurname = a.split(' ') [1]
    const secondsurname = b.split(' ') [1]
    if(firstsurname.length === secondsurname.length){
        return firstsurname.localeCompare(secondsurname)
    }
    return firstsurname.length < secondsurname.length  ? -1 :1 
})

console.log(arr);


