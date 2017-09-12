//function sum(a, b) {
//    return (a + b)
//}
//console.log(sum(3, 4));

//var numbers = [1,2,3]
//function largest() {
//    return Math.max.apply(Math, [1,2,3]);
//};
//console.log(largest());


//var i = 3;
//function evenOdd(a) {
//    if ((i % 2) === 0) {
//    console.log("odd number")
//    } else {
//    console.log("even number")
//    }
//};
//evenOdd(4);

var fullString = "Scott is the best! ";

function string(a) {
    if (a.length <= 20) {
        return (a + a);
    } else {
        return a.slice(0, a.length / 2 );
            }
    }
    console.log(string(fullString));
    //console.log(string("this is another string"));

    //Dallin's code
    //function bonusFunc(ary) {
    //    var bonusArray = [];
    //    for (var i = 0; i < ary.length; i++) {
    //        if (i % 2 === 1) {
    //            bonusArray.push(ary[i]);
    //            bonusArray.push(ary[i - 1]);
    //        }
    //    }
    //    return bonusArray.join(" ");
    //
    //    // Kit's code
    //    function reverseEveryOtherWord(arr) {
    //        var reverseEveryOtherWordArray = [];
    //
    //        for (var i = 0; i < arr.length; i += 2) {
    //            reverseEveryOtherWordArray.push(arr[i]);
    //        }
    //
    //        for (var i = 1; i < arr.length; i += 2) {
    //            var grabEveryOther = arr.slice(i, (i + 1));
    //            reverseEveryOtherWordArray.splice(i - 1, 0, grabEveryOther);
    //        }
    //
    //        console.log(reverseEveryOtherWordArray.join(" "));
    //    }
    //
    //    reverseEveryOtherWord(lyrics);
    //}
