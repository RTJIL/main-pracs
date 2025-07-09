//1.

/* function pow(x, n) {
  console.log(`Calling pow(${x}, ${n})`);
  if (n == 1) {
    console.log(`Returning base: ${x}`);
    return x;
  } else {
    const result = x * pow(x, n - 1); 
    console.log(`Returning: ${x} * pow(${x}, ${n - 1}) = ${result}`);
    return result;
  }
}

console.log('Final result:', pow(2, 4)); */

// Take a number from user and sum all the previous nums until that input

//2.sumRange
/* function sumRangeLoop(num) {
  let sumResult = 0;
  for (let i = 1; i <= num; i++) {
    sumResult += i;
  }
  return sumResult;
}

function sumRangeRecursion(num) {
  if (num === 1) return 1;
  return num + sumRangeRecursion(num - 1);
} */

//3.power

/* function powerLoop(b, e) {
  let powerRes = 1;
  for (let i = 0; i < e; i++) {
    powerRes *= b;
  }
  return powerRes;
}

function powerRecursion(b, e) {
  if (e === 0 || e === undefined) return 0;
  if (e === 1) return b;
  return b * powerRecursion(b, e - 1);
} */

//4.factorial
/* function factorialLoop(f) {
  let res = 1;
  for (let i = f; i > 0; i--) {
    res *= i;
  }
  return res;
}

function factorialRecursion(f) {
  if(f === 0) return 1;
  return f * factorialLoop(f - 1)
}

console.log(factorialRecursion(5)) */

//5.Check all values
/* function allLoop(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) return false;
  }
  return true;
}

function allRecursion(arr, callback) {
  if (arr.length === 0) return true;
  if (!callback(arr[0])) return false;
  return allRecursion(arr.slice(1), callback);
} */

/* console.log(allRecursion([1,2,7], function(num){
  return num < 7;
})) */

/* console.log(allLoop([1,2,1], (num) => {
  return num < 27
})); */

//6.Product of an array
/* function productOfArrayLoop(arr) {
  let res = 1;
  for(let i = 0; i < arr.length; i++)
    res *= arr[i];
  return res;
}

console.log(productOfArrayLoop([1,2,3,10])) */

/* function productOfArrayRecursion(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1] * productOfArrayRecursion(arr.slice(0, -1))
}

console.log(productOfArrayRecursion([5,2,5])) */

//7.Search JS object
/* var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function containsRecursion(obj, searchElem) {
  for (let key in obj) {
    const value = obj[key];

    if (String(value) === String(searchElem)) return true;

    if (typeof value === 'object' && value !== null) {
      if (containsRecursion(value, searchElem)) return true;
    }
  }

  return false;
}

console.log(containsRecursion(nestedObject, 'foo2')); */

//8.Parse a multi-dimensional array

/*Take mdArray from user than check each branch for Integers*/

/* function parseMD(mdArray) {
  let res = 0;

  mdArray.forEach(element => {
    if(Number.isInteger(element)) {
      res++;
    } else if (Array.isArray(element)) {
      res += parseMD(element);
    }
  });

  return res;
}

console.log(parseMD([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); */

//9.replicate
/* take number and quentity of copies of that number from user than add it to array 
 each
*/

/* function replicate(q, num) {
  if (q === 0) return [];
  return [num].concat(replicate(q - 1, num));
}
 
console.log(replicate(0, 1)) */