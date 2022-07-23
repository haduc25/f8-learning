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

    // Tạo ra hằng số
    const PLAYER_STORAGE_KEY = 'HADUC25_PLAYER';
    
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

        // 11. Save config / use config
        // Tạo ra config -> lấy dl từ local storage
        // Lấy dl từ 'localStorage' dùng hàm 'getItem' / mặc định nếu chưa có thì lấy ra 1 obj
        // dùng JSON.parse đọc từ storage ra js
        config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {}, //lần đầu tiên vào chưa có dl => lấy ra obj

        // tạo hàm set Config
        setConfig: function(key, value){
            // set key = value
            this.config[key] = value;

            // lưu vao local Storage / dùng set Item
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config)) //setItem(key, value) / => lưu value thì mã hóa / lấy ra thì giải mã
        },

        // Khi load app -> load cofig từ local storage
        loadConfig: function(){
            // lấy data từ local storage gán vào value
            this.isRandom = this.config.isRandom;
            this.isRepeat = this.config.isRepeat;
        },

        //Check trên dev-tool: app.settings
        
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
                // Thêm Attribute: data-index
                return `
                    <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
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
            playlist.innerHTML = htmls.join('');
        },

        // 2. Scroll top
        // handle Event / Cử lý các Event
        handleEvents: function(){
            // lưu this hiện tại = app
            const _this = this;
            const cdWidth = cd.offsetWidth;

            // 4. CD rotate
            //* XỬ LÝ CD QUAY / DỪNG
            const cdThumbAnimate = cdThumb.animate([
                { transform: 'rotate(360deg)' }
            ], {
                duration: 10000, //10 seconds
                iterations: Infinity
                // iterations: lặp bao nhiêu lần?
                // Infinity: Vô hạn
            });

            // Khi mới bắt đầu => pause
            cdThumbAnimate.pause();
            //* XỬ LÝ PHÓNG TO / THU NHỎ CD
            // lắng nghe sự kiện kéo trên document
            document.onscroll = function(){
                // logic: k có 'window.scrollY' => lấy 'document.documentElement.scrollTop'
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                //Hành động thu nhỏ
                //Kéo lên bao nhiêu => thu nhỏ bấy nhiêu
                const newCdWidth = cdWidth - scrollTop;

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
                // gọi đến hàm scroll to active song
                _this.scrollToActiveSong();


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
                // gọi đến hàm scroll to active song
                _this.scrollToActiveSong();

            } 

            // Xử lý bật / tắt random song
            randomBtn.onclick = function(e){
                // console.log(this);
                // this hiện tại là randomBtn => dùng this
                // this.classList.add('active');

                //Đảo ngược lại / đang false -> true / true -> false
                _this.isRandom = !_this.isRandom;

                // Lưu vào khi nhấn vào random => lưu random current vào local storage
                _this.setConfig('isRandom', _this.isRandom);

                // dùng toggle: nếu false -> xóa class / true -> thêm class
                this.classList.toggle('active', _this.isRandom);
            }

            // 7. Next / Repeat when ended (kết thúc nhạc)

            // Xử lý lặp lại 1 song (repeat)
            repeatBtn.onclick = function(e){
                _this.isRepeat = !_this.isRepeat;   

                // Lưu vào khi nhấn vào repeat => lưu random current vào local storage
                _this.setConfig('isRepeat', _this.isRepeat);

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


            // Lắng nghe hành vi click vào playlist
            playlist.onclick = function(e) {
                // Tạo ra songNode / song Element
                const songNode = e.target.closest('.song:not(.active)');
                // closest()
                // The closest() method in JavaScript is used to retrieve the closest ancestor, 
                // or parent of the element matches the selectors. If there is no ancestor found, the method returns null.
            
                // Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
                // Element.closest()
                // https://www.w3schools.com/jsref/met_element_closest.asp


                // Logic: closest() return: 1. chính nó, 2. thẻ cha của nó / nếu k tìm thấy element => return null
                // kiểm tra có phải '.song' hay k? / k tìm đc con -> tìm ra cha
                // bắt sự kiện mà k có class '.active'
                // dùng css Selector
                // e.target.closest('.song') -> e.target.closest('.song:not(.active)') //trừ element đang active ra -> ấn k nhận
                // vì đang active thì ấn k chuyển bài

                if(songNode || e.target.closest('.option')){


                    // Logic của if(nếu k là 'song đang active' hoặc là nút option) => true
                    console.log(e.target);

                    // Xử lý khi click vào song
                    if(songNode){
                        // Nếu click vào song -> get ra index
                        // Gán currentIndex = data-index / gán nhạc hiện tại -> bài nhạc khi mà user click
                        _this.currentIndex = Number(songNode.dataset.index); //Convert String -> Number
                        // Load lại current song
                        _this.loadCurrentSong();
                        // Render lại
                        _this.render();
                        // play music
                        audio.play();
                    }

                    // Xử lý khi click vào song option
                    if(e.target.closest('.option')){

                    }



                }


            }

            //Custom - Làm thêm phím tắt
            
            // Space - phát / dừng nhạc
            document.onkeydown = function(e){
                console.log(e.keyCode); 
                switch(e.keyCode){
                    //keyCode của phím Space = 32
                    case 32:
                        // nếu ấn space - gọi luôn click cho nhanh :>
                        playBtn.click();
                        break;

                        
                    //keyCode của phím arrow left = 37
                    case 37:
                        // gọi prev()
                        prevBtn.click();
                        break;

                    //keyCode của phím arrow right = 39
                    case 39:
                        // gọi next()
                        nextBtn.click();
                        break;
                }
            }
        },

        // Case2: Tạo ra getter cho obj cho tiệ~n hơn
        defindProperties: function(){
            // Định nghĩa ra 1 getter
            Object.defineProperty(this, 'currentSong', {
                get: function(){
                    return this.songs[this.currentIndex];
                }
            });
            // Tham khao: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
        },


        // 9. Scroll active song into view
        scrollToActiveSong: function(){
            setTimeout(() => {
                // Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

                // Element.scrollIntoView()
                // The Element interface's scrollIntoView() method scrolls the element's parent container such 
                //  that the element on which scrollIntoView() is called is visible to the user.
                
                //lấy ra song duoc active / actived
                const songActived = $('.song.active'); //return <div class="song active">…</div>flex

                // console.log(songActived);

                // songActived.scrollIntoView();

                // sử dụng scrollIntoView(scrollIntoViewOptions)

                //// Parameters
                ///scrollIntoViewOptions Optional Experimental
                // An Object with the following properties:

                // behavior Optional
                // Defines the transition animation. One of auto or smooth. Defaults to auto.

                // block Optional / căn dọc
                // Defines vertical alignment. One of start, center, end, or nearest. Defaults to start.

                // inline Optional / căn ngang
                // Defines horizontal alignment. One of start, center, end, or nearest. Defaults to nearest.
         
                
                songActived.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center', //căn chiều dọc / center => hợp lý vl :>
                    // block: 'nearest', //theo f8 thì dùng 'nearest' // => Chê / vừa lỗi (đến cuối nhảy lên đầu bị che 
                    // / fix: check currentIndexSong nếu qua về đầu đổi block từ 'nearest' -> 'center'), vừa xấu
                    // Gợi ý fix chi tiết (nếu cần): https://youtu.be/vAecGPWxzFE       / time: (1h25m19s)
                });
            }, 300);
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
            // Load config
            // Gán cấu hình từ config vào ứng dụng
            this.loadConfig();

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

            // Hiển thị trạng thái ban đầu của button random & repeat
            randomBtn.classList.toggle('active', this.isRandom);  
            repeatBtn.classList.toggle('active', this.isRepeat);  
        }
    }

    app.start();