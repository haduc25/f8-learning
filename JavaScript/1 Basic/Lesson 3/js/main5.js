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

*/




    // 183. Arrow function