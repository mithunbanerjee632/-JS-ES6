//Class Inhertitence:uttoradhikar sutre parent class er sob property child class peye jay
//super keyword:er madhhome child class er modhhe parent class theke propery and functiion k sorasori call kora jay

class parent{
  hello1(){
    console.log("Hello1 from parent class");
  }

  hello2(){
    console.log("Hello2 from parent class");
  }
}

class child extends parent{

 demo(){
   super.hello1();
   super.hello2();
 }

}

var obj = new child();
obj.demo();

