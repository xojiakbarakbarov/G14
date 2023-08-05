// function lowerCase(str) {
//   let str1 = "";
//   let res = 0;
//   str1 += str[0].toUpperCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       str1 += str[i + 1].toUpperCase();
//       res = i + 1;
//     } else if (i != res) {
//       str1 += str[i];
//     }
//   }
//   console.log(str1);
// }
//?
// lowerCase("hojiakbar akbarov abdumomin ogli");
// function removeEveryOther(arr){
//     //your code here
//     let arr1=[];
//     for(let i=0 ;i<arr.length;i++){
//       if(i%2!=1){
//          arr1.push(arr[i])
//       }
//     }
//     return arr1;
//   }
//   console.log(removeEveryOther([1,2,3,4,5,6]));

//?
// function addLength(str) {
//     //start-here
//       let str1=str.split(" ");
//       let array=[];
//       let str2=''
//       let newStr=''
//      for(let i=0;i<str1.length;i++){
//         str2=str1[i];
// newStr=str2+` ${str2.length}`
// array.push(newStr);
//      }
// console.log(array);
//     }
//     addLength("hojiakbar akbarov")