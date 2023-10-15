console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0); //true
/*
this is because the comparison operator and equal operator works differently in comparison it treats null as integer as 0 and in equality it treats it as NaN
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// string comparison with integer
console.log("2" > 1);
console.log(2 > "0");

// strict check it does not converts the data type instead check for the data type as well
console.log("2" === 2); 