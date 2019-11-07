function digitPerkalianMinimum(angka) {
  let arrAngka = [];
  let arrAngka2 = [];
  let counter = angka;
  for (let i = 0; i <= angka; i++) {
    // cari dulu faktor - faktor dari angka
    if (counter % i === 0) {
      // ubah dulu ke string sebelum di push, biar bisa diitung length dari angkanya
      arrAngka.push(String(i));
      counter -= 1;
    } else counter -= 1;
  }
  if (arrAngka.length > 1) {
    // bagi dua arraynya, sehingga menghasilkan arrAngka[0] * arrAngka2[0] = angka, dst sampe index terakhir
    for (let arrLength = arrAngka.length, i = arrLength - 1; i >= arrLength / 2; i--) {
      arrAngka2.push(arrAngka.pop());
    }
    // temp bisa diisi sama angka inputan, ini placeholder aja sebenernya buat nilai default temp yg akan
    // selalu lebih besar dari penjumlahan length faktor-faktor perkaliannya
    let temp = angka;
    for (let i = 0; i < arrAngka.length; i++) {
      // temp akan terus ditimpa sampai menghasilkan value yg paling kecil
      if (arrAngka[i].length + arrAngka2[i].length < temp) {
        temp = arrAngka[i].length + arrAngka2[i].length;
      }
    }
    return temp
  } else return 2
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2