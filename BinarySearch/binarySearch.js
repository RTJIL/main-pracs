function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let devide = Math.ceil(arr.length / 2);

    if (arr[devide] === target) return arr[devide];
    else if (target > arr[devide]) {
      left = devide + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return null;
}

export { binarySearch }