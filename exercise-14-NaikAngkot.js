function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let arrOrang = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let orang = {};
    orang.penumpang = arrPenumpang[i][0];
    orang.naikDari = arrPenumpang[i][1];
    orang.tujuan = arrPenumpang[i][2];
    // manfaatin variable rute dari skeleton code, ambil indexnya buat ngitung jarak dari - tujuan
    orang.bayar = (rute.indexOf(orang.tujuan) - rute.indexOf(orang.naikDari)) * 2000;
    arrOrang.push(orang);
  }
  return arrOrang;
}


//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]