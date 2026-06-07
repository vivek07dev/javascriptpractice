/*const coding = ["js","ruby", "python","java","cpp"] 


const value = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(value);// undefined*/

/*const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4;
});*/  

/*const newNums  = []
myNums.forEach((num) =>{
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
*/

const books =[
    {tittle: "book1", genre: "Fiction", publish: 1981,
        edition:2004},
    {tittle: "book2", genre: "Non-Fiction", publish: 1990,
        edition:2010},
    {tittle: "book3", genre: "Science Fiction", publish: 2000,
        edition:2020},
    {tittle: "book4", genre: "Mystery", publish: 1985,
        edition:2005},
    {tittle: "book5", genre: "Biography", publish: 1995,
        edition:2015},
    { tittle: "book6", genre: "Fantasy", publish: 2005,
        edition:2025},
    {tittle: "book7", genre: "Horror", publish: 2010,
        edition:2030},
    {tittle: "book8", genre: "Thriller", publish: 2015,
        edition:2035}

];

const userbook = books.filter((book) => book.genre === "Biography") 
 userbooks = books.filter((book) => {return book.publish >= 2000})
console.log(userbook);