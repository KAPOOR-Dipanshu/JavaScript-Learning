const numbersForReal = [2,3,5,7,8,90,54]

const newNumbers = numbersForReal.map((item)=>{return item * 10})
console.log(newNumbers);

const newNumbers_2 = numbersForReal
                        .map((item)=> item * 10 )
                        .map((item) => item + 1 )
                        .filter((item) => item > 70)
console.log(newNumbers_2);

