//  Arrays Methods
const myArr = [0,1,2,3,4]
// console.log(myArr);

myArr.push(5) // add an element at the last
// console.log(myArr);
myArr.push(6)
// console.log(myArr);
myArr.pop() // removes element from the last
// console.log(myArr);

myArr.unshift(9) // Elements to insert at the start of the array
// console.log(myArr);
myArr.shift()// Removes the first element from an array and returns it.
// console.log(myArr);

console.log(myArr.includes(5)); // Determines whether an array includes a certain element, returning true or false 
console.log(myArr.indexOf(5)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string
// console.log(newArr);
// console.log(typeof newArr);

const mynArr = myArr.slice(1,3) // it makes the copy of slice content and out into new array
console.log('Orignal array :', myArr);
console.log('new array :', mynArr);

const mynArr_2 = myArr.splice(1,3) // it removes the spliced content from orignal array also and put the splice in new array
console.log('Orignal array :', myArr);
console.log('new array :', mynArr_2);
