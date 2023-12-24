function sayMyName(){
    console.log("Rheeturaj")
}
// sayMyName -- reference
// sayMyName() -- execution

// for multiple arguments
function calculateCartPrice(...nums){
    return nums
}
// console.log(calculateCartPrice(100,200,300,400,500));

// function
//  example of scopes
if (true) {
    let a = 10
    const b = 20;
    var c = 40;
}
// console.log(a); // -- throw error
// console.log(b); // -- throw errror

// console.log(c); // -- will return 40 which is the issue with var ie it is not block scoped
function one() {
    const userName = "rheeturaj"
    function two() {
        const website = "https://google.com"
        console.log(userName)
    }
    two()
    // console.log(website); //-- throw error as out of scope
}
// one()
// console.log(userName); //-- throw error

// ++++++++++++ Mini-Hoisting +++++++++
// console.log(abc('rheeturaj')) // calling it before the function declaration will not cause any issue
function abc(user){
    return `hello, ${user}`
}

// console.log(def('rheeturaj')) //here it will throw an error , need to check on this more in future
const def = function(user){
    return `hello, how are you ${user}?`
}

// Arrow function & this keyword

user = {
    userName:"rheeturaj",
    isLoggedIn: false,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website`);
    }

}
// console.log(user.welcomeMessage());
// user.userName = "Sam"
// console.log(user.welcomeMessage());

// console.log(this); // in node env -- this object is empty but in browser it will have Window

function abc(){
    let username = "rheeturaj"
    // console.log(this); // this will have alot of functions and objects
}

const abcd = ()=> {
    // console.log(this) // this will have empty object
    return `with return statement`
}
const abcde = () => `without return statement` // arrow function example

const abcdef = () =>({objectProperty: `returning an object property`})

// console.log(abcd())
// console.log(abcde())
// console.log(abcdef());


//  IIFE (Immediately Invoked Function Expression)
//  for use case : https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function abc(){
    console.log("hello, world")
})()


