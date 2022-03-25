//constructor: constructor hocce class er nijossho function or method.class er object jokhon create kora hoi tokhon constructor automatic call hoy.onnano function er moto constructor sudhu return korte pare na
class myClass{
  constructor(a,b){
    //console.log(a+b);
    this.firstNum = a //class variable
    this.secondNum=b
  }

  add(){
    console.log(this.firstNum+this.secondNum);
  }

}
let obj = new myClass(10,20);
obj.add();



