function angkaPrima(angka) {
  let count = 0;
  // you can only write your code here!
  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
      count += 1;
    }
  }
  return count ? false : true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false