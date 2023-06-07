//Named function
function greet(name) {
  return "Hello " + name;
}

//Arrow function
const instruction = (n) => {
  const suffix = numberSuffix(n);

  if (suffix) {
    return "The " + n + suffix + " Fibonacci Number is:";
  } else {
    return "Not allowed";
  }

  function numberSuffix(n) {
    if (n == 0) {
      return "Not allowed";
    }

    const suffixes = {
      1: "st",
      2: "nd",
      3: "rd",
    };

    const lastDigits = n % 100;
    const lastDigit = n % 10;
    if (lastDigits >= 11 && lastDigits <= 13) {
      return "th";
    } else {
      return suffixes[lastDigit] || "th";
    }
  }
};

//Recursive Function
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(greet("johan")); //Name Greeting
n = 1; // n = nth Fibonacci number
console.log(instruction(n));
console.log(fibonacci(n));
