function changeMe(arr) {
  // you can only write your code here!
  if (arr.length >= 1 && arr[0] !== '') {
    let biodata = {};
    for (i = 0; i < arr.length; i++) {
      // index belakang ga usah pake looping karena jumlahnya tetap dan harus di assign satu-satu
      biodata.firstName = arr[i][0];
      biodata.lastName = arr[i][1];
      biodata.gender = arr[i][2];
      // kalau arr[i][3] lebih besar dari 2019 atau undefined = true, age isi dengan 'invalid birth year'
      // kalau false, isi dengan 2019 - arr[i][3]
      arr[i][3] > 2019 || arr[i][3] === undefined ? biodata.age = 'Invalid Birth Year' : biodata.age = 2019 - arr[i][3];
      console.log(i + 1 + '. ' + biodata.firstName + ' ' + biodata.lastName + ':')
      console.log(biodata)
    }
  } else console.log("")
}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male'],
  ['Ahmad', 'M. S. Adiputra', 'Male', 1992]
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""