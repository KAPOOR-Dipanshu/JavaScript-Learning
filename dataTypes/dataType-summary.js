// Primitive data types
/*
7 Types : String , Bolean , null , undefined , symbol , Number , BigInt
*/ 
let name = "dipanshu";
const score = 100
const score_value = 23.876
const isloggedin = true
const kaam = null
let job ;
const bigNumber = 37487857297497953n

// console.table([typeof(name), typeof(score),typeof(score_value),typeof(isloggedin),typeof(kaam),typeof(job),typeof(bigNumber),]);

// Reference (Non Primitive)
/*
Array , Objects , Functions
*/ 
// Arrays
const pocketMoney = ["Notes","Coins","Cards",200];
// console.log(typeof(pocketMoney[3]));
// Objects
let myPassbook = {
    name:"Dipanshu Kapoor",
    age:21,
    class:"12",
    girlfriend:"No"
}
// console.log(myPassbook);
// *******************************************************************************************************

// Memory :-
// STACK(Primitive Datatypes) , HEAP(Non Primitive Datatypes)

let myName = "Dipanshu"

let yourName = myName
yourName = "Shivkant"

console.log(yourName);
console.log(myName);

//  Here the value of myName doesnot changed because here we have used stack memory which uses call by value {copy}

let myname = {
    name:"Dipanshu",
    age:10
}

let yourname = myName
yourname.name = "Shivkant"

console.log(yourname);
console.log(myname);