//Set:collection of data.as like as map...but map er vitor duplicate value rakha jay ,set er vitor duplicate value rakha jay na

var mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
mySet.add("Nepal");
mySet.add("Bhutan");
mySet.add("Srilanka");
mySet.add("Maldiv");
mySet.add("India"); //ei duplicate value avoid korbe

//console.log(mySet);
//mySet.clear(); //sob kicu remove kore dibe
//mySet.delete("Maldiv"); //specific value k delete kore dibe
//console.log(mySet.size); // set er size ber korbe
//console.log(mySet.values());

if(mySet.has("India")){
  console.log("Yes");
}else{
  console.log("No");
}
 