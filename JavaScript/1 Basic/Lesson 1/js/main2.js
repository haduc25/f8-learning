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


/** 22 - Toán tử so sánh   
 

Toán tử	      Diễn tả	                                           Ví dụ
==	         so sánh bằng	                                     5 == 10 false
===	      giống nhau (cùng giá trị và kiểu dữ liệu)	          5 === 10 false
!=	         khác giá trị	                                     5 != 10 true
!==	      Khác giá trị và kiểu	                               10 !== 10 false
>	         lớn hơn	                                           10 > 5 true
>=	         lớn hơn hoặc bằng	                                  10 >= 5 true
<	         nhỏ hơn	                                           10 < 5 false
<=	         nhỏ hơn	                                           10 <= 5 false
 */



/** 24, 25 - Câu lệnh điều kiện If
 

// boolean sẽ trả về 'fasle' nếu có các giá trị sau:
   0
   false
   '' & ""
   undefined
   NaN
   null

- Ngược lại trả về true
ex:  

var value = 0;
if(value)
{
   console.log("TRUE! Value's " + value);
}else
{
   console.log("FALSE! Value's " + value);
}

 */


/** 26 - Toán tử logical,  
&&	   AND      phép và trả về true nếu 2 số hạng là true: a && b
||	   OR       phép hoặc trả về true nếu 1 trong 2 số hạng là true : a || b
!	   NOT      phủ định; trả về giá trị ngược với biểu thức !a 
*/


/**27 - Kiểu dữ liệu 
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
 * 
 * 

*/

//Number type
var a = 1;
var b = 2;
var c = 1.5;

// console.log(typeof c);


//String type
var name = "Ha Duc";
// console.log(typeof name);


//Boolean type
var isSuccess = true
// console.log(typeof isSuccess);


//Undefined type
var age;
// console.log(typeof age);


//Null
var isNull = null; //nothing
// console.log(typeof isNull); //tra ve object



//Symbol
var id = Symbol('id'); //unique (duy nhất)
var id2 = Symbol('id2'); //unique (duy nhất)
// console.log(typeof id);


// console.log(id);
// if(id == id2)
//    console.log("ID EQUAL ID2");
// else
//    console.log("NOT EQUAL");


//Function
var myFunction = function()
{
   alert('HI. My name is HaDuc25!');
}

//myFunction(); // run a function
// console.log(typeof myFunction);




//Object types
var myObject = {
   name: 'Minh Duc',
   age: 21,
   address: 'Bac Kan',

   //add a function
   myFunction: function()
   {
      //do something
   }

};

// console.log('myObject: ', myObject);
// console.log(typeof myObject);


var myArray = [
   'Javascript',
   'HTML',
   'PHP',
   'Ruby'
];

//console.log(myArray);
// console.log(typeof myArray);



// Để kiểm tra kiểm dl sử dụng hàm: typeof
//ex: 
var ex = "Here's ex";
// console.log(typeof ex);


/** 28 -  Toán tử so sánh 2  (so sánh tuyệt đối)                  
 * 
 *  ===           so sanh bằng tuyệt đối  
 *  !==           so sanh khác tuyệt đối  
ex (===)


var abc = 1;
var xyz = "1";


console.log(abc == xyz);  //return true vì chỉ so sánh mỗi giá trị 
console.log(abc === xyz); //return false vì kieeru dl khác nhau


console.log(abc !== xyz);

*/


/** 29 - Truthy và Falsy là gì?
 * Link: https://fullstack.edu.vn/learning/javascript-co-ban?id=32595298-aa2e-4f8a-a4ae-a80dc35a0928
 * Truthy và Falsy là gì?
 * Truthy - to bool is true
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
   Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây là Truthy
   vì khi chuyển sang Boolean ta nhận được giá trị true. 

   console.log(!!'hi') // true
* !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành “khẳng định”. 
   Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.


   Ví dụ:
   console.log(!!1) // true
   console.log(!!'f8') // true
   console.log(!!['Mercedes']) // true
   Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.

*  Falsy - to bool is false
   Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

* Trong Javascript có 6 giá trị sau được coi là Falsy:

   false
   0 (số không)
   '' or "" (chuỗi rỗng)
   null
   undefined
   NaN

Ví dụ:
   console.log(!!false) // false
   console.log(!!0) // false
   console.log(!!'') // false
   console.log(!!null) // false
   console.log(!!undefined) // false
   console.log(!!NaN) // false

Chú ý!
   Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

   Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

   '0' (một chuỗi chứa số không)
   ' ' (một chuỗi chứa dấu cách)
   'false' (một chuỗi chứa từ khóa false)
   [] (một array trống)
   {} (một object trống)
   function(){} (một hàm “trống”)
   Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng “rỗng”) là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

   Ví dụ:

   var cars = [] // Dù là mảng "rỗng" vẫn là truthy

   if (!cars) {
      // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
   }

* Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả của mệnh đề so sánh là false, vì vậy đoạn mã trong if trên sẽ không được lọt vào.

* Ngoại lệ? - document.all
Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

Bản thân mình cũng thắc mắc điều này nên mình đã search Google “Why document.all is falsy?” và mình đã tìm được câu trả lời tại đây (https://stackoverflow.com/questions/10350142/why-is-document-all-falsy).

Tóm tắt câu trả lời:

document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.

Cụ thể như sau:

document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.

 */

