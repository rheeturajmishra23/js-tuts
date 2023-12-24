// singleton

// object literals
const mySym = Symbol("key1")
//Non-Singleton Object
const jsUser = {
    // when there is a sapce between the key then you cannot access the object properties through dot notation
    "full Name":"Rheeturaj Mishra", 
    name:"rheeturaj",
    age:27,
    gender:'M',
    compeletedJs:false,
    [mySym] : "key1" //syntax for symbol
}
// console.log(jsUser.name);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser) // locks the properties of the object
jsUser.age = 30;
// console.log(jsUser)

jsUser.greet = function(){
    console.log(`Hello, ${this["full Name"]}`);
}
// jsUser.greet();

const tinderUser = new Object() // Singleton Objectconsole.log(tinderUser);
tinderUser.Id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Rheeturaj",
            lastName:"Mishra"
        }
    }
}
// merge two objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
const obj4 = Object.assign({},obj1,obj2,obj3)
const obj5 = {
    ...obj1,
    ...obj2,
    ...obj3,
    isMerged:true
}
// console.log(obj5);
// console.log(Object.keys(tinderUser)); // same for values
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// Destructuring

const course = {
    courseName:"js Hindi",
    price:999,
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor} = course
console.log(instructor);