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

/** 83 - Bài tập sử dụng for...in
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























        