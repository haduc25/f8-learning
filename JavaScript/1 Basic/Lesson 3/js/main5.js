/** Chuong 15. ECMAScript 6+
    //Note: Ở bài trước đã học đến bài 181 - Nhưng vì f8 cập nhập lại số bài giảng nên ở bài này sẽ là 180
    180 - ECMAScript 6 là gì?, 181 - Let & Const

    // 180. ECMAScript 6 là gì?
    - ECMAScript (hay ES)[1] là một thương hiệu[2] đặc tả ngôn ngữ kịch bản được tiêu chuẩn hóa bởi Ecma International thông qua ECMA-262 
    // và ISO/IEC 16262. Nó được tạo ra để tiêu chuẩn hóa JavaScript, để thúc đẩy nhiều hiện thực độc lập. JavaScript vẫn là hiện thực nổi tiếng nhất 
    // của ECMAScript kể từ khi tiêu chuẩn này được xuất bản, với các hiện thực nổi tiếng khác gồm JScript và ActionScript.[3] 
    // ECMAScript thường được sử dụng cho kịch bản phía máy khách (client-side scripting) trên World Wide Web, 
    // và nó ngày càng được sử dụng nhiều để viết ứng dụng máy chủ và dịch vụ bằng Node.js.

    // ECMAScript6 - ECMAScript 2015 - ES6


        // 181.  Let & Const

    // *So sánh
    // 1. Var / Let, Const: Scope, Hosting
    // 2. Const / Var, Let: Assignment


    // Code block: if else, loop, {}, ...


    // Scope
    if(true){

    }

    // 
    {
        // viết tắt cho if(true)
        
        var course = 'MizGDuc'; //return MizGDuc / với 'var' có thể khai báo trong 1 'code block' vào gọi 'outside'
        // let course = 'MizGDuc'; //return MizGDuc / với 'let' k thể khai báo trong 1 'code block' vào gọi 'outside' / chỉ dùng 'inside'
        //Uncaught ReferenceError: course is not defined

        //const course = 'MizGDuc'; //return MizGDuc / với 'const' k thể khai báo trong 1 'code block' vào gọi 'outside' / chỉ dùng 'inside' / k thể thay đổi / gán value
        //Uncaught ReferenceError: course is not defined
    }
    console.log(course);


    // // Hosting
    // //Chỉ có var hỗ trợ 'Hosting' 

    // // var
    // a = 10;

    // var a;

    // console.log(a); //return 10

    // //let
    // b = 10;

    // let b;

    // console.log(b); //return Uncaught ReferenceError: Cannot access 'b' before initialization

    // //const
    // c = 10;

    // let c;

    // console.log(c); //return Uncaught ReferenceError: Cannot access 'c' before initialization


    // // Assignment
    // //var, let
    // var a  = 10;
    // a = 1000;
    // console.log(a); //return 1000
    
    // var b  = 10;
    // b = 1000;
    // console.log(b); //return 1000

    // // Const
    // const c  = 10;
    // c = 1000;
    // console.log(c); //return Uncaught TypeError: Assignment to constant variable.
    // // => const: k thể gán lại giá trị
  

    //Ex - Khi đi phỏng vấn với 'Const'
    const obj = {
        name: 'HAMINHDUC',
        age: 21
    } 

    // thay đổi giá trị
    obj.name = 'MIZGDUC';  //gán được vì thuộc tính thứ 2 k phải là const

    console.log(obj.name); //return HAMINHDUC / => MIZGDUC
    console.log(obj.age); //return 21



    // Khi nào nên sử dụng Var, Let, Const => trong thực tế
    // Code thuần: var
    // Sử dụng thư viện Babel: Let, Const

    // - Khi định nghĩa biến & k gán lại biến đó: Const
    // - Khi cần gán lại giá trị cho biến: Let

    //ex
    let isSuccess = false;
    if(isSuccess){
        isSuccess = true;
    }


    // Tham khảo (cmt - f8)
    // scope của biến được tạo bởi var:
    // 1. nếu nó được khai báo outside các function thì var tạo ra global variable => có thể access bất cứ đâu
    // 2. nếu nó được khai báo inside 1 function thì var tạo ra 1 biến chỉ có thể truy cập bên trong function
    // 3. ta có thể khai báo lại, update lại giá trị của 1 biến nếu sử dụng từ khóa var để khai báo trước đó
    // 4. phân biệt:
    // Uncaught ReferenceError: x is not defined
    // // x chưa được khai báo, k xác định, not defined
    // undefined
    // // cos.log(x), x này khai báo rồi nhưng giá trị không có hoặc được assign trực tiếp giá trị undefined
    // 5. var hỗ trợ hoisting, nhưng mà sau khi hoist thì biến var sẽ có giá trị là undefined
    // scope của biến let:
    // 1. biến tạo bởi từ khóa let chỉ có block scoped nghĩa là mk có thể access biến let đó bên trong code block {} của nó
    // bên ngoài thì k access đcc
    // 2. không thể khai báo lại biến khi nó đã đc khai báo bằng let từ trước. nhưng có thể update value của nó
    // 3. có thể khai báo 2 biến cùng tên bằng let, ở trong 2 block khác nhau
    // {
    // let x = 3
    // }
    // {
    // let x = 1
    // }
    // ---------------
    // {
    // let x = 3
    // {
    // let x = 5
    // }
    // }
    // 4. biến với từ khóa let không được hoist, dùng cơm tc kẻng là error liền

    // scope của biến const:
    // 1. giống với let ngoại trừ mình không thể update giá trị của nó. tuy nhiên mình có thể thay đổi các phần tử hoặc thuộc tính của nó nếu nó là array/ object
    // 2. ngoài ra mình phải gán giá trị ngay lúc khai báo nếu k sẽ lỗi 



    
    
    
    // 182. Template literals

    const Name = 'MizGDuc'; 
    const Name2 = 'HuyenDiep';
    
    const description = "My name's " + Name + " & my friends is " + Name2;

    console.log(description); //return My name's MizGDuc & my friends is HuyenDiep
    

    //Template string

    const desc2 = `My name's ${Name} & ${Name2}`;
    console.log(desc2); //return My name's MizGDuc & HuyenDiep

    // Test ký tự đặc biệt
    const characters = `\\ My string is: \${} & Template string`;
    console.log(characters);


    // Multi-line String

    const lines = 'Line1\n'
        + 'Line2\n'
        + 'Line3\n'
        + 'Line4\n'
        + 'Line5\n';

    const linesTempString = 
    `
     Line1
     Line2
     Line3
     Line4
     Line5
    `;

    console.log(lines);
    console.log(linesTempString);


    



    // 183. Arrow function, 184 - Thực hành sử dụng Arrow Function

    //function
    function logger(log) {
        console.log(log);
    } 

    logger('Luv You'); //return Luv You


    // Arrow function
    const logger2 = (log) => {
        console.log(log);
    }

    logger2('Hello 2') //return Hello 2


    // Ex - ham sum
    const sum = (a,b) => {
        return a + b;
    }

    console.log(sum(2, 3)); //return 5


    // Ex - ham sum - run gon hon
    const sum2 = (a, b) => a + b;

    console.log(sum2(2, 3)); //return 5

    //sau dấu '=>' được hiểu là return trừ dấu {}
    // nếu là {} thì đc hiểu là 1 block code

    // Ex - ham sum - return ra 1 obj
    const sum3 = (a, b) => ({a: a, b: b});

    console.log(sum3(2, 3)); //return {a: 2, b: 3}

    // Ex logger -> arrow function
    const logger3 = (log) => console.log(log);

    //rut gon hon
    const logger4 = log => console.log(log);

    logger3('Here\'s Arrow Function !'); //return Here's Arrow Function !
    logger4('Here\'s Arrow Function !'); //return Here's Arrow Function !


    // Arrow function k su dung duoc trong 1 obj
    const obj = {
        name: 'Ha Minh Duc',
        getName: function(){
            return this.name;
        },
        
        getName2: () => {
            return this;
        }
    }

    console.log(obj.getName()); //return Ha Minh Duc
    console.log(obj.getName2()); //return undefined


    // Arrow function k su dung duoc constructor function
    const Course = function(name, price){
        this.name = name;
        this.price = price;
    }

    const Course2 = (name, price) => {
        this.name = name;
        this.price = price;
    }

    const jsCourse = new Course('JavaScript', 5000);
    console.log(jsCourse); //return Course {name: 'JavaScript', price: 5000}

    // Arrow function k co 'constructor'
    const jsCourse2 = new Course2('JavaScript', 5000);
    console.log(jsCourse2); //return Uncaught TypeError: Course2 is not a constructor



    // 184. Thực hành sử dụng Arrow Function

    // Sử dụng cú pháp arrow function viết hàm sum nhận vào 2 tham số a và b và trả về tổng của chúng.

    // main.js
    
    // const sum = (a, b) => a + b;
    // // Expected results
    // console.log(sum(1, 2)) // Output: 3
    // console.log(sum(2, 2)) // Output: 4

    // Youtube: 14/07/2022
    // https://youtu.be/p7HQRaZgPM8
    // https://youtu.be/kzpsNT30UII



    // 185. Classes

    // // function
    // function Course(name, price){
    //     this.name = name;
    //     this.price = price;

    //     //lấy dl
    //     this.getName = function(){
    //         return this.name;
    //     }
    // }



        // class
       class Course{
         constructor(name, price){
            this.name = name;
            this.price = price;
         }


         getName(){
            return this.name;
         }

         getPrice(){
            return this.price;
         }


        //  run(){
        //     const isSuccess = false;

        //     if(...){
        //         isSuccess = true;
        //     }
        //  }
       }
            
    // use function, class
    const phpCourse = new Course('PHP', 5000);
    const jsCourse = new Course('Javascript', 7000);

    console.log(phpCourse); //return Course {name: 'PHP', price: 5000}
    console.log(jsCourse); //return Course {name: 'Javascript', price: 7000}

    console.log(phpCourse.getName()); //return PHP
    console.log(jsCourse.getName()); //return Javascript
    console.log(phpCourse.getPrice()); //return 5000
    console.log(jsCourse.getPrice()); //return 7000




    //186. Thực hành sử dụng Class
    
    // Tạo class Person có thuộc tính name và age
    // Chú ý: Không dùng constructor function nhé.


    //main.js
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }
    
    // Expected results
    const person = new Person('Long', 22);
    console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
    // Output: 'Tên: Long, tuổi: 22'



    
    
    
    // 187. Default parameter values

    // Ex1 - ES5
    function logger(log){
        // xu ly trong ES5
        if(typeof log === 'undefined'){
            log = 'Day la gia tri mac dinh';
        }

        console.log(log);
    }


    logger('Co gia tri'); //return Co gia tri
    logger(); //return undefined / gia tri mac dinh => Day la gia tri mac dinh


    // Ex2 - ES6 / Gia tri mac dinh
    function logger2(log = 'Day la gia tri mac dinh'){
        console.log(log);
    }

    logger2('Co gia tri'); //return Co gia tri
    logger2(); //return Day la gia tri mac dinh


    // Ex3 - ES6 / Gia tri mac dinh
    function logger3(log = 'Day la gia tri mac dinh', isAlert){
        if(isAlert) return alert(log);
        console.log(log);
    }

    logger3('Co gia tri', true); //return Co gia tri
    logger3(); //return Day la gia tri mac dinh


    // Ex4 - ES6 / Gia tri mac dinh
    function logger4(log = 'Day la gia tri mac dinh', isAlert = false){
        if(isAlert) return alert(log);
        console.log(log);
    }

    logger4('Co gia tri', true); //return Co gia tri
    logger4(); //return Day la gia tri mac dinh


    // Ex5 - ES6 / Gia tri mac dinh
    function logger5(log, type = 'log'){
        console[type](log); //mac dinh là log
    }

    logger5('Co gia tri'); //return Co gia tri
    logger5('Co gia tri', 'warn'); //return Co gia tri
    logger5('Co gia tri', 'error'); //return Co gia tri
    logger5(); //return Day la gia tri mac dinh


    // Nên sử dụng với những hàm có tham số k bắt buộc truyền vào




    // 188. Enhanced object literals

    // 1. Định Nghĩa key: value cho object
    // 2. Định nghia method cho object
    // 3. Định nghĩa key cho object dưới dạng biến


    // ex1 - k dung Enhanced object literals
    var name = 'Javascript';
    var price = 5000;

    var course = {
        name: name,
        price: price
    };

    console.log(course); //return {name: 'Javascript', price: 5000}

    // ex2 - su dung Enhanced object literals / rut gon hon 

    // Định Nghĩa key: value cho object
    var name2 = 'Javascript';
    var price2 = 5000;

    var course2 = {
        //rut gon doan nay => kq tuong tu
        name2,
        price2,

        // them ex - k dung Enhanced object literals

        // getName: function(){
        //     return name2;
        // }

        // Định nghia method cho object
        // su dung Enhanced object literals / rut gon
        // => kq tuong tu
        getName(){
            return name2;
        }
    };

    console.log(course2); //return {name2: 'Javascript', price2: 5000, getName: ƒ}
    console.log(course2.getName()); //return Javascript

    // ex - Định nghĩa key cho object dưới dạng biến

    // var fieldName = 'name';  //return {name: 'Javascript', price: 10000}
    var fieldName = 'new-name';  //return {new-name: 'Javascript', price: 10000}
    var fieldPrice = 'price';

    // đặt tên key theo biến
    const course3 = {
        [fieldName]: 'Javascript',
        [fieldPrice]: 10000,
    }

    console.log(course3); //return {name: 'Javascript', price: 10000}


    
    // Youtube: 15/07/2022
    // https://youtu.be/s_Puia7H6lk




        // 189. Destructuring, Rest 
    // Destructuring

    // // Ex - k su dung Destructuring
    // var array = ['Javascript', 'PHP', 'Ruby'];

    // var a = array[0];
    // var b = array[1];
    // var c = array[2];

    // console.log(a, b, c); //return Javascript PHP Ruby

    // Ex - su dung Destructuring
    var array = ['Javascript', 'PHP', 'Ruby'];

    var [a, b, c] = array;

    //kq tuong tu
    console.log(a, b, c); //return Javascript PHP Ruby


    //khi k muon lay 1 bien ra, vd k muốn lấy biến b ra
    var [a1, , c1] = array; //bỏ b giữ nguyên dấu ','

    console.log(a1, c1); //return Javascript Ruby

    // Rest parameters - Lấy ra những phần còn lại
    // Ex -  chỉ lấy mỗi pt a
    
    var [a2, ...rest] = array; //Rest: lấy ra những pt còn lại trừ pt đã lấy ra / ở đây đã lấy ra a & muốn lấy thêm b & c
    // ...rest / ...name

    // Nếu lấy cả a2 & b2
    // var [a2, b2,  ...rest] = array; //return ['Ruby']

    console.log(a2); //return Javascript
    console.log(rest); //return (2) ['PHP', 'Ruby']

    // * Lưu ý:
    // + Toán tử Rest: ... trùng với toán tử Spread
    // Khi nào là 'Rest' & khi nào là 'Spread'
    // Khi là 'Rest': 
    // + Khi sử dụng kết hợp với Destructuring
    // + Khi sử dụng kết hợp với Function vẫn là toán tử Rest
    // + Khi định nghĩa 1 tham số => là Rest

    // Trường hợp còn lại => là Spread


    // Ex - Sử dụng rest + Destructuring với object
    var course = {
        name: 'Javascript',
        price: 5000,
        image: 'image-address',
    };

    var {name, price} = course; //vì object có key nên muốn lấy ra key nào thì viết ra key đó / key k có => undefined

    console.log(name, price);


    //Sử dụng rest
    var {name, ...rest} = course;

    console.log(name);
    console.log(rest); //return {price: 5000, image: 'image-address'}
    // rest => là 1 object thiếu đi name


    // Ex - Xóa 1 key của object mà k dùng đến delete
    var course2 = {
        name2: 'Javascript',
        price2: 5000,
        image2: 'image-address',
    };

    var {name2, ...newObject} = course2;

    //xóa thành công đi 1 key là 'name2'
    console.log(newObject); //return {price2: 5000, image2: 'image-address'}
    

    // Ex - khi 1 object -> có 1 object con
    var course3 = {
        name3: 'Javascript',
        price3: 5000,
        image3: 'image-address',
        children: {
            name3: 'ReactJS'
        }
    };

    // Lấy ra 'name3' của 'children'
    // để lấy ra 'name3' của 'children' => sử dụng dấu ':'
    // vì tên key trùng nhau => đổi tên key => để đổi tên sử dụng dấu ': newNameKey' 

    // var {name3, children: {name3}} = course3;  //Lấy ra 'name3' của 'children'
    var {name3: parentName, children: {name3: childrenName}} = course3; //vì tên key trùng nhau => đổi tên key

    // sau khi đổi tên => tên cũ k dùng đc

    console.log(parentName); //return Javascript
    console.log(childrenName); //return ReactJS


    // Ex - Lấy ra 1 value chưa được định nghĩa
    var course4 = {
        name4: 'Javascript',
        price4: 5000,
        image4: 'image-address',
        // khi có key 'description4'
        description4: 'have value', //khi có dl / return have value
    };

    //// Lấy ra 'description' nhưng chưa được định nghĩa
    // var {name4, description4} = course4; //chưa gán key => undefined 

    // gán giá trị mặc định => khi k có 'description4'
    var {name4, description4 = 'default description'} = course4;

    console.log(name4);
    console.log(description4); //return default description => khi k có key



    // Ex - Rest + Function => Nhận vào nhiều giá trị giống console.log
    // console.log nhận nhiều giá trị k giới hạn
    console.log(1, 2, 3, 4, 5, 6); //return 1 2 3 4 5 6

    // tạo function giống console.log => sử dụng rest
    function logger(...params){
        console.log(params); //return (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // gần giống 'arguments'
        console.log(arguments); //return Arguments(9) [1, 2, 3, 4, 5, 6, 7, 8, 9, callee: (...), Symbol(Symbol.iterator): ƒ]
    }

    console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9));




    
    
    // 190. Spread
    
    //* Bổ sung thêm vào toán tử 'Rest'
    
    function logger(...params){
        console.log(params);

        //* Giải thích thêm
        // Rest: là lấy ra phần còn lại
        // ở ví dụ trên k lấy ra 1 tham số nào => còn lại là lấy ra tất cả (tham số truyền vào)
    }

    logger(1, 2, 3, 4, 5);


    // remmake - lấy ra tham số
    function logger2(a, b, ...params){
        console.log(a, b); //return 1 2
        console.log(params); //return (3) [3, 4, 5]

    }

    logger2(1, 2, 3, 4, 5); //return (3) [3, 4, 5]


    // Ex - truyền vào 1 object
    // nếu k dùng rest
    function logger3(obj){
        console.log(obj.name); //return Javascript
        console.log(obj.price); //return 1500   
    }

    // Nhận vào 1 object 
    logger3({
        name: 'Javascript',
        price: 1500,
        description: 'description content'
    });

    // nếu dùng rest
    function logger4({name, price, ...rest}){ //lấy ra phần còn lại: rest
        console.log(name); //return Javascript
        console.log(price); //return 1500   

        // lấy ra phần còn lại: rest
        console.log(rest); //return {description: 'description content'}    
    }

    // Nhận vào 1 object 
    logger4({
        name: 'Javascript',
        price: 1500,
        description: 'description content'
    });


    // Ex - truyền vào 1 array
    function logger5([a, b, ...rest]){
        console.log(a); //return 2
        console.log(b); //return 5
        console.log(rest); //return (2) [0, 9]
    }

    // Nhận vào 1 array 
    logger5([2, 5, 0, 9]);



    // Spread

    // Ex - Nối array sử dụng 'Spread' (...)

    var arr1 = ['Javascript', 'PHP', 'Ruby'];

    var arr2 = ['ReactJS', 'Dart'];

    // var arr3 = [];


    // sử dụng 'Spread' nối arr1 & arr2 / array
    // Khi thêm '...' trong 1 array or object sẽ tự động bỏ đi dấu '{}, []'

    var arr3 = [...arr2, ...arr1]; //return (5) ['ReactJS', 'Dart', 'Javascript', 'PHP', 'Ruby']

    //Đảo lại array
    var arr4 = [...arr1, ...arr2]; //return (5) ['Javascript', 'PHP', 'Ruby', 'ReactJS', 'Dart']

    console.log(arr3);
    console.log(arr4);


    // sử dụng 'Spread' nối obj1 & obj2 / object
    var object1 = {
        name: 'Javascript',
    };

    var object2 = {
        price: 4500,
    };

    var object3 = {
        //tương tự như array
        //Spread (...) tự động loại bỏ đi {}
        ...object1,
        ...object2
    };

    console.log(object3); //return {name: 'Javascript', price: 4500}


    // Ex - Object trong thực tế
    var defaultConfig = {
        api: 'https://domain-pages-course',
        apiVersion: 'v1',
        other: 'other',
        // 
        //
        //
    };

    var excerciseConfig = {
        ...defaultConfig,
        api: 'https://domain-pages-excercise',  //api 'excerciseConfig' -> ghi đè lên api 'defaultConfig'

    }

    console.log(excerciseConfig); //return {api: 'https://domain-pages-excercise', apiVersion: 'v1', other: 'other'}


    // Ex - Truyền tham số cho hàm - Spread(...)
    var arr = ['Javascript', 'PHP', 'Ruby', 'MizGDuc'];

    function logger6(a, b, c){
        console.log(a, b, c);
    }


    // k dung Spread
    logger6(1, 2, 3); //return 1 2 3

    // dung Spread
    logger6(...arr); //return Javascript PHP Ruby


    //ket hop Spread & Rest
    var arr7 = ['Javascript', 'PHP', 'Ruby', 'MizGDuc', 'Mai Huyen', 'ReactJS'];

    function logger7(...rest){
        for (var i = 0; i < rest.length; i++) {
            console.log(rest[i]);            
        }
    }

    logger7(...arr7); //return Javascript PHP Ruby MizGDuc Mai Huyen ReactJS

 



    // 191. Thực hành sử dụng Spread
    // Bạn hãy sử dụng spread để sao chép tất cả các key và value từ object person1 sang person2
    
    //// main.js (default)
    // const person1 = {
    //     name: 'Son',
    //     age: 21
    // }
    
    // const person2 = 
    
    // // Expected results
    // console.log(person2.name) // Output: 'Son'
    // console.log(person2.age) // Output: 21
    // console.log(person1 === person2) // Output: false


    //// main.js 
    const person1 = {
        name: 'Son',
        age: 21
    }
    
    const person2 = {
        ...person1
    } 
    
    // Expected results
    console.log(person2.name) // Output: 'Son'
    console.log(person2.age) // Output: 21
    console.log(person1 === person2) // Output: false 


    
    // Youtube: 16/07/2022
    // https://youtu.be/UwTFJh9YoSo





    // 192. Tagged template literals

    ////current
    // function highlight(...rest){
    //     console.log(rest); //return (3) [Array(3), 'Javascript', 'F8']
    // }


    // Dùng '189. Destructuring' lấy đối số đầu tiên -> đặt tên là 'first'
    // 'first' lấy đc 'Học lập trình '
    // Thêm 'rest' -> đặt tên là 'strings'
    // 'strings' lấy đc các pt còn lại là ' tại ' & '!'
    
    // Thêm 'rest' -> đặt tên là 'values' -> lấy tất cả đối số truyền vào / ở đây có 'course' & 'brand'

    // Sử dụng 'reduce()'
    //The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, 
    //passing in the return value from the calculation on the preceding element. The final result of running the reducer 
    //across all elements of the array is a single value.
    //The first time that the callback is run there is no "return value of the previous calculation". 
    //If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value 
    //and iteration starts from the next element (index 1 instead of index 0).

    // trans
    // Reduce là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất. 
    // Là một phương thức quan trọng hay sử dụng trong lập trình hàm.

    ////Tham số

    // callback là hàm thực thi với từng phần tử của hàm, với 4 tham số là: accumulator, currentValue, index và array.
    // accumulator biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
    // currentValue phần tử của mảng đang được xử lý.
    // index (Optional) chỉ số của phần tử trong mảng đang được xử lý.
    // array (Optional) mảng hiện tại gọi hàm reduce().
    // initialValue là giá trị cho tham số thứ nhất (accumulator) của hàm callback trong lần gọi hàm đầu tiên. Nếu giá trị này 
    // không được cung cấp thì giá trị phần tử đầu tiên của mảng sẽ được sử dụng

    //// Idea
    // initialValue của 'Reduce' là: 'Học lập trình'

    // Step
    // 1. Lấy ra chuỗi 'Học lập trình'
    // 'Reduce' lặp qua mảng 'values' khi lặp lấy các pt của 'values' / Lấy ra 'Javascript'
    // 2. Khi lấy ra được pt của 'values' -> thêm thẻ '<span></span>'
    // 3. Khi thêm thẻ '<span></span>' nối luôn pt đầu tiên của mảng 'strings'
    // Khi nối pt tử thứ 1 của 'strings' / ' tại ' => Xóa luôn pt đó => Còn lại pt thứ 2 / '!'

    // 'Reduce' lặp lần 2 => lấy ra pt 'F8' => Logic tương tự => đưa 'F8' vào thẻ '<span></span>' => <span>F8</span>
    // Tương tự thì sẽ lấy được dấu '!' => vì pt thứ 1 / ' tại ' đã bị xóa


    // Result: Học lập trình <span>Javascript</span> tại <span>F8</span>!
    

    // accumulator -> acc
    // currentValue -> curr
    function highlight([first, ...strings], ...values){
            return values.reduce((acc, curr) =>  [...acc, `<span>${curr}</span>`, strings.shift()], [first]
        )
        .join(''); //return Học lập trình <span>Javascript</span> tại <span>F8</span>!

        // Lần 1
        // acc -> first
        // curr -> 'Javascript'

        // giải 'acc' / ...acc => 'Học lập trình'
        // nối = template string -> thêm thẻ '<span></span>'
        // xoá pt đầu tiên / sử dụng shift()
        // strings.shift() / ' tại '

        // Lần 2
        // curr -> 'F8'
        // nối với acc -> 'Học lập trình tại' 

        // su dung join() -> chuyen arr -> string

        // shift()
        // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift?retiredLocale=vi

    }
     

    var brand = 'F8';
    var course = 'Javascript'; 

    // sử dụng Tagged template literals
    const html = highlight`Học lập trình ${course} tại ${brand}!`;

    console.log(html); //return (5) ['Học lập trình ', '<span>Javascript</span>', ' tại ', '<span>F8</span>', '!']


    // testing :>
    var name = 'HA MINH DUC';

    const html2 = highlight`My name is ${name} !`;
    console.log(html2); //return My name is <span>HA MINH DUC</span> !




        // 193. Modules
    // Tham khảo: https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/#:~:text=A%20module%20in%20JavaScript%20is,object%20accessible%20to%20other%20modules.

    // Import / Export

    // Uncaught SyntaxError: Cannot use import statement outside a module (at main5.js:963:5)
    // thêm 'type="module" trong file html use script'
    // look like this: <script type="module" src="./js/main5.js"></script>

    // // ex - import / export default
    // import logger from '../modules/logger.js';

    // console.log(typeof logger); //return function
    // console.log(logger); 
    // //return 
    // // ƒ logger(log, type = 'log'){
    // //     console[type](log);
    // // }

    // // Sử dụng cho 'export default'

    // logger('Message... from Main5.js', 'error'); //return Message... from Main5.js
    // logger('Message... from Main5.js', 'warn'); //return Message... from Main5.js


    // // ex - import / export / sử dụng destructuring
    // // lấy ra TYPE_LOG TYPE_WARN TYPE_ERROR
    // import logger, {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from '../modules/logger.js';


    // logger('Message... from Main5.js', TYPE_LOG); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_WARN); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_ERROR); //return Message... from Main5.js


    // // ex - có nhưng file k cần 'export default'
    // // 1. Tách file phần (TYPE_LOG, TYPE_WARN, TYPE_ERROR) ra file 'constants.js'

    // import logger from '../modules/logger.js'; //is export default
    // import {
    //     TYPE_LOG, 
    //     TYPE_WARN, 
    //     TYPE_ERROR
    // } from '../modules/constants.js'; //is export (const)


    // logger('Message... from Main5.js', TYPE_LOG); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_WARN); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_ERROR); //return Message... from Main5.js


    // // Ex - import tất cả
    // import logger from '../modules/logger.js';
    // // import * as nameAlias from '../modules/constants.js'; 
    // import * as constants from '../modules/constants.js'; 

    // console.log(constants); //return Module {Symbol(Symbol.toStringTag): 'Module'}

    // logger('Message... from Main5.js', TYPE_LOG); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_WARN); //return Message... from Main5.js
    // logger('Message... from Main5.js', TYPE_ERROR); //return Message... from Main5.js


    // Ex - Sử dụng trong thực tế
    // Setup
    // Tạo 1 folder 'logger' trong folder 'modules'
    // Trong folder 'logger' tạo 1 file 'index.js' 

    //export default
    // import logger from '../modules/logger/index.js'; //vì bên file index.js export default nên có thể import 'logger'

    //export thường
    import { logger2 } from '../modules/logger/index.js'; //vì bên file index.js export thường và gán alias name là 'logger2'
    import * as constants from '../modules/constants.js'; 

    console.log(constants); //return Module {Symbol(Symbol.toStringTag): 'Module'}

    logger2('Message... from Main5.js', constants.TYPE_LOG); //return Message... from Main5.js
    logger2('Message... from Main5.js', constants.TYPE_WARN); //return Message... from Main5.js
    logger2('Message... from Main5.js', constants.TYPE_ERROR); //return Message... from Main5.js


    // Youtube: 18/07/2022
    // https://youtu.be/5R1NDZRtwPk
    // https://youtu.be/W3GWH3TNGJ8
*/












    // 194. Optional chaining (?.)
    // Tham khảo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

    // Ex - K su dung Optional chaining (?.) / 1 obj
    const obj = {
        name: 'MizGDuc',
        cat: {
            name: 'Min',
            age: 3
        }
    }

    //kt thông thường
    if(obj.cat.name){
        console.log(obj.cat.name); //return Min
    }


    
    // Ex - K su dung Optional chaining (?.) / nhiều obj
    const obj2 = {
        name: 'MizGDuc',
        cat: {
            name: 'Min',
            cat2: {
                name: 'Max',
                cat3: {
                    name: 'Powder',
                }
            }
        }
    }

    //kt thông thường
    if(
        obj2.cat &&
        obj2.cat.cat2 &&
        obj2.cat.cat2.cat3
    ){
        console.log(obj2.cat.cat2.cat3.name); //return Powder
    }

    //kt sử dụng - Optional chaining (?.)
    // Nếu nghi ngờ đối tượng nào k tồn tại -> thêm '?.' /  
    
    if(obj2.cat.cat2?.cat3){ //Nghi ngờ cat2 => k tồn tại / nếu có cmt cat2 => k bị lỗi
        console.log(obj2.cat.cat2.cat3.name); //return Powder
    }

    //// Syntax
    // obj.val?.prop
    // obj.val?.[expr]
    // obj.func?.(args)



    // Ex - OBJ Case 2 sử dụng - Optional chaining (?.)
    obj2['cat']?.['cat2'];



    // Ex - OBJ - Array sử dụng - Optional chaining (?.)
    
    const obj3 = {
        ////neu cmt => lỗi
        // getName(value){
        //     console.log(value);
        // }

        //// Optional chaining (?.) => cmt cũng k lỗi :>
        getName(value){
            console.log(value);
        }
    }

    ////thông thường
    obj3.getName('Hello my friend') //nết cmt getName => lỗi / main5.js:1123 Uncaught TypeError: obj3.getName is not a function

    ////Optional chaining (?.)
    obj3.getName?.('Hello my friend')

    // * Tóm tắt theo cách hiểu
    // + sử dụng để check undefined or null trong object
    // + nghi ngờ obj nào thì thêm (?.)
    // + khi check (nếu tồn tại (true) => code chạy tiếp)
    // (nếu k tồn tại (false) => thì thôi, bỏ qua => k gây ra lỗi)

    // Ex - from Mozilla.org
    const obj4 = {
        first: {
            second: 'Hello i\'m second'
        }
    }

    // KT Thông thường - Nếu 'obj4.first' & 'obj4.first.second' Tồn tại (true) => lấy ra 'second' => gán values vào 'nestedProp'
    // For example, consider an object obj which has a nested structure. Without optional chaining, looking up a deeply-nested subproperty requires validating the references in between, such as:
    const nestedProp = obj4.first && obj4.first.second;
    console.log(nestedProp); //return Hello i'm second

    // The value of obj.first is confirmed to be non-null (and non-undefined) before then accessing the value of obj.first.second. 
    // This prevents the error that would occur if you accessed obj.first.second directly without testing obj.first.

    
    // KT Sử dụng Optional chaining (?.)
    // With the optional chaining operator (?.), however, you don't have to explicitly test and short-circuit based on the state of obj.
    // first before trying to access obj.first.second:

    const nestedProp2 = obj4.first?.second;
    console.log(nestedProp2); //return Hello i'm second

    // By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.
    // first is not null or undefined before attempting to access obj.first.second. 
    // If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.


    //some change - testing ex
    const nestedProp3 = obj4.notFirst?.second; //k tồn tại trong obj => trả về undefined
    console.log(nestedProp3); //return undefined


    // You can also use the optional chaining operator when accessing properties with an expression using the bracket notation of the property accessor:
    const nestedProp4 = obj?.['prop' + 'Name'];

    // This is particularly useful for arrays:
    const arr = ['a', 'b', 'c', 'd']
    const arrayItem = arr?.[42]; // pt 42 => k tồn tại / k gây ra lỗi
    console.log(arrayItem);

    // ex - pt tồn tại
    const arrayItem2 = arr?.[2]; // return c
    console.log(arrayItem2);
    
    // Youtube: 19/07/2022
    // https://youtu.be/j5O70IKkRhY
