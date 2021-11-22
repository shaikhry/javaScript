const finddata = (str,substr)=>{
const arrstrr = str.split(" ");
 return arrstrr.indexOf(substr) !== -1;
};

console.log(finddata("i belong to pune city.","to"));
