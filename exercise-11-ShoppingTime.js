function shoppingTime(memberId, money) {
  // you can only write your code here!
  let produk = {
      'Sepatu Stacattu': 1500000,
      'Baju Zoro': 500000,
      'Baju H&N': 250000,
      'Sweater Uniklooh': 175000,
      'Casing Handphone': 50000
    },
    struk = {},
    temp = [],
    initialMoney = money;

  struk.memberId = memberId;
  struk.money = money;

  // cek uangnya cukup ga buat beli produk, dari mulai yg paling atas.
  for (i in produk) {
    if (money >= produk[i]) {
      temp.push(i);
      money -= produk[i];
    }
  }

  struk.listPurchased = temp;
  struk.changeMoney = money;

  /*
    validasi pertama, kalau memberId ga ada, tampilin "toko cuma buat member". kalau memberId ada,
    masuk ke validasi kedua, cek uang. karena harga casing paling murah, cukup cek aja duitnya
    cukup ga buat beli casing. kalau uang ga cukup, tampilin "uang tidak cukup". kalau uang cukup,
    tampilin struk yg udah dibikin di atas.
  */
  return memberId ? initialMoney > produk['Casing Handphone'] ? struk : 'Mohon maaf, uang tidak cukup' : 'Mohon maaf, toko X hanya berlaku untuk member saja';
}



// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja