const name = "Dipanshu"
// console.log(name);

const newName = new String('Dipanshu-Kapoor-Btech-Computer-Science')
// console.log(newName.charAt(0));
// console.log(newName.toLowerCase());
// console.log(newName.toUpperCase());
// console.log(newName.charAt(3).toUpperCase());
// console.log(`Hello my name is ${name}`);

const newGame = newName.substring(0,9) // if you use negative values it will ignoge it
// console.log(newGame);

const newString = newName.slice(5,-newName.length) // you can use negative values in this
// console.log(newString);

const anotherString = "     Dipanshu    " //it removes the empty spaces from both the ends
// console.log(anotherString.trim());
// console.log(anotherString.trimStart());
// console.log(anotherString.trimEnd());
const fresh = newName.replace('-','@') // it replaces the first occurence of the searched string
console.log(fresh); // we can use replaceAll to change all the occurences 
console.log(fresh.split('-')); // it makes the string splits into parts with itratoor equal to string given