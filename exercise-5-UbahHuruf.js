// Pakai regex
function ubahHuruf(kata) {
  let hasil = '';
  for (let i = 0; i < kata.length; i++) {
    // regex digunakan untuk mencocokkan kata dengan a-y, /g = global, /i = case-insensitive
    if (kata[i].match(/[a-y]/gi)) {
      // charCodeAt untuk mengubah huruf menjadi unicode value
      // fromCharCode untuk mengubah unicode value menjadi huruf
      hasil += String.fromCharCode(kata.charCodeAt(i) + 1);
    } else hasil += String.fromCharCode(kata.charCodeAt(i) - 25);
  }
  return hasil;
}

// Tanpa regex
// function ubahHuruf(kata) {
//   let hasil = '';
//   for (let i = 0; i < kata.length; i++) {
//     // Tanpa regex
//     if (kata[i] !== 'z' && kata[i] !== 'Z') {
//       hasil += String.fromCharCode(kata.charCodeAt(i) + 1);
//     } else hasil += String.fromCharCode(kata.charCodeAt(i) - 25);
//   }
//   return hasil;
// }

// Pake index of alfabet
// function ubahHuruf(kata) {
//   let hasil = '';
//   let abjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   for (let i = 0, y = kata.length; i < y; i++) {
//     for (let j = 0, z = abjad.length; j < z; j++) {
//       if (kata[i] === abjad[j]) {
//         hasil += abjad[abjad.indexOf(kata[i]) + 1];
//       } else if (kata[i] === 'z' || kata[i] === 'Z') {
//         hasil += abjad[abjad.indexOf(kata[i]) - 25];
//         break;
//       }
//     }
//   }
//   return hasil;
// }

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

// console.log(ubahHuruf('a'));
// console.log(ubahHuruf('b'));
// console.log(ubahHuruf('c'));
// console.log(ubahHuruf('d'));
// console.log(ubahHuruf('e'));
// console.log(ubahHuruf('f'));
// console.log(ubahHuruf('g'));
// console.log(ubahHuruf('h'));
// console.log(ubahHuruf('i'));
// console.log(ubahHuruf('j'));
// console.log(ubahHuruf('k'));
// console.log(ubahHuruf('l'));
// console.log(ubahHuruf('m'));
// console.log(ubahHuruf('n'));
// console.log(ubahHuruf('o'));
// console.log(ubahHuruf('p'));
// console.log(ubahHuruf('q'));
// console.log(ubahHuruf('r'));
// console.log(ubahHuruf('s'));
// console.log(ubahHuruf('t'));
// console.log(ubahHuruf('u'));
// console.log(ubahHuruf('v'));
// console.log(ubahHuruf('w'));
// console.log(ubahHuruf('x'));
// console.log(ubahHuruf('y'));
// console.log(ubahHuruf('z'));