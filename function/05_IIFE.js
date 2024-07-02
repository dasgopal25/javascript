//Immediately Invoked Function Expressions(IIFE)


(function chai() {
    //NAME IIFE
    console.log(`DB CONNECTED`);
})();    // IMPORTANT ( ; LINE END)

((NAME) => {
    //SIMPLE IIFE
    console.log(`DB CONNECTED TWO ${NAME}`);
})("GOPAL")