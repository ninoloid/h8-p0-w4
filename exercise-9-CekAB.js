function checkAB(num) {
  // you can only write your code here!
  let arrA = indexOfA(num),
    arrB = indexOfB(num),
    max = 0;
  let maxTemp = 0;
  arrA.length > arrB.length ? max = arrA.length : max = arrB.length;
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      let temp = 0;
      if (arrA[i] < arrB[j]) {
        temp = arrB[j] - arrA[i];
        temp === 4 ? maxTemp = temp : temp > maxTemp ? maxTemp = temp : maxTemp;
      } else {
        temp = arrA[i] - arrB[j];
        temp === 4 ? maxTemp = temp : temp > maxTemp ? maxTemp = temp : maxTemp;
      }
    }
  }
  return maxTemp === 4 ? true : false;
}

// bikin array yg isinya index dari 'a'
function indexOfA(num) {
  let arrTemp = [],
    arrA = [];
  for (let i = 0; i < num.length; i++) {
    let a = num.indexOf('a', i);
    arrTemp.push(a);
    // bikin unique array dari arrTemp
    arrA = [...new Set(arrTemp)];
  }

  arrA.sort(function (a, b) {
    return a - b;
  });

  switch (arrA[0]) {
    case -1:
      // buang -1 di index 0
      arrA.shift();
      break;
  }
  return arrA;
}

// bikin array yg isinya index dari 'b'
function indexOfB(num) {
  let arrTemp = [],
    arrB = [];
  for (let i = 0; i < num.length; i++) {
    let a = num.indexOf('b', i);
    arrTemp.push(a);
    // bikin unique array dari arrTemp
    arrB = [...new Set(arrTemp)];
  }

  arrB.sort(function (a, b) {
    return a - b;
  });

  switch (arrB[0]) {
    case -1:
      // buang -1 di index 0
      arrB.shift();
      break;
  }
  return arrB;
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false