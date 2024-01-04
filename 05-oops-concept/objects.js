const user = {
    username:'rheeturaj',
    isSignedIn:true,
    loggedIn: 12
}
// console.log(user.username);

// But what if I want to create multiple users ...Then we can use Constructor.

function User(username,isSignedIn,loggedIn){
    this.username = username
    this.isSignedIn = isSignedIn
    this.loggedIn = loggedIn

    return this
}
/* Add 'new' keyword to understand ..bu tfirst read all the comments
    const userOne = User('rheeturaj',false,0)
    const userTwo = User('h',true,90)
    console.log(userOne); 
*/ 
// here the username, and other properties got overwritten by the the userTwo data
// this is because of 'new' keyword is missing. so we are not asking to get a new instance.
// This is the use of new

