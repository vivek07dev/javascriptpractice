// var c = 300
let a =300
if(true){
    let a = 10
    const b = 20
    //console.log("INNER" , a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);writer error because we are trying to access the variable outside the block scope

    two()
}

//one()writer error because we are trying to access the variable outside the block scope

if (true){
    const username = "vivek"
    if (username === "vivek"){
        const website = "youtube"
        //console.log(username + " " + website);
    }    
    //console.log(website);writer error because we are trying to access the variable outside the block scope
}

//console.log(username);writer error because we are trying to access the variable outside the block scope

// +++++++++++++++ intersting ++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num + 1
}

addtwo(5);
const addtwo = function (num){
    return num + 2
}