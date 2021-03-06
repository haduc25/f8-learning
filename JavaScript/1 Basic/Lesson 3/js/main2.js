/** Chuong 12. Callback
    97 - Callback

    //Callback?
    //là hàm (function) được truyền qua đối số
    //khi gọi qua hàm khác

    //Đk => callback
    //1. Là hàm
    //2. Được truyền qua đối số




    //ex - callback

    function myFunction(param){
        // console.log(param); //123
        // console.log(typeof param); //123 -> number
        // console.log(param); //Hello lại là chao đây :>
        // console.log(typeof param); //Hello lại là chao đây :> -> string

        //=> param = myCallback()

        // param('hello'); = myCallback('hello');

        //kt param => function
        if(typeof param === 'function'){
            param('hello'); //return Value in myCallback is:  hello
        }
    }


    //callback
    function myCallback(value){
        console.log('Value in myCallback is: ', value);
    }

    // myFunction(123); //return 123
    // myFunction('Hello lại là chao đây :>'); //return Hello lại là chao đây :>

    myFunction(myCallback);

    //myCallback => callback / khi thỏa mãn 2 đk trên


    // myCallback('hello'); //return Value in myCallback is:  hello
*/



/** 98 - Callback - Phần 2
    //1. Là hàm
    //2. Truyền qua đối số
    //3. Được gọi lại (trong hàm nhận đối số)


    //ex - su dung map 
    var courses = [
        'Javascript',
        'PHP',
        'Python',
        'Ruby'
    ];



    var htmls = courses.map((course, index) =>{
        // console.log(index, course); //return 0 'Javascript', 1 'PHP', 2 'Python', 3 'Ruby'
        return  `
            <h2>${course}</h2>
        `
    });


    console.log(htmls.join(''));

    //return
    //<h2>Javascript</h2>   
    //<h2>PHP</h2>
    //<h2>Python</h2>
    //<h2>Ruby</h2>


    //ex - tao ra ham map2

    Array.prototype.map2 = function(callback){
        //this = array goi den / o day this = courses2

        var output = [], arrayLength = this.length; //cải thiện hiệu năng
        for (let i = 0; i < arrayLength; i++) {
            //this[i] = array[i] / o day this[i] = courses2[i]
            //i = index
            // callback(this[i], i);

            //de return tao ra 1 bien result

            var result = callback(this[i], i);
            //console.log('result:', result); //return result: <h2>Javascript</h2>, result: <h2>PHP</h2>, result: <h2>Python</h2>, result: <h2>Ruby</h2>

            //de map2 co the return: tao ra 1 mảng rỗng, đẩy giá trị result vào mảng => return array đã tạo
            output.push(result); //đẩy dl result vào array
        }
        return output;
    }

    //test function map2
    var courses2 = [
        'Javascript',
        'PHP',
        'Python',
        'Ruby'
    ];


    var htmls2 = courses2.map2((course, index) => {
        // console.log(index, course); //return 0 'Javascript', 1 'PHP', 2 'Python', 3 'Ruby'
        return `
            <h2>${course}</h2>
        `
    });

    console.log(htmls2.join(''));

    //return
    //<h2>Javascript</h2>   
    //<h2>PHP</h2>
    //<h2>Python</h2>
    //<h2>Ruby</h2>

    //=> done map2

 */

