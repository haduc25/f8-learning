/** Chuương 8 - 59 - Object là gì?, 60
 * 
   //ex - tạo object
   var myInfo = {
      //key / data
      name: 'Ha Duc',
      age: 21,
      address: 'Thai Nguyen, VN',

      // để đặt tên có dấu '-' cần thêm ký tự '', vd: 'full-Name': 'HA MINH DUC'

      
   };


   console.log(myInfo); //return {name: 'Ha Duc', age: 21, address: 'Thai Nguyen, VN'}


   //thêm key & value từ ngoài
   myInfo.email = 'haducvcvb@gmail.com';

   //thêm key & value từ ngoài nhưng là tên có dấu '-'
   myInfo['my-email'] = 'haduc25@gmail.com';

   //dl sau khi thêm email
   console.log(myInfo); //return {name: 'Ha Duc', age: 21, address: 'Thai Nguyen, VN', email: 'haducvcvb@gmail.com', my-email: 'haduc25@gmail.com'}


   //lấy dl từ key
   console.log("My name is " + myInfo.name); //return My name is Ha Duc
   console.log("I'm  " + myInfo.age + " year old !"); //return I'm  21 year old 
   console.log("I live in " + myInfo['address']); //return I live in Thai Nguyen, VN

   //key k tồn tại return undefined
   console.log("My phone number is " + myInfo['phone']); //return My phone number is undefined


   //ex - khi k sử dung cách 'myInfo.name'

   // - lấy ra data của key 'address' từ biến 'myKey2'

   var myInfo2 = {
      name: 'Nguyen Nhi',
      age: 20,
      address: 'Bac Kan, VN',
   };

   var myKey2 = 'address';

   //truyền trong [] k có dấu '' -> biến
   //truyền trong [] có dấu '' -> key
   console.log(myInfo2[myKey2]); //return Bac Kan, VN


   //ex
   // - thêm key là biến từ bên ngoài

   var emailKey3 = 'email';

   var myInfo3 = {
      name: 'Tran Huyen',
      age: 19,
      address: 'VietNam, VN',

      // để thêm email là 1 biến cần thêm []
      [emailKey3]: 'haminhduc2001@mail.com'
   };

   console.log(myInfo3); //return {name: 'Tran Huyen', age: 19, address: 'VietNam, VN', email: 'haminhduc2001@mail.com'}



   // - xóa key

   var myInfo4 = {
      name: 'Tran Huyen',
      age: 19,
      address: 'VietNam, VN',
      [emailKey3]: 'haminhduc2001@mail.com'
   };


   // sử dụng delete
   delete myInfo4.name;
   delete myInfo4['age'];

   console.log(myInfo4); //return {address: 'VietNam, VN', email: 'haminhduc2001@mail.com'} / bcs trên deleted name, age

   //ex

   // - lưu trữ value là 1 function


   var myInfo5 = {
      name: 'Tran Thi Huyen',
      age: 18,
      address: 'VietNam, VN',

      getName: function()
      {
         return this.name;
         //this ở đây = myInfo5 / myInfo5.name;
      },

      //thuộc tính 
      phone: '0964103866',
      
      //phương thức
      getAge: function()
      {
         //do something...
      }
      
   };


   //gọi 1 function trong object
   console.log(myInfo5.getName());  //return Tran Thi Huyen
   console.log(typeof myInfo5.getName);  //return function


   //Function --> Phương thức / method
   //Others (Key) --> Thuộc tính / property

 */

