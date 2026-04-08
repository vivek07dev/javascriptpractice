//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "vivek" 
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "vivek@gmail.com",
    fullname: {
        userfullname:{
        
           fistname:"vivek",
          lastname:"chaudhary"
        } 
    }
}

//console.log(regularUser.fullname.userfullname.fistname) ;
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "vivek@gmail.com"
    },
    {
        id: 1,
        email: "vivek@gmail.com"
    },
    {
        id: 1,
        email: "vivek@gmail.com"
    },
]
 
 users[1].email 
 //console.log(tinderUser);


 //console.log(Object,keys(tinderUser));
 //console.log(Object.values(tinderUser));
 //console.log(Object.entries(tinderUser));

 //console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 const course = {
    name: "js in hindi",
    price: 999,
    courseInstructor: "vivek chaudhary"
 }

 //course.courseInstructor 

 const {courseInstructor: Instructor} = course
    console.log(Instructor);

    {
         name: "js in hindi",
         coursname: "js in hindi",
         price: "free",

    }

    [
        {},
        {},
        {}
    ]




    


