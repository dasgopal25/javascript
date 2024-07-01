//const tinder = new Object()
const tinderUser = {}
tinderUser .id = "112asd"
tinderUser.name = "Goppal"
tinderUser.isLoggedIn = false
//  console.log(tinderUser);  //{ id: '112asd', name: 'Goppal', isLoggedIn: false }

const regularUser = {
    email : "dasgopal@google.com",
    fullname:{
        Userfullname:{
            firstname:"gopal",
            lastname: "das"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.Userfullname);
// console.log(regularUser.fullname.Userfullname.firstname);
// console.log(regularUser.fullname.Userfullname.lastname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3) 

const obj3 ={...obj1, ...obj2}
console.log(obj3);

const user =[
    {
        id:1,
        emali:"dasgopal@"
    },
    {
        id:1,
        emali:"dasgopal@"
    },
    {
        id:1,
        emali:"dasgopal@"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'));