/** //bt làm 1 số hàm như forEach, reduce, find, filter... 

    //ex - su dung forEach 
    var courses = [
        'Javascript',
        'PHP',
        'Python',
        'Ruby'
    ];

    courses.forEach(function(course, index){
        console.log(index, course); //return 0 'Javascript', 1 'PHP', 2 'Python', 3 'Ruby'
    });


    //ex - tao ra ham forEach2

    Array.prototype.forEach2 = function(callback){
        var arrayLength = this.length;

        for (let i = 0; i < arrayLength; i++) {
            callback(this[i], i);
        }
    }

    courses.forEach2((course, index) => {
        console.table({
            'index:' :index,
            'course:' :course
        })

        // console.log(index, course);  //return kq tuong tu forEach()
    });


    //ex - su dung reduce 
    var numbers = [16, 5, 1, 9, 3, 8];

    var result = numbers.reduce(function(total, number){
    return total + number;
    }, 0);

    console.log(result); //return 42


    //ex - tao ra ham reduce2
    Array.prototype.reduce2 = function(callback, result){
        var i = 0;
        var arrayLength = this.length;
        if(arguments.length < 2){
            var i = 1;
            result = this[0];
        }

        for (; i < arrayLength; i++) {
            result = callback(result, this[i], i, this);
        }
        return result;

    }

    var result2 = numbers.reduce2(function(total, number){
        return total + number;
    });
    
    console.log(result2); //return 42 => giong reduce()



    //ex - su dung find 
    var courses = [
        {
        id: 1,
        name: 'Javascript',
        coin: 250
        },
        {
        id: 2,
        name: 'PHP',
        coin: 150
        },
        {
        id: 3,
        name: 'Python',
        coin: 750
        },
    ];

    var result = courses.find(function(course, index){
        return course.name === 'Python';
    });


    console.log(result); //return {id: 3, name: 'Python', coin: 750}


    //ex - tao ra ham find2
    Array.prototype.find2 = function(callback){
        var output = [];
        var arrayLength = this.length;
        for (var i = 0; i < arrayLength; i++) {
            var result = callback(this[i], i);
            // console.log(result);
            if(result){
                output.push(this[i]);
            }
        }
        return output[0];
    }

    var result2 = courses.find2(function(course, index){
        return course.name === 'Python';
    });
    
    console.log(result2); //return {id: 3, name: 'Python', coin: 750} => giong find()
*/


/** 99 - Empty elements of array? 
     //ex - Thay doi do dai cua array (arrayLength)
    var courses = [
        'Javascript',
        'PHP'
    ];

    //khi set array length = 10;
    courses.length = 10;

    // console.log(courses); //return (2) ['Javascript', 'PHP'] / khi k set array length
    // console.log(courses); //return (10) ['Javascript', 'PHP', empty × 8] / khi set array length => có 8 pt empty


    // for (let i = 0; i < courses.length; i++) {
    //     console.log(courses[i]);  //return Javascript, PHP, (8) undefined
    // }



    //ex - doi vong lap for => su dung for in
    for (const index in courses) {
        // console.log(index); //return 0, 1 / for/in k lặp giá trị empty
        console.log(courses[index]); //return Javascript, PHP / for/in k lặp giá trị empty

    }

    //ex - tạo nhanh độ dài của mảng
    // var courses2 = new Array(10); //tạo ra độ dài = 10, nếu cho 2 tham số trở lên => thành giá trị mảng như bt
    // console.log(courses2); //return (10) [empty × 10]

    // var courses3 = new Array(10, 20, 30); //tạo ra độ dài = 10, nếu cho 2 tham số trở lên => thành giá trị mảng như bt
    // console.log(courses3); //return (3) [10, 20, 30]


    //ex - thêm gt vào mảng
    var courses4 = new Array(10); //tạo ra độ dài = 10, nếu cho 2 tham số trở lên => thành giá trị mảng như bt

    courses4.push('Ha Minh Duc', 'PHP', 'Brain', 'Mistake')
    console.log(courses4); //return (14) [empty × 10, 'Ha Minh Duc', 'PHP', 'Brain', 'Mistake'] / length = 14 => length vừa thêm = 4, length đã khởi tạo ban đầu = 10
 */




