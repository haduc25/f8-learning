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







        //174. Promise (chain)

    var promise = new Promise(
        //Executor
        function(resolve, reject){
            resolve();
        }
    );


    // //ex - return 
    // promise
    //     .then(() => {
    //         return 1;
    //     })

    //     .then((data) => {
    //         console.log(data); //in ra 1 => vì .then đầu tiên return 1
    //         return 2;
    //     })

    //     .then((data) => {
    //         console.log(data); //in ra 2 => vì .then đầu tiên return 2
    //         return 3;
    //     })

    //     .then((data) => {
    //         console.log(data); //in ra 3 => vì .then đầu tiên return 3
    //     })

    //     .catch((error) => {
    //         console.log(error);
    //     })

    //     .finally(() => {
    //         console.log('Done!');
    //     })


    // //ex - return 
    // promise
    //     .then(() => {
    //         // //array
    //         // return [1, 2, 3]

    //         // //return 1 promise
    //         // return new Promise((resolve)=> {
    //         //     // sleep 3s
    //         //     setTimeout(resolve, 3000);

    //         //     //nếu return là 1 Promise => phải chờ 'Promise' được giải quyết => xong mới chạy tiếp
    //         // });

    //         //return 1 promise có giá trị
    //         return new Promise((resolve)=> {
    //             // sleep 3s
    //             setTimeout(()=>{
    //                 resolve([3, 4, 5]); //return array
    //             }, 3000);

    //             //nếu return là 1 Promise => phải chờ 'Promise' được giải quyết => xong mới chạy tiếp
    //         });
    //     })

    //     .then((data) => {
    //         console.log(data); 
    //         //nếu return array => (3) [1, 2, 3]
    //         //nếu return promise / array => (3) [3, 4, 5]
    //         //trên k return giá trị (string, int, array...) & promise => undefined
    //         return 2;
    //     })

    //     .then((data) => {
    //         console.log(data); //in ra 2 => vì .then đầu tiên return 2
    //         return 3;
    //     })

    //     .then((data) => {
    //         console.log(data); //in ra 3 => vì .then đầu tiên return 3
    //     })

    //     .catch((error) => {
    //         console.log(error);
    //     })

    //     .finally(() => {
    //         console.log('Done!');
    //     })


    //ex - giải bài toán gây ra callback hell / settimeOut = Promise

    //tạo ra 1 function => sleep

    function sleep(ms){
        return new Promise((resolve)=> {
            //sẽ gọi đến 'resolve' sau 1 khoảng thời gian 'ms'
            setTimeout(resolve, ms);
        })
    }


    sleep(1000) //vì chính 'sleep' trả về 1 Promise nên có thể gọi đến '.then()'
        .then(()=>{
            //Theo lý thuyết nếu return là 1 'Promise' => sẽ phải đợi promise hoàn thành => mới chạy tiếp
            console.log(1);
            return sleep(1000); //ở đây sleep = promise => sleep 1s -> chạy tiếp
        })
    
        .then(()=>{
            console.log(2);
            return sleep(1000);
        })
    
        .then(()=>{
            console.log(3);
            return sleep(1000);
        })
    

    //175. Ví dụ về callback hell và cách giải quyết bằng Promise

    // Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise để giải quyết nó.

    // Các bạn có thể thấy khi tạo ra 1 đoạn code callback hell sẽ dẫn đến khó đọc code, thay vì viết như thế, chúng ta có thể áp dụng tính chất chuỗi (chain) 
    // của Promise để tạo ra 1 đoạn code dễ nhìn hơn mà vẫn đảm bảo đúng logic.

    //main.js (default)
    // function hell(value, cb) {
    //     cb(value);
    // }
    
    // // Không sử dụng Promise dẫn đến tạo ra callback hell 
    // hell(1, function (valueFromA) {
    //     hell(valueFromA + 1, function (valueFromB) {
    //         hell(valueFromB + 1, function (valueFromC) {
    //             hell(valueFromC + 1, function (valueFromD) {
    //                 console.log(valueFromD + 1);
    //             });
    //         });
    //     });
    // });
    
    // // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
    // function notHell(value) {
    //     return new Promise(function (resolve) {
    //         resolve(value);
    //     });
    // }
    
    // notHell(1)
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         console.log(value + 1);
    //     });






        //176. Promise methods (resolve, reject, all)  

    //ex - trap error

    
    function sleep(ms){
        return new Promise((resolve)=> {
            setTimeout(resolve, ms);
        })
    }

    sleep(1000)
        .then(()=>{
            console.log(1);
            return sleep(1000);
        })
    
        .then(()=>{
            console.log(2);
            return new Promise((resolve, reject) => {
                reject('Co loi o day ne!');
            })
        })
    
        .then(()=>{
            console.log(3);
            return sleep(1000);
        })

        .catch((error)=>{
            console.log(error);
        })
    

    //
    // 1. Promise.resolve
    // 2. Promise.reject
    // 3. Promise.all


    //ex - resolve, reject (thông thường) => cần đến logic

    // // (thông thường) => cần đến logic
    // var promise = new Promise(
    //     function(resolve, reject){
    //         // resolve('Success!'); //return Status:  Success!

    //         // reject('Something wrong!'); //return Error:  Something wrong!
    //     }
    // );


    //ex: Promise.resolve, Promise.reject
    var promise = Promise.resolve('Success! Ahihi'); //return Status:  Success! Ahihi
    var promise = Promise.reject('Something wrong!'); //return Error:  Something wrong!


    promise
        .then((result)=>{
            console.log('Status: ', result);
        })

        .catch((error) => {
            console.log('Error: ', error);
        })

    
    //Thư viện: output luôn luôn là 1 promise



    
    //ex - Promise.all / chạy song song các promise / các trường hợp logic bất đồng bộ, k bị phụ thuộc nhau, có thể chạy song song

    var promise1 = new Promise(
        function(resolve){
            setTimeout(() => {
                resolve([1]); //sẽ resolve dl là array có giá trị 1, sau 2 giây
            }, 2000);
        }
    );

    var promise2 = new Promise(
        function(resolve){
            setTimeout(() => {
                resolve([2, 3, 4]); //sẽ resolve dl là array có giá trị 2, 3, 4 / sau 4 giây
            }, 4000);
        }
    );


    //sử dụng Promise.all cho chạy song song 
    // Promise.all(): nhận vào đối số, trả về 1 promise
    Promise.all([promise1, promise2])
        .then((result)=>{
            //khi tất cả trong Promise.all chạy xong => mới chay vào .then
            console.log(result); //return (2) [Array(1), Array(3)]

            //lay ra dl
            var result1 = result[0];
            var result2 = result[1];

            //Nối mảng
            console.log(result1.concat(result2)); //return (4) [1, 2, 3, 4]
        })


    //rút gọn ví dụ trên = ES6
    Promise.all([promise1, promise2])
    .then(([result1, result2])=>{
        console.log(result1.concat(result2)); //return (4) [1, 2, 3, 4]
    })

    //Promise.all có 1 promise =  lỗi => nhảy vào .catch của Promise.all


    //ex - có lỗi
    var promise3 = new Promise(
        function(resolve){
            setTimeout(() => {
                resolve([1]); //sẽ resolve dl là array có giá trị 1, sau 2 giây
            }, 2000);
        }
    );

    var promise4 = Promise.reject('Lại có lỗi nè ! :<');

    Promise.all([promise3, promise4])
    .then(([result1, result2])=>{
        console.log(result1.concat(result2)); //return (4) [1, 2, 3, 4]
    })
    .catch((error)=>{
        console.log(error); //return Lại có lỗi nè ! :<
    })







    //177. Promise example

    //Database
    var users = [
        {
            id: 1,
            name: 'Ha Duc',
        },
        {
            id: 2,
            name: 'Khanh Huyen',
        },
        {
            id: 3,
            name: 'Trang Pham',
        },
    ];

    var comments = [
        {
            id: 1,
            user_id: 1,
            content: 'Are you sure?',
        },
        {
            id: 2,
            user_id: 2,
            content: 'Yes',
        },

        // theem cmt
        {
            id: 3,
            user_id: 1,
            content: 'You\'re Khanh Huyen?',
        },
        {
            id: 2,
            user_id: 2,
            content: 'It\'s Me 😆',
        },

    ]


    // 1. Lấy Comments
    // 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng


    //Tạo ra Fake API / Video: 8:15 / Link: https://youtu.be/XN2mt1i1kjk


    //lấy ra comments từ database
    function getComments(){
        //return ra 1 promise
        return new Promise((resolve) => {
            setTimeout(() => {
                //Mô phỏng lấy dl từ comment qua mạng nên bị chậm 1s
                resolve(comments);
            }, 1000);
        });
    }


    //lấy ra users từ database
    function getUsersByIds(userIDs){
        //return ra 1 promise
        return new Promise((resolve) => {
            // sử dụng filter để lấy ra 'users.id'
            // lọc ra các 'id' nằm trong 'userIDs'
            var result = users.filter((user) => {
                return userIDs.includes(user.id); //lọc ra các 'user.id' nằm trong 'userIDs'
            });
            setTimeout(() => {
                resolve(result);
            }, 1000);
        })
    }





    // Promise hell
    //getComments() => là 1 Promise hell

    // Sẽ đc học trong ES6 => Async / Await => k bị hell

    //gọi đến getComments()
    getComments()
        .then((comments)=>{
            //lấy ra được comments
            // console.log(comments); //return (2) [{…}, {…}]

            //lấy ra list userIDs
            // sử dụng map để lấy ra 'user_id'
            var userIDs = comments.map((comment)=>{
                return comment.user_id;
            });

            //lấy ra được user_id
            console.log(userIDs); //return (2) [1, 2]

            //đưa getUsersByIds() vào trong getComments()
            // truyền vào list id => 'userIDs'
            // return ra users & Promise / getUsersByIds() 
            return getUsersByIds(userIDs)
                .then((users) => {
                    // console.log(users); //(2) [{…}, {…}]
                    // return users;

                    //return ra 1 object
                    return {
                        users: users,
                        comments: comments,
                    };
                });
        })

    
        // khi bên trên return 1 promise, ở dưới sẽ nhận đc dl
        // ở đây dl nhận đc là 'users'
        // coi 'users' = 'data'
        // .then((users) => {
        //     // 'users' nhận được từ khi return getUsersByIds();
        //     // 'users' = 'data'
        //     console.log(users);
        // });

        //remake -> rút gọn lại
        .then((data) => {
            //nhận đc 'users' & 'comments'
            // console.log(data); //return {users: Array(2), comments: Array(2)}


            //lấy ra id của thẻ 'ul'
            var commentBlock = document.getElementById('ex15-comment-block');
            // console.log(commentBlock);

            // Tạo 1 biến html
            var html = '';

            // lặp qua 'data.comments' để lấy dl comment
            data.comments.forEach((comment) => {
                //từ comment lấy ra user
                // sử dụng 'find' tìm user
                var user = data.users.find((user) => {
                    // điều kiện
                    return user.id === comment.user_id;
                });

                // console.log(user); 
                // return
                // {id: 1, name: 'Ha Duc'}
                // {id: 2, name: 'Khanh Huyen'}

                // cộng chuỗi vào html
                // html += `${user.name}: ${comment.content}`;

                // cho vào '<li></li>'
                html += `<li>${user.name}: ${comment.content}</li>`;

            });

            // gán vào html / gán vào ul / li
            commentBlock.innerHTML = html;
        
        });


    // //gọi đến getUsersByIds()
    // getUsersByIds([1, 2])
    //     .then((users) => {
    //         console.log(users); //(2) [{…}, {…}]
    //     });


    // Kiến thức trong bài
    // 1. Array
    // 2. Function, callback
    // 3. Promise
    // 4. DOM








    // 178. Fetch

    // 1. Font-end: xây dựng giao diện người dùng
    // 2. Back-end: Xây dựng logic xử lý, Cơ sở dữ liệu
    
    // API (URL) -> Application Programing Interface / Cổng giao tiếp giữa các phần mềm

    // Backend -> API -> Fecth -> JSON/XML -> JSON.parse -> JavaScript types -> Render ra giao diện với HTML


    // Fake API (để test)
    // Keyword: placeholder rest api / website: https://jsonplaceholder.typicode.com/ 

    //Extension / JSON Viewer


    // Ex - Fetch API 'https://jsonplaceholder.typicode.com/posts'

    var postApi = 'https://jsonplaceholder.typicode.com/posts';

    // fetch trả về 1 'stream' -> ở đây có thể gọi là 'response' 
    fetch(postApi)
        .then((response) => {
            // console.log(response); //return Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
            // console.log(response.json()); //return Promise {<pending>}
            return response.json();
            //return ra 1 Promise 

            // json(): có tác dụng JSON.parse -> JavaScript types
        })

        // vì trên retur 1 promise nên dưới có thể nhận đc dl 
        .then((posts) => {
           // console.log(posts); //(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            

          // Chuyển dl sang html / sử dụng map
          
          var htmls = posts.map((post) => {
                //nối chuỗi
                return `<li>
                    <span>User: ${post.userId}</span>
                    <span>ID: ${post.id}</span>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>`
          });
        
         //sử dụng join()
         var html = htmls.join('');

        //  lấy elemment -> thêm vào html
        // console.log(document.getElementById('ex16-post-block')); 
       document.getElementById('ex16-post-block').innerHTML = html;
        
        })

        // kiểm tra API gọi = fetch trên dev tools
        // mở dev tools -> chọn 'Network' -> Fetch/XHR 
        // Status Code: 200 -> Thành công
        // Status Code: 404 -> Thất bại

        .catch((error) => {
            console.log('Lỗi nè: ' + error);
        });



    // Ex - Fetch API 'https://jsonplaceholder.typicode.com/albums'
    var albumsApi = 'https://jsonplaceholder.typicode.com/albums';

    fetch(albumsApi)
        .then((response) => {
            return response.json();
        })

        .then((albums) => {
            // console.log(albums);

            var htmls = albums.map((album) => {
                return `<li>
                   <span>ID: ${album.id} </span>
                   <h2>${album.title}</h2>
                </li>`
            });

            var html = htmls.join('');
            // add to html
            document.getElementById('ex16-album-block').innerHTML = html;
        })

        .catch((error) => {
            console.log('Lỗi nè: ' + error) ;
        })




        //179. JSON server 
        //  API Server


        // https://github.com/typicode/json-server

        // cài lên 1 folder


        // cài đặt 1 folder
        // 1. Tạo 1 folder
        // mở 'terminal' / (yêu cầu đã cài nodejs)
        // npm init / (tạo file) / enter -> đến khi hiện 'Is this OK? (yes)'

        // install
        // npm install json-server / npm i json-server  / (bỏ -g để chỉ cài trên folder này)

        // create file 'db.json'
        // với format
        // {
        //     "course": [
        //         {
        //             "id": 1,
        //             "name": "Hà Minh Đức",
        //             "description": "MizGDuc",
        //             "age": "21"            
        //         }
        //     ]
        // }

        //Start JSON Server
        // 1. Mở file 'package.json'
        // 2. Phần 'scripts' -> thêm 1 trường là "start": "json-server --watch db.json"
        // // EX
        // {
        //     "name": "json-server",
        //     "version": "1.0.0",
        //     "description": "",
        //     "main": "index.js",
        //     "scripts": {
        //       "start": "json-server --watch db.json",
        //       "test": "echo \"Error: no test specified\" && exit 1"
        //     },
        //     "author": "",
        //     "license": "ISC",
        //     "dependencies": {
        //       "json-server": "^0.17.0"
        //     }
        //   } 


        // npm start

        ////Ex - lấy dl từ API trên "http://localhost:3000/course"

        var courseApi = "http://localhost:3000/course";

        fetch(courseApi)
            .then((response) => {
                return response.json();
            })

            .then((course) => {
                console.log(course); //return [{…}]
            })

            .catch((error) => {
                console.log(error);
            })






    // 180. Sử dụng Postman làm việc với REST API 

        // JSON Server: API Server (Fake) / Mock API
        // CRUD: //Phương thức
        // - Create: Tạo mới -> POST
        // - Read: Lấy dữ liệu -> GET
        // - Update: Chỉnh sửa -> PUT / PATCH
        // - Delete: Xóa -> DELETE


    */


    // 181. Thêm/sửa/xóa khóa học với Fetch và REST API
    

    //ex - Xây dựng Web gồm các Courses đủ CRUD với API


    var courseApi = 'http://localhost:3000/course';


    //App start
    function start(){
        // // lấy ra khóa học
        // getCourses((courses) => {
        //     // console.log(courses); //return (3) [{…}, {…}, {…}]
        //     renderCourses(courses);
        // });

        //getCourses ->  renderCourses


        // Vì là 1 function lồng 1 function nên có thể viết tắt lại, đối số của 'renderCourses' trả về 'courses' và 'callback' của 'getCourses' trả về 'courses'
        // => có thể viết thẳng function vào  / truyền thẳng function

        // shorten
        // lấy ra khóa học
        getCourses(renderCourses);  // => Done Read

        // Xử lý Form
        handleCreateForm();

    }

    start();

    // Functions

    // lấy ra khóa học
    function getCourses(callback){
        fetch(courseApi)
            .then((response) => {
                return response.json();
            })

            // sử dụng 'callback' để lấy ra dl từ getCourses();
            .then(callback)


            // Debug
            // 'getCourses' truyền 'renderCourses' dưới dạng 'callback'
            // 'callback' sẽ đc gọi khi 'fetch' -> thành công -> gọi ngược lại 'callback' / callback = renderCourses
            // trả lại dữ liệu trong 'renderCourses()'



            // Error
            .catch((error) => {
                alert('Có lỗi nè !\nChi tiết: ' + error);
            })
    }


    // tạo ra 1 khóa học
    function createCourse(data, callback){
        // Tham khảo: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    
        
        // create
        var options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },
        };

        fetch(courseApi, options)
            .then((response) => {
                response.json();
            })

            .then(callback);
    
    }

    // xóa 1 khóa học
    function handleDeleteCourse(id){
        // alert(id);
        // delete
        var options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
        };

        fetch(courseApi + '/' + id, options)
            .then((response) => {
                response.json();
            })

            .then(() => {
                //sau khi xoá thành công -> render lại course / refresh
                getCourses(renderCourses);
                alert('Đã xóa thành công course với id là: ' + id);
            });
    
    }









    // render ra browser
    function renderCourses(courses){
        // render html -> html

        // renderCourses nhận đc dl từ 'getCourses'

        
        var listCoursesBlock = document.querySelector('#list-courses');
        console.log(listCoursesBlock);
        console.log(courses); //return (3) [{…}, {…}, {…}]

        // Array.prototype.map()
        // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        // Phương thức map() tạo một mảng mới được điền với kết quả của việc gọi một hàm đã cung cấp trên mọi phần tử trong mảng đang gọi.
        // Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

        var htmls = courses.map((course) => {
            return `
                <li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <p>Tuổi: ${course.age}</p>
                    <!-- btn remove --> 
                    <button onclick="handleDeleteCourse(${course.id})">Xoá &times;</button>
                </li>
            `
        })

        listCoursesBlock.innerHTML = htmls.join('');
    }

    // Xử lý Form
    function handleCreateForm(){
        // lấy 'btn' từ html -> js
        var createBtn = document.querySelector('#create');

        // console.log(createBtn);

        // bắt event 'onclick'
        createBtn.onclick = function(){
            // alert();

            // lấy các thẻ 'input' từ html -> js
            // name
            var name = document.querySelector('input[name="name"]').value;
            // description
            var description = document.querySelector('input[name="description"]').value;
            // age
            var age = document.querySelector('input[name="age"]').value;

            // console.log(name + '\n' + description + '\n' + age);
       
            // create

            // dinh nghia data
            var formData = {
                name: name,
                description: description,
                age: age
            }

            createCourse(formData, () => {
                // refresh trang
                getCourses(renderCourses);
            })
        }
        
    }


    


