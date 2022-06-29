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

    */

    



    //170. Promise (pain)


    
    









