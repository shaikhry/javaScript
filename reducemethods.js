// const nums = [10,20,30,40,50]

// const result  = nums.reduce ((acc,cur) => acc+cur)
// console.log(result);

const nums = [1,2,3,4,5]

// const result  = nums .reduce ((acc,cur)=>{
// return acc+cur*3                                        
                                             
// },0)
//                                                         //   0+1*3=3
//                                                     //    3+2*3=9
//                                                     //    9+3*3=18
//                                                     //    18+4*3=30
// //                                                     //    30+5*3=45
// console.log(result);

const result = nums.reduce ((acc,cur)=>{
return acc+cur*2

},0)
console.log(result);



