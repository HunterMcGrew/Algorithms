const multiplyInto20 = function(arr) {

  let sorted = arr.sort((a, b) => a - b);

  console.log("sorted", sorted);

  // let map = {};

  // for (let i = 0; i < sorted.length; i++) {
  //   if (sorted[i] in map) {
  //     map[sorted[i]]++;
  //   } else {
  //     map[sorted[i]] = 1;
  //   };
  // };

  // console.log("map", map);
  
  // let index = 1;
  // let sum = 0;
  let result = false;
  
  for (let i = 0; i < sorted.length; i++) {
    console.log("i", i);
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] * sorted[i] === 20) {
        console.log("multi", sorted[j] * sorted[i]);
        result = true;
      } else {
        console.log("test");
      };
    };
  };

  return result;
 

};
// have for loop looping through array 
// have 2nd nested for loop going through every item except item it's on