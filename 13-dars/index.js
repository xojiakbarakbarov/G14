const arr = [
  "January",
  "February",
  "Mart",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decenber",
];
const arr1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];
let data = new Date();
let soat = data.getHours();
let minute = `${
  data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
}`;
let second = `${
  data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()
}`;
let month = data.getMonth();
let year = data.getFullYear();
let mintaqa = `${soat > 12 ? "PM" : "AM"}`;
let kun = data.getDate();

const moment = (a) => {
  const obj = {
    LT: `${soat}:${minute} ${mintaqa}`,
    LTS: `${soat}:${minute}:${second} ${mintaqa}`,
    L: `${month + 1 < 10 ? `0${month + 1}` : month + 1}/${
      kun < 10 ? `0${kun}` : kun
    }/${year}`,
    l: `${month + 1}/${kun}/${year}`,
    LL: `${arr[month]} ${kun}, ${year}`,
    ll: `${arr[month].slice(0, 3)} ${kun}, ${year}`,
    LLL: `${arr[month]} ${kun}, ${year} ${soat}:${minute} ${mintaqa}`,
    lll: `${arr[month].slice(
      0,
      3
    )} ${kun}, ${year} ${soat}:${minute} ${mintaqa}`,
    LLLL: `${arr1[data.getDay()]} ${
      arr[month]
    } ${kun}, ${year} ${soat}:${minute} ${mintaqa}`,
    llll: `${arr1[data.getDay()].slice(0, 3)} ${
      arr[month]
    } ${kun}, ${year} ${soat}:${minute} ${mintaqa}`,
  };
  console.log(obj[a]);
};
moment("llll");
