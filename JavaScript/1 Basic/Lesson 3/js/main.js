/** Chuong 11 - 90. Làm việc với mảng - Phần 2

   Array Methods:
      forEach() //duyệt qua các phần tử của mảng
      every() //kiểm tra tất của các pt là true nếu 1 pt là false => trả về false, trả về boolean
      some() //ngược lại với every(), Kiểm tra và chỉ cần 1 pt trong mảng thỏa mãn điều kiện => trả về true
      find() //tìm kiếm giá trị trong các phần tử (chỉ trả về phần tử đầu tiên thỏa mãn đk (1))
      filter() //giống find() nhưng trả về tất cả các pt thỏa mãn đk trong mảng (all)
      map() //
      reduce() //



   //ex - forEach()
      var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 50
      },
      {
         id: 3,
         name: 'Python',
         coin: 150
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 0
      },
      {
         id: 5,
         name: 'React Native',
         coin: 70
      },


   ];


   courses.forEach(function(course, index){
      console.log(course); //return Object x6
      console.log(index, course); //return Object x6 & 0 - 5
   }); //su dung callback


   //ex - every()

      var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 0
      },
      {
         id: 2,
         name: 'PHP',
         coin: 0
      },
      {
         id: 3,
         name: 'Python',
         coin: 0
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 0
      },
      {
         id: 5,
         name: 'React Native',
         coin: 0
      },


   ];


   var isFree = courses.every(function(course, index){
      console.log(index); //return 0 - 5 / vì true
      return course.coin === 0;
   });


   console.log(isFree); //return true (nếu có 1 coin != 0 trả về false và dừng lại k duyệt tiếp)


   //some()
      var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0 //some chi can 1 pt thoa man dk (& k duyet mang tiep)
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 5,
         name: 'React Native',
         coin: 555
      },


   ];


   var isFree = courses.some(function(course, index){
      return course.coin === 0;
   });


   console.log(isFree); //return true (nếu có k co coin = 0 trả về false)


   //find()

      
   var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 6,
         name: 'React Native',
         coin: 555
      },
      {
         id: 7,
         name: 'Python',
         coin: 999
      },


   ];


   var khoaHoc = courses.find(function(course, index){
      return course.name === 'Python';
   });


   console.log(khoaHoc); //return {id: 3, name: 'Python', coin: 750} // nếu k có trả về undefined

   //filter()
      var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 6,
         name: 'React Native',
         coin: 555
      },
      {
         id: 7,
         name: 'Python',
         coin: 999
      },


   ];


   var khoaHoc = courses.filter(function(course, index){
      return course.name === 'Python';
   });


   console.log(khoaHoc); //return (2) [{…}, {…}] /0: {id: 3, name: 'Python', coin: 750}, 1: {id: 7, name: 'Python', coin: 999}, length: 2, [[Prototype]]: Array(0) 
   // nếu k có trả về undefined

 */

