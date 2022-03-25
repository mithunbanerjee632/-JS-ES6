//static property:static er somporko holo class er sathe object er sathe noy

class myClass{
  nonStaticProperty(){
    console.log("i am non -static property");
  }

  static StaticProperty(){
    console.log("i am a static property");
  }
}

var obj = new myClass();
obj.nonStaticProperty(); // static property na hole object create kore call korte hoy

myClass.StaticProperty(); //static property hole class diye sorasori call korte hoy