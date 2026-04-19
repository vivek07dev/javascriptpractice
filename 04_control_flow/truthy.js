 const userEmail = "vivek@example.com"

 if(userEmail){
    console.log("Got user email");

 }else{
    console.log("Dont have user email");
 }

 //falsy values

 //false, 0, -0, 0n, "", null, undefined, NaN,BigInt

 // truthly values
 // "0", " ",'false', [], {}, function(){}, 

 //if (userEmail.length === 0) {
   // console.log("Array is empty");
//} 

const emptyObj = {}

   if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
   }  

// Nullish Coalescing Operation (??): null undefine

let  vali;
//vali = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ??15
 val1 = null ?? 10 ?? 20


console.log(val1);
   
// terniary Operation

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")