/** 91 - Array map() method trong javascript
    
   //ex - thêm text vào key name, vào thêm key coinText

   var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 6,
         name: 'React Native',
         coin: 555
      },
      {
         id: 7,
         name: 'Python',
         coin: 999
      },
   ];



   function courseHandler(course, index, originalArray){
      //console.log(course); //return {id: 1, name: 'Javascript', coin: 250}, {id: 2, name: 'PHP', coin: 150}, {id: 3, name: 'Python', coin: 750}, {id: 4, name: 'Java', coin: 0}, {id: 5, name: 'Ruby', coin: 333}, {id: 6, name: 'React Native', coin: 555}, {id: 7, name: 'Python', coin: 999}
      // return 123; //(7) [123, 123, 123, 123, 123, 123, 123]
      return {
         id: course.id,
         name: `Khoa hoc: ${course.name}`,
         coin: course.coin,
         coinText: `Gia: ${course.coin}`,
         index: index,
         // originalArray: originalArray //return ve array  
         //(có thể bỏ tham số thứ 3 và thay thành)
         originalArray: course //tên array => kq tương tự
      };
   };

   var newCourses = courses.map(courseHandler);


   console.log(newCourses); //khi chua return tra ve 7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
   //khi co return (1 tham so)
   //(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
   // /
   // 0: {id: 1, name: 'Khoa hoc: Javascript', coin: 250, coinText: 'Gia: 250'}
   // 1: {id: 2, name: 'Khoa hoc: PHP', coin: 150, coinText: 'Gia: 150'}
   // 2: {id: 3, name: 'Khoa hoc: Python', coin: 750, coinText: 'Gia: 750'}
   // 3: {id: 4, name: 'Khoa hoc: Java', coin: 0, coinText: 'Gia: 0'}
   // 4: {id: 5, name: 'Khoa hoc: Ruby', coin: 333, coinText: 'Gia: 333'}
   // 5: {id: 6, name: 'Khoa hoc: React Native', coin: 555, coinText: 'Gia: 555'}
   // 6: {id: 7, name: 'Khoa hoc: Python', coin: 999, coinText: 'Gia: 999'}
   // length: 7
   // [[Prototype]]: Array(0)
   // /

   //khi them index (2 tham so)
   // /
   // (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
   // 0: {id: 1, name: 'Khoa hoc: Javascript', coin: 250, coinText: 'Gia: 250', index: 0}
   // 1: {id: 2, name: 'Khoa hoc: PHP', coin: 150, coinText: 'Gia: 150', index: 1}
   // 2: {id: 3, name: 'Khoa hoc: Python', coin: 750, coinText: 'Gia: 750', index: 2}
   // 3: {id: 4, name: 'Khoa hoc: Java', coin: 0, coinText: 'Gia: 0', index: 3}
   // 4: {id: 5, name: 'Khoa hoc: Ruby', coin: 333, coinText: 'Gia: 333', index: 4}
   // 5: {id: 6, name: 'Khoa hoc: React Native', coin: 555, coinText: 'Gia: 555', index: 5}
   // 6: {id: 7, name: 'Khoa hoc: Python', coin: 999, coinText: 'Gia: 999', index: 6}
   // length: 7
   // [[Prototype]]: Array(0)
   // /


   //khi them originalArray (3 tham so)
   // /
   // (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
   // 0: {id: 1, name: 'Khoa hoc: Javascript', coin: 250, coinText: 'Gia: 250', index: 0, …}
   // 1: {id: 2, name: 'Khoa hoc: PHP', coin: 150, coinText: 'Gia: 150', index: 1, …}
   // 2: {id: 3, name: 'Khoa hoc: Python', coin: 750, coinText: 'Gia: 750', index: 2, …}
   // 3: {id: 4, name: 'Khoa hoc: Java', coin: 0, coinText: 'Gia: 0', index: 3, …}
   // 4: {id: 5, name: 'Khoa hoc: Ruby', coin: 333, coinText: 'Gia: 333', index: 4, …}
   // 5: {id: 6, name: 'Khoa hoc: React Native', coin: 555, coinText: 'Gia: 555', index: 5, …}
   // 6: {id: 7, name: 'Khoa hoc: Python', coin: 999, coinText: 'Gia: 999', index: 6, …}
   // length: 7
   // [[Prototype]]: Array(0)
   // /


   //ex - chỉ lấy ra tên khóa học trong mảng mới
   function courseHandler2(course, index){
      return course.name;
   };
   var newCourses2 = courses.map(courseHandler2);

   console.log(newCourses2); //return (7) ['Javascript', 'PHP', 'Python', 'Java', 'Ruby', 'React Native', 'Python']



   //ex - ứng dụng trong thực tế

   function courseHandler3(course, index){
      return `<h2>${course.name}</h2>`;
   };
   var newCourses3 = courses.map(courseHandler3);

   console.log(newCourses3); //return (7) ['<h2>Javascript</h2>', '<h2>PHP</h2>', '<h2>Python</h2>', '<h2>Java</h2>', '<h2>Ruby</h2>', '<h2>React Native</h2>', '<h2>Python</h2>']

   //su dung join() de bo array

   console.log(newCourses3.join('')); //return <h2>Javascript</h2><h2>PHP</h2><h2>Python</h2><h2>Java</h2><h2>Ruby</h2><h2>React Native</h2><h2>Python</h2> (test bên index :>)
 */


   /** 92. Array reduce() method
       var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 6,
         name: 'React Native',
         coin: 555
      },
      {
         id: 7,
         name: 'Python',
         coin: 999
      },
   ];


   //ex - tính tổng coin - sử dụng vòng lặp

   // Biến lưu trữ
   var totalCoin = 0;

   for (var course of courses) {
      // Thực hiện lưu trữ
      totalCoin += course.coin;
      // console.table(totalCoin);
   }

   console.log(totalCoin); //return 3037



   //ex - tính tổng coin - sử dụng reduce()

   var i = 0;

   function coinHandler(accumulator, currentValue, currentIndex, originalArray){
      i++;
      // console.log(i); //return 1 - 7
      // console.log(i, accumulator); //return 1 0, 2 undefined, 3 undefined, 4 undefined, 5 undefined, 6 undefined, 7 undefined

      //tao bien tong de luu tru
      var total = accumulator + currentValue.coin;

      console.table({
         'Lượt chạy: ': i,
         'Biến lưu trữ: ': accumulator,
         //'Giá trị hiện tại: ': currentValue,
         'Index hiện tại: ': currentIndex, //return 0 - 6
         'Giá khóa học (Coin): ': currentValue.coin, //return 0 - 6
         'Giá trị tích trữ được hiện tại (Total Coin): ': total, //return 0 - 6
         //accumulator lần 1 = biến lưu trữ / ở đây = 0, và các lần lặp sau là undefined
      });

      //ví dụ giá trị khởi tạo là []
      // console.log(accumulator); //return [] //accumulator lần 1 = biến lưu trữ / ở đây = [], và các lần lặp sau là undefined

      // Thực hiện lưu trữ / bằng cách return
      //vi du return value
      //return 100; //return gia tri dau tien (Bien lu tru) = 0, cac gia tri sau (luot chay) deu la 100

      //in ra gia tri currentValue
      //console.log(currentValue); //return {id: 1, name: 'Javascript', coin: 250}, {id: 2, name: 'PHP', coin: 150}, {id: 3, name: 'Python', coin: 750}, {id: 4, name: 'Java', coin: 0}, {id: 5, name: 'Ruby', coin: 333}, {id: 6, name: 'React Native', coin: 555}, {id: 7, name: 'Python', coin: 999}
      
      //in ra tổng coin
      //return accumulator + currentValue.coin; //return gia tri dau tien (Bien lu tru) = 0, cac gia tri sau (luot chay) cong tu kq bien luu tru dau tien / lan luot la 0 - 250 - 400 -1150 - 1150 - 1483 - 2038

      //rut gon / su dung bien tong
      return total;
   }




      var totalCoin2 = courses.reduce(coinHandler, 0) //(đối số 1: function, đối số 2: giá trị khởi tạo)
      //var totalCoin2 = courses.reduce(coinHandler, []) //(đối số 1: function, đối số 2: giá trị khởi tạo) //giá trị khởi tạo có thể là array, int, string,...eg..eg..


      console.log(totalCoin2); //return 3037


      //ex - tính tổng coin - sử dụng reduce() - rút gọn

      var totalCoin3 = courses.reduce(function(accumulator, currentValue){
         return accumulator + currentValue.coin;
      }, 0); //initial value

      console.log(totalCoin3); //return 3037


      //ex - tính tổng coin - sử dụng reduce() - rút gọn ES6

      var totalCoin4 = courses.reduce((a, b) => a + b.coin, 0); //initial value

      console.log(totalCoin4); //return 3037

    */



