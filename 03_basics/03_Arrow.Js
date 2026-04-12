const user = {
    username: "vivek",
    price: 999,

    welcomeMesage: function() {
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
}

//user.welcomeMesage()
//user.username = "vivek kumar"
//user.welcomeMesage()

//console.log(this)


//function chai(){
   // let username = "vivek"
//   console.log(this.username)                                                                                                                                                                                                                                                                                                                                                   console.log(this.username)
//}



const chai = () => {
    let username = "vivek"
    console.log(this)
}

//chai()

//const addTwo = (num1,num2) => {
 //   return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1,num2) => ( num1 + num2 )

const addTwo = ( num1,num2 ) =>({username: "vivek"})

console.log(addTwo(3,4))

const myArray = [1,2,3,4,5]

myArray.forEach()