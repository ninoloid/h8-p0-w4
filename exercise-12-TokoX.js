function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];


  // you can only write your code here!
  let hasil = [];
  for (let i = 0; i < listBarang.length; i++) {
    let tampung = {};
    let shopAmount = 0;
    tampung.product = listBarang[i][0];
    tampung.shoppers = [];
    for (let j = 0; j < shoppers.length; j++) {
      // kalau product sesuai dan jumlah yg dibeli ga melebihi stok barangnya
      if (tampung.product === shoppers[j].product && shoppers[j].amount <= listBarang[i][2]) {
        // shopAmount jadi temporary variable buat nampung berapa barang yg dijual dan ngitung totalProfit
        shopAmount += shoppers[j].amount;
        tampung.shoppers.push(shoppers[j].name);
        tampung.leftOver = listBarang[i][2] - shoppers[j].amount;
        tampung.totalProfit = shopAmount * listBarang[i][1];
        listBarang[i][2] -= shoppers[j].amount;
      }
    }
    // kalau ga ada yg beli, dia ga akan punya property leftOver dan totalProfit
    // jadi harus diisi dengan jumlah stok dari list barang dan total profit = 0
    if (tampung.leftOver === undefined && tampung.totalProfit === undefined) {
      tampung.leftOver = listBarang[i][2];
      tampung.totalProfit = 0;
    }
    hasil.push(tampung);
  }
  return shoppers.length >= 1 ? hasil : [];
}

// TEST CASES
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]