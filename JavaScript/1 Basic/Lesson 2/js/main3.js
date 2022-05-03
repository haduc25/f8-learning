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
 */
