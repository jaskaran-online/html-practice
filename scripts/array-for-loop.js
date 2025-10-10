console.log("Array function");

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jim", age: 22 },
  { name: "Jill", age: 23 },
  { name: "Jack", age: 24 },
];
const numbers = [1, 2, 3, 4, 5];

/**
 * foreach function
 * description: foreach function is used to iterate over the array
 */

const result = fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

console.log(result);

users.forEach((user, index) => {
  console.log(user, index);
});

/**
 * map function
 * description: map function is used to map the array
 */

const updatedNumbers = numbers.map((number, index) => {
  console.log(number, index);
  if (number % 2 === 0) {
    return number;
  }
  //   return number * 2;
});
console.log(updatedNumbers);

const updatedUsers = users.map(function (user, index) {
  return {
    ...user,
    id: index + 1,
    name: user.name.toUpperCase(),
  };
});
// console.log(users, updatedUsers);

/**
 * filter function
 * description: filter function is used to filter the array
 */

const updatedNumbers2 = numbers.filter((number, index) => {
  if (number % 2 === 0) {
    return number;
  }
});
console.log(updatedNumbers2);

const updatedUsers2 = users.filter((user, index) => {
  if (user.age === 22) {
    return user;
  }
});
console.log(updatedUsers2);

/**
 * find function
 * description: find function is used to find the value in the array
 */

let userIWantToFound = "Jill";
const userFound = users.find((user, index) => {
  if (user.name === userIWantToFound) {
    return user;
  }
});
console.log(userFound);

/**
 * reduce function
 * description: reduce function is used to reduce the array to a single value
 */

const updatedNumbers3 = numbers.reduce((acc, number, index) => {
  return acc + number;
}, 0);

const updatedUsers3 = users.reduce((acc, user, index) => {
  return acc + user.age;
}, 0);

console.log(updatedNumbers3);

/**
 * sort function
 * description: sort function is used to sort the array
 */

const result7 = numbers.sort((a, b) => {
  return a - b;
});
console.log(result7);

const result8 = users.sort((a, b) => {
  return a.age - b.age;
});
console.log(result8);

/**
 * reverse function
 * description: reverse function is used to reverse the array
 */

const result9 = numbers.reverse();
console.log(result9);

const result10 = users.reverse();
console.log(result10);

const result11 = numbers.slice(0, 3);
console.log(result11);

const result12 = users.slice(0, 3);
console.log(result12);

/**
 * slice function
 * description: slice function is used to slice the array
 */

const result13 = numbers.slice(0, 3);
console.log(result13);

const result14 = users.slice(0, 3);
console.log(result14);

/**
 * splice function
 * description: splice function is used to splice the array
 */

const result15 = numbers.splice(0, 3);
console.log(result15);

const result16 = users.splice(0, 3);
console.log(result16);

/**
 * concat function
 * description: concat function is used to concat the array
 */

const result17 = numbers.concat(users);
console.log(result17);

const result18 = users.concat(numbers);
console.log(result18);

/**
 * join function
 * description: join function is used to join the array
 */

const result19 = numbers.join(",");
console.log(result19);

const result20 = users.join(",");
console.log(result20);

/**
 * includes function
 * description: includes function is used to check if the array includes the value
 */

const result21 = numbers.includes(3);
console.log(result21);

const result22 = users.includes(users[0]);
console.log(result22);

/**
 * indexOf function
 * description: indexOf function is used to find the index of the value
 */

const result23 = numbers.indexOf(3);
console.log(result23);

const result24 = users.indexOf(users[0]);
console.log(result24);

/**
 * lastIndexOf function
 * description: lastIndexOf function is used to find the last index of the value
 */

const result25 = numbers.lastIndexOf(3);
console.log(result25);

const result26 = users.lastIndexOf(users[0]);
console.log(result26);