/** 93. Ví dụ: Array reduce() method

   //ex- sửa lại ví dụ trước / tên trong fucntion reduce() có thể đạt tùy ý

   var courses = [
      {
         id: 1,
         name: 'Javascript',
         coin: 250
      },
      {
         id: 2,
         name: 'PHP',
         coin: 150
      },
      {
         id: 3,
         name: 'Python',
         coin: 750
      },
      {
         id: 4,
         name: 'Java',
         coin: 0
      },
      {
         id: 5,
         name: 'Ruby',
         coin: 333
      },
      {
         id: 6,
         name: 'React Native',
         coin: 555
      },
      {
         id: 7,
         name: 'Python',
         coin: 999
      },
   ];


   var i = 0;

   var totalCoin = courses.reduce(function(total, course){
      i++

      // console.log(i, total); //return 1 0, 2 250, 3 400, 4 1150, 5 1150, 6 1483, 7 2038 (khi có giá trị khởi tạo = 0)
      //console.log(i, total); //return 1 {id: 1, name: 'Javascript', coin: 250}, 2 '[object Object]150', 3 '[object Object]150750', 4 '[object Object]1507500', 5 '[object Object]1507500333', 6 '[object Object]1507500333555' (khi k có giá trị khởi tạo = 0)
      //console.log(i, total, course); //return 1 {id: 1, name: 'Javascript', coin: 250} {id: 2, name: 'PHP', coin: 150}, 2 '[object Object]150' {id: 3, name: 'Python', coin: 750}, 3 '[object Object]150750' {id: 4, name: 'Java', coin: 0}, 4 '[object Object]1507500' {id: 5, name: 'Ruby', coin: 333}, 5 '[object Object]1507500333' {id: 6, name: 'React Native', coin: 555}, 6 '[object Object]1507500333555' {id: 7, name: 'Python', coin: 999} (khi k có giá trị khởi tạo = 0)
      console.log(i, total, course); //return 1 0 {id: 1, name: 'Javascript', coin: 250},2 250 {id: 2, name: 'PHP', coin: 150},3 400 {id: 3, name: 'Python', coin: 750},4 1150 {id: 4, name: 'Java', coin: 0},5 1150 {id: 5, name: 'Ruby', coin: 333},6 1483 {id: 6, name: 'React Native', coin: 555},7 2038 {id: 7, name: 'Python', coin: 999} (khi có giá trị khởi tạo = 0)

      return total + course.coin;
   }); //initial value / có thể có hoặc không (khi co '}, 0);' ____ khi k co '});')

   // console.log(totalCoin); //return 3037

   //khi k co initial value thi lay phan tu dau tien cua mang lam gia tri khoi tao, va total la gia tri thu 2
   //lan chay dau tien lay ra 2 phan tu vi vay so lan chay giam di 1



   //ex - Khi k truyen Giá trị khởi tạo (nếu kq vẫn ra như mong muốn => k cần truyền)

   var numbers = [250, 150, 750, 0, 333, 555, 999];

   var totalCoin2 = numbers.reduce(function(total, number){
      return total + number;
   });

   console.log(totalCoin2); //return 3037


   //ex - Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
   depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];


   console.log(depthArray); //return (6) [1, 2, Array(2), 5, 6, Array(3)]

   var flatArray = depthArray.reduce(function(flatOutput, depthItem){
      return flatOutput.concat(depthItem); //noi array
   }, []); //khoi tao dau tien la array trong

   console.log(flatArray); //return (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

   //ex - Lấy ra các khóa học đưa vào 1 mảng mới
   var topics = [
      {
         topic: "Front-end",
         courses: [
            {
               id: 1,
               title: "HTML, CSS"
            },
            {
               id: 2,
               title: "Javascript"
            },
         ]
      },
      {
         topic: "Back-end",
         courses: [
            {
               id: 1,
               title: "PHP"
            },
            {
               id: 2,
               title: "NodeJS"
            },
         ]
      },
   ];

   console.log(topics); //return //(2) [{…}, {…}], 0: {topic: 'Front-end', courses: Array(2)}, 1: {topic: 'Back-end', courses: Array(2)}, length: 2, [[Prototype]]: Array(0)(2) [{…}, {…}], 0: {topic: 'Front-end', courses: Array(2)}, 1: {topic: 'Back-end', courses: Array(2)}, length: 2, [[Prototype]]: Array(0)

   var newCourses = topics.reduce(function(courses, topic){
      return courses.concat(topic.courses); //noi array
   }, []);

   console.log(newCourses); //return (4) [{…}, {…}, {…}, {…}], 0: {id: 1, title: 'HTML, CSS'}, 1: {id: 2, title: 'Javascript'}, 2: {id: 1, title: 'PHP'}, 3: {id: 2, title: 'NodeJS'}, length: 4, [[Prototype]]: Array(0)


   //ex - chuyen qua html
   var htmls = newCourses.map(function(course){
      return `
         <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
         </div>
      `
   });

   //console.log(htmls); //return (4) ['\n      <div>\n         <h2>HTML, CSS</h2>\n         <p>ID: 1</p>\n      </div>\n   ', '\n      <div>\n         <h2>Javascript</h2>\n         <p>ID: 2</p>\n      </div>\n   ', '\n      <div>\n         <h2>PHP</h2>\n         <p>ID: 1</p>\n      </div>\n   ', '\n      <div>\n         <h2>NodeJS</h2>\n         <p>ID: 2</p>\n      </div>\n   ']

   //chuyen qua html thuan
   console.log(htmls.join(''));

         // <div>
         //    <h2>HTML, CSS</h2>
         //    <p>ID: 1</p>
         // </div>
      
         // <div>
         //    <h2>Javascript</h2>
         //    <p>ID: 2</p>
         // </div>
      
         // <div>
         //    <h2>PHP</h2>
         //    <p>ID: 1</p>
         // </div>
      
         // <div>
         //    <h2>NodeJS</h2>
         //    <p>ID: 2</p>
         // </div>
 */


