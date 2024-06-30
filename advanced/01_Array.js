//array

// const arr = [1,2,3,4,5,6,7]
// const myHeors = ["gopal","naagraj"]
// const arr1 = new Array(1,2,3,4,5)
// console.log(arr[0]);

//Array methods

const arr1 = new Array(1,2,3,4,5)
 console.log(arr1+" ori");

//  arr1.push(6)
//  arr1.push(7)
//  arr1.pop()
//  arr1.unshift(9)
//  arr1.shift()
// console.log(arr1.includes(9));
// console.log(arr1.indexOf(7))
//  console.log(arr1);


//  const newarr = arr1.join()

//  console.log(arr1);
//  console.log(newarr);


//slice,splice
console.log("A ",arr1);
const myn1 = arr1.slice(1,3)
console.log(myn1)
console.log("B ",arr1);

const myn2 = arr1.splice(1,3)
console.log("C ",arr1);
console.log(myn2)