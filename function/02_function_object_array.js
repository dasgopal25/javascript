function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

const User ={
    username: "Gopal",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(User)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,500,600]
 
function returnsecondValue(getArray){
return getArray[1]
}
console.log(returnsecondValue(myNewArray));