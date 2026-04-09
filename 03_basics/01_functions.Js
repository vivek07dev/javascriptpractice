function sayMyname(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");


}
//sayMyname()  reference error because we are not calling the function

//function addTwoNumbers(number1, number2){

   // console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
     
  // let result =  number1 + number2;
   // return result
    return number1+ number2
}

const result = addTwoNumbers(3,5)

console.log("result:", result);

function loginUserMessage(username = "vishal"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("vivek"));

function calculatedCartPrice(val1, val2, ...num1) {
    return num1
    
}

//console.log(calculatedCartPrice(200,400,500, 2000))

const user = {
    username: "vivek",
    price: 199

}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
//handleObject(user)
handleObject({
    username: "vishal",
    price: 100
})

const myNewArray = [200, 400,100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200,400,500,1000]));