// chuong 4
/** 42 - Kiểu dữ liệu chuỗi (string)
 * Có 2 cách tạo chuỗi
 * //ex1
 * var name = "Ha Duc"; //return string

 * //ex2

   var name2 = new String('Ha Duc');
   console.log(typeof name2) //return object
   * 


   //backslash (https://www.w3schools.com/js/js_strings.asp)

      Code	      Result	      Description
      \'	            '	      Single quote
      \"	            "	      Double quote
      \\	            \	      Backslash


* Six other escape sequences are valid in JavaScript:
      \b	         Backspace
      \f	         Form Feed
      \n	         New Line
      \r	         Carriage Return
      \t	         Horizontal Tabulator
      \v	         Vertical Tabulator


* Độ dài khi viết code (nếu code quá dafin thì + chuỗi)
ex:

console.log('Tình huống tạo ra nguy hiểm rõ rệt đầu tiên của U23 Việt Nam đến từ những phút 13.' 
+ 'Lý Công Hoàng Anh nhận bóng từ cánh phải, cầu thủ mang áo số 10 mạnh mẽ băng xuống rồi trả ngược vào trung lộ cho Hùng Dũng.' 
+ 'Đáng tiếc, pha dứt điểm bằng đầu của Hùng Dũng đi chệch ra ngoài.');


* xem độ dài của chuỗi
   var name = 'Ha Duc 25/09/2001';
   console.log(name.length); //return 17

* Template String ES6
   //ex: - k su dung template string

   var fname = 'Ha';
   var lname = 'Duc';

   console.log('My name is ' + fname + ' ' + lname); //return: My name is Ha Duc

   //ex: su dung temp str
   - tu dong convert qua string

   var fname = 'Ha';
   var lname = 'Duc';

   console.log(`My name is ${fname} ${lname}`); //return: My name is Ha Duc
*/


/** 43 - Làm việc với chuỗi,  44, 45   

var myString = "Ha Minh Duc 25/09/2001";

//keyword: Javascript string methods
//link: https://www.w3schools.com/js/js_string_methods.asp

//1. Length
// console.log(myString.length); //return 22


//2. Find index
//- sử dụng phương thức: indexOf('')
 
indexOf('kí tự muốn tìm kiếm')

// lấy từ đầu tiên được tìm thấy (nếu cố nhiều tư giống nhau) 
// nếu k tìm thấy trả về -1
// nếu có nhiều ký tự giống nhau trong chuỗi phải dùng biểu thức chính quy

//ex1: 
   var myString = "Ha Minh Duc 25/09/2001";
   console.log(myString.indexOf('Duc')); //return 8

//ex2: - tìm 'Duc' ở vị trí số 2
   var myString = "Ha Minh Duc 25/09/2001 Duc Duc";
   //để tìm đc phải truyền vào vị trí đứng sau vị trí của 'Duc' thứ 1
   //vị trí 'Duc' thứ 1 là 8 đếm lên đến 11
   //tìm từ 11 đến hết
   console.log(myString.indexOf('Duc', 11)); //return 23

//ex3 -  tìm 'Duc' ở vị trí cuối cùng
   var myString = "Ha Minh Duc 25/09/2001 Duc Duc";
   //sử dụng lastIndexOf('');
   // nếu k tìm thấy trả về -1

   console.log(myString.lastIndexOf('Duc')); //return 27
   console.log(myString.length); //return 30

//search
   // lấy từ đầu tiên được tìm thấy (nếu cố nhiều tư giống nhau) 
   // khác indexOf k hỗ trợ 2 tham số
   // hỗ trợ tìm = biểu thức chính quy

   var myString = "Ha Minh Duc 25/09/2001";
   console.log(myString.search('Duc')); //return 8

//3. Cut string
   //sử dụng slice('');
   //slice('vị trí điểm đầu', 'vị trí điểm cuối')
      //ex
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.slice(8, 11)); //return Duc
  
   //cắt từ vị trí n đến hết chuỗi slice('vị trí bắt đầu cắt')
      //ex
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.slice(8)); //return Duc 25/09/2001
  
   //cắt từ đầu -> cuối slice(0);
      //ex
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.slice(0)); //return Ha Minh Duc 25/09/2001
  
   //cắt từ phải -> trái (đếm từ 0 -> số âm)
      //ex - cắt lấy 2001 (đếm từ 0 -> số âm) 
         var myString = "Ha Minh Duc 25/09/2001!";
         console.log(myString.slice(-5, -1)); //return 2001
   
//4. Replace
   //sử dụng replace('', '');
   // replace('từ cần replace', 'replace thành..');
      //ex - đổi từ 'Duc' -> 'Duc25'
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.replace('Duc', 'Duc25')); //return Ha Minh Duc25 25/09/2001

   //thay đổi tất cả các từ trong chuỗi -> sử dụng biểu thức chính quy
   //ghi đè tất cả
   //biểu thức chính quy: /chuỗi/g
      //ex - đổi tất cả từ 'Duc' -> 'Duc25' // sử dụng biểu thức chính quy
         var myString = "Ha Minh Duc 25/09/2001 Duc Duc";
         console.log(myString.replace(/Duc/g , 'Duc25')); //return Ha Minh Duc25 25/09/2001 Duc25 Duc25

 //5. Convert to upper case  
      //ex
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.toUpperCase()); //return HA MINH DUC 25/09/2001

 //6. Convert to lower case    
      //ex   
         var myString = "Ha Minh Duc 25/09/2001";
         console.log(myString.toLowerCase()); //return ha minh duc 25/09/2001   

//7. Trim
   //sử dụng trim();
   //xoá khoảng trắng đầu -> cuối
      //ex: 
         var myString = "     Ha Minh  Duc 25/09/2001     ";
         console.log(myString.trim()); //return Ha Minh Duc 25/09/2001

//8. Split
   //sử dụng split('');
   //split('điểm chung trong chuỗi')
   //cắt 1 chuỗi -> 1 array (cần tìm điểm chung)
      //ex - chuyển đổi ds từ string -> array, mỗi phần tử là 1 môn học
         var languages = "Javascript, PHP, Python";
         console.log(languages.split(', ')); //return (3) ['Javascript', 'PHP', 'Python']

      //ex - cắt tất cả từ, mỗi chữ cái là 1 phần tử của array
         var languages = "Javascript";
         //truyền vào chuỗi rỗng
         console.log(languages.split('')); //return (10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//9. get a character by index
   //sử dụng charAt();
   //charAt(vị trí của index trong string);
      //ex - lấy chữ M và D sử dụng charAt()
         var myString = "Minh Duc"; 
         console.log(myString.charAt(5)); //return 0 - > M, 5 -> D

   //nếu truyền vị trị k có trả về chuỗi rỗng
      //ex
         var myString = "Minh Duc";
         console.log(typeof myString.charAt(-1)); //return string


   //lấy vị trí ký tự // gần giống mảng
      //ex - lấy chữ M và D
         var myString = "Minh Duc";
         console.log(myString[5]); //return 0 - > M, 5 -> D

   //nếu truyền vị trị k có trả về undefined
      //ex
         var myString = "Minh Duc";
         console.log(typeof myString[50]); //return undefined

*/