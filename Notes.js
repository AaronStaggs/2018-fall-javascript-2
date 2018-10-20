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

var tmp = {
    repeat3: function(x){
        for(var i=0; i <= 3; i++){
            x();
        }
    },
    hello: function(){
        console.log("Goodbye")
    }
}

function hello(){
    console.log("Hello")
}