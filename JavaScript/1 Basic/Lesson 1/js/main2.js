// chuong 2
/**13,14, lam quen cac toan tu, toan tu so hoc
 * 
Toán tử	        Mô tả	                        Ví dụ
+	        phép cộng	                     25 + 5 = 30
-	        phép trừ	                     10 - 5 = 5
*	        phép nhân	                     2*3 = 6
/	        phép chia	                     20 / 2 = 10
%	        lấy phần dư của phép chia	     56 / 3 = 2
++	        Tăng thêm 1	                     var a = 10; a ++; //giá trị a là 11
--	        giảm đi 1	                     var a = 10; a --; //giá trị a là 9
**          lũy thừa

Toán tử: +, - ,* , /, %, ++, --, ** (lũy thừa)

ex: 
var c = 2 ** 2;
console.log(c);
 */


/** 15 - Toán tử gán
Toán tử      Ví dụ        Tương đương   
=	        x = y	    gán y vào x
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y

ex (+=)
var a = 2;
a += 2;
console.log(a);

ex (-=)
var a = 1;
a -= 2; //a=1 and a - 2 => a = -1
console.log(a);
 */


/** 17, 18 Toasn tu ++ va --  (https://fullstack.edu.vn/learning/javascript-co-ban?id=a493b2bd-4f8e-4073-bd4d-6d916a65c103) 
 * 
 * Tổng kết
    x++         tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
    ++x         tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
    x--         giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
    --x         giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
*/

/**19 - toan tu ++ / -- (Nguyen ly hoat dong)
 * Prefix(Tiền tố) & Postfix(Hậu tố)
 * 
    //tien to
    var a = 6;
    var output = ++a;

    //gia tri tra ve 7
    console.log('output: ' + output);

    //hau to
    var a = 6;

    //tru
    //1: `a copy`, `a copy` = 6
    //2: trừ 1 của a , a = a - 1 => a = 5
    //3: Trả về `a copy` // = 5

    //cong
    //1: `a copy`, `a copy` = 6
    //2: cộng 1 cho a , a = a + 1 => a = 7
    //3: Trả về `a copy` // = 7


    //ex (cong)
    var output = a++;

    //gia tri cua a tra ve 7
    console.log('output: ' + output);
    console.log('a: ' + a);

    
    
    //bai tap vi du
    //bt1
    var number = 6;

    var output = number++ + --number;
    
    //number++ -> trả về biến copy -> trả về 6
    //--number -> (vì hàm trước đã chạy number từ 6 -> 7) -> và number-- hiện tại = 7 -> chạy number-- => tar về 6 (7 - 1)
    //number++(6) + --number(6) => kq: 12

    console.log('output (baitap1): ' + output);

    
    //bt2
    var number = 6;

    var output = ++number * 2 - number-- * 2;
    
    //++number -> (vì tiền tố number = 6 + 1) -> trả về 7
    //number-- -> vì là hậu tố nên trả về biến copy -> trả về 7 (vì trước đó đã cộng lên nên = 7)
    //++number(7) * 2 - number--(7) * 2 => kq: 0 //7 * 2 - 7 * 2 = 0

    console.log('output (baitap2): ' + output);
    console.log('number (baitap2): ' + number);

 */


/** 20, 21 - Toán tử nối chuỗi
 *
    var firstName = "Ha ";
    var lastName = "Duc";
    console.log(firstName + lastName);

    //su dung noi chuoi bang toan tu +=
    //1 (day du)
    var name = "Ha";
    name = name + ' Duc';

    console.log(name);

    //2 rut gon
    var name = "Ha";
    name += ' Duc';

    console.log(name);


 * 
 */








