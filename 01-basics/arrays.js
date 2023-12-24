const arr = [0, 1, 2, 3, 4, 5]
// console.log(arr)
const myHeros = ["SuperMan","SpiderMan","Joker"];
myHeros.push(8) // appends
myHeros.unshift(9) // adds in the start
myHeros.shift() // -- pops from start
myHeros.pop() //--pops from end
// console.log(myHeros)

const newArray = arr.join() //converts into string
// console.log(`${newArray}\n${typeof newArray}\n${arr}\n${typeof arr}`);
// Slice & splice
const newArr1 = new Array(0,1,2,3,4,5,6)
let slice = newArr1.slice(1,4)
// console.log(`slice: ${slice} after slice : ${newArr1}`);
let splice = newArr1.splice(1,4)
// console.log(`slice: ${slice} after splice : ${newArr1}`);

const marvelHeros = ["x","y","z"]
const dc = ["a","b","c","d"]
// marvelHeros.push(dc)
// console.log(marvelHeros);
// const heros = marvelHeros.concat(dc) // concat returns a new array
const heros =[...marvelHeros , ...dc]
// console.log(heros);

const anotherArr = [1,2,[3,4,5],6,7,8,[9,10,[11,12,13,14,[15,16,17,18,[19,[20,[21,22]]]]]]]
console.log(anotherArr.flat(6));