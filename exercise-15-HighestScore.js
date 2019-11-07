function highestScore(students) {
  let highScore = {};
  for (let i = 0; i < students.length; i++) {
    // bikin object baru kalau belum ada
    if (highScore[students[i].class] === undefined) {
      highScore[students[i].class] = {
        name: students[i].name,
        score: students[i].score
      }
      // kalau udah ada, compare nilai, kalau data baru nilainya lebih gede, object akan ditimpa dgn value yg baru
    } else if (students[i].score > highScore[students[i].class].score) {
      highScore[students[i].class] = {
        name: students[i].name,
        score: students[i].score
      }
    }
  }
  return highScore;
}

// TEST CASE
console.log(highestScore([{
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }