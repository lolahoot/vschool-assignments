var captainPlanet = [“Earth”, “Wind”, “Water”, “Fire”, “Heart”];
for (var i = 0; i < captainPlanet.length; i++) {    
    console.log(captainPlanet[i]);
}
var backwards = [];

for (var i = 0; i < captainPlanet.length; i++) {  
    var arrStr = captainPlanet[i].split("");
    console.log(arrStr)
    var reversed = arrStr.reverse();
    backwards.push(reversed.join(""));
 //this is the same above and below... the underneath is the more likely to be seen.
}
for (var i = 0; i < captainPlanet.length; i++) {
backwards.push(captainPlanet[i].split("")reverse().join(""));
}
//console.log(reversed.join(""));
//console.log(backwards);

//function declaration
sayHi1()
sayHi2()
function sayHi1() {
    console.log("Hi from func declaration")
}

//function expression
var sayHi2 = function() {
    console.log("Hi from func expression")
}
//running the code this way - sayHi2 won't run because sayHi2 wasn't defined before being called.
//function hoasting the computer reads all declrations first in case a function is called in the code, expressions are not hoasted.



