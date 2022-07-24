    // Link tham khảo: https://codepen.io/ng-ngc-sn-the-bashful/pen/Exgmxqp
    // Keyword: font awesome cdn / font-awesome - Libraries - cdnjs
    // https://cdnjs.com/libraries/font-awesome 



    // Toast function
    function toast({ title = '', message = '', type = 'info', duration = 3000}){
        // Lấy ra id = toast
        const main = document.getElementById('toast');
        console.log(main); //return div#toast
        if(main){
            // Tạo element 'div'
            const toast = document.createElement('div');
            
            // sau 1 khoảng thời gian / Auto Remove
            // Tự động xóa sau n giây
            // tạo biến lưu 'setTimeout' / return number
            const autoRemoveId = setTimeout(() => {
                // remove 
                main.removeChild(toast); //logic: xóa 'toast' trong 'main'
            }, duration + 1000); //duration: thời gian delay / thời gian fadeOut(fadeOut linear 1s): mất 1s => + 2 cái vào

            // Xóa thủ công khi click vào nút 'x'
            toast.onclick = (e) => {
                // console.log(e.target);

                // console.log(autoRemoveId); //return number

                // nếu clicked vào nút 'x' -> remove
                if(e.target.closest('.toast__close')){
                    // remove
                    main.removeChild(toast); //logic: xóa 'toast' trong 'main'
                    clearTimeout(autoRemoveId); // xóa timeOut

                    // clearTimeout()
                    // The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
                    // If the parameter provided does not identify a previously established action, this method does nothing.
                    // https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
                    // https://hocjavascript.net/tong-quan/cleartimeout-trong-javascript/

                }
            } 


            // Xử lý icons
            const icons = {
                // *Các loại icon
                // Check
                success: 'fas fa-check-circle',
                // Info
                info: 'fas fa-info-circle',
                // Exclamation
                warning: 'fas fa-exclamation-circle',
                // Exclamation
                error: 'fas fa-exclamation-circle',
            }
            const icon = icons[type];
            // đổi miliseconds -> seconds / dùng toFixed() lấy ra số thập phân sau dấu .
            const delay = (duration / 1000).toFixed(2);
            console.log(delay);

            // thêm class 'toast' & 'type' / `toast--${type}` 
            toast.classList.add('toast', `toast--${type}`);

            // thêm css animation
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

            // thêm nội dung bên trong
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
            `;

            // đưa 'toast' vào 'main'
            // sử dụng appendChild()
            main.appendChild(toast); //logic: thêm 'toast' vào trong 'main'
        }
    }




    function showSuccessToast(){
        // call function
        toast({
            title: 'Thành công!',
            message: 'Chúc mừng bạn đã đăng nhập thành công.',
            type: 'info',
            duration: 10000
        });
    }

    function showErrorToast(){
        // call function
        toast({
            title: 'Thất bại!',
            message: 'Đăng nhập thất bại, chúc bạn may mắn lần sau.',
            type: 'error',
            duration: 5000
        });
    }



    // Youtube: 24/07/2022
    // https://youtu.be/O2PpHVKGsIg