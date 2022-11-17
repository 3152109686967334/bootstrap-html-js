//ES6
// function sum(){
//     return 'this is sum';
// }
// console.log(sum());
// //ES6
// //arrow function
// sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(1,2));
// log=(value)=>{
//     console.log('the answer is'+value);
// }
// var result=sum(1,2);
// log(result);

var scanner=require("prompt-sync")();

var firstnumber=parseInt(scanner('Enter number'));
var secondnumber=parseInt(scanner('Enter number'))

sum=(firstnumber,secondnumber)=>{
    return firstnumber+secondnumber;
}
if(isNaN(firstnumber,secondnumber)){
    console.log('Invalid number');
    
}else{
    
    console.log(sum(firstnumber,secondnumber));
}  

    