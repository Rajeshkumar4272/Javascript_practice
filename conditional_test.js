


// Q6. Write a function that checks if a given year is a leap year (divisible by 4 and not divisible by 100, except when it's divisible by 400) using only relational operators
function learYearcheck(year){
    if ((year % 4 === 0 && year % 100 !==0 || year % 400 ===0)) {
        console.log("Leap year")
    }
    else{
        console.log(" Not a Leap year") 
    }
}
learYearcheck(2024)

// Q5.Write a code to swap the values of two variables a and b without using a temporary variable.
let num  = 2;
let num2 = 2;

if(num != num2){
    num = num + num2;
    num2 =num - num2
    num = num - num2
   console.log("swap number of num ", num);
   console.log("swap number of num2 ", num2);
}
else{
    console.log("number are already same");
}


// Q4. Write a single line of code using the ternary
//  operator to check if a variable value is defined (not undefined) and has a truthy value. If it does, store the result in a variable 'isValid'.
let raju = 13;
const isValid = typeof raju !== 'undefined' && raju ? true : false;
console.log(isValid);
console.log(raju);

// Q3.

// let number = 153
// let sum = 0
// let check = number
// let armnum = 0
// let len = number.toString().length
// let power = 0
// while (number != 0) {
//   armnum = number % 10
//   power = Math.pow(armnum, len)
//   sum = sum + power
//   num = parseInt(number/10)
// }
// if (check == sum){
//   console.log("armstrong")
// }
// else
// console.log("armstrong not");

// Q2


  // let rem, temp , result =0;
  // let number2 = 1221;
  // temp =number2
  // while (number2 >0 )
  // {
  //   rem =number2%10
  //   number2 =parseInt(number2/10)
  //   result=result*10+rem
  // }
  // if(result == temp){
  //   console.log("congratulation number is palindrome")
  // }
  // else{
  //   console.log("better luck next time  number  not is palindrome")

  // }



for(i = 1 ; i<=20 ; i++){

if(i % 3 ===0 && i % 5 === 0 )
{
    console.log("fizzbuzz")
}
else if(i % 3 ===0 )
{
    console.log("buzz")
}
else if(i % 5 ===0 )
{
    console.log("fizz")
}
else {
    console.log("something is wrong");
}
}








