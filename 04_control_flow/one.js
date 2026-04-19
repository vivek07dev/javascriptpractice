// if
const isUserloggedIn = true;    
const temperture = 41;

if (temperture ===41){
    console.log("less than  50");
} else {
    console.log("temperature is greater than 50");

}

// <,>, <=, >=, !=, ===, !== , ==

//const score = 200

//if (score>100){
   // let power = "fly"
    //console.log(`User power: ${power}`);
//}
//console.log(`User power: ${power}`); // ReferenceError: power is not defined

//const balance = 1000;
//if (balance > 500) console.log("test"), console.log("test2"); // test, test2 false

/*if (balance < 500){
    console.log("less than 500");
}else if (balance < 750){
    console.log("less than 750");
}else if (balance <900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}*/

 const userLoggedIn = true
 const debitcard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = false

    if (userLoggedIn && debitcard && 2==3) {
        console.log("Allow to buy course");
    }

    if (userLoggedIn || loggedInFromEmail){
        console.log("User logged in");

    }