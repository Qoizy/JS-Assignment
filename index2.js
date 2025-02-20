// Step 1: Create variables and assign values
let Name = "Oladimeji Quyum";

let Age = 25;

let isMarried = false;

// Step 2: Use Alert, Propmt and Confirm to interact with the user
alert(`Hello ${Name}!`);
Name = prompt("What is your name?", Name);
Age = prompt("How old are you?", Age);
isMarried = confirm("Are you married?");

// Step 3: Display the values of the variables using console.log
console.log(`Name: ${Name}`);
console.log(`Age: ${Age}`);
console.log(`Married: ${isMarried}`);

// Step 4: Use console.log to display the values in the console
console.log(
  `Hello! My name is ${Name}. I am ${Age} years old. I am ${
    isMarried ? "not married" : "married"
  }.`
);
