//  singleton obects are created when created by constructor
//  Obect.crete()

// Object by literals basically key value pairs

const mySym = Symbol("Kaise ho theek ho")

const JsUser = {
    name:"Dipanshu",
    "full name": "Dipanshu Kapoor",
    [mySym]: "Hola Amigo", // way to use symbol in objects as key
    age:18,
    location:"Delhi",
    email:"Dipanshu@google.com",
    isLoggedIn: false,
    lastLogin: ["monday","saturday"]
}

// console.log(JsUser["full name"]); // way to access any key which is " " form
// console.log(JsUser.email); // way to access any key generaly
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]); // syntax to access any symbol value

JsUser.email = "Dipanshu@chatgpt.com"
// Object.freeze(JsUser) // this is used to feeze the details once used cant change any key pair value
JsUser.email = "Dipanshu@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser How are you ? ");
}
 
JsUser.greeting();

JsUser.greetings = function() {
    console.log(`Hi ${this.name} your age is ${this.age}`); // this is used to point the object with which function is used
}

JsUser.greetings();