/** 100 - My forEach() method

    // //ex - Chạy thử forEach()
    // var courses = [
    //     'Javascript',
    //     'PHP',
    //     'Ruby'
    // ];

    // courses.length = 1000; //kt xem có lặp x1000 lần hay k //return 0 'Javascript' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997], 1 'PHP' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997], 2 'Ruby' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997]
    // //=> k lặp x1000 => chỉ lặp pt thực

    // console.log(courses); //return (1000) ['Javascript', 'PHP', 'Ruby', empty × 997]

    // var output = courses.forEach((courses, index, array)=>{
    //     console.log(index, courses, array); //return 0 'Javascript' (3) ['Javascript', 'PHP', 'Ruby'], 1 'PHP' (3) ['Javascript', 'PHP', 'Ruby'], 2 'Ruby' (3) ['Javascript', 'PHP', 'Ruby']
    // });

    // console.log(output); //return undefined => k co return



    //ex - Tạo ra forEach2()
    Array.prototype.forEach2 = function(callback){
        for (var index in this) {
            // console.log('index: ', index); //return index:  0, index:  1, index:  2, index:  forEach2
            // //khi tạo = prototype sẽ đc thừa hưởng từ array vì vậy sẽ bị duyệt qua function forEach2  
            
            //kt thuộc tính tương tự, gần nhất, su dung function hasOwnProperty()
            //console.log(index, this.hasOwnProperty(index)); //return 0 true, 1 true, 2 true, forEach2 false

            // console.table({
            //     'index: ': index,
            //     'hasOwnProperty: ': this.hasOwnProperty(index)
            // });

            //kt => true => lap tiep
            if(this.hasOwnProperty(index)){
                // console.log(index); //return 0 1 2
                callback(this[index], index, this); 
            }
        }
    }


    var courses = [
        'Javascript',
        'PHP',
        'Ruby'
    ];

    // courses.length = 1000; //kt xem có lặp x1000 lần hay k //return 0 'Javascript' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997], 1 'PHP' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997], 2 'Ruby' (1000) ['Javascript', 'PHP', 'Ruby', empty × 997]
    // //=> k lặp x1000 => chỉ lặp pt thực

    console.log(courses); //return 0 Javascript (3) ['Javascript', 'PHP', 'Ruby'], 1 PHP (3) ['Javascript', 'PHP', 'Ruby'], 2 Ruby (3) ['Javascript', 'PHP', 'Ruby']

    var output = courses.forEach2((courses, index, array)=>{
        console.log(index, courses, array); //return 0 'Javascript' (3) ['Javascript', 'PHP', 'Ruby'], 1 'PHP' (3) ['Javascript', 'PHP', 'Ruby'], 2 'Ruby' (3) ['Javascript', 'PHP', 'Ruby']
    });

    console.log(output); //return undefined => k co return


    //kt array empty

    var courses2 = new Array(1000);

    courses2.push('Hello', 'Welcome');

    courses2.forEach2((course, index, array)=> {
        console.log(index, course, array); //return 1000 Hello (1002) [empty × 1000, 'Hello', 'Welcome'], 1001 Welcome (1002) [empty × 1000, 'Hello', 'Welcome']
    });


    //sử dụng để kiểm tra các function trong Array
    console.log(Array.prototype); //return [forEach2: ƒ, constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

    //sử dụng để kiểm tra các function trong Number
    console.log(Number.prototype); //return Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

    //sử dụng để kiểm tra các function trong String
    console.log(String.prototype); //return String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
 */




/** 101 - My filter() method 

    //ex - Chạy thử filter()

    var courses = [
        {
            name: 'Javascript',
            coin: 550
        },
        {
            name: 'PHP',
            coin: 980
        },
        {
            name: 'Ruby',
            coin: 840
        }
    ];

    courses.length = 1000;

    var filterCourses = courses.filter((course, index, array)=>{
        //console.log(index, course, array); //return 0 {name: 'Javascript', coin: 550} (3) [{…}, {…}, {…}], 1 {name: 'PHP', coin: 980} (3) [{…}, {…}, {…}], 2 {name: 'Ruby', coin: 840} (3) [{…}, {…}, {…}]
        //console.log(course); //return {name: 'Javascript', coin: 550}, {name: 'PHP', coin: 980}, {name: 'Ruby', coin: 840}
        return course.coin > 600;
    });


    console.log(filterCourses); //return [] => khi k return / khi co return => (2) [{…}, {…}], 0: {name: 'PHP', coin: 980}, 1: {name: 'Ruby', coin: 840}, length: 2, [[Prototype]]: Array(0)





    //ex - Tạo ra filter2()

    Array.prototype.filter2 = function(callback){
        var output = [];
        for (var index in this) {
            if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            
            if(result){
                output.push(this[index]);
            }
            }
        }
        return output;
    }


    var courses2 = [
        {
            name: 'Javascript',
            coin: 550
        },
        {
            name: 'PHP',
            coin: 980
        },
        {
            name: 'Ruby',
            coin: 840
        }
    ];

    // courses.length = 1000;

    var filterCourses2 = courses2.filter2((course, index, array)=>{
        //console.log(index, course, array); //return 0 {name: 'Javascript', coin: 550} (3) [{…}, {…}, {…}], 1 {name: 'PHP', coin: 980} (3) [{…}, {…}, {…}], 2 {name: 'Ruby', coin: 840} (3) [{…}, {…}, {…}]
        // console.log(course); //return {name: 'Javascript', coin: 550}, {name: 'PHP', coin: 980}, {name: 'Ruby', coin: 840}
        return course.coin > 600;
    });


    console.log(filterCourses2); //return [] => khi k return / khi co return => (2) [{…}, {…}], 0: {name: 'PHP', coin: 980}, 1: {name: 'Ruby', coin: 840}, length: 2, [[Prototype]]: Array(0)
*/


