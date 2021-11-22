function fizzbizz (num){
 if(typeof num  !== "number"){
   return "not a valid number"
 }else if ( num % 3 === 0 && num % 5 === 0){
     return "fizzbizz";
 }else if (num % 3 === 0){
     return "fizz";
    
}else if (num % 5 ===0){
    return "bizz";
   }   else{
        return "not a fizzbizz number";
    }
}

console.log(fizzbizz(11));