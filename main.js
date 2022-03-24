//for vs foreach loop

//for loop

// var numbers =[10,20,30,40,50];
// for(var x=0;x<numbers.length;x++){
//    console.log(numbers[x]);
// }



//forEach loop

var numbers =[10,20,30,40,50];

// numbers.forEach(myfunction)     //foreach sobsomoy function receive kore

// function myfunction(x){    //ekta ekta element myfunction e dhukbe r x parameter ta rcv kore print krb
//    console.log(x);
// }

numbers.forEach(function(x){   //anonymous function
   console.log(x);
})

