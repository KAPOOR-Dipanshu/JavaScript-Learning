const myHeros = ["Batman","Superman","Spiderman"]
const mynewHeros = ["flash","Wonderwomen","Thor"]

// myHeros.push(mynewHeros); // It adds the complete new array as an single entity to the array
// console.log(myHeros);

const heros = myHeros.concat(mynewHeros) // Concat creates a new array with concatinating the elements seperatly
// console.log(heros);

const bestHero = [...myHeros , ...mynewHeros] // spread operator works similarly like concat but generally prefered because of multiple inputs
// console.log(bestHero);

const arrayInArray = [1,2,3,[4,5,6],7,[8,[9,10]],11]

const newFlatarray = arrayInArray.flat(Infinity) // flat is used here to flatten the nested array into single array and takes the input for resolving depth we can pass Infinity to make it flat all over
// console.log(newFlatarray);

console.log(Array.isArray("Dipanshu")); // it checks if the input in the function is an array or not
console.log(Array.from("Dipanshu")); // this creates the array from given input type
console.log(Array.from({name:"Dipanshu"})); // while passing the obejcts of key value pairs we have to tell on wich iterator either key / value the array has to be created

let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3)); // Returns a new array from a set of elements.