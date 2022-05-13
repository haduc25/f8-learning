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