/** 94 - Phương thức reduce có logic như thế nào?
   //
   //on lai tính tổng mảng sau dùng redece() - 
   var numbers = [1, 2, 3, 4, 5, 6];

   //k có giá trị khởi tạo
   var result = numbers.reduce((total, number) =>{
      return  total + number;
   })

   //có giá trị khởi tạo
   var result2 = numbers.reduce((total, number) =>{
      return  total + number;
   }, 10)

   console.log(result); //return 21
   console.log(result2); //return 31

   //ex - tao ra function reduce2
   Array.prototype.reduce2 = function(callback, result){ //nhận 2 đối số (callback, initialValue)
      //kt dk k có đối số thứ 2 (th k có giá trị khởi tạo)
      var i = 0;
      if(arguments.length < 2){
         var i = 1; //k truyền lặp từ i = 1
         //khi k có initalValue => biến lưu trữ = phần tử đầu tiên của array
         result = this[0]; //pt dau tien

      }

      //th co giá trị khởi tạo / nếu k có trả về NaN
      for (; i < this.length; i++) {
         //gọi lại callback
         result = callback(result, this[i], i, this);
         //nhận vào 4 tham số
         //result => biến lưu trữ
         //this[i] => columnsValue
         //i => index
         //this => currentArray
         
         //gán biến lưu trữ (result) = callback
      }

      return result;
   }

   var numbers = [1, 2, 3, 4, 5, 6];


   //k có giá trị khởi tạo
   var result3 = numbers.reduce2((total, number) =>{
      return  total + number;
   })

   //có giá trị khởi tạo
   var result4 = numbers.reduce2((total, number) =>{
      return  total + number;
   }, 10)

   console.log(result3); //return 21 / su dung recude2
   console.log(result4); //return 31 / su dung recude2
 */



   
