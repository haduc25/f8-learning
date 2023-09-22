//  ###################### Hoisting ###################### //

/*
let fullName = 'Ha Minh Duc';

{
    let fullName = 'Ha Minh';
    {
        {
            let fullName = 'Ha';
            {
                console.log(fullName)
                let fullName = 'Ha2'; // Hoisted nhma đang ở trong TDZ
            }
        }
    }
}
*/


/* // Ví dụ 1
const counter1 = makeCounter();

console.log(counter1()) //1

function makeCounter(){
    let counter = 0;
    
    return increase;
    
    function increase(){
        return ++counter;
        // func vẫn đc chạy mặc dù ở sau return nhma vì là 1 `Declaration function` nên sẽ đc `Hoisted` và đưa lên đầu (trước dòng `let counter = 0;`)
    }

}

*/

/* // Ví dụ 2 

var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: I have $NaN


// // Giai Thich
// Ở đây chúng ta có một IIFE (Biểu thức hàm được gọi ngay lập tức)
// Biến tip sẽ là undefined vì var tip = 10 đã được khai báo bên trong hàm. Biến tip bên trong hàm được hoisted với giá trị mặc định là undefined. Khi thực hiện tính toán với 1 biến có giá trị là undefined thì kết quả trả về sẽ là NaN.
// Nếu chúng ta không khai báo var tip = 10 ở cuối hàm thì đáp án sẽ là "I have $100".
*/

//  ###################### Strict Mode ###################### //
/**
    //cach dung thu 3
  
    // index.html
    <script>
        "use strict"
        ...
    </script>

 */

/** Các cách sử dụng và khi k dung `Strict mode?` k có thông báo lỗi
//"use strict" // cach dung thu 1

fullName = "Ha Minh Duc";

const testFunction = () => {
    // "use strict" // cach dung thu 2
    age = 18; // Tạo ra biếng age ở ngoài phạm vi global
}

testFunction();

console.log(fullName)
console.log(age)
 */

/*
//sau khi sử dụng `Strict mode?` và sửa lại code
"use strict" // cach dung thu 1

var fullName = "Ha Minh Duc";

const testFunction = () => {
    let age = 18; // Tạo ra biếng age ở ngoài phạm vi global
    console.log(age)
}

testFunction();

console.log(fullName)
*/

//// Báo lỗi khi gán lại giá trị cho thuộn tinh có `writable: false`

/* //exam 1: writable is true
const student = {
    fullName: 'Thieu Thi Thanh Tuyen'
}


student.fullName = 'Ha Minh Duc'; //writable is true => fullName: 'Ha Minh Duc'

console.log(student); //fullName: 'Ha Minh Duc'
*/

/* //exam 2: writable is false
const student = Object.freeze({
    fullName: 'Thieu Thi Thanh Tuyen'
})

student.fullName = 'Ha Minh Duc'; //writable is fasle => k thể nhma k báo lỗi khi k ở strict mode

console.log(student); //fullName: 'Thieu Thi Thanh Tuyen'
*/

/* //exam 3: writable is false và bật strict mode
"use strict"

const student = {}

// cách tạo obj khác có thể đc writable: true/false
Object.defineProperty(student, 'fullName', {
    value: 'Thieu Thi Thanh Tuyen',
    writable: true, //default: fasle
})

student.fullName = 'Ha Minh Duc'; //writable is fasle => k thể nhma k báo lỗi khi k ở strict mode

console.log(student); //fullName: 'Thieu Thi Thanh Tuyen'
*/

/*// exam 4: tuong tu xoa obj se bao loi khi o strict mode
"use strict"

const cars = {
    name: 'Mustang'
}

delete cars //k bao loi => phai bat strict mode || sau khi bat => Delete of an unqualified identifier in strict mode.

console.log(cars)
 */


/* // exam 5: Báo lỗi khi hàm có tham số cùng tên
"use strict"

// const sum = (a, a) => (a + a); //tu dong bat strict mode...bla, bla | arrow func

function sum(a, a){ //là 1 Function Declaration => đc hoisted - nên k có strict mode k lỗi
    return a + a;

    //   chỉnh lại 2 tham số lên thành 
    //   sum(a, b)
    //   return a + b;
    //   để hết lỗi
     
}

console.log(sum(6, 9))
*/

/* // exam 6: Khai báo hàm trong `code block` thì hàm sẽ thuộc phạm vi của `code block`
"use strict"

{
    function minus(a, b){
        return a - b;
    }

    // khi bat `strict mode` chi co the su dung trong day
    console.log(minus(10, 2))
}

// console.log(minus(10, 2)) //8 | khi k có strict mode => có thể láy dl từ trong `code block` ra ngoài 
// | khi bật strict mode chỉ có thể sử dung trong block đó => Uncaught ReferenceError: minus is not defined
*/


