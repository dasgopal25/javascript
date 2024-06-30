const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
//  console.log(marvel_heros);//["thor","Ironman","spiderman",["superman","flash","batman"]]

// const all = marvel_heros.concat(dc_heros)
// console.log(all)

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("gopal"));
console.log(Array.from("gopal"));

let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3));