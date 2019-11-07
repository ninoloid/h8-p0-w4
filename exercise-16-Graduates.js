function graduates(students) {
  // Code disini
  let hasil = {};
  for (let i = 0; i < students.length; i++) {
    let temp = {};
    if (students[i].score > 75) {
      // bikin property dgn nama yg diambil dari students class kalau belum ada
      if (hasil[students[i].class] === undefined) {
        hasil[students[i].class] = [];
        temp.name = students[i].name;
        temp.score = students[i].score;
        hasil[students[i].class].push(temp);
        // kalau udah ada, langsung aja di push ke arraynya
      } else {
        temp.name = students[i].name;
        temp.score = students[i].score;
        hasil[students[i].class].push(temp);
      }
    }
  }
  return hasil
}

console.log(graduates([{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}