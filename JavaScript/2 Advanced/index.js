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


// // Bai tap
// (function js(x) {
//     const y = (j) => j * x;

//     console.log(y(s()));

//     function s() {
//         return j();
//     }

//     function j() {
//         return x ** x;
//     }
// })(3)
// // Output: ? // 81



//  Giai thich
/** 
Hàm js() được thực thi ngay lập tức sau khi được khai báo và được gọi là IIFE. Lưu ý rằng tham số x của hàm js được truyền thực tế với giá trị 3.

Giá trị trả về của hàm là y(s())), nghĩa là gọi ba hàm khác là y(), s() và j() vì hàm s() trả về j().

j() trả về 3 ^ 3 = 27 để s() trả về27.

y(s()) có nghĩa là y(27) trả về 27 * 3 = 81.
 * 
*/


/* ============================================================================== */
// const createCounter = () => {
//     let counter = 0;

//     const increase = () => ++counter;
    
//     return increase;
// }

// // env 1
// const counterResult = createCounter() //`increase` được tạo ra ở đây khi gọi đến `createCounter()`
// // counterResult là hàm `increase` đc return từ bên trong `createCounter()`

// console.log(counterResult());
// console.log(counterResult());
// console.log(counterResult());

// // env 2: khoi tao lai gia tri count = 0 bat dau lai tu dau
// const counterResult2 = createCounter()

// console.log(counterResult2());
// console.log(counterResult2());
// console.log(counterResult2());


//// Ứng dụng Closure tạo ra logger()
/**
// 1, logger for app
const createLogger = (namespace) => {
    const logger = (msg) => {
        console.log(`[${namespace}] - ${msg}`)
    }

    return logger;
}

// ================== My App ================== //
// Register.js
const infoLogger = createLogger('Info');

infoLogger('Bat dau gui mail');
infoLogger('Gui mail loi, thu lai lan thu n');
infoLogger('Gui mail thanh cong');

// ForgetPassword.js
const errorLogger = createLogger('Error');

errorLogger('Email khong ton tai trong DB, vui long thu lai');
errorLogger('Email k hop le'); 
errorLogger('Khoi phuc mat khau thanh cong');
 */

/** 
// 2, Lưu dữ liệu vào local storage
const createStorage = (key) => {
    const store = JSON.parse(localStorage.getItem(key)) ?? {} //nếu có key trong storage lấy key nếu k lấy {} rỗng

    // func closure lưu dl vào local storage
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store)); // lưu store dưới dạng JSON
    }


    const storage = {
        get(key){
            return store[key];
        },
        set(key, value){
            store[key] = value;
            save();
        },
        remove(key){
            delete store[key];
            save();
        }
    }

    return storage;
}

// ================== My App ================== //

// Profile.js
// env 1
const profileSettings = createStorage('profile_settings');
// profileSettings.get('name');
profileSettings.set('name', 'Minh Duc');
profileSettings.set('age', 22);
profileSettings.set('address', 'Bac Kan');

// profileSettings.remove('age');

console.log(profileSettings.get('name'))
console.log(profileSettings.get('age'))
console.log(profileSettings.get('address'))


// env 2
const profileSettings2 = createStorage('profile_settings2');
profileSettings2.set('name', 'Thanh Tuyen');
profileSettings2.set('age', 19);
profileSettings2.set('address', 'Quan 14, TP HCM');

console.log(profileSettings2.get('name'))
console.log(profileSettings2.get('age'))
console.log(profileSettings2.get('address'))
*/

/*
// 3, Cars App
const createApp = () => {
    const cars = [];
     
    return {
        add(car){
            cars.push(car);
        },
        show(){
            console.log(cars)
        }
    }
}

// ================== My App ================== //
const app = createApp();
app.add('Mazda')
app.show()
app.add('Mustang')
app.show()
app.add('Ford')
app.show()

*/

/*
// Bai Tap Closure
function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)(); //3
a(1)(); //3
a(1)(); //3

let x = a(1); // lúc này a(1) = 3 => khi chạy gọi hàm x() => increase lên
x(); //3
x(); //4
x(); //5
// Output: ? => 3,3,3   3,4,5
*/

// Giải thích
/**
 *Trình tự thực hiện: đầu tiên chỉ gọi hàm a(). Nó hoạt động giống như một hàm bình thường, in ra x (bằng 1) 
    sau khi tăng x lên 2 đơn vị. Sau đó, chúng ta khai báo một biến x và gán nó với giá trị trả về của hàm a(1), 
    đó là lý do tại sao chúng ta nhận được 3, 4, 5 thay vì 3, 3, 3.
 */