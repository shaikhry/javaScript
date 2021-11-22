const fencingsquarecost = (a,numberoflayer,rateofwire)=>{
    const parameterofshape = a+a+a+a;
    const fencingwirelength =parameterofshape*numberoflayer;
    const costofwire  =fencingwirelength * rateofwire;
    return costofwire
};
    
    console.log(fencingsquarecost(4,6,12));



