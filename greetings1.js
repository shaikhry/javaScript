function greeting(time) {
if(typeof time !== "number") {
 return "please provide a valid input";
}

     if(time >=6 && time <12){
        return "good morning";
    }else if (time >= 12 && time <16){
        return "good noon";
    }else if (time >=16 && time <19){
        return "good evening";
    }else {
        return "good night";
    }
}

console.log(greeting(7));

// function greeting(time){
// if(typeof time !== "number") {
//     return "please provide a valid input";
// }

// if (time >=6 && time <12){
//     return "good morning";
// }else if (time >= 12 && time <16){
//     return "good noon";
// }else if(time >=16 && time <19);{
//     return "good evening";
// }  else {
// return "good night"
// }

// console.log(greeting(10));