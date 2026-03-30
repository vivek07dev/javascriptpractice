const name = "vivek";
const repoCount = 50;

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('vivek-hc');

//console.log(gameName[0]);
//console.log(gameName._proto__); 

// console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStrin = gameName.substring(0, 4)
console.log(newStrin);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

constnewStringOne = "  vivek   "
console.log(newStrin);
console.log(newStrin.trim());

const url = "https://vivek.com/vivek%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('vivek'));

console.log(gameName.split('-'));


