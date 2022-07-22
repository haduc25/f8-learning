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

    // Youtube: 20/07/2022
    // https://youtu.be/1wqD902BcCI

    // Youtube: 21/07/2022
    // https://youtu.be/P5VIx6j9KTQ
    // https://youtu.be/5_5XYYPIIAs
    // https://youtu.be/tY-Sw0jnAS8
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


    // Phần 4. CD rotate cần xem qua về 'animation api'
    // Tham khảo
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

    // Code Example: 
    // https://codepen.io/rachelnabors/pen/QyOqqW
    // https://codepen.io/rachelnabors/pen/PNGGaV (Game)


    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    //lấy ra playlist
    const playlist = $('.playlist'); //return div.playlist
    // console.log(playlist);
    
    // lấy ra cd
    const cd = $('.cd')
    // console.log([cd]);

    //lấy ra header
    const heading= $('header h2'); //return <h2>String 57th & 9th</h2>
    //lấy ra thumbnail
    const cdThumb = $('.cd-thumb'); //return <div class="cd-thumb" style="background-image: url('../../../../../img/Singer/Angel-XxxtentacionShiloh.jpg');"> </div>
    //lấy ra audio
    const audio = $('#audio'); //return <audio id="audio" src(unknown)></audio>

    // console.log(heading, cdThumb, audio);

    //lấy ra button play / btn-toggle-play
    const playBtn = $('.btn-toggle-play'); //return <div class="btn btn-toggle-play">…</div>

    // console.log(playBtn); 

    // IDEA: Khu play -> thêm class 'playing'

    //lấy ra player
    const player = $('.player');  //return <div class="player">…</div>

    // console.log(player);

    //lấy ra progress
    const progress = $('#progress'); //return <input id="progress" class="progress" type="range" value="0" step="1" min="0" max="100">

    // console.log(progress);

    //lấy ra button next & prev
    const prevBtn = $('.btn-prev'); //return <div class="btn btn-prev">…</div>
    const nextBtn = $('.btn-next'); //return <div class="btn btn-next">…</div>

    // console.log(prevBtn, nextBtn);

    //lấy ra button random
    const randomBtn = $('.btn-random'); //return <div class="btn btn-random">…</div>

    // console.log(randomBtn);

    
    //lấy ra button repeat
    const repeatBtn = $('.btn-repeat'); //return <div class="btn btn-repeat">…</div>

    // console.log(repeatBtn);




    //tạo biến app = obj  / lưu properties
    const app = {
        // tạo ra 'currentIndex': 0 / để lấy ra pt đàu tiên của mảng (songs)
        // từ 'currentIndex' lấy ra bài hát đầu tiên của mảng
        currentIndex: 0,

        // Tạo ra property
        isPlaying: false,
        isRandom: false,
        isRepeat: false,

        // array / data song / chuyển vào obj
        songs: [
            {
                name: "Angel",
                singer: "Xxxtentacion x Shiloh",
                path: "../../../../../Music/Angel-XxxtentacionShiloh-5290195.mp3",
                image: "../../../../../img/Singer/Angel-XxxtentacionShiloh.jpg"
            },
            {
                name: "Anxiety",
                singer: "Julia Michaels x Selena Gomez",
                path: "../../../../../Music/Anxiety - Julia Michaels_ Selena Gomez.mp3",
                image: "../../../../../img/Singer/Anxiety - Julia Michaels_ Selena Gomez.jpg"
            },
            {
                name: "Can We Kiss Forever",
                singer: "Kina x AdrianaProenza",
                path: "../../../../../Music/CanWeKissForever-KinaAdrianaProenza-5732141.mp3",
                image: "../../../../../img/Singer/CanWeKissForever-KinaAdrianaProenza.jpg"
            },
            {
                name: "Chung Ta Cua Hien Tai",
                singer: "Son Tung M-TP",
                path: "../../../../../Music/Chung Ta Cua Hien Tai - Son Tung M-TP.mp3",
                image: "../../../../../img/Singer/Chung Ta Cua Hien Tai - Son Tung M-TP.jpg"
            },
            {
                name: "Dancing With Your Ghost",
                singer: "Sasha Sloan",
                path: "../../../../../Music/Dancing With Your Ghost - Sasha Sloan.mp3",
                image: "../../../../../img/Singer/Dancing With Your Ghost - Sasha Sloan.jpg"
            },
            {
                name: "Don't Leave Me Alone",
                singer: "David Guetta x Anne-Marie",
                path: "../../../../../Music/Don_t Leave Me Alone - David Guetta_ Ann.mp3",
                image: "../../../../../img/Singer/Don_t Leave Me Alone - David Guetta_ Ann.jpg"
            },
            {
                name: "Deep End",
                singer: "Fousheé",
                path: "../../../../../Music/Fousheé  Deep End Lyrics.mp3",
                image: "../../../../../img/Singer/Fousheé  Deep End.jpg"
            },
            {
                name: "I.F.L.Y",
                singer: "Bazzi",
                path: "../../../../../Music/I_F_L_Y_ - Bazzi.mp3",
                image: "../../../../../img/Singer/I_F_L_Y_ - Bazzi.jpg"
            },
            {
                name: "Little Do You Know",
                singer: "Alex Sierra",
                path: "../../../../../Music/Little Do You Know - Alex_ Sierra.mp3",
                image: "../../../../../img/Singer/Little Do You Know - Alex_ Sierra.jpg"
            },
            {
                name: "Lose You to Love Me",
                singer: "Selena Gomez",
                path: "../../../../../Music/LoseYouToLoveMe-SelenaGomez-6129774.mp3",
                image: "../../../../../img/Singer/Selena_Gomez_-_Lose_You_to_Love_Me.png"
            },
            {
                name: "Co Chac Yeu La Day",
                singer: "Son Tung M-TP",
                path: "../../../../../Music/Co Chac Yeu La Day.m4a",
                image: "../../../../../img/Singer/Sơn_Tùng_M-TP_-_Có_chắc_yêu_là_đây.jpg"
            },
            {
                name: "Under Cover",
                singer: "Mellixceil",
                path: "../../../../../Music/UnderCover-Mellixceil-6066674.mp3",
                image: "../../../../../img/Singer/UnderCover-Mellixceil.jpg"
            },
        ],
        
        // 1. Render songs
        // render
        render: function(){
            // lấy dl từ array songs (bên trên)
            // sử dụng map
            // lưu vào biến htmls

            // innerHtml vào class 'playList'
            const htmls = this.songs.map((song, index) => {
                // 8. Active song
                // Logic: Nếu index = currentIndex -> add class active / ngược lại = k add
                return `
                    <div class="song ${index === this.currentIndex ? 'active' : ''}">
                        <div class="thumb"
                            style="background-image: url('${song.image}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p>${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                `
            })

            //inner vao playlist
            playlist.innerHTML = htmls.join('');
        },

        // 2. Scroll top
        // handle Event / Cử lý các Event
        handleEvents: function(){
            // lưu this hiện tại = app
            const _this = this;


            // lấy ra offsetWidth
            const cdWidth = cd.offsetWidth;

            // 4. CD rotate
            //* XỬ LÝ CD QUAY / DỪNG
            // sử dụng animate
            const cdThumbAnimate = cdThumb.animate([
                //truyền thuộc tính css
                // trong trường hợp quay truyền vào rotate: 360* (độ)
                { transform: 'rotate(360deg)' }
            ], {
                // đối số thứ 2: + quay như thế nào?
                duration: 10000, //10 seconds
                iterations: Infinity
                // iterations: lặp bao nhiêu lần?
                // Infinity: Vô hạn
            });

            // Khi mới bắt đầu => pause
            cdThumbAnimate.pause();
            // console.log([cdThumbAnimate]); //return [Animation]
            
            //* XỬ LÝ PHÓNG TO / THU NHỎ CD

            // lắng nghe sự kiện kéo trên document
            document.onscroll = function(){
                // scrollY: trục dọc, trong trục tọa độ
                //console.log(window.scrollY);

                //document.documentElement.scrollTop: tương tự như 'window.scrollY' sử dụng khi 'window.scrollY' k hoạt động
                // console.log(document.documentElement.scrollTop); 


                // check lấy 1 trong 2
                // logic: k có 'window.scrollY' => lấy 'document.documentElement.scrollTop'
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                //Hành động thu nhỏ
                //Kéo lên bao nhiêu => thu nhỏ bấy nhiêu
                const newCdWidth = cdWidth - scrollTop;
                // console.log(cdWidth, scrollTop, newCdWidth);
                // console.log(newCdWidth);

                // set vao css của cd
                // cd.style.width = newCdWidth + 'px';

                // vì kéo nhanh gây ra bug 'newCdWidth' về số âm mà css k nhận số âm => check 
                
                // logic: nếu 'newCdWidth' > 0 => lấy newCdWidth + px ngược lại (nhỏ hơn 0) => lấy giá trị 0
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;


                // mờ giần khi kéo / opacity / ía trị từ 0 - 1
                // opacity
                // Kích thước mới của cd 'newCdWidth' / Kích thước cũ của cd 'cdWidth' = tỷ lệ
                const newOpaciy = newCdWidth / cdWidth;

                // set css opacity
                cd.style.opacity  = newOpaciy;

                //// check lại opacity
                console.log(newCdWidth / cdWidth, cdWidth, newOpaciy);
            }

            //* XỬ LÝ KHI CLICK PLAY
            playBtn.onclick = function(){
                // trong function k thể dùng this ngoài được, vì trong này this = playBtn
                // Có thể sử dụng app. thay cho this
                // hoặc tạo ra biến '_this' để lưu giá trị this
                // dùng _this


                //// Code logic / k nên dùng :> / dùng event 'onplay'
                // if(_this.isPlaying){
                //     // nếu đang playing -> pause -> remove class
                //     _this.isPlaying = false;
                //     audio.pause();
                //     player.classList.remove('playing');
                // }else{
                //     // khi play -> isPlaying = true
                //     _this.isPlaying = true;
                //     // play
                //     audio.play();
                //     // thêm class 'playing'
                //     player.classList.add('playing');
                // }

                // Rút gọn logic sau khi chuyển vào event
                if(_this.isPlaying){
                    audio.pause();
                }else{
                    audio.play();
                }
            };


            // Khi song được play
            audio.onplay = function(){
                _this.isPlaying = true;
                player.classList.add('playing');
                cdThumbAnimate.play();
                
            }

            // Khi song bị pause
            audio.onpause = function(){
                _this.isPlaying = false;
                player.classList.remove('playing');
                cdThumbAnimate.pause();
            }

            // Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = function(){
                console.log('Current Time: ' + audio.currentTime + ' Length of Song is: ' + audio.duration);
                // console.log(audio.src);

                // Link: https://www.w3schools.com/tags/ref_av_dom.asp
                // currentTime	    Sets or returns the current playback position in the audio/video (in seconds)
                // duration	        Returns the length of the current audio/video (in seconds)


                // const progressPercent = (audio.currentTime / audio.duration * 100)
                // console.log(progressPercent);

                if(audio.duration){
                    // dùng floor làm tròn dưới
                    // Tính ra phần trăm song
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);

                    console.log(progressPercent);

                    // gán value cho 'progress' / mặc định là 0 / đã set ở html
                    progress.value = progressPercent;

                }
                
            }

            // Xử lý khi tua song (seek)
            progress.onchange = function(e){
                // check percent
                console.log(e.target.value + '%');

                // Tính ra số giây
                // console.log(audio.duration / 100 * e.target.value);

                const seekTime = (audio.duration / 100 * e.target.value);
                // set time when seek
                // console.log(audio.currentTime);
                audio.currentTime = seekTime;

                //currentTime	    Sets or returns the current playback position in the audio/video (in seconds) 

                // Bổ sung
                // Khi change 'audio.play()'
                // audio.play(); 
            }






               
                


            // Khi ấn next song
            nextBtn.onclick = function(){
                if(_this.isRandom){
                    // call function() random
                    _this.playRandomSong();
                }else{
                    // gọi đến next song
                    _this.nextSong();
                }
                // next xong play lại
                audio.play();
                _this.render(); //render lại để load lại cái 'active' trong playlist
            } 

            // Khi ấn prev song
            prevBtn.onclick = function(){
                if(_this.isRandom){
                    // call function() random
                    _this.playRandomSong();
                }else{
                    // gọi đến prev song
                    _this.prevSong();
                }
                // prev xong play lại
                audio.play();
                _this.render(); //render lại để load lại cái 'active' trong playlist
            } 

            // => Vẫn còn lỗi, khi chưa nhấn play => mà nhấn 'next or prev' => nhạc chạy nhưng logo html k đổi / sửa lại sau


            // Xử lý bật / tắt random song
            randomBtn.onclick = function(e){
                // console.log(this);
                // this hiện tại là randomBtn => dùng this
                // this.classList.add('active');

                //Đảo ngược lại / đang false -> true / true -> false
                _this.isRandom = !_this.isRandom;

                // dùng toggle: nếu false -> xóa class / true -> thêm class
                this.classList.toggle('active', _this.isRandom);
            }

            // 7. Next / Repeat when ended (kết thúc nhạc)

            // Xử lý lặp lại 1 song (repeat)
            repeatBtn.onclick = function(e){
                _this.isRepeat = !_this.isRepeat;   
                this.classList.toggle('active', _this.isRepeat);
            }



            // Xử lý next song khi audio ended
            audio.onended = function(){
                // console.log(123);
                if(_this.isRepeat){
                    audio.play();
                }else{
                    // gọi lại nút next
                    nextBtn.click();
                }


            }


             



        },

        // Case2: Tạo ra getter cho obj cho tiện hơn
        defindProperties: function(){
            // Định nghĩa ra 1 getter
            Object.defineProperty(this, 'currentSong', {
                get: function(){
                    return this.songs[this.currentIndex];
                    // defind ra 1 property 'currentSong' => k cần dùng đến 'getCurrentSong()' 
                    // ở object app -> có currenSong
                    // cách check
                    // - Mở Dev tool -> console
                    // app.currentSong

                    // getter đặc tính: k cần mở ngoặc như hàm

                    // return
                    // app.currentSong
                    // {name: 'Angel', singer: 'Xxxtentacion x Shiloh', path: '../../../../../Music/Angel-XxxtentacionShiloh-5290195.mp3', image: '../../../../../img/Singer/Angel-XxxtentacionShiloh.jpg'}
                }
            });

            // Tham khao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
            // Object.defineProperty ()
            // - The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

            // Ex
            // const object1 = {};

            // Object.defineProperty(object1, 'property1', {
            // value: 42,
            // writable: false
            // });

            // object1.property1 = 77;
            // // throws an error in strict mode

            // console.log(object1.property1);
            // // expected output: 42

            
            // output: 42
        },


        // // Case1: Thường dùng 
        // getCurrentSong: function(){
        //     return this.songs[this.currentIndex];
        // },

        loadCurrentSong: function(){
            // heading
            heading.textContent = this.currentSong.name;
            // CD Thumbnail
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
            // Audio
            audio.src = this.currentSong.path;

            console.log(heading, cdThumb, audio); 
            // <h2>Angel</h2>
            // <div class="cd-thumb" style="background-image: url('../../../../../img/Singer/Angel-XxxtentacionShiloh.jpg');"> </div>
            // <audio id="audio" src="../../../../../Music/Angel-XxxtentacionShiloh-5290195.mp3"></audio>
        },

        nextSong: function(){
            //  tăng currentIndex
            this.currentIndex++;
            // console.log(currentIndex, this.songs.length);
            if(this.currentIndex >= this.songs.length){
                this.currentIndex = 0;
            }

            // next xong -> gọi lại 'loadCurrentSong'
            this.loadCurrentSong(); //mục đích là khi ấn next -> tải lại thông tin mới
        },

        prevSong: function(){
            //  giảm currentIndex
            this.currentIndex--;
            console.log(this.currentIndex, this.songs.length);
            if(this.currentIndex < 0){
                this.currentIndex = this.songs.length - 1; //array chay tu 0 => phai tru 1
            }

            // next xong -> gọi lại 'loadCurrentSong'
            this.loadCurrentSong(); //mục đích là khi ấn next -> tải lại thông tin mới
        },

        playRandomSong: function(){
            // Tạo biến 'newIndex' để lưu giá trị random
            let newIndex;
            do{
                newIndex = Math.floor(Math.random() * this.songs.length);
            }while(newIndex === this.currentIndex); //đk: nếu bài mới = bài hiện tại => lặp tiếp

            // console.log(newIndex);

            // set bài hát hiện tại = bài mới sau khi random
            this.currentIndex = newIndex;

            // load lại currentSong
            this.loadCurrentSong();
            
        },


        // start
        start: function(){
            // Định nghĩa các thuộc tính cho Object
            // Case2: Tạo ra getter cho obj cho tiện hơn
            this.defindProperties();

            // Lắng nghe /xử lý các sự kiện (DOM Events)
            this.handleEvents();

            // Case1: Thường dùng 
            // console.log(this.getCurrentSong()); //return {name: 'Angel', singer: 'Xxxtentacion x Shiloh', path: '../../../../../Music/Angel-XxxtentacionShiloh-5290195.mp3', image: '../../../../../img/Singer/Angel-XxxtentacionShiloh.jpg'}

            // Tải thông tin bài đầu tiên vào UI khi chạy ứng dụng
            this.loadCurrentSong()


            // Render playlist
            this.render();
        }
        
        // run start

    }

    app.start();
































    // Youtube: 22/07/2022
    // https://youtu.be/PevOZxoIE1A
    // https://youtu.be/foVceyXAk6Y
    // https://youtu.be/1-frPXYapAg


