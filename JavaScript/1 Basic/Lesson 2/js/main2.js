/** 51 - Mảng (array), 52, 53

   //ex - case 1
   var languages = [
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
   ];

   console.log(languages); //return (4) ['JavaScript', 'PHP', 'Golang', 123]

   //ex 
   var languages = [
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
      null,
      undefined,
      function() {},
      {} //object
   ];

   console.log(languages); //return 8) ['JavaScript', 'PHP', 'Golang', 123, null, undefined, ƒ, {…}]

   //ex  - case 2 (k được khuyến cáo sử dụng, khi tạo mất thòi gian hơn)
   var languages = new Array(
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
      null,
      undefined,
      function() {},
      {} //object
   );

   console.log(languages); //return 8) ['JavaScript', 'PHP', 'Golang', 123, null, undefined, ƒ, {…}]


   //kiểm tra data type
   //ex  -typeof, isArray(), kiểm tra có phải là array hay k?
   var languages = [
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
      null,
      undefined,
      function() {},
      {} //object
   ];

   console.log(typeof languages); //return object 

   console.log(Array.isArray(languages)); //return true 

   console.log(Array.isArray({})); //return false (cho vào 1 object '{}')

   console.log(Array.isArray([])); //return true (cho vào 1 array '[]')

   console.log(Array.isArray(new Array(1, 2))); //return true (cho vào 1 array '[]')



   //độ dài mảng
   //ex  - length
   var languages = [
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
      null,
      undefined,
      function() {},
      {} //object
   ];

   console.log(languages.length); //return 8 

   
   //lấy phần tử theo (chỉ mục, index, key, ...)
   //ex
   var languages = [
      'JavaScript' ,  
      'PHP'   ,
      'Golang' ,  
      123,
      null,
      undefined,
      function() {},
      {} //object
   ];

   console.log(languages[3]); //return 123
   console.log(languages[4]); //return null
   console.log(languages[5]); //return 123


 */

        

