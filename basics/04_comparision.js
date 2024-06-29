console.log(null >0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// The reason is that an equality check == and comparisioons >, <, >=, <=, work differently
//Coomparisions convert null to a number,treating it as 0.