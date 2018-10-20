// var newThings = ["dog", "horse", "cat", "mouse"]

// for(var i = 0; i < newThings.length; i++){
//     console.log(newThings[i]);
// }
// var table = [
//     ["a", "b", "c", "d"]
//     ["e", "f", "g", "h"]
//     ["i", "j", "k", "l"]
//     ["m", "n", "o", "p"]
// ]

// for(var i = 0; i < table.length; i++){
//     var newTable = table[i]
//     for(var j = 0; j < newTable.length; j++){
//     console.log(newTable[j]);
//     }
// }

// var WTF = [{
//     firstname: 'Aaron', lastname: 'Staggs', age: 32
//     },
//     {
//     firstname: 'Jackie', lastname: 'Staggs', age:29
//     },
//     {
//     firstname: 'Mario', lastname: 'Staggs', age: 2
//     }
//     ]

// for(var i = 0; i < WTF.length; i++){
//     console.log(WTF[i].firstname);
// }

// function useObject(ourObject){
//     ourObject[1].firstname;
// }

// var tmp = {
//     repeat3: function(x){
//         for(var i=0; i <= 3; i++){
//             x();
//         }
//     },
//     hello: function(){
//         console.log("Goodbye")
//     }
// }

// function hello(){
//     console.log("Hllo")
// }


var Maths = {
    add: function(x, y){
        // return x + y;
        var sum = x + y
        console.log(sum)
    },
    subtract: function(x, y){
        //return x - y;
        var sub = x - y
        console.log(sub)
    },
    divide: function(x, y){
        //return x / y;
        var div = x / y
        console.log(div)
    },
    multiply: function(x, y){
        //return x * y;
        var mul = x * y 
        console.log(mul)
    }
}

Maths.add(5,4)
Maths.subtract(5,4)
Maths.divide(5,4)
Maths.multiply(5,4)