/** 30 - Toán tử logical và câu lệnh điều kiện If
 * Câu lệnh điều kiện OR(hoặc), AND(và)
 * 
 * //AND (&&)
 * //Khi convert qua boolean có 6 giá trị này
 *       0
 *       false
 *       ''
 *       null
 *       undefined
 *       NaN
 *       
 * trả về false
 * 
 * - nếu khác 6 giá trị trên => luôn đọc từ trái qua phải
 * - nếu 1 biến trong A, B, C trên = với 1 trong số 6 giá trị false trên -> gán luôn giá trị false -> result
 * 
 * 
   //ex1 - khi 1 pt = 1 trong 6 biến False
   var result = null && 'B' && 'C';  
   console.log(result); //ket qua la null (gán luôn = null và bỏ qua phần sau)

   //ex2 - khi 1 pt = 1 trong 6 biến False
   var result = 'A' && 'B' && NaN && 'D';  
   console.log(result); //ket qua la null (gán luôn = null và bỏ qua phần sau)
 *
 * 
 * 
 * 
 * 
 * 
 * ex1
   var a = 1;
   var b = 2;

   var result = a < b && a < 0;
   console.log(result); //ket qua la false (vì && kiểm tra đến đk thứ 2 là false nên gán vào biến result là false)

   //ex2
   var result = 'A' && 'B' && 'C';  
   console.log(result); //ket qua la C (vì && kiểm tra đến đk cuối là true -> gán vào biến result, nếu 1 biến trong A, B, C trên = với 1 trong số 6 giá trị false trên -> gán luôn giá trị false -> result)


   //ex3
   var result = 'A' && 'B' && 'C' && 'D';  

   if(result)
      console.log('Dieu kien dung!');
      //ket qua dk dien dung -> vì lệnh & chạy đến D và gán D = result -> so sánh biến D khác với 6 đk false trên -> D true -> DK đúng
   else
      console.log('Dieu kien sai!');
 

   //OR (||)
   - ngược lại với AND(&&)
   - kiểm tra các pt -> nếu khác 6 pt false -> lấy luôn giá trị gán vào result
   - sử dụng để làm đk kiểm tra người dùng đã nhập tt vào form chưa (tên, tuổi, năm sinh...)


   //ex1
   var result = 'A' || 'B' || 'C' || 'D';  
   console.log('result: ', result); //kq = A vì OR kt thấy A true -> gán vào result

   //ex2
   var result = null || 'B' || 'C' || 'D';  
   console.log('result: ', result); //kq = B vì OR kt thấy đk đầu tiên  = null -> false -> chuyển qua đk thứ 2 = true -> gán vào result

   //ex3
   var result = 'A' || 'B' || undefined || 'D';  
   console.log('result: ', result); //kq = A vì OR kt thấy đk đầu tiên  = A -> true -> gán vào result, bỏ qua các đk đằng sau

   if(result)
      console.log('Dieu kien dung!');
   else
      console.log('Dieu kien sai!');


   //ex4 - nếu muốn đk sai -> phải set tất cả là false, vì 1 đk đúng -> vẫn gán true
   var result = null || false || undefined || 0;  
   console.log('result: ', result); //kq = 0 vì OR kt thấy đk = false (6 đk false) -> false -> gán vào result

   if(result)
      console.log('Dieu kien dung!');
   else
      console.log('Dieu kien sai!');
      //vì tất cả false -> đk sai
 
   */










