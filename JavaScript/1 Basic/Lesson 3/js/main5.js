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



*/

    // 190. Spread











    // Youtube: 16/07/2022
    // https://youtu.be/UwTFJh9YoSo

     




