// Dates

let myDate = new Date()
// console.log(myDate.toString());//Mon Sep 01 2025 12:01:32 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString());//2025-09-01T12:01:32.391Z
// console.log(myDate.toJSON());//2025-09-01T12:01:32.391Z
// console.log(myDate.toUTCString());//Mon, 01 Sep 2025 12:01:32 GMT

// console.log(myDate.toDateString());//Mon Sep 01 2025
// console.log(myDate.toLocaleString());//9/1/2025, 12:03:46 PM
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 1, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toUTCString());
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

console.log(
 newDate.toLocaleString('default', {
    weekday: "long",
 }))
console.log(newDate.toUTCString());