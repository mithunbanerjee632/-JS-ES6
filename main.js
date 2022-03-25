//Array Destructuring

//let numbers =[10,20,30,40,50]
//let [num1,num2,num3,num4,num5]=numbers //array er value gulo k variable er vitor assign kora hoice
//let [num1,num2,...z]=numbers //array er value gulo k variable er vitor assign kora hoice

//console.log(num1);
//console.log(z);

//swap variables destructuring

// let a=20,b=30;

// [a,b]=[b,a]

// console.log(a);
// console.log(b);

//object destructuring

// let studeninfo ={
//   id:100,
//   name:'mithun banerjee',
//   gpa:5.00,
//   languages:{
//     native:'bangla',
//     beginer:'english'
//   }
// }

//traditional system

//console.log(studeninfo.id);
//console.log(studeninfo.name);

//Es6 system

// const {id,name,gpa}=studeninfo
// console.log(id);
// console.log(name);
// console.log(gpa);

// const {name,languages} =studeninfo
// console.log(name);
// console.log(languages);
// console.log(languages.native);

//function parameter destructuring

const studentInfo =({name,department})=>{
     console.log(`${name}, ${department}`);
}

const student ={
  name:'mithun banerjee',
  department:'cse'
}
studentInfo(student);


