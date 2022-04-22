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










