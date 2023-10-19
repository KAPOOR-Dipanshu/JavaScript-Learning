function addTwoNumber(x,y) {
    // let result = x + y
    // return result
    return x + y
}
const answer = addTwoNumber(5,8)
// console.log("Result:",answer);

function loginUserName(username = "Sam") { 
    if(username === undefined){
        return `Please enter a user name`
    }
    return `${username} Just Logged in`
}
// here if there is no username passed to the funcrtion then it will take the default name
// console.log(loginUserName());

function calculateCartPrice(...num1) { 
    return num1
}
// here rest operator ... will collect all the inputs under one name like an array
// if there are any other parameter in the function after alocating values to them if they are first in order then rest will be allocated to
// console.log(calculateCartPrice(200,100,199,286));

const user = {
    name:"Dipanshu",
    price:699
}

function handleObject(anyObject) {
    console.log(`Course name is ${anyObject.name} and price is ${anyObject.price}`);
}
// above is an example of genric function to handle object
handleObject(user)
handleObject({
    name:"Chomu",
    price:999
})

// passing aray to function

const myNewArray = [111,243,232,122,699]

function handleTheArray(array) {
    return array[2]
}

console.log(handleTheArray(myNewArray));
// Direct passing
console.log(handleTheArray([100,200,300,400,900]));
