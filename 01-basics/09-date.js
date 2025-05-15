let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// Thu May 15 2025
// Thu May 15 2025 18:35:24 GMT+0000 (Coordinated Universal Time)
// 5/15/2025, 6:35:24 PM
//object

// let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toLocaleString());

//1/23/2023, 12:00:00 AM
//january === 0
//sunday === 0

//  mycreatedDate.toLocaleString())

//yyyy-mm-dd

let mytimestamp = Date.now()
console.log(Math.floor(mytimestamp/1000));
