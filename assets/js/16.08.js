// conditions

// 1- if, else if, else 

if(true) {
    console.log("i have done something")
}

if(0=="0") {
    console.log("i have done something2")
}

let time = 9
time =12

if (time ==9) {
    console.log("it's 9")
}

else if (time == 10) {
    console.log("it's 10")
}

else if (time == 11) {
    console.log("it's 11")
}
else {
    console.log("who cares")
}

// And and Or
console.log(true && true) //true 
console.log(true && false) // false
console.log((3=='3') && (1==true)) // true 

// Morgen, Tag, Abends, Nachts
// Morgen: 6-10uhr
// Tag: 10-17uhr
// Abends: 17-20uhr
// Nachts: >20

time = 6
if (time >6 && time < 10) {
    console.log ("Good Morning")
}

if (time > 10 && time < 17) {
    console.log ("Good Afternoon")
}

if (time > 17 && time < 20) {
    console.log ("Good Evening")
}

if (time > 20 && time < 20) {
    console.log ("Good Night")
}





