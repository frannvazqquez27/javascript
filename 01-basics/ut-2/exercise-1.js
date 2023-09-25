const WELAPI = "Welcome to the aplication!";
const INFOMESS = "This is informational message.";
const WARNING = "This is a warning. Be cautious.";
const ERR = "Error! Something went wrong.";
const PER1 = {name: 'John', age: 30, city: 'New York'};
const PER2 = {name: 'Jane', age: 25, city: 'San Francisco'};
const PER3 = {name: 'Bob', age: 40, city: 'Chicago'};

console.log(`%c${WELAPI}`, 'color: blue; font-weight: bold; font-size: 18px;');
console.log(`%c${INFOMESS}`, 'color: green; font-size: 16px;');
console.warn(`%c${WARNING}`, 'font-size: 16px;');
console.error(`%c${ERR}`, 'font-size: 16px;');
console.table([PER1, PER2, PER3]);