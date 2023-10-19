let a = 10
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// here var keyword does not allow the functionality of scopes  
console.log(`Global Scope Variable :`,a);
// console.log(b);
console.log(c);