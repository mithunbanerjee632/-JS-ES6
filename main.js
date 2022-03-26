//Class Inhertitence:uttoradhikar sutre parent class er sob property child class peye jay

class parent{
  hello1(){
    console.log("Hello1 from parent class");
  }

  hello2(){
    console.log("Hello2 from parent class");
  }
}

class child extends parent{

  hello1(){
    console.log("Hello1 from function..hello hello...i am from child"); //method overriding cz parent er theke child er provab besi
  }

}

var obj = new child();
//var obj = new parent();

obj.hello1();
//obj.hello2();