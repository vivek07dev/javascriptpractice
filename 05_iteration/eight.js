const myNums = [1,2,3]

/*const mytotal = myNums.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0) */

const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)// arrow function

console.log(myTotal);


const shoppingcart = [
    {
        itemName: "laptop",
        price: 1000
    },
    {
        itemName: "mouse",
        price: 50
    },

    {
        itemName: "keyboard",
        price: 100
    },

     {
        itemName: "monitor",
        price: 500
    }
]
    
const total = shoppingcart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
