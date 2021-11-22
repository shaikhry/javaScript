const fencingtrianglecost = (a,b,c,numberoflayer,rateofwire)=>{
    const parameterofshape = a+b+c;
    const fencingwirelength =parameterofshape*numberoflayer;
    const costofwire  =fencingwirelength * rateofwire;
    return costofwire;
};

console.log(fencingtrianglecost(3,5,7,5,10));