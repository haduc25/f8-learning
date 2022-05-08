/** Chương 9 - Lệnh rẽ nhánh, toán tử 3 ngôi
 * 69. Lệnh rẽ nhánh If else, 70
 
    console.log('Chương 9 - Lệnh rẽ nhánh, toán tử 3 ngôi');

    //ex

    var date = Math.floor(Math.random() * 8) + 1;

    if(date == 2)
        console.log('Hôm nay là thứ 2');
    else if(date == 3)    
        console.log('Hôm nay là thứ 3');
    else if(date == 4)    
        console.log('Hôm nay là thứ 4');
    else if(date == 5)    
        console.log('Hôm nay là thứ 5');
    else if(date == 6)    
        console.log('Hôm nay là thứ 6');
    else if(date == 7)    
        console.log('Hôm nay là thứ 7');
    else if(date == 8)    
        console.log('Hôm nay là Chủ Nhật');
    else
        console.log('Thứ k hợp lệ, error date is: ' +  date);

 */


/** 71. Lệnh rẽ nhánh Switch, 72, 73
    //ex
    var date = Math.floor(Math.random() * 8) + 1;

    switch(date)
    {
        case 2:
        case 3:
        case 4:
            console.log('Hôm nay là thứ 2, 3, 4');
            break;
        case 5:
        case 6:
        case 7:
            console.log('Hôm nay là thứ 5, 6, 7');
            break;
        case 8:
            console.log('Hôm nay là Chủ Nhật');
            break;
        default:
            console.log('Thứ k hợp lệ, error date is: ' +  date);
    }


*/


/** 74. Toán tử 3 ngôi (Ternary operator), 75. Hàm kiểm tra đủ tuổi bỏ phiếu

    //ex
    var course = 
    {
        name: 'Javascript',
        coin: 250
    }

    // if(course.coin > 0)
    //     console.log(`${course.coin} coins`);
    // else   
    //     console.log('Miễn phí');


    //3 ngôi
    var result = course.coin > 0 ? `${course.coin} coins` : 'Miễn phí';
    console.log(result); //return 250 coins

    // (điều kiện) | nếu đúng chạy sau dấu ?, sai chạy vào sau dấu :

    var a = 2;
    var b = 5;

    var c = a > 0 ? a : b;

    console.log('Value of c is: ' + c); //return Value of c is: 2



    //75

    Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về 
    Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.


    //code
    // Làm bài
    function getCanVoteMessage(age)
    {
        var rs = age > 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
        return rs;
    } 



    // Kỳ vọng
    console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
    console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
 */