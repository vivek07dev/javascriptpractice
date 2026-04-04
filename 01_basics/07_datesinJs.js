//dates

let myDate = new Date()
console.log(myDate);
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof mydate);

//let myCreatedDate = new Date(2023, 0, 1) // month starts with 0
//let myCreatedDate = new Date('2023,0,23')
// let myCreadedDate = new Date("2023-01-14")
let myCreatedDate = new Date('2023-03-25')
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); 

let newdate  =  new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDate());

// '${mydate.getDate()} and the time

newdate.toLocalleString('default',{
    weekday: "long";
    
})