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
console.log(typeof(pocketMoney[3]));
// Objects
let myPassbook = {
    name:"Dipanshu Kapoor",
    age:21,
    class:"12",
    girlfriend:"No"
}
console.log(myPassbook);
