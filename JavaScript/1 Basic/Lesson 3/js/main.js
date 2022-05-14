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




 */