/** 102 - My some() method

    //ex - Chạy thử some()
    //some true/false

    // var courses = [
    //     {
    //         name: 'Javascript',
    //         coin: 550,
    //         isFinish: true,
    //     },
    //     {
    //         name: 'PHP',
    //         coin: 980,
    //         isFinish: false,

    //     },
    //     {
    //         name: 'Ruby',
    //         coin: 840,
    //         isFinish: false
    //     }
    // ];


    // var result = courses.some((course, index, array) => {
    //     //console.log(course); //return {name: 'Javascript', coin: 550, isFinish: true}, {name: 'PHP', coin: 980, isFinish: false}, {name: 'Ruby', coin: 840, isFinish: false}
    //     return course.isFinish; 
    // });

    // console.log(result); //return true


    //ex - Tạo ra some2()

    Array.prototype.some2 = function(callback){
        var output = false;
        for (var index in this) {
            if(this.hasOwnProperty(index)){
                var result = callback(this[index], index, this);
                if(result){
                    output = true;
                    break;
                }
            }
        }
        return output;
    }


    var courses = [
        {
            name: 'Javascript',
            coin: 550,
            isFinish: true,
        },
        {
            name: 'PHP',
            coin: 980,
            isFinish: false,

        },
        {
            name: 'Ruby',
            coin: 840,
            isFinish: false
        }
    ];


    var result = courses.some2((course, index, array) => {
        //console.log(course); //return {name: 'Javascript', coin: 550, isFinish: true}, {name: 'PHP', coin: 980, isFinish: false}, {name: 'Ruby', coin: 840, isFinish: false}
        return course.isFinish; 
    });

    console.log(result); //return true
 */



    
/** 103 - My every() method
 
    // //ex - Chạy thử every()
    // //every true/false

    // var courses = [
    //     {
    //         name: 'Javascript',
    //         coin: 550,
    //         isFinish: true,
    //     },
    //     {
    //         name: 'PHP',
    //         coin: 980,
    //         isFinish: true,

    //     },
    //     {
    //         name: 'Ruby',
    //         coin: 840,
    //         isFinish: true
    //     }
    // ];


    // var result = courses.every((course, index, array) => {
    //     //console.log(course); //return {name: 'Javascript', coin: 550, isFinish: true}, {name: 'PHP', coin: 980, isFinish: false}, {name: 'Ruby', coin: 840, isFinish: false}
    //     return course.isFinish; 
    // });

    // console.log(result); //return true


    //ex - Tạo ra every2()

    Array.prototype.every2 = function(callback){
        var output = true;
        for (var index in this) {
            if(this.hasOwnProperty(index)){
                var result = callback(this[index], index, this);
                if(!result){
                    output = false;
                    break;
                }
            }
        }
        return output;
    }


    var courses = [
        {
            name: 'Javascript',
            coin: 550,
            isFinish: true,
        },
        {
            name: 'PHP',
            coin: 980,
            isFinish: true,

        },
        {
            name: 'Ruby',
            coin: 840,
            isFinish: true
        }
    ];


    var result = courses.every2((course, index, array) => {
        //console.log(course); //return {name: 'Javascript', coin: 550, isFinish: true}, {name: 'PHP', coin: 980, isFinish: false}, {name: 'Ruby', coin: 840, isFinish: false}
        // return course.isFinish; 
        return course.coin > 500; 
    });

    console.log(result); //return true
 */