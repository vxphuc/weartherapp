// các cách khai báo biến
// var a = 5;
// let ba = 6; thay đổi được
// const c = 7; ko đổi
// hàm alert và prompt cho ngươi dùng nhập dữ liệu
// alert("Hello World");
// let name;
// name = prompt("What is your name?");
// console.log("chao " + name + " ?????");

// hàm confirm cho nguoi dung xac nhận
//confirm("xac nhận để su dung chuong trinh");

// hàm Set timeout hiển thị 1 lần thông báo sau 2s
// setTimeout(function () {
//     alert("Hello World");
// }, 2000);

//hàm set interval hiển thị thông báo lập lại sau mỗi 1s
// setInterval(function () {
//     console.log("Hello World");
// }, 1000);

/*
+ cong
- tru
* nhan
/ chia
% chia lay du
** luy thua
*/

//toán tử nối chuỗi
// let a = "Hello";
// let b = "World";
// console.log(a + b);

// kiểu dữ liệu object
// var person = {
//     name: "John",
//     age: 30,
//     address: "HN",
//     isMarried: false,
//     myFunction: function () {
//         console.log("Hello World");
//     }
// };
// console.log("person", person);

// toán tử so sánh
// let a = 5;
// let b = '5';
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(a != b); // false
// console.log(a !== b); // true

// 0
// ''
// null
// undefined
// NaN
// false
// && sẽ kiểm tra từ đầu đến cuối nếu có 1 giá trị sai thì sẽ trả về giá trị sai
// || sẽ kiểm tra từ đầu đến cuối nếu có 1 giá trị đúng thì sẽ trả về giá trị đúng

// let String = 'Hello World Hello World';
// 1. length
// console.log(String.length);
// 2. Find index -1 la ko tim thay
// console.log(String.indexOf('World', 7));
// tra ve vi tri cuoi
// console.log(String.lastIndexOf('World'));
// 3. Cut string
// console.log(String.slice(6, 11));
// console.log(String.slice(-5));
// 4. Replace thay the chuoi
// console.log(String.replace('World', 'Viet Nam'));
// 5. Upper case
// console.log(String.toUpperCase());
// 6. Lower case
// console.log(String.toLowerCase());
// 7. Trim xoa khoang trang
// console.log(String.trim());
// 8. Split chuyen chuoi thanh mang
// var a = 'phuc, huy, vinh';
// console.log(a.split(','));
// 9. charAt lay ky tu tai vi tri
// console.log(String.charAt(6));
// 10. charCodeAt lay ma ASCII
// console.log(String.charCodeAt(6));
// 11. concat noi chuoi
// console.log(String.concat('Viet Nam'));
// // 12. includes kiem tra chuoi co ton tai hay ko
// console.log(String.includes('World'));
// // 13. startsWith kiem tra chuoi bat dau
// console.log(String.startsWith('Hello'));
// // 14. endsWith kiem tra chuoi ket thuc
// console.log(String.endsWith('World'));
// // 15. search tim kiem chuoi
// console.log(String.search('World'));
// // 16. match tim kiem chuoi
// console.log(String.match(/World/g));
// // 17. repeat lap lai chuoi
// console.log(String.repeat(2));
// // 18. substr cat chuoi
// console.log(String.substr(6, 5));

// ham
// function showDialog() {
//     alert("Hello World");
// }
// showDialog();

// const input = document.querySelector('.input');

// console.log(input.value);
// input.addEventListener('click', function () {
//     console.log(input.value);
// });
// $(document).ready(function () {
//     d = new Date();
//     st = 'hom nay la ngay' + d.getDate() + 'thang' + (d.getMonth() + 1) + 'nam' + d.getFullYear();
//     console.log(st);

//     sw = true;
//     $('#show').click(function () {
//         if (sw) $('#pass').attr('type', 'text');
//         else $('#pass').attr('type', 'password');
//         sw = !sw;
//     });

