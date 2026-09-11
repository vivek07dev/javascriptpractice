class User{
    constuctor(username){
        this.username = username

    }
    logMe(){
        console.log(`USERNAME es ${this.username}`)
    }
}
class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`a new course was added by${this.username}`);

    }
}
const chai = new teacher("chai","chai@gmail.com","323")
chai.addcourse()

chai.logMe()
const masalaChai = new User("masalachai")

masalaChai.logMe()
console.log(chai instanceof User);


