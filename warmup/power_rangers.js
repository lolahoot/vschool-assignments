var powerRangers = ["Jason", "Kimberly", "Billy", "Kimberly", "Trini",  "Zack", "Kimberly"];

var kimberlyArray = [];
for (var i = 0; i < powerRangers.length; i++) {
    if(powerRangers[i] === "Kimberly") {
        kimberlyArray.push(i);
    }
}
console.log(kimberlyArray);

.indexof(item)
var index = powerRangers.indexOf("Jason");
powerRangers.splice(index, 1);
console.log(powerRangers);