/** 54. Làm việc với mảng
 * 

   1. To string
   2. Join
   3. Pop
   4. Push
   5. Shift
   6. Unshift
   7. Splicing
   8. Concat
   9. Slicing


   //======>ex - 1. To String / toString()
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];


   console.log(languages.toString()); //return Javascript,PHP,Python
   console.log(typeof languages.toString()); //return string

   //======>ex - 2. Join / join()
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];


   //biến từ array -> string
   //nếu truyền join('') vào trong chuỗi -> là dấu ngăn cách giữa các phần tử trong mảng

   console.log(languages.join()); //return Javascript,PHP,Python / giống toString()
   console.log(languages.join('')); //return JavascriptPHPPython / xóa ngăn cách
   console.log(languages.join('-')); //return Javascript-PHP-Python / ngăn cách bởi dấu ngạch ngang '-'
   console.log(languages.join(' - ')); //return Javascript - PHP - Python / ngăn cách bởi dấu ngạch ngang ' - '
   console.log(languages.join(', ')); //return Javascript, PHP, Python / ngăn cách bởi dấu ngạch ngang ', '


   //======>ex - 3. Pop / pop() / xóa phần tử cuối mảng
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];


   //Xóa phần tử cuối mảng & trả về phần tử đã xoá

   console.log(languages.pop()); //return Python / xóa element cuối mảng & trả về phần tử đã xóa

   console.log(languages); //return (2) ['Javascript', 'PHP'] / phần tử cuối mảng đã bị xóa / Python

   //xóa tiếp pt
   console.log(languages.pop()); //return PHP / xóa element cuối mảng & trả về phần tử đã xóa
   console.log(languages.pop()); //return Javascript / xóa element cuối mảng & trả về phần tử đã xóa

   //khi xóa hết pt trong mảng (mảng rỗng) -> trả về undefined
   console.log(languages.pop()); //return undefined / xóa element cuối mảng & trả về phần tử đã xóa

   //mảng khi hết pt (rỗng)
   console.log(languages); //return [] / mảng rỗng khi đã xóa hết pt


   //======>ex - 4. Push / push() / thêm 1 or nhiều phần tử vào cuối mảng
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];

   var languages2 = [
      'Javascript',
      'PHP',
      'Python'

   ];


   //thêm 1 or nhiều phần tử vào cuối mảng & trả về độ dài mới của mảng

   console.log("Độ dài ban đầu của mảng: " + languages.length); //return Độ dài ban đầu của mảng: 3

   console.log("Độ dài mới của mảng: " + languages.push('Kotlin')); //return Độ dài mới của mảng: 4 / thêm element vào cuối mảng & trả về độ dài mới của mảng


   console.log(languages); //return (4) ['Javascript', 'PHP', 'Python', 'Kotlin'] / mảng sau khi thêm pt cuối


   //thêm nhiều phần tử vào cuối mảng 

   console.log("Độ dài ban đầu của mảng: " + languages2.length); //return Độ dài ban đầu của mảng: 3

   console.log("Độ dài mới của mảng: " + languages2.push('Kotlin','Swift', 'React Native')); //return Độ dài mới của mảng: 6 / thêm element vào cuối mảng & trả về độ dài mới của mảng


   console.log(languages2); //return ['Javascript', 'PHP', 'Python', 'Kotlin', 'Swift', 'React Native']



   //======>ex - 5. Shift / shift() / ngược lại với pop(), shift() xóa phần tử đầu mảng
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];


   //Xóa phần tử đầu mảng & trả về phần tử đã xoá

   console.log(languages.shift()); //return Javascript / xóa element đầu mảng & trả về phần tử đã xóa

   console.log(languages); //return (2) ['PHP', 'Python'] / phần tử đầu mảng đã bị xóa / Javascript

   //xóa tiếp pt
   console.log(languages.shift()); //return PHP / xóa element đầu mảng & trả về phần tử đã xóa
   console.log(languages.shift()); //return Python / xóa element đầu mảng & trả về phần tử đã xóa

   //khi xóa hết pt trong mảng (mảng rỗng) -> trả về undefined
   console.log(languages.shift()); //return undefined / xóa element đầu mảng & trả về phần tử đã xóa

   //mảng khi hết pt (rỗng)
   console.log(languages); //return [] / mảng rỗng khi đã xóa hết pt



   //======>ex - 6. Unshift / unshift() / ngược lại với push(), unshift() thêm 1 or nhiều phần tử vào đầu mảng
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];

   var languages2 = [
      'Javascript',
      'PHP',
      'Python'

   ];


   //thêm 1 or nhiều phần tử vào đầu mảng & trả về độ dài mới của mảng

   console.log("Độ dài ban đầu của mảng: " + languages.length); //return Độ dài ban đầu của mảng: 3

   console.log("Độ dài mới của mảng: " + languages.unshift('Kotlin')); //return Độ dài mới của mảng: 4 / thêm element vào đầu mảng & trả về độ dài mới của mảng


   console.log(languages); //return (4) ['Kotlin', 'Javascript', 'PHP', 'Python'] / mảng sau khi thêm pt đầu


   //thêm nhiều phần tử vào đầu mảng 

   console.log("Độ dài ban đầu của mảng: " + languages2.length); //return Độ dài ban đầu của mảng: 3

   console.log("Độ dài mới của mảng: " + languages2.unshift('Kotlin','Swift', 'React Native')); //return Độ dài mới của mảng: 6 / thêm element vào đầu mảng & trả về độ dài mới của mảng


   console.log(languages2); //return (6) ['Kotlin', 'Swift', 'React Native', 'Javascript', 'PHP', 'Python']

   
   
   
   //======> - 7. Splicing / splice() / xóa, cắt, chèn pt mới vào mảng
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];

   var languages2 = [
      'Javascript',  //0
      'PHP',         //1 //splice(1) khi chạy con trỏ bắt đầu từ đây
      'Python'       //2

   ];

   var languages3 = [
      'Javascript',  //0
      'PHP',         //1 //splice(1) khi chạy con trỏ bắt đầu từ đây
      'Python'       //2

   ];

   var languages4 = [
      'Javascript',  //0
      'PHP',         //1 //splice(1) khi chạy con trỏ bắt đầu từ đây
      'Python'       //2

   ];

   var languages5 = [
      'Javascript',  //0
      'PHP',         //1 //splice(1) khi chạy con trỏ bắt đầu từ đây
      'Python'       //2

   ];


   //splice(chỉ định ví index (đặt con trỏ), deleteCount ->  xóa đi bao nhiêu phần tử)
   //trường hợp k muốn xóa để deleteCount = 0 / languages.splice(1, 0) -> áp dụng khio muốn chèn pt

   //xóa 1 element bất kỳ trong array
   languages.splice(1, 1)

   console.log(languages); //return (2) ['Javascript', 'Python'] / đã xóa đi 1 phần tử / PHP

   //xóa 2 element bất kỳ trong array
   languages2.splice(1, 2)

   console.log(languages2); //return ['Javascript'] / đã xóa đi 2 phần tử / PHP, Python



   //chèn 1 phần tử
   languages3.splice(1, 0, 'Kotin') // thêm 'Kotin' vào vị trí thứ 1

   console.log(languages3); //return (4) ['Javascript', 'Kotin', 'PHP', 'Python'] / đã thêm 1 phần tử và k xóa

   //chèn, xóa 1 phần tử
   languages4.splice(1, 1, 'Kotin') //đến vị trí thứ 1 -> xóa 1 pt -> thêm 'Kotin' vào vị trí thứ 1 / PHP bị xóa

   console.log(languages4); //return (3) ['Javascript', 'Kotin', 'Python']  / đã xóa đi 1 phần tử là 'PHP' & thêm 1 pt là 'Kotin'

   //chèn 1, xóa 2 phần tử
   languages5.splice(1, 2, 'Kotin') //đến vị trí thứ 1 -> xóa 2 pt -> thêm 'Kotin' vào vị trí thứ 1 / PHP, Python bị xóa

   console.log(languages5); //return (2) ['Javascript', 'Kotin']  / đã xóa đi 2 phần tử là 'PHP', 'Python' & thêm 1 pt là 'Kotin'

   //chèn 2, xóa 2 phần tử
   languages5.splice(1, 2, 'Kotin', 'C#') //đến vị trí thứ 1 -> xóa 2 pt -> thêm 'Kotin', 'C#' vào vị trí thứ 1 / PHP, Python bị xóa

   console.log(languages5); //return (3) ['Javascript', 'Kotin', 'C#']  / đã xóa đi 2 phần tử là 'PHP', 'Python' & thêm 2 pt là 'Kotin', 'C#'




   //======> - 8. Concat / concat() / sử dụng để nối 2 array thành 1 / merge
   var languages = [
      'Javascript',
      'PHP',
      'Python'

   ];

   var languages2 = [
      'Java',
      'Kotin',
      'Swift',
      'Lua'
   ];


   //mảng nào gọi concat sẽ được hợp nhất (merge) vào mảng đó 
   console.log(languages.concat(languages2)); //return (7) ['Javascript', 'PHP', 'Python', 'Java', 'Kotin', 'Swift', 'Lua'] 
   // ở đây languages gọi concat() vì vậy languages2 sẽ hợp nhất vào languages

   //ví dụ languages2 gọi concat
   console.log(languages2.concat(languages)); //return (7) ['Java', 'Kotin', 'Swift', 'Lua', 'Javascript', 'PHP', 'Python']


   
   //======> - 9. Slicing / slice() / sử dụng cắt toàn bộ or một vài element của mảng
   var languages = [
      'Javascript',  //
      'PHP',         //1
      'Python'       //2

   ];

   var languages2 = [
      'Javascript',  //
      'PHP',         //1
      'Python'       //2
   ];

   var languages3 = [
      'Javascript',  //
      'PHP',         //1
      'Python'       //2
   ];

   var languages4 = [
      //lấy pt = cách truyền pt âm -> đếm ngược
      'Javascript',  //
      'PHP',         //-1
      'Python'       //-2
   ];


   //slice(vị trí bắt đầu cắt(start), vị trí kết thúc cắt(end))

   console.log(languages.slice(1, 2)); //return ['PHP'] /slice(1, 2) sẽ bắt đầu cắt từ 'PHP', và kết thúc là 2 / đă cắt 'PHP'

   //cắt từ vị trí chỉ định đến hết mảng
   console.log(languages2.slice(1)); //return (2) ['PHP', 'Python'] /slice(1) sẽ bắt đầu cắt từ 'PHP' đến hết mảng / đã cắt 'PHP', 'Python'


   //copy mảng (array)
   console.log(languages3.slice(0)); //return (3) ['Javascript', 'PHP', 'Python'] / sử dụng để copy mảng

   //lấy pt cuối mảng / truyền pt âm - lấy ra pt 'PHP'
   console.log(languages4.slice(-2, -1)); //return ['PHP'] /slice(bắt đầu từ -2 'Python', kết thúc -1 'PHP') - số âm / đã cắt 'PHP'
 */




