//Array method :find() and findIndex()
//find(callback,value)->return the value of the first element that match the certain condition
let numbers1 =[5,55,14,78,22]
let evenNumber=numbers1.find(x => x%2 === 0) //first jar sathe condition match hobe seta return korbe
console.log(evenNumber);

//findIndex():return the value of the first Index number which match the certain condition

let numbers2 =[5,55,14,78,22]
let evenNumberIndex=numbers2.findIndex(x => x%2 === 0) //first jar sathe condition match hobe tar index  return korbe
console.log(evenNumberIndex);