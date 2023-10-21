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

//  Using Filters
let newMobile = mobilePhones.filter((item) => item.chip > 1500)
// console.log(newMobile);

// Using ForEach
let newPhone = []
mobilePhones.forEach((item)=>{
    if(item.chip > 1200){
        newPhone.push(item)
    }
})

console.log(newPhone);