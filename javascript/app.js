var scanner=require("prompt-sync")();
// console.log("hello world");
// console.log("hi");
// var a=1;
// var b=3;
// console.log(a/b);
// console.log(a+a+b);
// var c=5;
// console.log((a+b)/c);
// var person={
//     name: "mg mg",
//     age: 19,
//     address: "sittway",
//     education:{
//         school:"B.E.H.S",
//         university:"computer university",
//     },
// };

// console.log(person);
// console.log(person.age);
// console.log(person.education.university);
// var input=scanner("what is your name:");
// console.log(input);

// var arr=['a','b','c','d','e'];
// arr.push('soju');
// arr[6]='Dagon';
// console.log(arr.length);
// console.log(arr[5]);

// var scanner=require("prompt-sync")();//to enter input
// var input = scanner("Enter something-");
// var A = [];
// if(isNaN(input))//is not number>>true,number>>false
// {
    
//     console.error("Invalid Input");
// } else {
//     A.push(input);
//     console.log(A);
// }
// var greeting = "";
// var hour = new Date().getHours();
// var hour = scanner("Enter something-");
// if(hour < 12){
//     greeting="Good morning";

// }else if(hour > 12 && hour < 16){
//     greeting="Good afternoon";
// }else{
//     greeting="Good Evening";

// }
// console.log(greeting);

//Operators
/*
+
-
=
/
%
++
--
*/
// var a=2;
// a++;
// console.log(5%2);
// console.log("Remainder"+2%5);
// console.log("Expotentation"+2**4);
// console.log(--a);
// console.log(a);
// var b=3;
// console.log(a*=b);

//#region assignment

//#region arithmethics

//#region String_concat

// var one="walking";
// var two='mg mg is'+one+'on the street';
// var three='on the street';
// var str='arr';
// console.log(str+'is array');
// console.log('$[str]is array');

// var one=1;
// var two=2;
// var three='3';
// console.log(one==three);

// sum=(a,b)=>{
//     return a+b;
// }
// log=(value)=>{
//     console.log('the answer is'+value);
// }
// var a=parseInt(scanner('Enter a number:'));
// var b=parseInt(scanner('Enter a numnber'));
// var result=sum(a,b);
// console.log(result);
var firstnumber,secondnumber;
var input1=scanner('Enter number');

if(isNaN(input1)){
    console.log('Invalid number');
    
}else{
    firstnumber=Number(input1);
    
}
var input2=scanner('Enter number');
if(isNaN(input2)){
    console.log('Invalid number');
    
}else{
  secondnumber=Number(input2);
}
sum=(firstnumber,secondnumber)=>{
        return firstnumber+secondnumber;
    }
    var result=sum(firstnumber,secondnumber);
    console.log(result);
 