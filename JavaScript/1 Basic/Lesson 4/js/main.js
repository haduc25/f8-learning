/** Chuong 16.Các bài thực hành
    195 - Xây dựng Tabs UI

    // Link code mẫu

    // - Link ảnh thiết kế: https://dribbble.com/shots/14483921
    // - Link code mẫu: https://codepen.io/ng-ngc-sn-the-bashful/pen/BaLXJbz

    // Javascript Bind Method
    // Tham khảo: https://viblo.asia/p/bind-apply-and-call-trong-javascript-DzVGpoMDvnW 


    // Bind là một function nằm trong function prototype do đó chỉ có function mới có thể gọi dc nó. 
    // Chúng ta gọi Bind method dùng để xác định tham số “this” cho một function.
    // bind() cho phép chúng ta dễ dàng thiết lập một đối tượng cụ thể sẽ bị ràng buộc này khi một chức năng hoặc phương pháp được gọi.

    // * Các tác dụng của bind
    // - Cho phép chúng ta set giá trị của biến "this"
    // - Cho phép tạo một Curry Function



    // Main.js
    // Tạo ra 2 biến

    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // bind: tạm hiểu
    // bind này là kiểu gán trực tiếp vào document 

    // thay vì sử dụng 'document.querySelector.bind(document);' thì chỉ cần gọi đến '$'
    // thay vì sử dụng 'document.querySelectorAll.bind(document);' thì chỉ cần gọi đến '$$'

    // Lấy ra 'tab-item'
    // lưu vào biến 'tabs'

    const tabs = $$('.tab-item');
    // $: lấy ra 1 element = querySelector();
    // $$: lấy ra nhiều = querySelectorAll();

    // Tương tụ lấy 'tab-pane'
    const panes = $$('.tab-pane');

    // check
    console.log(tabs, panes);
    // return
    // NodeList(4) [div.tab-item.active, div.tab-item, div.tab-item, div.tab-item]
    // NodeList(4) [div.tab-pane.active, div.tab-pane, div.tab-pane, div.tab-pane]


    // lấy ra tab đã được active
    const tabActive = $('.tab-item.active');
    // console.log(tabActive);

    // cho 'tabActive' vào array để tìm 'offsetLeft' & 'offsetWidth'
    // để gán cho 'line' = tab
    console.log([tabActive]);
    // offsetLeft: 0
    // offsetWidth: 135

    // lấy ra line
    const line = $('.tabs .line');
    // console.log(line);
    console.log([line]);

    // gán css cho 'line' = tabActive: left, width
    line.style.left = tabActive.offsetLeft + 'px'; 
    line.style.width = tabActive.offsetWidth + 'px'; 






    // => trong querySelector('trong này nè')
    // nếu trong Element có 2 class => thì k được viết cách
    // nếu trong Element có 1 class và trong class đó có 1 class con => thì có thể viết cách
    // ex -  thì có thể viết cách nếu muốn select đến class2
    // <div class="class1">
    //     <div class="class2">
    //     </div>
    // </div>

    

    // Lặp qua => lấy dl / vì tab & pane đều có 5 element => có thể dùng chung index
    tabs.forEach((tab, index) => {
        // tạo ra biến 'pane' -> chuyền vào index
        const pane = panes[index]

        // lắng nghe sự kiện 'onclick'
        tab.onclick = function(){
        
            // console.log(pane); //return lấy ra đc element & các thẻ div ở trên => lấy ra đc các pane
            // console.log(this); //return lấy ra đc element & các thẻ div ở trên => lấy ra đc các tab

            // idea: khi click vào 'Angular' -> class 'active' từ 'React' bị xóa và chuyển qua 'Angular'

            
            // Kiểm tra xem có Element nào đang 'active' -> remove
            // dùng $ -> select 1 elemet
            $('.tab-item.active').classList.remove('active');
            // Tương tự với 'pane'
            $('.tab-pane.active').classList.remove('active');

            // khi click set lại css cho line
            line.style.left = this.offsetLeft + 'px'; 
            line.style.width = this.offsetWidth + 'px'; 

            // Thêm class 'active'
            this.classList.add('active'); //=> done
            // Tương tự với 'pane'
            pane.classList.add('active'); //=> done


            // Xử lý với 'line'

        }
    });


    // Youtube: 19/07/2022
    // https://youtu.be/j5O70IKkRhY
*/

    // 196. Code Music Player

    // Jobs 
    // 1. Render songs
    // 2. Scroll top
    // 3. Play / pause / seek (tua)
    // 4. CD rotate
    // 5. Next / prev
    // 6. Random
    // 7. Next / Repeat when ended (kết thúc nhạc)
    // 8. Active song
    // 9. Scroll active song into view
    // 10. Play song when click to playlist
    // 11. Save config / use config


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // array / data song
    const songs = [
        {
            name: "Click Pow Get Down",
            singer: "Raftaar x Fortnite",
            path: "../../../",
            image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
    ]



























    // Youtube: 20/07/2022
    // https://youtu.be/1wqD902BcCI