/** 55. Làm việc với mảng #1, 56. Làm việc với mảng #2, 57. Làm việc với mảng #3, 58. Feedback: Độ dài 1 video bao nhiêu là phù hợp?
 * //55
 * Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, 
 * hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.
 * 
 * //giai 
      function joinWithCharacter(array, charactor) {
         return array.join(charactor);
      }


      // Ví dụ khi sử dụng
      var cars = ['Honda', 'Mazda', 'Mercedes'];

      var result = joinWithCharacter(cars, ' - ');

      console.log(result); // Expected: "Honda - Mazda - Mercedes" 

 * //56
      Để vượt qua thử thách này, hãy tạo hàm getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
      hàm này sẽ trả về phần tử cuối cùng trong mảng.

   //giai /tham khao: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
      // Viết hàm tại đây
      function getLastElement(array)
      {
         return array.slice(-1);
      }


      // Ví dụ sử dụng
      var animals = ['Monkey', 'Tiger', 'Elephant'];
      var result = getLastElement(animals);

      console.log(result); // Expected: "Elephant"
      console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


  * //57 
      Để vượt qua thử thách này, hãy tạo hàm getFirstElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
      hàm này sẽ trả về phần tử đầu tiên trong mảng.

      // Viết hàm tại đây
      function getFirstElement(array)
      {
         return array.slice(0, 1);
      }



      // Ví dụ sử dụng
      var animals = ['Monkey', 'Tiger', 'Elephant'];
      var result = getFirstElement(animals);

      console.log(result); // Expected: "Monkey"
      console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
 */


