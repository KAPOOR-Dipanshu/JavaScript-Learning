const pricesList = [3,3,3,3]

const totalPrice = pricesList.reduce((total,curr)=>{return total * curr},1)
console.log(totalPrice);