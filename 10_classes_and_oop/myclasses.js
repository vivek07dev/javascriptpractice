// ES6

// class user{
//    constructor(Username,email,password){
//      this.username= username;
//      this.email = email;
//      this.password = password;
//     }

//   encryptPassword(){
//       return `${this.password}abc`
//   }
//      changeUsername(){
//   return `${this.username.toUpperCase}`
//   }
// }



// const chai = new UserActivation("chai","bhai@vs.com","343")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the seen
function User(username,email,password){
     this.username= username;
     this.email = email;
     this.password = password;
}

User.prototype.encryptPassword = function(){
  return `{this.password}abc`
}
User.prototype.encryptPassword = function(){
  return `{this.password}abc`
}

const tea = new User_("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
