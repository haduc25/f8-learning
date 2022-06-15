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

    */















