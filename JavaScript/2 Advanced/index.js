// // 1. IIFE

const hoTen = 'Minh Duc';

// ((msg, name) => {
//     console.log('hello: ', msg)
//     console.log('my name is: ', name)
// })('Meow', hoTen)


//// private
// let i = 0;
// (function uwu(){
//     i++;
//     console.log(i);

//     if(i < 10)
//         uwu()
// })()


//// các cách tạo ra iife khác
// // case 1
// (function () {
//     console.log('meow 1');
// }())

// // case 2
// !function () { // có thể dùng các toán tử phía trước như +, -, !...
//     console.log('meow 2');
// }()


// Ví dụ khi sử dụng IIFE để private dữ liệu
// // before
// const app = {
//     cars: [],
//     add(car){
//         this.cars.push(car)
//     },
//     edit(index, car){
//         this.cars[index] = car
//     },
//     delete(index){
//         this.cars.splice(index, 1);
//     }
// }

// // after - đảm bảo tính toàn vẹn của dl => k thể gán app từ bên ngoài
// const app = (() => {
//     // Private
//     // const cars = ['Minh', 'Duc', 'Thanh', 'Tuyen'];
//     const cars = [];

//     return {
//             add(car){
//                 cars.push(car)
//             },
//             edit(index, car){
//                 cars[index] = car
//             },
//             delete(index){
//                 cars.splice(index, 1);
//             },
//             get(index){
//                 return cars[index]
//             },
//             getAll() {
//                 const allCars = [];
//                 for (let i = 0; i < cars.length; i++) {
//                     allCars.push(cars[i]);
//                 }
//                 return allCars;
//             },
//             getAll2(){
//                 return [...cars];
//             }
//     }
// })()


// Bai tap
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)
// Output: ? // 81



//  Giai thich
/** 
Hàm js() được thực thi ngay lập tức sau khi được khai báo và được gọi là IIFE. Lưu ý rằng tham số x của hàm js được truyền thực tế với giá trị 3.

Giá trị trả về của hàm là y(s())), nghĩa là gọi ba hàm khác là y(), s() và j() vì hàm s() trả về j().

j() trả về 3 ^ 3 = 27 để s() trả về27.

y(s()) có nghĩa là y(27) trả về 27 * 3 = 81.
 * 
*/