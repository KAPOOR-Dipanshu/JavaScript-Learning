// const tinderUser = new Object() // singelton object

const tinderUser = {} // non Singelton object
tinderUser.id = 234
tinderUser.name = "Dipanshu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"Dipanshu@google.in",
    name : {
        fullName : {
            firstName : "Dipanshu",
            lastName : "Kapoor"
        }
    }
}

// console.log(regularUser.name.fullName.lastName);

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"a" ,4:"b"}
const obj3 = {5:"a" ,6:"b"}

// const obj4 = {...obj1,...obj2,...obj3} 
const obj4 = Object.assign({},obj1,obj2,obj3) // Another method of combining the object it combines and store to the first argument passed in the assign function
console.log(obj4);

// console.log(Object.keys(obj4));  // it returns the values in the form of arrays
// console.log(Object.values(obj4)); // it returns the values in the form of arrays
// console.log(Object.entries(obj4)); // it returns the values in the form of arrays

console.log(tinderUser.hasOwnProperty('name')) // returns the boolean value for presence of perameter in the object


const course = {
    name:"JS HINDI",
    price:999,
    courseInstructor:"Dipanshu"
}

const {courseInstructor:instructor} = course

console.log(instructor);