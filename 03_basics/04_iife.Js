// Immeddiately Invoked Function Expression (IIFE)

(function chia(){
     console.log(`DB CONNECTED`);

}());



(( name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})('vivek')