/** 61.  Object constructor - Xây dựng đối tượng
   //ex

   //quy ước: tên hàm có constructor chũ cái đầu viết hoa
   function User(fName, lName, avatar)
   {
      //constructor
      this.fName = fName;
      this.lName = lName;
      this.avatar = avatar;


      //thêm function
      this.getName = function()
      {
         //nối chuỗi, return -> fullName
         return `${this.fName} ${this.lName}`;
         //this trong function getName != với this trong 'this.fName = fName;'
         //this ở đây là trong phương thức getName, vd: nếu author gọi getName -> this = author, nếu user gọi getName -> this = user
      }
   }

   //tạo ra 1 tham số mới với object constructor

   var author = new User('Hà', 'Đức', 'Avatar hihi'); //tạo mới 1 đối tượng User
   var user = new User('Trần', 'Huyền', 'Avatar user');


   console.log(author); //return User {fName: 'Hà', lName: 'Đức', avatar: 'Avatar hihi'} / User: tên function (tên obj constructor)
   console.log(user); //return User {fName: 'Trần', lName: 'Huyền', avatar: 'Avatar user'}


   //so sánh kiểm tra constructor
   console.log(author.constructor); 

   // return ƒ User(fName, lName, avatar)
   // {
   //    //constructor
   //    this.fName = fName;
   //    this.lName = lName;
   //    this.avatar = avatar;
   // }


   //so sánh trực tiếp với User
   console.log(author.constructor === User); //return true 


   //thêm thuộc tính vào object constructor từ bên ngoài (giống obj)
   author.title = 'Hi, have a good day (5/4/2022)';
   user.comment = 'Hello guys this is my comment';


   //kiem tra sau khi thêm title, comment
   console.log(author); //return User {fName: 'Hà', lName: 'Đức', avatar: 'Avatar hihi', title: 'Hi, have a good day (5/4/2022)'}
   console.log(user); //return User {fName: 'Trần', lName: 'Huyền', avatar: 'Avatar user', comment: 'Hello guys this is my comment'}

   //tuy 2 đối tượng đều được tạo trong 1 function nhưng có thể thêm các thuộc tính riêng lẻ, k bị ảnh hưởng đến nhau



   //gọi getName từ trong obj constructor
   console.log(author.getName()); //reuturn Hà Đức
   console.log(user.getName()); //return Trần Huyền

   //ex - tạo ra Function expression
   var User2 = function(fName, lName, avatar)
   {
      //constructor
      this.fName = fName;
      this.lName = lName;
      this.avatar = avatar;


      //thêm function
      this.getName = function()
      {
         //nối chuỗi, return -> fullName
         return `${this.fName} ${this.lName}`;
         //this trong function getName != với this trong 'this.fName = fName;'
         //this ở đây là trong phương thức getName, vd: nếu author gọi getName -> this = author, nếu user gọi getName -> this = user
      }
   }


   var user2 = new User('Nguyễn', 'Trâm', 'Avatar2'); //tạo mới 1 đối tượng User

   console.log("Cái này dùng Function expression & My name is " + user2.getName()); //return Cái này dùng Function expression & My name is Nguyễn Trâm
  
*/

/** 62. Tạo object constructor Animal, 63
   Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. Trong đó, name là để lưu tên động vật, 
   leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.

   Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.

   Tên và tốc độ di chuyển của vẹt các bạn có thể tùy ý đặt, không đòi hỏi phải chính xác với tên và tốc độ trong thực tế.
 * 
 * // giai
   var Animal = function(name, leg, speed)
   {
      this.name = name;
      this.leg = leg;
      this.speed = speed;
   }

   var parrot = new Animal('pie', 2, '40km/h')
*/


/** 63. Object prototype
 * 
   // Object prototype sử dụng thêm thuộc tính & phương thức vào hàm tạo, từ ngoài vào

      function User(fName, lName, avatar)
   {
      //constructor
      this.fName = fName;
      this.lName = lName;
      this.avatar = avatar;


      //thêm function
      this.getName = function()
      {
         //nối chuỗi, return -> fullName
         return `${this.fName} ${this.lName}`;
      }
   }






   //để thêm 1 thuộc tính từ ngoài hàm tạo sử dụng prototype

   //thêm thuộc tính
   User.prototype.className = 'CNTTK18E';

   //thêm phương thức
   User.prototype.getClassName = function()
   {
      return this.className;
      //khi user2 gọi function thì this = user2
   }

   var user = new User('Ha', 'Duc', 'Avt1');
   var user2 = new User('Ngoc', 'Anh', 'Avt2');
   


   console.log(user.className); //return CNTTK18E
   console.log(user2.getClassName()); //return CNTTK18E



 */

/** 64. Thêm phương thức getFullName
Để vượt qua thử thách này, bạn hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, 
phương thức này sẽ trả về tên đầy đủ của sinh viên.

Giữa firstName và lastName cần có 1 khoảng trắng (1 dấu space).



//code
   // Làm bài tại đây
   function Student(firstName, lastName)
   {
      this.firstName = firstName;
      this.lastName = lastName;
   } 

   Student.prototype.getFullName =function()
   {
      return `${this.firstName} ${this.lastName}`;
   }


   // Ví dụ khi sử dụng
   var student = new Student('Long', 'Bui');

   console.log(student.firstName);  // 'Long'
   console.log(student.lastName);  // 'Bui'
   console.log(student.getFullName());  // 'Long Bui'
 */

