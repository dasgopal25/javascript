const course ={
    course: "javascript",
    price: "999",
    courseInstructor:"Gopal"
}
console.log(course.courseInstructor);
const {courseInstructor: instructor} =course
// console.log(courseInstructor); 
console.log(instructor); 
/*{
"name" = "Gopal",
"lasname" = "das",
"add" ="Dantan",
"pin" = "721426"
}*/