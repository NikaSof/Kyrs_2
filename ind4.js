//Номер 4_1

// let expoNumber = (number) => `${number[0]},${number.slice(1, number.length)} + e^${number.slice(1, number.lenght).length -1}`;
// process.stdin.on('data', data => {console.log(expoNumber(data.toString()));})

//Номер 4_2

// function precision( n ) { 
//     return Math.max( Number.MIN_VALUE, 2 ** Math.floor( Math.log2( n ) ) * Number.EPSILON );
//   }
  
//   process.stdin.on("data", data =>{
//     const number = parseInt(data);
//     const nextSmallest = precision(number).toString();
//     let degri = parseInt(nextSmallest.slice(nextSmallest.length - 2, nextSmallest.length)) - 1;
//     console.log(`${number},${"0".repeat(degri)}${nextSmallest[0]}`)
//   })

// Номер 4_3

// function getTimezoneOffsetInHours() {
//     const offsetInMinutes = new Date().getTimezoneOffset();
//     return offsetInMinutes / 60;
//   }
  
//   console.log(getTimezoneOffsetInHours());

//Номер 4_4

// function test_Email(n){
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const urlPattern = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi
//     if (emailPattern.test(n) === true){
//         return `Введена электронная почта ${n}`
//     }
//     else if (urlPattern.test(n) === true){
//         return `Введён url адрес ${n}`
//     }
//     else {return 'Введённая строка не является электронной почтой или url адресом'}
// }

// process.stdin.on('data', data => {
//   let n = data.toString().trim();
//   console.log(test_Email(n));
// });

// function clearNumb(ph, cd){
//     const clear = /[^0-9]/g
//     let arr_num = []
//     arr_num.push(ph.toString().replace(clear,''))
//     arr_num.push(cd.toString().split('@')[0])
//     return arr_num
// }

// let ph = '';
// let cd = '';

// process.stdin.on('data', data => {
//     const input = data.toString().trim().split(' ');
//     ph = input[0];
//     cd = input[1];
//     const arr = clearNumb(ph, cd);
//     console.log(arr);
//   });

//      Пример ввода и вывода:
// //   +7(915)637-22-12 fdkjge342@mail.ru
// //   [ '79156372212', 'fdkjge342' ]

//Номер 4_6

// function test_urlImg(n){
//     const testPattern = /(?<=img\s+src=")[^"]+/;
//     return testPattern.test(n)
// }

// process.stdin.on('data', data => {
//   let n = data.toString().trim();
//   console.log(test_urlImg(n));
// });

// Пример ввода и вывода:
// //<img src="images/dinosaur.jpg" />
// // true
