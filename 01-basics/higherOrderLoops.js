const myArr = [1,2,3,4]
for (const item of myArr) {
    // console.log(item);
}
const myObj = {
    name:"javascript",
    fileExtension:"js",
}
/*
*   this will not run :
    // for (const [key,value] of myObj) {
    //     console.log(`${key} :- ${value}`);
    // }
*/
// for objects we have this for loop
for (const key in myObj) {
    // console.log(myObj[key]);
}
const myMap = new Map()
myMap.set("js", "javascript")
myMap.set("py","python")
myMap.set("cpp","c++")
// this will not run as maps are not iterable objects
// for (const key in myMap) {
    // console.log(key);
// }
const myArrForEachExmple = [1,2,3,4]
// For each is an property of a array
// myArrForEachExmple.forEach((value,index,arr)=>console.log(index,value,arr)); // also this has property other than value.

// ++++++++++++++ For-Each Example in case of getting a return value ++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.forEach((num) => {
    return num > 5 // so this return keyword will not work in for-each
});
// We can solve this issue with one work-around
newNums = []
myNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num)   
    }
});
// one more work around is filter function which will explicitly return some value

newNums = []
newNums = myNums.filter((num) => num>5)
// console.log(newNums);

// Other use case for filter method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   return the books that are of genre type of history

// let myBooks = books.filter((book) => (book.genre === 'History'))
// console.log(myBooks);

// return books which has been published after 2000

// let myBooks = books.filter((book) => (book.publish >= 2000))
// console.log(myBooks);

// books of non- fiction genre that has been published after 1980

// let myBooks = books.filter((book) => (book.genre === 'Non-Fiction' && book.publish >= 1980))
// console.log(myBooks);


// Map function example

newNums = []
newNums = myNums.map((num) => num*2)
// console.log((newNums));

// Chaining example , we can use multiple map() and filter() on one array

newNums = []

newNums = myNums
                .map((num) => num * 10)
                .map((num) => num+7)
                .filter((num) => num >= 40)

// console.log(newNums);

//  Reduce function
//  Read it in the documentation : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

let price = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let total = price.reduce((acc,curr)=> {
    // console.log(`acc : ${acc}, currVal: ${curr}`)
    return acc+curr
},0)
// console.log(total);

// One more practical example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let priceToPay = shoppingCart.reduce((acc,item)=> (acc+item.price),0)
// console.log(`Total price of your cart : ${priceToPay}`);