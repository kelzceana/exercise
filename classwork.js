const squareList = (arr) => {
  // Only change code below this line
  let filterArr = [];
  let finalArr = [];
  arr.filter(item => {
    if(Number.isInteger(item) === true && item >= 0){
      
      filterArr.push(item);
    }
    
  })
 finalArr = filterArr.map(total => total * total)
return finalArr;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);


/**
 * 
 * Use Higher-Order Functions map, filter, 
 * or reduce to Solve a Complex Problem Now
 * 
 * 
 * returns a new array containing only the square of only the 
 * positive integers (decimal numbers are not integers) 
 * when an array of real numbers is passed to it.
 */