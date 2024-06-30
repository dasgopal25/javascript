//***************number************************* 
// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber =23.88966
// console.log (otherNumber.toPrecision(4))

// const number = 1000000
// console.log(number.toLocaleString('en-IN'));

//+++++++++++++++++++ Maths ++++++++++++++

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4)) //positive to popsitive or nagetive to positive //4
console.log(Math.round(4.5)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.9)) //4

console.log(Math.min(4,3,6,8)) //3
console.log(Math.max(4,3,6,8)) //8

console.log(Math.random());
console.log(Math.random()*10);


const min = 10
const max = 20
 console.log(Math.floor(Math.random()* (max - min - 1)) + min)// * (max - min - 1)