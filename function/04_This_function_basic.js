const user = {
    uername: "gopal",
    price: 999,

    welcomesms:function(){
        // console.log(`${this.uername}, welcome to website`);
       
    }
}

user.welcomesms()
// user.uername ="sam"
// user.welcomesms()

// console.log(this)

// function chai (){
//     let username = "hitesh"
//     console.log(this.uername)
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//arrow

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,8));

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,8));