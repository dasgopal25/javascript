//singleton
Object.create


//object literls
const mysym = Symbol("key1")
const Jsuser ={
    name:"Gopal",
    age:18,
    "full name" : "Gopal Das", 
    [mysym]: "kuch bhi",
    location:"Dantan",
    email:"dasgopal",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}


console.log(Jsuser.name)
console.log(Jsuser.age)
console.log(Jsuser["full name"])
console.log(Jsuser[mysym]);

Jsuser.age = 22
console.log(Jsuser.age)
// Object.freeze(Jsuser)
Jsuser.email ="dasgopal01978@gmail.com"
console.log(Jsuser);

Jsuser.greeting =function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo =function(){
    console.log(`Hello JS user, ${this.location}`);
}
console.log(Jsuser.greeting());//[Function (anonymous)]
console.log(Jsuser.greetingTwo());

