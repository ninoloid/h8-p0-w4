function cariModus(arr) {
  let arrModus = [],
    aLength = arr.length,
    samaSemua = true;
  for (let i = 0; i < aLength; i++) {
    for (let j = i + 1; j < aLength; j++) {
      if (arr[i] === arr[j]) {
        // ga perlu ngubah value samaSemua ke true kalau kondisi terpenuhi
        // karena nantinya pas compare 2 index terakhir malah ngereturn true
        arrModus.push(arr[i]);
      } else samaSemua = false;
    }
  }
  return (samaSemua || arrModus[0] === undefined) ? -1 : arrModus[0];
  // jika samaSemua bernilai true (yg artinya isi arr sama semua angkanya atau arr isinya cuma 1 value)
  // atau jika arrModus[0] ga ada isinya karena angkanya beda semua, return -1 
}


// Fungsi terpisah untuk mengecek isi array sama semua atau engga
// Ga dipake, cuma dicatet aja biar inget
// const cekValue = arr => {
//   let samaSemua = true;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[0] === arr[i]) {
//       continue;
//       // lanjutkan sampai index terakhir, kalau sampai index terakhir tetap sama, berarti isinya sama semua & return true
//     } else samaSemua = false;
//   }
//   return samaSemua;
// }

// Pakai forEach dan for in, masih harus lebih dipahami sebelum bisa diterapkan
// function cariModus(arr) {
//   let temp = 0;
//   let nilaiMax = '';
//   const arrAngka = {};
//   // convert ke string
//   arr = String(arr).split(',');

//   // hitung dan isi object dengan huruf dan brp kali keluarnya
//   arr.forEach(angka => {
//     if (arrAngka[angka]) {
//       arrAngka[angka]++;
//     } else {
//       arrAngka[angka] = 1;
//     }
//   });

//   for (let angka in arrAngka) {
//     if (arrAngka[angka] > temp) {
//       temp = arrAngka[angka];
//       nilaiMax = angka;
//     }
//   }
//   return nilaiMax;
// }


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1