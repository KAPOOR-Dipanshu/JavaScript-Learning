const languages = ['python','cpp','java','ruby','swift']

// simple functions in for each
languages.forEach(function (item) {
    // console.log(item);
})

// arrow functions in for each
languages.forEach((item) => {
    // console.log(item);
})

// Multiple values comes in argument in for each loop

languages.forEach(function (item ,key ,arr) {
    // console.log(item,':',key,':',arr);
})

// using external function in for each
languages.forEach(printMe)

function printMe(item) {
    // console.log(item);
}

// For Each loops for array of object
const mobilePhones = [
    { 
        name:"Samsung",
        chip:1462
    },
    { 
        name:"Oppo",
        chip:1460
    },
    { 
        name:"Redmi",
        chip:1458
    },
    { 
        name:"Lava",
        chip:3262
    }
]

mobilePhones.forEach(function (item) {
    console.log(item.name,":",item.chip);
})