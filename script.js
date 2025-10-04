let fruits = ["apple"];

fruits[1] = "banana";
fruits[3] = "mango";

let userInput = prompt("give me any fruit name?");
console.log(userInput);

// fruits.push(userInput);
fruits[fruits.length] = userInput;
console.log(fruits);
fruits[fruits.length] = "kiwi";
console.log(fruits);
