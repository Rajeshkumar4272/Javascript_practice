const myArr = [12, 45, 2, 5, 1, 73, 8]
myArr.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
})
console.log(myArr);

console.log("**************** sorting with loop ***********");

let arr = [2, 4, 1, 5, 7, 3, 9, 10, 22, 11]
for (let i = 0; i < arr.length; i++) {
    let temp;
    // console.log("check");
    for (let j = i; j < arr.length; j++) {
        // console.log("hello");
        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    // console.log(arr)

}

console.log(arr);