/** 65. Đối tượng Date
 * 
 * 
   var date = new Date();


   console.log(date); //return Fri May 06 2022 22:52:46 GMT+0700 (Indochina Time)
   console.log(typeof date); //return object



   var day = date.getDate(); //day
   var month = date.getMonth() + 1; //vì month return từ 0-11 nên + 1 
   var year = date.getFullYear(); //year

   var fullDate = `${day}/${month}/${year}`;


   // console.log(day);
   // console.log(month);
   // console.log(year); //2022
   console.log(fullDate); //6/5/2022



   //
   // Instance methods
   // Date.prototype.getDate()
   // Returns the day of the month (1–31) for the specified date according to local time.

   // Date.prototype.getDay()
   // Returns the day of the week (0–6) for the specified date according to local time.

   // Date.prototype.getFullYear()
   // Returns the year (4 digits for 4-digit years) of the specified date according to local time.

   // Date.prototype.getHours()
   // Returns the hour (0–23) in the specified date according to local time.

   // Date.prototype.getMilliseconds()
   // Returns the milliseconds (0–999) in the specified date according to local time.

   // Date.prototype.getMinutes()
   // Returns the minutes (0–59) in the specified date according to local time.

   // Date.prototype.getMonth()
   // Returns the month (0–11) in the specified date according to local time.

   // Date.prototype.getSeconds()
   // Returns the seconds (0–59) in the specified date according to local time.

   // Date.prototype.getTime()
   // Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

   // Date.prototype.getTimezoneOffset()
   // Returns the time-zone offset in minutes for the current locale.

 */


/** 66. Hoàn thiện hàm getNextYear
   Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.

   //code
   function getNextYear()
   {
      var date = new Date();
      var nextYear = date.getFullYear() + 1;
      return nextYear;
   }
 */


/** 67.Math object
 * - Math.PI
 * - Math.round() //làm tròn trên or dưới (vd: 1,5 -> 2, 1,4 -> 1)
 * - Math.abs() //giá trị tuyệt đối | |
 * - Math.ceil() //làm tròn trên, các số thập phân != 0 => làm tròn trên (vd 4.1 => 5)
 * - Math.floor() //làm tròn dưới, các số thập phân != 0 => làm tròn dưới (vd 4.9 => 4)
 * - Math.random() //lấy số ngẫu nhiên / default 0 - 1
 * - Math.min()
 * - Math.max()
 

   //ex - PI
   console.log(Math.PI); //return 3.141592653589793

   //ex - round()
   console.log(Math.round(1.5)); //return 2
   console.log(Math.round(1.49)); //return 1

   //ex - abs()
   console.log(Math.abs(-100)); //return 100

   //ex - ceil()
   console.log(Math.ceil(4.1)); //return 5
   console.log(Math.ceil(4.00001)); //return 5

   //ex - floor()
   console.log(Math.floor(4.9)); //return 4
   console.log(Math.floor(4.99999)); //return 4


   //ex - random()
   console.log(Math.random()); //0 - 1

   //vd lấy số ngẫu nhiên từ 0 - 10
   var numberUnder10 = Math.floor(Math.random() * 10); //dùng Math.floor() / làm tròn dưới
   var numberUnder100 = Math.floor(Math.random() * 100); //dùng Math.floor() / làm tròn dưới
   console.log(numberUnder10); //return 0 - 9
   console.log(numberUnder100); //return 0 - 99


   //vd nhận đc phần thưởng ngẫu nhiên 
   var randUnder5 = Math.floor(Math.random() * 5); //dùng Math.floor() / làm tròn dưới


   var reward = [
      '10 coin',
      '20 coin',
      '30 coin',
      '40 coin',
      '50 coin'
   ];

   console.log(reward[randUnder5]); //return 0 - 4


   //vd random theo tỷ lệ %
   var randomPercentUnder100 = Math.floor(Math.random() * 100); //dùng Math.floor() / làm tròn dưới

   //5% thành công
   if(randomPercentUnder100 < 5){
      console.log('[random < 5] - Congratulations you has me, your percent is ' + randomPercentUnder100 + '%');
   }

   //50% thành công
   if(randomPercentUnder100 < 50){
      console.log('[random < 50] - Congratulations you has me, your percent is ' + randomPercentUnder100 + '%'); //return Congratulations you has me, your percent is 43
   }


   //ex - min()
   console.log(Math.min(-10, -5, 0, 5, 10, 20, 25)); //return -10

   //ex - max()
   console.log(Math.max(-10, -5, 0, 5, 10, 20, 25)); //return 25
 */

/** 68. Lấy ngẫu nhiên phần tử của mảng
   Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.

   //code

   function getRandomItem(array)
   {
       var rand = Math.floor(Math.random() * array.length);
       return array[rand];
   }


   cars = [
      'BMW',
      'Mazda',
      'Lexus',
      'Ford'
   ];

   console.log(getRandomItem(cars));
 */
















