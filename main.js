//Map:collection of data.jekhane key and value pairing obostha thakbe
var myMap = new Map();
myMap.set("key1","Bangladesh");
myMap.set("key2","India");
myMap.set("key3","Srilanka");
myMap.set("key4","Maldives");
myMap.set("key5","Bhutan");
myMap.set("key6","Afghanistan");
myMap.set("key7","Pakistan");
//console.log(myMap.values()); //value er jonno values() method call korte hobe..egulor value array return kore
//console.log(myMap.keys()); //Key er jonno Keys() method call korte hobe.egulor Key array return kore

//myMap.delete("key1")
//myMap.delete("key2") //key dhore deleter kore dibe 
myMap.clear(); //sob pair gulo k clear kore dibe

for(let myvalue of myMap.values()){   // jehetur array return kore tai for of loof chalate hobe
    console.log(myvalue);
}

