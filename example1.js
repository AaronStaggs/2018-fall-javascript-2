var number = 99
var text = "bottles of beer on the wall"

/* while(number >= 99 ){
    console.log(number + " " + text + " " + number + " " + "bottles of beer take one down pass it around")

    number --;
} */

// For loop

for(var num = 99; num > 0; num--){
    console.log(num + " " + text);
    console.log(num + " " + "Bottles of Beer");
    console.log("Take one down, pass it around");
    if((num - 1) != 0) {
    console.log((num - 1) + " " + text);
        } else {
        console.log("No more"+" "+ text);
    }
    console.log(" ");
}



