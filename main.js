//for of loop

let names =['Mithun Banerjee','Puja Mukherjee','Modhuchandrima Banerjee'];

for(let name of names){
   console.log(name); //names er element gula ekta ekta kore name er vitor asbe
}


//for in (object k iterate korar jonno use kora hoy)

let details ={
   id:141,
   name:"mithun banerjee",
   department:"cse"
}

for(let i in details){
   //console.log(i);   //eta sudhu key return korbe
   console.log(`${i}: ${details[i]}`);
}
