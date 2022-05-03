/** (46 - Kiểu dữ liệu số (number))
 * Link: https://fullstack.edu.vn/learning/javascript-co-ban?id=319076af-cc7b-4f26-ad1a-5c30bc9e5a83
 * Kiểu số - Number
 * Trong Javascript có 2 loại số:

    - 1. Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
    - 2. Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.

    - Vì mức độ thông dụng nên ở đây chúng ta chỉ tìm hiểu về loại số thông thường.

 * Cách khai báo
    - Cách thông thường khi ta khai báo một số. Ví dụ là: 1000000 (một triệu)
            var million = 1000000;

    - Cũng là khai báo số 1000000 nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định số số không phía sau chữ e như sau:
            var million = 1e6; // tương tự: 1000000

            // hoặc

            var billion = 2e9; // tương tự: 2000000000 (hai tỉ)

 *  Đối tượng Number
    - Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. 
      Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:


         Phương thức	                                            Vai trò
        Number.isFinite()               	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
        Number.isInteger()              	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
        Number.parseFloat()             	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
        Number.parseInt()               	Chuyển đổi chuỗi đã cho thành một số nguyên
        Number.prototype.toFixed()          Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
        Number.prototype.toString()         Chuyển đổi và trả về số đã cho dưới dạng chuỗi

 * Ví dụ:

        Number.isFinite(2 / 0); // false
        Number.isFinite(20 / 5); // true
        Number.isFinite(0 / 0); // false

        Number.isInteger(999999999); // true
        Number.isInteger(0.2);       // false
        Number.isInteger(Math.PI);   // false

        Number.parseFloat('10') // 10
        Number.parseFloat('10.00') // 10
        Number.parseFloat('238,21') // 238
        Number.parseFloat('237.22') // 237.22
        Number.parseFloat('34 56 78') // 34
        Number.parseFloat(' 37 ') // 37
        Number.parseFloat('18 is my age') // 18

        Number.parseInt('10') // 10
        Number.parseInt('10.00') // 10
        Number.parseInt('238,21') // 238
        Number.parseInt('237.22') // 237
        Number.parseInt('34 56 78') // 34
        Number.parseInt(' 37 ') // 37
        Number.parseInt('18 is my age') // 18

        var numberObject = 1234.56789;

        numberObject.toFixed(); // '1235'
        numberObject.toFixed(1); // '1234.6'
        numberObject.toFixed(6); // '1234.567890'

        (11).toString();    // '11'
        (18).toString();     // '18'
        (17.3).toString();   // '17.3'
 */




        

/** 47 - Số và làm việc với số, 48, 49
 * //ex
      var age = 21;
      var PI = 3.14;

      //cach 2 (tao number)
      var otherNumber = new Number(25); // Number(//truyền số muốn tạo)
      console.log(typeof otherNumber); //return object
 * 
 * 
 *    //kiem tra data type

      //ex - kiểm tra NaN
      var age = 21;
      var PI = 3.14;

      var rs = 20 / 'XYZ';
      console.log(typeof rs); //return NaN, typeof rs -> return number

      //để kiểm tra = với NaN ta sử dụng hàm isNaN();
      console.log(isNaN(rs)); //return true

      //keyword: javascript number methods (link (recommend): https://www.w3schools.com/js/js_number_methods.asp)


      //ex - toString()
      var age2 = 27;
      console.log(typeof age2.toString()); //return string // ép kiểu qua string
 * 
 * 
 * 
      //ex - toFixed()
      var PI = 3.14;
      var isFloatNumber = 13.67892;

      console.log(PI.toFixed()); //return 3 // làm tròn về 3
      console.log(PI.toFixed(1)); //return 3.1 // làm tròn sau dấu '.' 1 số 
      console.log(PI.toFixed(2)); //return 3.14 // làm tròn sau dấu '.' 2 số

      console.log(typeof PI.toFixed()); //return string

      //49

   // Viết code tại đây
   function isNumber(value)
   {
      //  if(isNaN(value))
      //      return false;
      //  return true;
      if(typeof value == 'number')
         return true;
      return false;
      // console.log(isNaN(value));
   }



   // Kì vọng đạt được
   console.log(isNumber(999)); // true
   console.log(isNumber('abc')); // false
   console.log(isNumber('100')); // false

   //giai 49
   function isNumber(value) {
      return typeof value === 'number';
   }



   //49
   // Viết code tại đây
   function isNumber(value) {
      if(isNaN(value)) return false;
      return typeof value === 'number';
   }




   // Kì vọng đạt được
   console.log(isNumber(999)); // true
   console.log(isNumber('abc')); // false
   console.log(isNumber('100')); // false

   console.log(isNumber(NaN)); // false
   console.log(isNumber(100 / 'abc')); // false

 */






