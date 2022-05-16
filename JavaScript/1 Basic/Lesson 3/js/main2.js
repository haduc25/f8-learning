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











*/

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













