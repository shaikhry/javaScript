// const arr = [10,20,30,40,50,60,70];

// console.log(arr.pop());
// console.log(arr.push(80));
// console.log(arr.shift());
// console.log(arr.unshift(0,5));

// console.log(arr);

// console.log(arr.pop());
// console.log(arr.push(80));
// console.log(arr.shift());
// console.log(arr.unshift);
// console.log(arr.slice(2,4));
// console.log(arr);

// console.log(arr.splice(2,5));
// console.log(arr.splice(2,2,"abc"));

// console.log(arr.slice(1,5));

// console.log(arr);


// const newarr = [10,20,30,40,50,40,60,70]

// console.log(newarr.indexOf(55));    (to know the index or  element number).

// console.log(newarr.includes(80));    (to know the index is present or absent it shows true or false).

// console.log (newarr.indexOf(10));

// const arr3 = new Array (15);
// console.log(arr3);
// console.log(arr3.fill(3,4));

// const arr4 = new Array (20);
// console.log(arr4.fill("a",10,15));


// const arr5  = [1,2,3,4,5,6,7,8];
//                                         // (add j + any number it will add number if.e 100+1=101)
// const mapped = arr5.map((j) => j +100);        
// console.log(mapped);

// const arr6 = [1,2,3,4,5,6,7,8];
//  const mapped = arr6.map((j) => j + 500);

//  console.log(mapped);


//  const arr6 = [1,2,3,4,5,6,7,8];
//  const mapped = arr6.map((simon) => simon *40);

//  console.log(mapped);

//  const arr6 = [1,2,3,4,5,6,7,8];
//  const mapped = arr6.map((simon) => {
//    return  simon *40 + 1});

//  console.log(mapped);


//  const mapped  = arr5.map(simon) => {
//         return simon * 2+1
// })

//       console.log(mapped);

      
    // const arr5 = [1,2,3,4,5,6,7,8];

    // const filtered  = arr5.filter((elem)=> elem < 5);
    //       console.log(filtered)


    const movies = [
       {title: "avengers",year:2019,rating:4.5,cat:"action"},
       {title: "hitman", year:2015,rating:3.5,cat:"horror" },
       {title: "john wick", year:2014,rating:4.5,cat:"action" },
       {title: "thor", year:2014,rating:4.5,cat:"science" },
       {title: "superman", year:2014,rating:2.5,cat:"education" },
       {title: "babubali", year:2014,rating:4.5,cat:"horror" },
       ];

        const filtered  = movies.filter((movi) => movi.cat ==="horror");
        console.log(filtered);


        // const obj = {Number:1,name:"abc"};
        // console.log(obj.name);
        // console.log(obj{Number});