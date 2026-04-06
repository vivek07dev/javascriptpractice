// singleton

// object literals

const mySym = Symbol("Key1")
const JsUser = { 
   "Full.Name": "Vivek Prasad",
   [mySym]: "Key1",
    age: 19,
    email: "vivek@example.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],

}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["Full.Name"])
//console.log(JsUser[mySym])

JsUser.email = "vivek@chatgpt.com"
//Object. freeze(JsUser)
JsUser.email = "vivek@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser")
}

JsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting());