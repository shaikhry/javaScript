const fencingrectcost=(l,b,Numberoflayer,rateofwire)=>{
const parameterofshape=l+b+l+b;
const fencingwirelength = parameterofshape*Numberoflayer;
 const costofwire = fencingwirelength * rateofwire;
 return costofwire
};

console.log(fencingrectcost(30,40,4,12));







