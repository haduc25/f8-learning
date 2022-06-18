/** Chuong 13. HTML DOM
    104 - HTML DOM là gì?, 132. HTML DOM vs DOM API, 133. Document object
    new - 131. HTML DOM là gì?

    //DOM : + Document Object Model

    //Gồm 3 thành phần chính
    + Element
    + Attribute
    + Text


    //132. HTML DOM vs DOM API
    //HTML DOM
    Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
    
    //DOM API
    Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. 
    DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.
    

    //133. Document object
    // document.write("jokes over you're dead !");
    
    
    //134. Get element methods

    + Element: ID, class, tag, CSS selector, HTML collection
    + Attribute
    + Text


        //getElementById()
    var headingNode = document.getElementById("heading");
    console.log(headingNode); //return <h1 style="text-align: center;" id="heading">Javascript Basic Learning...</h1>

    //ẩn element trên dev tool - đưa vào 1 obj
    console.log({
        element: headingNode //return {element: h1#heading}
    });

    //getElementsByClassName()
    var headingNodes = document.getElementsByClassName("course");
    console.log(headingNodes); //return HTMLCollection(4) [h2.course, h2.course, h2.course, h2.course]

    //getElementsByTagName()
    var headingNodes = document.getElementsByTagName("h2"); //return [h2, h2, h2, h2, h2, h2, h2, h2, h2.course, h2.course, h2.course, h2.course]
    console.log(headingNodes); //return HTMLCollection [h1#heading, heading: h1#heading]

    //querySelector() - su dung css selector
    var headingNode = document.querySelector(".headingClass");
    console.log(headingNode); //return <h1 style="text-align: center;" id="heading">Javascript Basic Learning...</h1>

    // var headingNode = document.querySelector(".heading-2");
    // var headingNode = document.querySelector(".box .heading-2");
    var headingNode = document.querySelector("html .box .heading-2");
    console.log(headingNode); //return <h3 class="heading-2">Heading 2</h3>


    //lấy ra heading đầu tiên trong box2
    var headingNodeQuery = document.querySelector(".box2 .heading-3:first-child"); //default lấy ra element đầu tiên
    console.log(headingNodeQuery); //return <h3 class="heading-3">Heading 3</h3>

    //lấy ra heading thứ 2 trong box2
    var headingNodeQuery = document.querySelector(".box2 .heading-3:nth-child(2)");
    console.log(headingNodeQuery); //return <h3 class="heading-3">Heading 4</h3>

    //lấy ra tất cả heading trong box2 - querySelectorAll
    var headingNodeQuery = document.querySelectorAll(".box2 .heading-3");
    console.log(headingNodeQuery); //return NodeList(8) [h3.heading-3, h3.heading-3, h3.heading-3, h3.he ading-3, h3.heading-3, h3.heading-3, h3.heading-3, h3.heading-3]

    //lay tung pt ra nhu array
    console.log(headingNodeQuery[0]); //return <h3 class="heading-3">Heading 3</h3>
    console.log(headingNodeQuery[1]); //return <h3 class="heading-3">Heading 4</h3>
    console.log(headingNodeQuery[2]); //return <h3 class="heading-3">Heading 5</h3>


    //HTML collection
    //Forms
    console.log(document.forms); //return HTMLCollection(3) [form#form-1, form#form-2, form#form-3, form-1: form#form-1, form-2: form#form-2, form-3: form#form-3]
    
    console.log(document.forms[1]); //return <form action="" id="form-2"></form>

    console.log(document.forms['form-1']); //return <form action="" id="form-1"></form>

    console.log(document.forms.formZ); //return <form action="" id="formZ"></form>

    //<a>
    console.log(document.anchors); //return HTMLCollection [a, youtube: a]

    //<img>
    console.log(document.images); //return HTMLCollection [img]


    //135. Thực hành get element
    
    // Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

    // productsListElement: thẻ div có class là products-list.
    // firstProductElement: thẻ div đầu tiên có class là product.
    // buttonElements: tất cả các thẻ button.

    //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <div class="products-list">
    //         <div class="product">
    //             <h3 class="title">Khóa học HTML & CSS Pro</h3>
    //             <p class="description">Cung cấp kiến thức từ cơ bản đến nâng cao về HTML & CSS</p>
    //             <button class="cta-btn">Mua ngay</button>    
    //         <div>
    //         <div class="product">
    //             <h3 class="title">Khóa học Javascript Pro</h3>
    //             <p class="description">Cung cấp kiến thức từ cơ bản đến nâng cao về Javascript</p>
    //             <button class="cta-btn">Mua ngay</button>    
    //         <div>
    //     </div>
    // </body>
    // </html>


    //main.js
    
     //* Sử dụng các biến đã cho sẵn dưới đây
     

     var productsListElement = document.querySelector('.products-list');
     var firstProductElement = document.querySelector('.product:first-child')
     var buttonElements = document.getElementsByTagName('button')

     //136. Get element methods - 2

    //lấy dl 'li' trong 'box-1'
    var listItemNodes = document.querySelectorAll('.box-1 li');


    console.log(listItemNodes); 

    //return 
    // NodeList(2) [li, li]
    // 0: li
    // 1: li
    // length: 2


    //Công việc 1: Sử dụng đến 'boxNode'
    //Công việc 2: Sử dụng đến 'li' elements là con của '.box-1'


    var boxNode = document.querySelector('.box-1');

    console.log(boxNode);
    //return
    //<div class="box-1">
    //       <ul>
    //          <li>Javascript 1 </li>
    //          <li>PHP 1</li>
    //       </ul>
    // </div>

    //đứng từ 'boxNode' truy cập vào các thẻ con 'li'

    //sử dụng querySelectorAll()
    console.log(boxNode.querySelectorAll('li')); //return NodeList(2) [li, li]
    console.log(boxNode.querySelectorAll('p')); //return NodeList [p]

    //sử dụng querySelector()
    console.log(boxNode.querySelector('p')); //return <p>Testing My name's MizGDuc</p>

    //sử dụng getElementsByTagName()
    console.log(boxNode.getElementsByTagName('li')); //return HTMLCollection(2) [li, li]
    console.log(boxNode.getElementsByTagName('p')); //return HTMLCollection [p]

    //139. Get element methods - 3
    
    // 1. getElementById
    // 2. getElementsByClassName
    // 3. getElementsByTagName
    // 4. querySelector
    // 5. querySelectorAll

    //chỉ có 1, 4 (getElementById, querySelector) lấy ra 1 phần tử, còn lại lấy ra pt giống mảng, cần truy vấn = index, array[index]

   //ex - get a element (h1, h2,... h6, p, ...) & and save to Element

   var Element = document.getElementsByTagName('h1')[0];
   console.log(Element); //return <h1 style="text-align: center;" id="heading" class="headingClass">Javascript Basic Learning...</h1>


   //140. Attribute node & Text node, 141. DOM attribute

   //h4
    var  h4Element = document.querySelector('h4');
    console.log(h4Element); //return <h4>Example 5: DOM attribute - MizGDuc</h4>

    //thêm attribute hợp lệ
    h4Element.title = "That's title added by javascript";

    console.log(h4Element.title); //return That's title added by javascript

    //đối với 'class' thì sẽ là 'className'
    h4Element.className = "class-by-js";

    console.log(h4Element.className); //return class-by-js


    //<a>
    var aElement = document.querySelector('a');
    console.log(aElement); //return <a href="https://www.youtube.com/25sdev" name="youtube" title="youtube when hover" target="_blank">My Youtube</a>

    //thêm href, vì đã có nên nó sẽ replace
    aElement.href = "That href will be replace by js!";

    console.log(aElement.href); 
    //return 
    //<a href="That href will be replace by js!" name="youtube" title="youtube when hover" target="_blank">My Youtube</a>
    //http://127.0.0.1:5500/JavaScript/1%20Basic/Lesson%203/That%20href%20will%20be%20replace%20by%20js!

    ////thêm attribute k hợp lệ thành hợp lệ
    //hợp lệ
    //thẻ h1..., h6 => attribute = title, id, class...
    //thẻ a => attribute = href, target,...

    //k hợp lệ
    //thẻ h1..., h6 => attribute có href
    //thẻ custom name

    //setAttribute

    //h4
    var  h4Element2 = document.querySelector('h4');
    console.log(h4Element2); //return <h4 title="That's title added by javascript" class="class-by-js">Example 5: DOM attribute - MizGDuc</h4>

    // //thêm attribute k hợp lệ
    h4Element2.setAttribute('href', 'https://www.youtube.com/25sdev');

    h4Element2.setAttribute('data', 'Its my data');

    h4Element2.setAttribute('lover', 'BMH <3')

    //return
    //<h4 title="That's title added by javascript" class="class-by-js" href="https://www.youtube.com/25sdev" 
    //data="Its my data" lover="BMH <3">Example 5: DOM attribute - MizGDuc</h4>


    //getAttribute
    h4Element2.getAttribute('class');
    console.log(h4Element2.getAttribute('class')); //return class-by-js


    //thực hiện set & get 

    var SetGetAttributeElement = document.querySelector('h1');
    console.log(SetGetAttributeElement); //return <h1 style="text-align: center;" id="heading" class="headingClass">Javascript Basic Learning...</h1>

    //set hợp lệ
    SetGetAttributeElement.title = 'Title from js.';

    //get hợp lệ
    console.log(SetGetAttributeElement.title); //return Title from js.


    //setAttribute
    SetGetAttributeElement.setAttribute('luv-you', 'meow meow <3')

    //getAttribute
    console.log(SetGetAttributeElement.getAttribute('luv-you')); //return meow meow <3


    //bài tập set class đã có trong css vào element = js
    BTsetClassElement = document.querySelector('h5');
    console.log(BTsetClassElement); //return <h5>MizGDuc - Testing class it's will become red color!</h5>

    BTsetClassElement.className = "red-color";

    console.log(BTsetClassElement.className); //return red-color (color changed -> done), nếu có 1 class trước -> bị overwrite (ghi đè)


    //142. Thực hành với DOM attribute

    // Thực hành với DOM attribute
    // Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:

    // Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
    // Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
    // Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
    // Thêm thuộc tính target có giá trị "_blank" cho thẻ a.





    //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <h1>F8 - Học lập trình để đi làm</h1>
    //     <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>
    // </body>
    // </html>

    //main.js
    // var h1Element = document.querySelector('h1');
    // var aElement = document.querySelector('a');

    // h1Element.title = "F8 - Học lập trình để đi làm";

    // h1Element.setAttribute('data-title', 'F8 - Học lập trình để đi làm')

    // aElement.href = "https://fullstack.edu.vn/";
    // aElement.target = "_blank";


        //143. InnerText vs textContent Property
    //Text

    //Để sửa đổi, replace, lấy ra text -> sử dụng innerText, textContent
    h2Ex6Element = document.querySelector('.ex6');

    //geter
    //seter

    //get text from html to js
    console.log(h2Ex6Element.innerText); //return Hi! My name's MizGDuc
    console.log(h2Ex6Element.textContent); //return Hi! My name's MizGDuc
﻿
    //set text from js to html
    h2Ex6Element.innerText = "That text changed by js";
    h2Ex6Element.textContent = "That text changed by js";

    console.log(h2Ex6Element.innerText); //return That text changed by js
    console.log(h2Ex6Element.textContent); //return Hi! My name's MizGDuc


    //innerText: Lấy ra text hiển thị trên trình duyệt, khi dùng replace thay thế text thì khoảng trắng sẽ thay thế -> <br>

    //textContent: Lấy ra text trong source code, khi dùng replace thay thế text thì khoảng trắng sẽ bị xóa -> k bị chuyển qua <br>

    //ex Khác nhau innerText & textContent
    var ex6DifferentBetween_innerText_textContent = document.querySelector('.ex6-innerText-textContent');

    console.log(ex6DifferentBetween_innerText_textContent.innerText); //return My name's MizGDuc
    console.log(ex6DifferentBetween_innerText_textContent.textContent);  //bỏ qua các thẻ nhưng giữ nguyên khoảng trắng giống trong html
    // //return

    // My name's
    // MizGDuc

    
    //    .example-box-6{
    //       width: 100px;
    //       height: 100px;
    //    }
    

    
    //    alert('hello guys, love u <3 !');
    

    //khi thêm, replace text
    // ex6DifferentBetween_innerText_textContent.innerHTML = '<i>This is a Card ! </i>'; //thêm = innerText => html nhận thẻ i
    // ex6DifferentBetween_innerText_textContent.textContent = '<i>This is a Card ! </i>'; //thêm = textContent => html k nhận thẻ i tự động chuyển qua text, 
    //dấu <> => &lt;&gt: 
    
    
    ex6DifferentBetween_innerText_textContent.innerHTML = `
    
    
    Hello that new text from js


    
    `;
    
    ex6DifferentBetween_innerText_textContent.textContent = `
    
    
    Hello that new text from js


    
    `;



    console.log(ex6DifferentBetween_innerText_textContent);
    //return 
    
    
    //Hello that new text from js


    //144. Thực hành sử dụng InnerText


    //Các bạn hãy thay đổi nội dung của thẻ h1 thành 'F8 - Học lập trình để đi làm.'


    // //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <h1 class="heading">F8</h1>
    // </body>
    // </html>

    // //main.js
    // var h1Element = document.querySelector('h1')

    // h1Element.innerText = 'F8 - Học lập trình để đi làm';
    */

    //145. InnerHTML vs OuterHTML Property



