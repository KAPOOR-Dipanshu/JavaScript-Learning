//  For Of

const greeting = "Hello world!"

for (const i of greeting) {
    // console.log(`Character is : ${i}`);
}

// Map

const map = new Map()
map.set('A',1)
map.set('B',2)
map.set('C',3)
map.set('D',4)
map.set('E',5)
map.set('E',5)

// console.log(map);

for (const [char,val] of map) {
    // console.log(`${char} : ${val}`);
}

// For of can not be used over object datatype
// We use for in for object

const herosGame = {
    name:"Batman",
    score:29,
    health:99,
    power:"Fast",
    age:69
}

for (const key in herosGame) {
   console.log(key,':',herosGame[key]);
}