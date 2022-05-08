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




























        