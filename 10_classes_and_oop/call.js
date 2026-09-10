function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.username
    this.mail = email
    this.password = password
}

const chai = new createUser("chai","chai@fb".com, "343")
  console.log(chai);
