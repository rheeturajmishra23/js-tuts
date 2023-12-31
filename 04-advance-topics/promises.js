const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=> {
        console.log(`hello ${Date.now()}`)
        resolve()
},2000)
    
})
promiseOne.then(()=> console.log(`promise-ONE consumed`))

const promiseTwo =  new Promise(function(resolve,reject){
    setTimeout(()=> {
        const err = false; // just to run both the cases
        if(!err){
            resolve({username:'rheeturaj',password:'123'})
        } else {
            reject('ERROR: JS went wrong');
        }
    },1000)
})
// Promise Two Consumption
promiseTwo
.then(function(user){
    return user.username
})
.then(function(username){
    console.log(`${username[0]} is the first one from promise two`);
})
.catch(function(error){
    console.log(`-----Promise Rejected----- :\n${error}`);
})
.finally(()=>console.log("Promise-TWO consumed."))

const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(()=> {
        const err = true; // just to run both the cases
        if(!err){
            resolve({language:'javascript',extension:'js'})
        } else {
            reject('ERROR: JS went wrong');
        }
    },1000)
})

async function consumePromiseThree(){
    try {
        const response = await promiseThree
        console.log(response);    
    } catch (error) {
        console.log(error);
    } finally {
        console.log("promise-THREE Consumed");
    }
}

consumePromiseThree()

// async function handleUsernameApi(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json() // this will also take time so we are adding await keyword
//         console.log(data)    
//     } catch (error) {
//         console.log(`E: ${error}`);
//     } finally {
//         console.log('promise-handleUserNameApi consumed');
//     }
// }

// handleUsernameApi()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(`Something went wrong ${error}`)
})
.finally(()=>console.log(`UserName api access using then(),catch(),finally()`))