function multipleBy5(num){
    
return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username
    this.scroe = score
}

createUser.prototype.increment = function(){
  this.scroe++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const tea = new createUser("tea",25)
const chai = createUser("chai",35)

chai.printMe()

/*

here's what happen behind the scren when the keyword
is used:

A new object is created; the keyword initiates the creay=ted of a new javaScript object.

A prototype is linked: the newly created object gets linked to the porottype property of the constructor function. this means that it has access to properties and methods
define on the constuctor's prototype.

the constuctor is called : the constuctor function is
called with  the specfied argument and thisis bound to the newly created object
If no explicit return value is specified from the constructorthe JavaScript assume this,
 newly create objects,to be the intended return value.

 thw new object is returned: After the constrctor functi0n has been called,if it doesn't return a non- primitive value
 (object,arrry, function, etc.) the newly created objectie returned.
 */
