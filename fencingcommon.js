// const fencingcommoncost = (sides,numberoflayer,rateofwire)=>{
//     const parameterofshape = 0;
//     for(let i =0; i < sides.length;i++){
//         parameterofshape = parameterofshape + sides [i];
// }
//     const fencingwirelength =parameterofshape*numberoflayer;
//     const costofwire  =fencingwirelength * rateofwire;
//     return costofwire;
// };

// console.log(fencingcommoncost([10,13,5,6,7,12,5,8,5,7],4,12));



const fencingcommoncostoptm = (sides,numberoflayer,rateofwire)=>{
    const parameterofshape = 0;

   sides.foreach((element) =>  {
        parameterofshape = parameterofshape + element; 
});
    const fencingwirelength =parameterofshape*numberoflayer;
    const costofwire  =fencingwirelength * rateofwire;
    return costofwire;
};

console.log(fencingcommoncostoptm([10,13,5,6,7,12,5,8,5,7],4,12));