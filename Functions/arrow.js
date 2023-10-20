const user = {
    name:"Dipanshu",
    price:459,
    welcomemessage: function(){
        console.log(`${this.name} , Welcome to the website`);
        // console.log(this); 
        // here this will give reference to the current object scope where it is used
    }
}

// user.welcomemessage()
// user.name = "Akash"
// user.welcomemessage()

// console.log(this);
// here this will give reference to the global object scope which is empty currently

//  But when you console.log(this); in browser console it will return the referencr of Window which is a global object in browser

// this keyword can not be used in a function only shown below

// function chai() {
//     let username = "Dipanshu"
//     console.log(this);
// }

// chai()

// Arrow Function
const addTwo = (n1,n2) => {
    return n1+n2
}
console.log(addTwo(3,6));

// Implicit return
const addTwo2 = (n1,n2) => n1+n2 // or (n1+n2) can also be used
console.log(addTwo2(3,6));

// Returning an object in arrow function
const addTwo3 = (n1,n2) => ({sum:`${n1+n2}`})
console.log(addTwo3(3,6));

// Fallsy Values that are ment to be interpreted false
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// special truthy values
// "0","false"," ",[],{},function(){}

// Nullish Coalecing operator (??) : null undefined
let var1;
// var1 = 5 ?? 20
// var1 = null ?? 20
var1 = undefined ?? null ?? 45
console.log(var1);
// priority anything > null > undefined

// Ternary operator : Condition ? true : false