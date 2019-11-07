function cariMedian(arr) {
  // you can only write your code here!
  let med = 0;
  let i = 0;
  if (arr.length % 2 === 0) {
    i = arr.length / 2;
    med = (arr[i] + arr[i - 1]) / 2;
  } else {
    i = (arr.length - 1) / 2;
    med = arr[i];
  }
  return med;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5