/** 95 - String/Array includes() method
   //ex - kt includes trong Array & String
   console.log(String.prototype.includes); //return ƒ includes() { [native code] }
   console.log(Array.prototype.includes); //return ƒ includes() { [native code] }

   //k co function trong Object 
   console.log(Object.prototype.includes); //return undefined

   //ex - su dung includes voi String

   var title = 'Xin chao toi ten la Ha Minh Duc';

   console.log('String');
   console.log(title.includes('Duc')); //return true
   console.log(title.includes('Duc2')); //return false /k tim thay

   //đối số thứ 2 là vị trị bắt đầu tìm kiếm, mặc định là 0

   console.log(title.includes('Xin', 2)); //return false /k tim thay / bắt đầu vị trí số 2 =>  chao toi ten la Ha Minh Duc 
   console.log(title.includes('Xin', 0)); //return true

   //ex - su dung includes voi Array

   var courses = ['Javascript', 'PHP', 'Python'];

   console.log('Array');
   console.log(courses.includes('Javascript')); //return true
   console.log(courses.includes('Ruby')); //return false


   console.log(courses.includes('Python', 1)); //return true => 'PHP', 'Python'
   console.log(courses.includes('Javascript', 1)); //return false /k tim thay / bắt đầu vị trí (index) số 1 => 'PHP', 'Python'

   console.log(courses.includes('Python', -1)); //return true => 'Python'
*/