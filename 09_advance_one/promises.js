// A JavaScript promise is object representing the eventual completion (or failure) of an asynchronous operation and its resulting value
// A promise is in one of these states:

// the three states of a promise are:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

 const promiseOne = new Promise(function(resolve,rject){
    // do an async task
    //DB calls,crytograpy,network
    
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("Promise is consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("Promise .consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email: "chai@example.com"})
    },1000)
})
promiseThree.theen(function(){
    console.log(user); 

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"vivek", password: "4323"})
        } else {
            reject("Error: Something went wrong")
        }

    },1000)
})

  promiseFour 
  .then((user)=>{
    console.log(user);
 return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function() {
    console.log("Promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password: "4323"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
consumePromiseFive();

//async function getAllUsers(){
//    try {
//        const response = await fetch("https://jsonplaceholder.typicode.com/users");
//        const data = await response.json();
//        console.log(data);
//    } catch (error) {
//        console.log ("E:", error);
//    }
//}
//getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).then((data)=>{
        console.log(data);
    })
    .catch((error) => console.log(error))
