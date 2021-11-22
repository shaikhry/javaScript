const cubicaddition=(nums,power)=>{
    let cubicsum = 0;
    nums.forEach((element) =>{
        cubicsum = cubicsum + element**power;
    });
    return cubicsum;
};

console.log(cubicaddition([2,3,5],2));
