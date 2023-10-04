// Q6. Write a function that checks if a given year is a leap year (divisible by 4 and not divisible by 100, except when it's divisible by 400) using only relational operators
// function learYearcheck(year){
//     if ((year % 4 === 0 && year % 100 !==0 || year % 400 ===0)) {
//         console.log("Leap year")
//     }
//     else{
//         console.log(" Not a Leap year") 
//     }
// }
// learYearcheck(2024)

// Q5.Write a code to swap the values of two variables a and b without using a temporary variable.
// let num  = 2;
// let num2 = 2;

// if(num != num2){
//     num = num + num2;
//     num2 =num - num2
//     num = num - num2
//    console.log("swap number of num ", num);
//    console.log("swap number of num2 ", num2);
// }
// else{
//     console.log("number are already same");
// }


// Q4. Write a single line of code using the ternary operator to check if a variable value is defined (not undefined) and has a truthy value. If it does, store the result in a variable 'isValid'.
// let raju = 13;
// const isValid = typeof raju !== 'undefined' ? true : false;
// console.log(isValid);
// console.log(raju);

// Q3.
// let num = 153
// let sum = 0
// let check = num
// let armnum = 0
// let len = num.toString().length
// let power = 0
// while (num != 0) {
//   armnum = num % 10
//   power = Math.pow(armnum, len)
//   sum = sum + power
//   num = parseInt(num/10)
// }
// if (check == sum){
//   console.log("palindrome")
// }
// else
// console.log("Not a palindrome");

// Q2


  let rem, temp , result =0;
  let number = 1221;
  temp =number
  while (number >0 )
  {
    rem =number%10
    number =parseInt(number/10)
    result=result*10+rem
  }
  if(result == temp){
    console.log("congratulation number is palindrome")
  }
  else{
    console.log("better luck next time  number  not is palindrome")

  }









