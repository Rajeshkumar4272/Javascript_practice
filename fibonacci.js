function fibonacci(n) {
    let num = 0
    let num2 = 1
    let result;
    console.log(num);
    console.log(num2);
    for (let i = 0; i <= n; i++) {
        result = num + num2;
        num = num2
        num2 = result
        console.log(result);
    }
}
fibonacci(5)

//  factorial
console.log("******************  Factorial  **********")
function factorial() {
    let fact = 1
    for (let i = 1; i <= 5; i++) {
        fact = fact * i
        console.log("factorial of upto 5 is "+ i+" " + "X " + i + " = " + fact )
    }
}

factorial()

