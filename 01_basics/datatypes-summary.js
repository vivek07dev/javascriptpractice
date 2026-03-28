// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

//const bigNumber = 9007199254740991n

//Reference (non-primitive)

// Array, Objects, Functions

const heros= ['shaktiman', 'naagraj', 'doga']
{
    name: "vivek";
    age:19;

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);

// anotherId is a symbol, which is a primitive data type in JavaScript. Symbols are unique and immutable values that can be used as identifiers for object properties. In this case, even though both `id` and `anotherId` are created with the same description ('123'), they are different symbols and therefore not equal.
//heros is a object,.
// outsidetemp is a object,

 