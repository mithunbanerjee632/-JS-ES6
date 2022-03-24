//sprade operator

function addnumber(x,y,z){
  return x+y+z;
}

let number1=[1,2,3];
//console.log(addnumber(...number)); //passing value by sprade operator
let number2=[4,5,6];
let number=[...number1,...number2]; //concating two arrays
console.log(number);


