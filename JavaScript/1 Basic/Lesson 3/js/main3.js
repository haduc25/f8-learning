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


        //145. InnerHTML vs OuterHTML Property

    // innerHTML, outerHTML
    

    var ex7_Box = document.querySelector('.ex7-box');


    //test innerText
    // ex7_Box.innerText = '<h1>Its h1 card from js</h1>'

    // console.log(ex7_Box); //return <div class="ex7-box"> </div>
    // console.log(ex7_Box.innerText); //return <h1>Its h1 card from js</h1>

    // innerHTML: geter, seter Element replace, replace 1 thẻ đc chỉ định
    // outerHTML: replace Element, replace element toàn bộ element đc chỉ định

    //innerHTML
    // ex7_Box.innerHTML = '<h1>Its h1 card from js</h1>'; //return Its h1 card from js

    // ex7_Box.innerHTML = 'Its h1 card from js'; //return Its h1 card from js
    
    ex7_Box.innerHTML = '<h1 title= "title of h1 from js">Its h1 card from js</h1>'; //return Its h1 card from js   

    console.log(ex7_Box.innerHTML); //return <h1 title="title of h1 from js">Its h1 card from js</h1>


    //outerHTML

    // console.log(ex7_Box.outerHTML); //return <div class="ex7-box"><h1 title="title of h1 from js">Its h1 card from js</h1></div>

    ex7_Box.outerHTML = '<span>hello</span>';

    console.log(ex7_Box.outerHTML); //return <div class="ex7-box"><h1 title="title of h1 from js">Its h1 card from js</h1></div> / in ra dl cũ, vì khi repace ở trên trong html đã thay đổi



    
    //146. Thực hành sử dụng InnerHTML #1

    //Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.

    //index.html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>        
    </head>
    <body>
        <ul>
            
        </ul>
    </body>
    </html>



    //main.js
    function render(html) {
        var ulElement = document.querySelector('ul');
    
        ulElement.innerHTML = html;
    }
    
    // render(`
    //     <li>Khóa học HTML</li>
    //     <li>Khóa học JS</li>
    //     <li>Khóa học PHP</li>
    // `)




    //147. Thực hành sử dụng InnerHTML #2
    
    Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

    Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

    ReactJS
    AngularJS
    VueJS

    //index.html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
        <body>
            <ul class="courses-list">

            </ul>
        </body>
    </html>


    //main.js
    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

    function render(courses) {
        var ulElement = document.querySelector('.courses-list');
        for(var value of courses){
            ulElement.innerHTML += `<li> ${value} </li>`;
        }
    }


    // render(courses)




    //148. Node properties, 149. Ôn tập các thuộc tính của Node

    var ex8_Box = document.querySelector('.ex8-box');
    // console.log(ex8_Box); //div.ex8-box
    console.log([ex8_Box]); //[div.ex8-box]

    //lấy ra attributes
    console.log([ex8_Box.attributes]); //[NamedNodeMap]

    //lấy ra childNodes
    console.log([ex8_Box.childNodes]); //[NodeList(3)]

    //lấy ra children
    console.log([ex8_Box.children]); //[HTMLCollection(1)]

    //lấy ra classList
    console.log([ex8_Box.classList]); //[DOMTokenList(1)]

    //lấy ra className
    console.log([ex8_Box.className]); //['ex8-box']

    //lấy ra clientHeight
    console.log([ex8_Box.clientHeight]); //[27]

    //lấy ra clientWidth
    console.log([ex8_Box.clientWidth]); //[947]

    //lấy ra inert / k rõ là gì...
    console.log([ex8_Box.inert = true]); //[true]

    //lấy ra innerHTML
    console.log([ex8_Box.innerHTML]); //['\n      <h2>Example 8: Node properties</h2>\n   ']

    //lấy ra innerText
    console.log([ex8_Box.innerText]); //['Example 8: Node properties']

    //lấy ra outerHTML
    console.log([ex8_Box.outerHTML]); //['<div class="ex8-box">\n      <h2>Example 8: Node properties</h2>\n   </div>']

    //lấy ra outerText
    console.log([ex8_Box.outerText]); //['Example 8: Node properties']

    //lấy ra isContentEditable / cho phép chỉnh sửa giống thẻ input
    console.log([ex8_Box.isContentEditable = true]); //[true]

    //lấy ra baseURI
    console.log([ex8_Box.baseURI]); //['http://127.0.0.1:5500/JavaScript/1%20Basic/Lesson%203/index.html']

    
    //lấy ra draggable /  kéo, thả
    console.log([ex8_Box.draggable = true]); //[true]
    
    //lấy ra hidden /  ẩn hiển thị
    // console.log([ex8_Box.hidden = true]); //[true]
    
    //childElementCount /  số pt con
    console.log([ex8_Box.childElementCount]); //[1]


    // clientHeight: Chiều cao của element.

    // clientWidth: Chiều rộng của element.
    



    
    //150. DOM CSS


    
    var ex9_Box = document.querySelector('.ex9-box');
    console.log(ex9_Box);

    //return
    // <div class="ex9-box">
    //     <h2>Example 9: DOM CSS</h2>
    // </div>

    //lấy ra CSS
    console.log(ex9_Box.style);
    
    //return
    //CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

    //set CSS bằng JS
    // ex9_Box.style.width = '300px';
    // ex9_Box.style.height = '150px';
    // ex9_Box.style.backgroundColor = 'yellow';

    //set CSS bằng JS - Sử dụng Object

    //assign(): sử dụng để gán, có thể nhận nhiều đối số
    Object.assign(ex9_Box.style, {
        width: '300px',
        height: '150px',
        backgroundColor: 'lightblue'
    });

    //get CSS bằng JS - chỉ có thể get ra css tồn tại
    console.log(ex9_Box.style.width); //return 300px
    console.log(ex9_Box.style.height); //return 150px
    console.log(ex9_Box.style.backgroundColor); //return lightblue
    console.log(ex9_Box.style.opacity); //return => rỗng


    //151. Thực hành sử dụng DOM CSS

    //Các bạn hãy thay đổi màu nền của thẻ div có class là .red thành màu #f00 và màu chữ của thẻ p thành màu #f05123.

    //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    //     <style>
    //         div {
    //             width: 100px;
    //             height: 100px;
    //             background-color: #000;
    //             color: #fff;
    //         }
    //     </style>
    // </head>
    // <body>
    //     <div class="red">Đổi màu thẻ div này thành màu #f00</div>
    //     <p>F8 - Học lập trình để đi làm</p>
    // </body>
    // </html>

    //main.js
    // var divElement = document.querySelector('.red');
    // var pElement = document.querySelector('p');

    // divElement.style.backgroundColor = '#f00';
    // pElement.style.color = '#f05123';


        //152. ClassList Property, 153. Ôn tập ClassList #1, 154. Ôn tập ClassList #2, 155. Thực hành sử dụng ClassList #1, 156. Thực hành sử dụng ClassList #2

    //add / thêm class, có thể thêm nhiều class
    //contains / kiểm tra class có tồn tại hay k, trả về true, false
    //remove / xóa class
    //toggle / nếu class tồn tại => xóa class , nếu k tồn tại => thêm class


    //ex10-box
    var ex10_Box = document.querySelector('.ex10-box');

    // console.log(ex10_Box);

    console.log(ex10_Box.classList); //return DOMTokenList ['ex10-box', value: 'ex10-box']

    //length
    console.log(ex10_Box.classList.length); //return 1

    //truy xuất phần tử qua index
    console.log(ex10_Box.classList[0]); //return ex10-box

    //truy xuất phần tử qua value / trả về string trong class của Element
    console.log(ex10_Box.classList.value); //return ex10-box


    //Prototype


    ///add
    ex10_Box.classList.add('red-color') //đã thêm class red-color vào thẻ div

    //add nhiều class
    // ex10_Box.classList.add('red-color', 'blue-color', 'yellow-color')

    ///contains
    console.log(ex10_Box.classList.contains('red-color')); //return true
    console.log(ex10_Box.classList.contains('red-color2')); //return false


    //remove
    ex10_Box.classList.remove('red-color') //đã thêm class red-color vào thẻ div

    //kiem tra xem remove hay chua
    console.log(ex10_Box.classList.contains('red-color')); //return false => da remove

    //remove + setTimeout
    //them blue -> sau 3s remove
    // ex10_Box.classList.add('blue-color')
    // setTimeout(() => {
    //     //sau 3s remove blue-color
    //     ex10_Box.classList.remove('blue-color')
    // }, 3000);


    //toggle

    //setTimeout
    // setTimeout(() => {
    //     ex10_Box.classList.toggle('blue-color')
    // }, 3000);


    //setInterval
    //sau 1s -> neu co 'blue-color' -> xoa, neu k co -> them blue-color
    setInterval(() => {
        ex10_Box.classList.toggle('blue-color')
    }, 1000);




    //  Name	        Description

    // add()	        Adds one or more tokens to the list
    // contains()	    Returns true if the list contains a class
    // entries()	    Returns an Iterator with key/value pairs from the list
    // forEach()	    Executes a callback function for each token in the list
    // item()	        Returns the token at a specified index
    // keys()	        Returns an Iterator with the keys in the list
    // length	        Returns the number of tokens in the list
    // remove()	        Removes one or more tokens from the list
    // replace()	    Replaces a token in the list
    // supports()	    Returns true if a token is one of an attribute's supported tokens
    // toggle()	        Toggles between tokens in the list
    // value	        Returns the token list as a string
    // values()	        Returns an Iterator with the values in the list


    //lassList chứa danh sách các class của element đó.
    //Phương thức toggle dùng để thêm class được chỉ định vào element nếu class đó chưa xuất hiện và xóa bỏ class đó nếu đã xuất hiện.
    //Đối số truyền vào là chuỗi thể hiện tên class được chỉ định nhé.


    //155. Thực hành sử dụng ClassList #1

    // Các bạn hãy thực hiện các yêu cầu dưới đây:

    // Thêm class title vào thẻ h1
    // Thay thế class sub-title ở thẻ p bằng class content
    // Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, không được sử dụng thuộc tính className nhé.

    //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <h1>Title</h1>
    //     <p class="sub-title">Content</p>
    // </body>
    // </html>


    //main.js
    // var h1Element = document.querySelector('h1');
    // var pElement = document.querySelector('p');
    
    // h1Element.classList.add('title');
    // pElement.classList.replace('sub-title', 'content')


    //156. Thực hành sử dụng ClassList #2
    
    // Cho trước file HTML có các thẻ div, các bạn hãy thêm class box vào các thẻ div này nhé.

    // Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div, nhưng trước hết các bạn phải lấy được danh sách các phần tử div ra nhé.
    
    // Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, không được sử dụng thuộc tính className nhé.
    
    // //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    //     <div>Box</div>
    // </body>
    // </html>


    // //main.js
    // var divElement = document.querySelectorAll('div');
    // divElement.forEach((callback)=>{
    //     callback.classList.add('box')
    // })


        //157. DOM events
    //more events: https://www.w3schools.com/jsref/dom_obj_event.asp

    //1. Attribute events
    //2. Assign event using the Element node

    // //lay ra 1 doi tuong
    // var h2Ex11Element = document.querySelector('.ex11');

    // // console.log(h2Ex11Element);

    // h2Ex11Element.onclick = function(){
    //     // console.log(this);
    //     console.log(Math.random());
    // }

    //lay ra nhieu doi tuong
    // var h2Ex11Element = document.querySelector('.ex11');
    var h2Ex11Element = document.querySelectorAll('.ex11');

    // console.log(h2Ex11Element);

    // h2Ex11Element.onclick = function(e){
    //     // console.log(this);
    //     // var h2Ex11Element = document.querySelector('.ex11'); / khi su dung `querySelector`
    //     // console.log(e); //return PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …} 
    //     // console.log(e.target); //return <span>Example 11: DOM events => [01] / Assign event using the Element node</span>

    // }


    for (var i = 0; i < h2Ex11Element.length; i++) {
        // console.log(h2Ex11Element[i]);     
        h2Ex11Element[i].onclick =  function(e){
            console.log(e.target);
            // console.log(h2Ex11Element[i]); return underfined hiện tại i = 3 / mà trong h2Ex11Element chỉ đến 2
            // console.log(i);
        }   
    }


    //158. Ôn tập DOM Events
    //Khi click vào button sẽ in ra cửa sổ console chuỗi "clicked!"


    //159. Thực hành sử dụng DOM Events
    //Cho trước thẻ button, các bạn hãy viết code JS sao cho khi click vào button sẽ đổi màu chữ button sang màu #fff.


    //index.html
    // <!DOCTYPE html>
    // <html>
    // <head>
    //     <title>Document</title>
    // </head>
    // <body>
    //     <button>Submit</button>
    // </body>
    // </html>


    //style.css
    // button {
    //     background-color: #f05123;
    //     padding: 9px 16px;
    //     border-radius: 999px;
    //     border: none;
    // }



    //main.js
    // var btnElement = document.querySelector('button');

    // btnElement.onclick = function() {
    //     btnElement.style.color = '#fff';
    // }




        //160. DOM events example

    //1. Input / select
    //2. Key up / down




   //Input / select
   //text
   // var inputElement = document.querySelector('input[type="text"]');

    // console.log(inputElement); //return <input type="text"> 

    // //onchange: lấy ra value khi dl thay đổi & click ra khỏi thẻ input
    // inputElement.onchange = function(e){
    //     // console.log(e); //return Event {isTrusted: true, type: 'change', target: input, currentTarget: input, eventPhase: 2, …}

    //     //lấy ra value
    //     console.log(e.target.value);
    // }

    // //oninput: lấy ra value khi nhập vào input & khi dl thay đổi
    // inputElement.oninput = function(e){
    //     // console.log(e); //return Event {isTrusted: true, type: 'change', target: input, currentTarget: input, eventPhase: 2, …}

    //     //lấy ra value
    //     console.log(e.target.value);
    // }


    // //ex lưu vào value
    // var inputValue;
    // //oninput: lấy ra value khi nhập vào input & khi dl thay đổi
    // inputElement.oninput = function(e){
    //     //save value
    //     inputValue = e.target.value

    //     //nhập inputValue trong console để kt
    // }


    // //checkbox
    // var inputElement = document.querySelector('input[type="checkbox"]');
    // // console.log(inputElement); //return <input type="checkbox">


    // inputElement.onchange = function(e){
    //     console.log(e.target.checked); //return true / false
    // }

    // //select
    // var inputElement = document.querySelector('select');
    // // console.log(inputElement); //return  <select>...</select>

    // inputElement.onchange = function(e){
    //     console.log(e.target.value); //return value
    // }


    // Key up / down
    var inputElement = document.querySelector('input[type="text"]');
    // console.log(inputElement);

    // //onkeydown
    // inputElement.onkeydown = function(e){
    //     console.log(e);
    //     console.log('Its key: ' + e.key);
    //     console.log('Its key code: ' + e.keyCode);
    //     console.log('Its which: ' + e.which);
    //     console.log('Its target -> value: ' + e.target.value); //onkeydown khi nhấn xuống mới thêm value -> khi nhấn xuống lần thứ 2 mới lấy ra dl lần thứ 1 / onkeyup -> lấy ra dl khi nhấn lần 1
    // }

    // //onkeyup
    // inputElement.onkeyup = function(e){
    //     console.log(e);
    //     console.log('Its key: ' + e.key);
    //     console.log('Its key code: ' + e.keyCode);
    //     console.log('Its which: ' + e.which);
    //     console.log('Its target -> value: ' + e.target.value); //onkeyup -> lấy ra dl khi nhấn lần 1 / giữ phím k in dl
    // }

    // //onkeyup ex: lấy ra phím khi users nhấn từ bàn phím
    // inputElement.onkeyup = function(e){
    //     console.log('Its which: ' + e.which);

    //     switch(e.which){
    //         case 8:
    //             console.clear();
    //             console.log('===> Cleared <3 <===');
    //             break; 
    //         case 27:
    //             console.log('===> Exit! <===');
    //             break; 
    //     }
    // }

    // //ex: lấy ra phím khi users nhấn từ bàn phím từ document (áp dụng cho cả trang web) / onkeydown
    // document.onkeydown = function(e){
    //     switch(e.which){
    //         case 8:
    //             console.clear();
    //             console.log('===> Cleared <3 <===');
    //             break; 
    //         case 13:
    //             console.log('===> Clicked Enter ^^ <===');
    //             break; 
    //         case 27:
    //             console.log('===> Exit! <===');
    //             break; 
    //     }
    // }

    // //ex: lấy ra phím khi users nhấn từ bàn phím từ document (áp dụng cho cả trang web) / onkeypress / một số phím k nhận khi sử dụng onkeypress / console.log để xem phím nào k in ra 'e.which'
    // document.onkeypress = function(e){
    //     // console.log(e.which);
    //     switch(e.which){
    //         case 8:
    //             console.clear();
    //             console.log('===> Cleared <3 <===');
    //             break; 
    //         case 13:
    //             console.log('===> Clicked Enter ^^ <===');
    //             break; 
    //         case 27:
    //             console.log('===> Exit! <===');
    //             break; 
    //     }
    // }








    
    //161. PreventDefault and StopPropagation

    //1. preventDefault
    //2. stopPropagation


    //preventDefault - EX1
    
    //anchors
    //lấy ra thẻ a sử dụng anchors / anchors: phải đặt tên cho thẻ a mới có thể lấy đc
    // var aElement =  document.anchors;
    // console.log(aElement); //return HTMLCollection(4) [a, a, a, a, youtube: a, google: a, translate: a]


    //links
    //lấy ra thẻ a sử dụng links / links: k phải đặt tên cho thẻ a
    var aElement =  document.links;
    var myLink = 'https://translate.google.com/';
    // console.log(aElement); //return HTMLCollection(4) [a, a, a, a, youtube: a, google: a, translate: a]

    for (var i = 0; i < aElement.length; i++) {
        aElement[i].onclick = function(e){
            console.log(e.target.href);

            //bật Presrve log trong console để xem lại log cũ

            //nếu bắt đầu với 'myLink' thì mới cho chuyển trang
            if(!e.target.href.startsWith(myLink)){
                e.preventDefault(); //ngăn chặn hành vi mặc định
            }
        }
    }

    //preventDefault - EX2
    //case1
    document.querySelector('.ex13ul').onclick = function(e){
        console.log(e.target);
    }

    //case2
    var ulElement = document.querySelector('.ex13ul');

    //ngăn chặn default từ khi nhấn chuột xuống
    ulElement.onmousedown = function(e){
        e.preventDefault(); //ngăn chặn hành vi mặc định
    }

    ulElement.onclick = function(e){
        console.log(e.target);
    }


    //stopPropagation
    document.querySelector('.ex13p2div').onclick = function(e){
       console.log('You clicked to DIV <3'); 
    }

    document.querySelector('.ex13p2button').onclick = function(e){
        e.stopPropagation(); //dừng hiệu ứng nổi bọt
        console.log('Welcome, Door opened.');
    }



    
    //162. Event listener
    //Khi nào nên sử dụng 'Event listener' ?
    // 1. Xử lý nhiều việc khi 1 event xảy ra
    // 2. Lắng nghe / Hủy bỏ lắng nghe

    var btnElement = document.querySelector('.ex14btn');
    // console.log(btnElement);


    //case1: Sử dụng DOM Event
    // btnElement.onclick = (e) =>{
    //     //cv1
    //     console.log('Play with JETT');

    //     //cv2
    //     console.log('Play with SOVA');

    //     //cv3
    //     console.log('Play with OMEN');
    // }

    //ex - sau 3s click vào btn event mới chạy
    // setTimeout(() => {
    //     //sau 3s code moi chay
    //     btnElement.onclick = (e) =>{
    //         //cv1
    //         console.log('Play with JETT');
    
    //         //cv2
    //         console.log('Play with SOVA');
    
    //         //cv3
    //         console.log('Play with OMEN');
    //     }
    // }, 3000);

    //ex - sau 3s click vào btn event hủy bỏ / gán = function rỗng
    // btnElement.onclick = (e) =>{
    //     //cv1
    //     console.log('Play with JETT');

    //     //cv2
    //     console.log('Play with SOVA');

    //     //cv3
    //     console.log('Play with OMEN');
    // }

    // setTimeout(() => {
    //     //gán = function rỗng / ghi đè
    //     btnElement.onclick = () =>{
    //         //nothing!
    //     }
    // }, 3000);


    //case2: Sử dụng Event Listener
    //add

    // btnElement.addEventListener('click', function(e){ //addEventListener('eventName: / khác DOM event là loại bỏ `on`', 'function call back')
    //     console.log(Math.random());
    // })

    // //có thể lắng nge nhiều lần / event chạy cùng 1 lúc
    // btnElement.addEventListener('click', function(e){ //addEventListener('eventName: / khác DOM event là loại bỏ `on`', 'function call back')
    //     console.log('JETT: ' + Math.random());
    // }) 
    // btnElement.addEventListener('click', function(e){ //addEventListener('eventName: / khác DOM event là loại bỏ `on`', 'function call back')
    //     console.log('NEON: ' + Math.random());
    // }) 

    //multi work 
    function work1(){
        console.log('NEON & UID: ' + Math.random());
    }

    function work2(){
        console.log('JETT & UID: ' + Math.random());
    }

    btnElement.addEventListener('click', work1);
    btnElement.addEventListener('click', work2);

    //sau 3s xóa 1 event (JETT / work2)

    //remove
    setTimeout(() => {
        btnElement.removeEventListener('click', work2);
    }, 3000);

    */