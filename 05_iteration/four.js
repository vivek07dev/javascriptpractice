const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject){
    console.log(`${key} shortcut is for 4{myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
    

}
