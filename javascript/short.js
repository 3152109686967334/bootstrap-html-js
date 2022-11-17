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