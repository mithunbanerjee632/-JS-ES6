//Arrow Function

//traditional function 
// function display1(){
//    console.log("this is tradition function");
// }
// display1();

//Arrow function 
// const display2 =()=>{
//    console.log("this is Arrow function");

// }
// display2();

//const display2 =()=>{console.log("this is Arrow function");}
//exaple1
// const display2 =()=>console.log("this is Arrow function"); //arrow function e curley bracket na dileo hobe
// display2();
//exaple2
// const display3 =()=>{return "this is Arrow function example1";}
// console.log(display3());
//exaple3
// const display4 =()=>"this is Arrow function example2"; //arrow te return and curley bracket na dileo hobe
// console.log(display4());


//traditional function with parameter

function add1(num1,num2){
  return num1+num2;
}

console.log(add1(10,20));

//Arrow function with parameter

//example with return and curley bracket

const add2 = (num1,num2) => {
   return num1+num2;
 }
 
 console.log(add2(30,20));

 //example without return and curley bracket

 const add3 = (num1,num2) => num1+num2;
 
 console.log(add3(50,20));