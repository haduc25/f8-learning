/** Chuong 14. JSON, Fetch, Postman
    163 - JSON là gì?, 164 - 167, Ôn tập JSON #1 - #4
    
    //1. Là một định dạng dữ liệu (string)
    //2. JavaScript Object Notation (JSON)
    //3. JSON: Number, String, Boolean, Null, Array, Object.


    //JSON
    //Stringify: Từ JavaScript types -> JSON
    //Parse: Từ JSON -> JavaScript types

    //JSON types
    //Number
    var json = '1';

    //String
    var json = '"MizGDuc"';

    //Boolean
    var json = 'true';

    //Null
    var json = 'null';

    //Array
    var json = '["Jett", "Astra", "Neon"]';

    //Object
    var json = '{"name": "Reyna", "age": 85}'; //key & value viết trong dấu `""`


    //JSON - Parse

    //Number
    var numberJS = '2509';
    console.log(JSON.parse(numberJS)); //2509
    console.log(typeof JSON.parse(numberJS)); //number

    //String
    var strJS = '"MizGDuc"';
    console.log(JSON.parse(strJS)); //MizGDuc
    console.log(typeof JSON.parse(strJS)); //string

    //Boolean
    var booleanJS = 'true';
    console.log(JSON.parse(booleanJS)); //true
    console.log(typeof JSON.parse(booleanJS)); //boolean

    //Null
    var nullJS = 'null';
    console.log(JSON.parse(nullJS)); //null
    console.log(typeof JSON.parse(nullJS)); //object

    //Array
    var arrayJS = '["Jett", "Astra", "Neon"]';
    console.log(JSON.parse(arrayJS)); //(3) ['Jett', 'Astra', 'Neon']
    console.log(typeof JSON.parse(arrayJS)); //object

    //Object
    var objJS = '{"name": "Reyna", "age": 85}';
    console.log(JSON.parse(objJS)); //{name: 'Reyna', age: 85}
    console.log(typeof JSON.parse(objJS)); //object


    //JSON - Stringify

    //Number
    console.log(JSON.stringify(1)); //return 1
    console.log(typeof JSON.stringify(1));  //return string

    //String
    console.log(JSON.stringify("MizhDuc")); //return MizhDuc
    console.log(typeof JSON.stringify("MizhDuc"));  //return string

    //Boolean
    console.log(JSON.stringify(true)); //return true
    console.log(typeof JSON.stringify(true));  //return string

    //Null
    console.log(JSON.stringify(null)); //return null
    console.log(typeof JSON.stringify(null));  //return string

    //Array
    console.log(JSON.stringify([
        'Jett',
        'Neon'
    ])); //return ["Jett","Neon"]

    console.log(typeof JSON.stringify([
        'Jett',
        'Neon'
    ])); //return string

    //Object
    console.log(JSON.stringify({
        name: 'MizhDuc',
        age: 2509,
        // k thêm đc function
        // ex - function
        test: function(){
        } //JSON k nhận function trong 1 object

    })); //return {"name":"MizhDuc","age":2509}

    console.log(typeof JSON.stringify({
        name: 'MizhDuc',
        age: 2509,
    })); //return string



    //164 - 167
    //- JSON là từ viết tắt của JavaScript Object Notation.
    //- JSON là 1 định dạng dữ liệu.


    // const jsonString = '{"name": "Son Dang", "age": 18}'
    // const obj = JSON._____(jsonString)
    // Điền vào chỗ trống tên method chính xác để chuyển jsonString sang dạng object

    //- Phương thức JSON.parse nhận vào 1 chuỗi JSON và chuyển hóa nó thành dạng dữ liệu gốc.


    // var object = {
    //     name: 'Son Dang',
    //     age: 18
    // }
    // var jsonString = JSON._______(object)
    // Điền vào chỗ trống tên method chính xác để chuyển object sang dạng JSON

    //- Phương thức JSON.stringify dùng để chuyển dạng dữ liệu gốc thành dạng JSON




    //168. Promise (sync, async)
    // Sync \ Async


    setTimeout(() => {
        console.log('Value 1');
    }, 1000);

    console.log('Value 2'); // cái này sẽ đc in ra trước - Async

    //Những function có thể tạo ra Async
    //setTimeout, setInterval, fetch, XMLHtmlRequest, Reading files, Request Animation Frame
    

    //169. Ví dụ về sync, async
    // setTimeout(function() {
    //     console.log('Dòng này sẽ in ra sau')
    // }, 0)
    // // setTimeout là tác vụ bất động bộ (async)
    
    // console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)


    //170. Promise (pain)

    //Callback hell, Pyramid of doom 

    //Ex - Callback hell
    setTimeout(() => {
        console.log('Công việc thứ 1'); //work 1
        setTimeout(() => {
            //việc thứ 2 sẽ chạy khi việc 1 xong -> cứ như thế cho đến khi hết
            console.log('Công việc thứ 2'); //work 2
            setTimeout(() => {
                console.log('Công việc thứ 3'); //work 3
                setTimeout(() => {
                    console.log('Công việc thứ 4'); //work 4
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);





    
    //171. Promise (concept)
    // - Lý thuyết, cách hoạt động

    //Tóm tắt
    // 1. Tạo Promise() / new Promise()
    // 2. Tạo ra Executor

    // Exception
    // - Nếu trong 'Executor' k gọi đến 'resolve' hoặc 'reject' sẽ bị treo -> Memory Leak (Rò rỉ bộ nhớ)

    // - promise trả lại 3 phương thức: .then(), .catch(), .finally() 

    //Promise có 3 trạng thái
    // 1. Pending: Chưa giải quyết / đang chờ trả về 'resolve' hay 'reject' / -> Memory Leak
    // 2. Fulfilled: Hoàn Thành / resolve()
    // 3. Rejected: Thất bại, Phế phẩm / reject()



    var promise = new Promise(

        //Nhận vào 1 function 
        //Executor / sẽ đc thực thi khi gọi đến `promise`
        function(resolve, reject) { //nhận vào 2 tham số: resolve, reject
            //Logic
            //Resolve(): Thành công, Giải quyết
            //Reject(): Thất bại, từ chối

            //resolve -> .then()
            // resolve(); //return Successfully! & Done!

            //reject -> .catch()
            // reject(); //return Failure! & Done!


            //ex - Fake call API / Trả dữ liệu
            // //resolve()
            // resolve([
            //     {
            //         id: 1,
            //         name: 'Jett'
            //     }
            // ]);

            //reject()
            reject('Đã có lỗi xảy ra, vui lòng thử lại.');


        }        
    );


    // //exec promise
    // promise
    //     .then(function(){
    //         //sẽ chạy khi trong 'Executor' gọi đến 'resolve'    
    //         console.log('Successfully!');
    //     })

    //     .catch(function(){
    //         //sẽ chạy khi trong 'Executor' gọi đến 'reject'
    //         console.log('Failure!'); 
    //         //Failure!: Thất bại
    //     })

    //     .finally(function(){
    //         //sẽ chạy khi trong 'Executor' gọi đến 'resolve' hoặc 'reject'
    //         console.log('Done!');
    //     });

    // *Fact: Có thể bỏ .finally() nếu k dùng



    //ex - Fake call API / Trả dữ liệu
    promise
        .then((course) => {
            //print ra course
            console.log(course); //return [{…}]
        })

        .catch((error) => {
            console.log(error); //return Đã có lỗi xảy ra, vui lòng thử lại.

            // *Fact: Nếu bỏ .catch() sẽ xuất hiện lỗi 'Uncaught (in promise) Đã có lỗi xảy ra, vui lòng thử lại.', -> thêm lại .cacth()
        })

        .finally(() => {
            console.log('Done!');
            // *Fact: Có thể bỏ .finally() nếu k dùng
        });


    // - Cách trả lời phỏng vấn khi hỏi về 'Promise'.
    // 1. Khái niệm 'Promise'?
    // + Promise sinh ra để giúp xử lý những thao tác bất đồng bộ (Async)
    // + Trước khi có 'Promise' thường là sử dụng 'Callback' / 'Callback' thường xảy ra vấn đề là 'Callback hell' sẽ bị sâu code -> khó nhìn, khó hiểu
    // + Vì vậy 'Promise' được sinh ra từ JavaSript ES6 -> 'Promise' sử dụng để khắc phục tình trạng 'Callback hell' -> dễ đọc, dễ hiểu hơn
    
    // Để tạo ra 1 'Promise'
    // 1. Sử dụng từ khóa 'new Promise()'
    // 2. Ở trong Constructor truyền vào 1 'Executor function', trong 'Executor function'nhận vào 2 tham số khi 'Executor' thực thi là: 'resolve' & 'reject'
    // - resolve() sẽ được gọi khi thao tác Logic xử lý thành công    
    // - reject() sẽ được gọi khi thao tác Logic xử lý thất bại
    // - Khi sử dụng 'Promise' -> đối tượng 'promise' được tạo ra và ta sẽ sử dụng qua các phương thức: .then(), .catch() 
    // .then(), .catch() đều nhận 'Callback function' 
    // .then() sẽ được thực thi khi mà 'Promise' được 'resolve' 
    // .catch() sẽ được thực thi khi mà 'Promise' được 'reject'

    // 'Promise' sẽ được xử lý trong những trường hợp bất đồng bộ (Async)


    // 172. Ôn lại kiến thức về Promise #1
    // Promise có bao nhiêu trạng thái?
    // - Promise có 3 trạng thái:
    //  + Pending
    //  + Fulfilled
    //  + Rejected
    
    // 173. Ôn lại kiến thức về Promise #2
    // 3 trạng thái của Promise là gì?
    // - Promise có 3 trạng thái:
    //  + Pending
    //  + Fulfilled
    //  + Rejected






    */



    //174. Promise (chain)







