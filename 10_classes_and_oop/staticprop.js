class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Useranme:${this.username}`);
    }

    createdId(){
        return`123`
    }
}
const vivek = new User ("vivek")
//console.log(vivek.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const iphone = teacher("iphone,i@phone.com")
console.log(iphone.createId());