//     $('.choice').click(function (e) {
//         ok = confirm('ban chac chu ?');
//         if (ok) {
//             st = 'ban chon' + e.currentTarget.value;
//             $('h1').html(st);
//         }
//     });
// });
// var courses = [
//     {
//         id: 1,
//         name: "Java",
//         coin: 0,
//     },
//     {
//         id: 2,
//         name: "PHP",
//         coin: 0,
//     },
//     {
//         id: 3,
//         name: "C++",
//         coin: 300,
//     },
//     {
//         id: 4,
//         name: "C#",
//         coin: 240,
//     },
// ];
// courses.forEach(function(){
//     console.log(courses);
// });
//forEach duyet qua tung phan tu trong mang

// var free = courses.every(function(course) {
//    return course.coin === 0; 
// });
// console.log(free);
//every kiem tra tat ca phan tu trong mang neu co 1 phan tu sai thi tra ve false

// var free = courses.some(function(course) {
//    return course.coin === 0; 
// });
// console.log(free);
//some kiem tra tat ca phan tu trong mang neu co 1 phan tu dung thi tra ve true

// var free = courses.find(function(course) {
//    return course.coin === 0; 
// });
// console.log(free);
//find tra ve phan tu dau tien thoa man dieu kien
// var free = courses.filter(function(course) {
//     return course.coin === 0; 
//  });
//  console.log(free);
 //filter tra ve tat ca phan tu thoa man dieu kien

//  function courseHandler(course, index, originalArray) {
    // return{
    //     id: course.id,
    //     name: `Khoa hoc ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Gia ${course.coin}`,
    //     index: index,
    //     originalArray: originalArray,
    // }
//     return `<h2>${course.name}</h2>`;
//  }
//  var newCourses = courses.map(courseHandler);
//  console.log(newCourses);
// var i = 0;
// function courseHandler(accumulator, currentValue, currentIndex, originalArray) {
//     // return accumulator + currentValue.coin;
//     i++;
//     var total = accumulator + currentValue.coin;
//     console.table({
//         'luot chay: ' : i,
//         'Bien tich luy: ': accumulator,
//         'gia khoa hoc: ': currentValue.coin,
//         'tong: ': total,
//     })
//     return total;
// }

// var totalCoin = courses.reduce(courseHandler, 0);
// console.log(totalCoin);

// var topic = [
//     {
//         topic: "font-end",
//         courses: [
//             {
//                 id: 1,
//                 name: "HTML, CSS",
//                 coin: 0,
//             },
//             {
//                 id: 2,
//                 name: "JavaScript",
//                 coin: 0,
//             },
//         ],
//     },
//     {
//         topic: "back-end",
//         courses: [
//             {
//                 id: 3,
//                 name: "PHP",
//                 coin: 0,
//             },
//             {
//                 id: 4,
//                 name: "Ruby",
//                 coin: 0,
//             },
//         ],
//     },
// ]
// var newTopic = topic.reduce(function(course, topicIn){
//     return course.concat(topicIn.courses);
// }, []);
// console.log(newTopic);
// var html = topic.map(function(course){
//     return`
//         <div>
//             <h2>${course.name}</h2>
//             <p>Gia: ${course.coin}</p>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });
// console.log(html.join(''));

// Array.prototype.filter1 = function(callback) {
//     var output = [];
//     for (var i = 0; i < this.length; i++) {
//         var ok = callback(this[i]);
//         if (ok) { // sửa ở đây
//             output.push(this[i]);
//         }
//     }
//     return output;
// };

// var courses = ['java', 'php', 'ruby'];

// var result = courses.filter1(function(course) {
//     return `${course}`; // luôn trả về chuỗi, là truthy
// });

// console.log(result);

// const postAip = 'https://jsonplaceholder.typicode.com/posts';


// fetch(postAip)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(posts){
//         console.log(posts);
//     })
//     .catch(function(error){
//         console.log('loi', error);
//     });
// const moment = require("./moment");
const APP_ID = '925f2f74b3e85130e409b04bd325f92e';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', function(e) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('HH:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm') || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        });
});