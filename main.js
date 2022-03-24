//Rest pararmeter(...)

function caluculation(...numbers){
   let sum = 0;
   for(let i of numbers){
      sum =sum+i;
   }
   console.log(sum);
}
caluculation(1,2,3,4);
