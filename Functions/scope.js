let a = 10
c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// here var keyword does not allow the functionality of scopes  
// console.log(`Global Scope Variable :`,a);
// console.log(b); this will not be able to access the value of b because of the scope 
// console.log(c); this will be able to access the value of c because of the no scope property in var


function one(num1) {
    return num1
}
// console.log(one(4)); // this can execute even before function declaration

const two = function(num2){
    return num2
}
console.log(two(7)); // this can not be executed before function declaration because of the concept called hoisting

