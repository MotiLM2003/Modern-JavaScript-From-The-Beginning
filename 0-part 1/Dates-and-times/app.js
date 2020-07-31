let val;

const today = new Date();
let birthday = new Date("9/10/1981 11:25:33");

val = today;
val = today.getMonth(); // get the day of the month (0 based)
val = today.getDate(); // get the day of the month;
val = today.getDay(); // get day of thee week starting monday.
val = today.getFullYear(); // get the year (2020)
val = today.getHours(); // get the hours;
val = today.getMinutes(); // get minutes
val = today.getSeconds(); // get seconds.
val = today.getMilliseconds(); // get milliseconds
val = today.getTime(); // get timestamp; (seonds passed since 1/1/1970)

birthday.setMonth(2)
birthday.date(12)
// you can set the date values
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log("val:", val);
console.log("birthday: ", birthday);
