//Arrow Function

//traditional function 
 var student =[
   {
     id:101,
     name:'mithun',
     cgpa:2.30
   },
   {
    id:102,
    name:'puja',
    cgpa:3.30
  },
  {
    id:103,
    name:'mridul',
    cgpa:4.30
  },
  {
    id:104,
    name:'partho',
    cgpa:4.65
  }
 ]

 function studentNames(){
   return student.filter(function(x){
      return x.cgpa>3;  //jader cgpa 3 er upore tader details return korbe
   }).map(function(y){
      return y.name;    //jader cgpa 3 er upore tader name return korbe
   });

   
 }

 console.log(studentNames());
//Arrow function 