/* // exam 6: Không đặt tên biến, tên hàm bằng một số từ khóa `nhạy cảm` cảu ngôn ngữ
// private protected, public...
"use strict"

let private = "Duc Minh";

console.log(private); // Uncaught SyntaxError: Unexpected strict mode reserved word 
*/

/*
// Bai Tap
"use strict"
var hero = "Doctor Strange"

function MultiverseOfMadness() {
   var universe = 616
}

MultiverseOfMadness()

console.log(hero) //Output ? => Doctor Strange
console.log(universe) //Output ? => Uncaught ReferenceError: universe is not defined

// Giải thích
// Với use strict mode, biến universe chỉ được khai báo trong phạm vi của một function. 
// Khi đó, nếu gọi đến biến đó ở ngoài phạm vi khai báo sẽ dẫn đến lỗi.
*/


//  ###################### Primitive Types & Reference Types ###################### //

/* // exam1 - Reference types

let a = {
    name: 'Mazda'
}

let b = a

a.name = 'Mustang'

console.log(b) //{name: 'Mustang'}

// / Giải thích
//   + khi tạo ra biến a => ô nhớ lưu địa chỉ vào biến a
//   + khi gán `b = a` thì biến b sẽ copy mỗi địa chỉ của biến a
//   + nên là khi biến a, b đều lưu chung 1 địa chỉ ô nhớ
//   + vậy nên khi sửa ở biến a nhưng gọi đến biến b sẽ chung ô nhớ vs a nên kết quả giống nhau
//  */

/* // exam2 - Reference types
// # Điều gì sẽ xảy ra vs mã sau?

let a = {
    name: 'Mercedes'
}

a = {
    name: 'BMV',
    model: 'i8'
}

//// Giải thích
// + sẽ có 2 vùng nhớ được tạo ra và địa chỉ thứ 2 sẽ được ghi đè và lưu vào biến a
*/


/* // exam3 - Reference types
const student = {
    name: 'Minh Duc',
    profile: {
        fName: 'Minh',
        lName: 'Duc',
        age: 21,
    }
}

//// Giải thích
// + `student` đang lưu địa chỉ ô nhớ của `object` đã gán cho nó
// + key `profile` trong object cũng đang lưu địa chỉ ô nhớ của object đã gán cho nó

// => Cho dù có chép bao nhiêu địa chỉ vùng nhớ nhma nếu dữ liệu ở địa chỉ thay đổi thì tất cả trỏ đến ô nhớ đó đều chung 1 dữ liệu
*/

/* // exam4 - Reference types 
function func(obj){
    // js ngam hieu
    // let obj = a //cho nên chỉ có thể copy địa chỉ vùng nhớ của biến a ở scope bên ngoài
    // => vì vậy khi sửa dữ liệu trong func => dữ liệu trong vùng nhớ cũng thay đổi theo 

    obj.name = 'Mercedes' 
    console.log(obj) //{name: 'Mercedes'}
}

const a = {
    name: 'Mustang'
}

func(a)

console.log(a) //{name: 'Mercedes'}
*/


/* // exam5 - Reference types => Side Effect 
function createCar(obj){
    // Cách khắc phục => tạo ra vùng nhớ mới
    //// case 1 - sử dụng JSON => áp dụng cho obj có nhiều obj con hoặc nhiều obj phức tạp
    // obj = JSON.parse(JSON.stringify(obj))
    //// how it work?
    //// convert qua JSON => convert qua OBJ => có thể ảnh hưởng đến Performance

    //// case 2 - sử dụng ES6 => chỉ áp dụng cho 1 cấp con
    obj = {...obj}

    obj.name = 'Mercedes' 
    return obj
}

const car = {
    name: 'Mustang'
}

const newCar = createCar(car)
console.log(car) //{name: 'Mustang'}
console.log(newCar) //{name: 'Mercedes'}
*/


// ####### Bài tập ####### //
const iphone13 = {
    screen: 'OLED6.7"Super Retina XDR',
    chip: 'Apple A15 Bionic',
    ram: '6 GB'
 }
 const iphone11 = iphone13
 iphone11.ram = '12 GB'
 const iphone6 = iphone11
 console.log(iphone6 === iphone13) // Output? => true


/*// Giải thích
// const iphone11 = iphone13 thì iphone11 sẽ trỏ về cùng vùng nhớ của iphone13.
// const iphone6 = iphone11 thì iphone6 sẽ trỏ về cùng vùng nhớ của iphone11.
// Lúc này iphone13, iphone11 và iphone6 cùng trỏ về một vùng nhớ.
 */