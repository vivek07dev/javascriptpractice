const user = {
    username:"vivek",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
      //console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//**constuctor.function

function User(username,loginCount,isloggedIn){
    this.username - username;
    this .logginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greetin = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne = new User("vivek,14,true")
const userTwo = new User("apnacode",12,false)
console.log(userOne.constructor);
//console.log(userTwo);





