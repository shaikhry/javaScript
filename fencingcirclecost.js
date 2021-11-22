const fencingcirclecost = (r,numberoflayer,rateofwire)=>{
    const pi=22/7;
    const parameterofshape = 2* pi * r;
    const fencingwirelength =parameterofshape*numberoflayer;
    const costofwire  =fencingwirelength * rateofwire;
    return costofwire;
};

console.log(fencingcirclecost(7,14,12));