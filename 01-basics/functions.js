function sayMyName(){
    console.log("Rheeturaj")
}
// sayMyName -- reference
// sayMyName() -- execution

// for multiple arguments
function calculateCartPrice(...nums){
    return nums
}
console.log(calculateCartPrice(100,200,300,400,500));