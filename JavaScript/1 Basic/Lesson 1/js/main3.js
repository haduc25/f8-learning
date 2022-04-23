// chuong 4
/** 31 - function, 32, 33
 * - là 1 khối mã
 * - làm 1 việc cụ thể
 * Tên hàm - giống các ngôn ngữ khác - có thể có ký tự $
 * Loại hàm: Built-in & tự định nghĩa
 * 
 * 
 * //ex
   function showDialog()
   {
      var name = 'Ha Duc';
      var age = 21;
      alert('Hello my name is ' + name + ' i\'m ' + age + ' years old.' );
   } 


   showDialog();
*/

/** 34 - Tham số trong hàm
 * Truyền tham số
 * //ex
   function writeLog(message, message2)
   {
      if (message)
         console.log(message);

      if (message2)
         console.log(message2);
   }

   writeLog('hello', 1);

* arguments & for of
 - chỉ sử dụng đc trong 1 function 


//ex
   function writeLog()
   {
   console.log(arguments);
   }

   writeLog('hello', 1);


//sử dụng vòng for of

//ex

   function writeLog()
   {
      var myString = ''; //tạo str rỗng;

      for (var param of arguments) {
         //lấy dl từ arguments -> truyền vào param

         // nối chuỗi = toán tử +=, sửa dụng template string: `${}`
         myString += `${param} - `;
         // myString += param + ' - '; //? ntn cũng đc
      }
      console.log(myString);
   }

   writeLog('hello', 1, 'ahihi', 'minh đức');
 */

/** 35 - Từ khóa return trong hàm, 36, 37, 38, 39 (thực hành)
 * - return có thể trả về bất cứ kiểu dl gì
 * 
 * //ex1 - lấy dl từ confirm
   var rs = confirm('Well, you have a good day?');
   console.log(rs);
   //if(true) -> do something...etc..etc

 * //ex2 - tính tổng 2 số
   function sumOf2Number(a, b)
   {
      return a + b;
   }

   var rs = sumOf2Number(2, 5);

   console.log('value of result: ' + rs);


 * //ex3 - nối chuỗi
   function noiChuoi(a, b)
   {
      return a.toString() + b.toString(); //return 25
   }

   var rs = noiChuoi(2, 5);

   console.log('value of result: ' + rs);

*/

/** 40 - Hiểu hơn về hàm 
 * 
 * //ex
   function showMessage()
   {
      //hàm trong hàm :>
      function showMessage2()
      {
         console.log('This\'s message2');
      }

      //call function
      showMessage2();
   }

   //exec
   showMessage();
*/


/** 41 - Các loại hàm
 * 
 * 1. Declaration function 
 *    - vì có hosting nên có thể gọi hàm trước khi được định nghĩa
 *    ex: 
         showMessage(); //gọi trước khi được định nghĩa

         function showMessage()
         {
            console.log('Declaration function');
         }

 * 2. Expresstion function
 *    - k có hosting nên phải định nghĩa mới gọi được
 *    - có thể đặt tên hoặc không
 *    ex1: 
         var showMessage = function()
         {

         }

         //call back
         setTimeout(function autoLogin()
         {

         });

         var myObject = {
            myFunction: function()
            {

            }
         }

 *    ex2: - exec function 

         var showMessage = function()
         {
            console.log('Expresstion function');
         }

         showMessage(); // chỉ có thể được gọi khi hàm đã đc định nghĩa
  
 
* 3. Arrow function 
Link : https://viblo.asia/p/su-khac-biet-giua-arrow-function-va-function-trong-javascript-07LKXpw2KV4
* Arrow Function là gì?
 * Arrow Function (hay còn gọi là hàm mũi tên) là một trong những tính năng mới và rất hay của ES6. Nó thừa hưởng cách viết ngắn gọn bằng cú pháp ES6. 
   Tuy Arrow Function và Function đều là function, nhưng cách viết và cách tham chiếu tới bối cảnh (context) khác nhau.
      
   * nameFunction + = + () + => + {} 
    - myFunction = () => {}

   //tham so // thay dấu () = tham số
   * nameFunction + = + tham số + => + {}
    - myFunction = (tham số) => {}

* Arrow Function sử dụng kí tự =>
   hello = () => {
   console.log('hello')
   }
   // hello()

* còn Function thông thường thì :
   function hello(){
   console.log('hello')
   }
   // hello()

* Với Truong Hop có tham số :
   hello = name => {
   console.log('hello ', name)
   }
* Ta có thể giản lược được dấu () với trường hợp có 1 tham số truyền vào.

* Ngoài ra, với arrow function ta có thể bỏ qua từ khoá return
   
   double = x => x * 2 

* còn với function thì :\
   function double(x){
      return x * 2
   }

* Ngoài ra, ta còn sử dụng được arrow function trong trường hợp: map, filter, forEach,...
* Ví dụ:
   const numbers = [1,2,3,4]
   const newArray = numbers.map(item => item * 2 )
   // console.log(newArray)

* Trông có vẻ tối giản code so với:
   const numbers = [1,2,3,4]
   const newArray = numbers.map(function(item){
   return item => item * 2
   })
   // console.log(newArray)


Arrow Function:

   Arrow function là một tính năng mới của ES6, giúp viết code ngắn gọn hơn.
   Arrow function sử dụng khá ok trong các TH dùng: map, filter, reducer,...
   Arrow function không có bind.
   Arrow function không phù hợp là method của object.



//tham khao 2 (https://www.w3schools.com/js/js_arrow_function.asp)

*JavaScript Arrow Function

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

   let myFunction = (a, b) => a * b;

* Before:
   hello = function() {
   return "Hello World!";
   }

* With Arrow Function:
   hello = () => {
      return "Hello World!";
   }

*It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

* Arrow Functions Return Value by Default:
   hello = () => console.log("Hello World!");

   hello();


* Arrow Function With Parameters:
   hello = (val) => console.log("Hello " + val);

   hello('HADUC25');


* In fact, if you have only one parameter, you can skip the parentheses as well:
   hello = val => "Hello " + val;
   
   hello('HADUC25');




*What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
 */