/** Chương 10 - Vòng lặp
 * 76. Giới thiệu vòng lặp
    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

/** 77. Vòng lặp For
    //ex
    for (var i = 1; i <= 1000; i++) {
        console.log(i); //return 1 - 1000
    }

 */

/** 78. Tạo danh sách số ngẫu nhiên
     Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

    👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, 
       các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

    Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

    // Làm bài
    function getRandNumbers(min, max, length)
    {
        var arr = [];

        for(var i=0; i<length; i++)
        {
            arr[i] = Math.ceil(Math.random() * (max - min) + min);
        }
        return arr;
    }

    console.log(getRandNumbers(50 ,26, 5));
*/

/** 79. Vòng lặp For - Phần 2, 80. Vòng lặp For - Phần 3
 * 
 * //79
    //ex
    var i = 0;
    for (; i < 100;) 
    {   
        i++;
        console.log(i); //return 1 - 100
    }

    
 * //80
    //ex

    var arr = [
    'Java',
    'Javascript',
    'PHP',
    'React Native',
    'HTML, CSS',
    'C#'
    ];


    for (var i = 0; i < arr.length; i++) {
        console.log(`[${i}] - ${arr[i]}`); //return pt tu 0 -5
        // console.log(arr[i]);
}

*/

/** 81 - Vòng lặp for...in 
 * 
    //ex: obj

    var myInfo = 
    {
        name: 'Ha Duc',
        age: 21,
        address: 'Bac Kan, VN'
    };


    for (var key in myInfo) {
        // console.log(key); //retrun name\n age\n address
        // console.log(typeof key); //retrun string
        console.log(myInfo[key]); //retrun\n 21\n Bac Kan, VN
        // console.log(myInfo['name']); //retrun Ha Duc (3)
    }


    //ex - array
    var languages = [
        'Javascript',
        'PHP',
        'Python',
        'Ruby'
    ];


    for (const key in languages) {
        // console.log(key); //return 0 - 3
        console.log(languages[key]); //return Javascript, PHP, Python, Ruby
    }


    //ex - string
    var myString = 'Javascript';


    for (const key in myString) {
        // console.log(key); //return 0 - 9
        console.log(myString[key]); //return Javascript (spell) -> J - a - v - a - s - c - r - i - p - t
    }


*/

/** 82 - Bài tập sử dụng for...in
    //bai lam - Bài tập sử dụng for...in
    
    //Bài tập sử dụng for...in - (2) ['Thuộc tinh name có giá trị  Nguyen Van A', 'Thuộc tinh age có giá trị  16']
    function run(object) {
        var arr = [];
        for(var key in object)
        {
            arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
        }
        return arr;
    }

    // Kỳ vọng
    console.log(run({ name: 'Nguyen Van A', age: 16 }));
    // Output:
    // [
    //     "Thuộc tính name có giá trị Nguyen Van A",
    //     "Thuộc tính age có giá trị 16"
    // ]
 */

/** 83 - Vòng lặp For/of
    //ex - array

    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];


    for (var value of languages) {
        console.log(value); //return Javascript, PHP, Ruby
    }

    //ex - string
    var myName = 'HAMINHDUC';

    for (var value of myName) {
        console.log(value); //return 'H''A''M''I''N''H''D''U''C'
    }
  

        //ex - object - cách 1
    var myInfo = {
        name: 'Minh Duc',
        age: 21
    };


    console.log(Object.keys(myInfo)); //return (2) ['name', 'age'] / lấy ra keys trong object

    for (var value of Object.keys(myInfo)) {
        console.log(myInfo[value]); //return Minh Duc, 21
    }

    //ex - object - cách 2
    var myInfo2 = {
        name: 'Minh Duc',
        age: 21
    };


    console.log(Object.values(myInfo2)); //return (2) ['Minh Duc', 21] / lấy ra values trong object

    for (var value of Object.values(myInfo2)) {
        console.log(value); //return Minh Duc, 21
    }

 */


/** 84 - Vòng lặp While
    //ex - object
    var myArray = [
        'Javascript',
        'PHP',
        'Python'
    ];

    var i = 0;
    while (i < myArray.length) {
        console.log(myArray[i]); //return Javascript, PHP, Python
        i++;
    }
 */


/** 85 - Vòng lặp do...while  
    //ex
    var i = 0;

    do {
        i++;
        console.log(i); //return 1 -10
    } while (i < 10);


    //ex - Nạp thẻ
    var i = 0;
    var isSuccess = false;

    do {
        i++;
        console.log('Nạp thẻ lần thứ ' + i);

        //thành công
        if(true){
            isSuccess = true;
            console.log('Nạp thẻ thành công !');
            //return 
            //Nạp thẻ lần thứ 1
            //Nạp thẻ thành công !
        }

        // //thất bại
        // if(false){
        //     isSuccess = true;
        //     console.log('Nạp thẻ thành công !');

        // }
        // //return Nạp thẻ lần thứ 1 - 4

    } while (!isSuccess && i <= 3);
*/

/** 86 - Break và Continue trong vòng lặp
    //ex - break

    for (var i = 0; i < 10; i++) {
        console.log(i); //return 0 - 9

        //in ra 0 - 5
        if(i >= 5){
            break; //dk đúng -> thoát vòng lặp
        }
    }

    //ex - continue

    for (var i = 0; i < 10; i++) {
        
        //in ra số chẵn
        if(i%2 !== 0){
            continue; //dk đúng (nếu là số lẻ) -> vòng lặp chạy tiếp (k chạy console.log bên dưới - k chạy lệnh dưới)
        }

        console.log(i); //return 0 - 2 - 4 -6 -8

    }
 */

/** 87 - Vòng lặp lồng nhau (Nested loop), 88 - vd vòng lặp
    //ex - in ra 1 - 6
    var myArray = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];


    for (var i = 0; i < myArray.length; i++) {
        // console.log(myArray[i]); //return (2) [1, 2], (2) [3, 4], (2) [5, 6]

        //vòng lặp con lấy gtri trong i
        for (var j = 0; j < myArray[i].length; j++) {
            console.log(myArray[i][j]); //return 1 - 6
        }
    }


    //88 
    //ex - in (100 - 1)
    
    for (var i = 100; i > 0; i--) {
        console.log(i); //return 100 - 0
    }

    //ex - moi lan tang 5 gia tri (0 - 100)

    for (let i = 0; i < 100; i+=5) {
        console.log(i);    //return  0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95
    }

    //ex - moi lan tru 5 gia tri (100 - 0)
    for (var i = 100; i > 0; i-=5) {
        console.log(i); //return 100 95 90 85 80 75 70 65 60 55 50 45 40 35 30 25 20 15 10 5
    }
 */


    





        