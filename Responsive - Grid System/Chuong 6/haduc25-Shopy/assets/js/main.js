const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const modalDOM = document.querySelector('.modal');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
//
const getInputREG = registerForm.getElementsByTagName('input');
const getInputLOG = loginForm.getElementsByTagName('input');

// Open Form
registerBtn.onclick = () => {
    modalDOM.style.display = 'flex';
    registerForm.style.display = 'block';
};

loginBtn.onclick = () => {
    modalDOM.style.display = 'flex';
    loginForm.style.display = 'block';
};

// Switch Form
const loginSwitchForm = document.getElementById('login-switch-form');
const registerSwitchForm = document.getElementById('register-switch-form');

loginSwitchForm.onclick = () => {
    // Nếu có nút lày + form res đang bật + form login đang tắt
    if (
        loginSwitchForm &&
        registerForm.style.display === 'block' &&
        loginForm.style.display === 'none'
    ) {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
};

registerSwitchForm.onclick = () => {
    // Nếu có nút lày + form login đang bật + form res đang tắt
    if (
        registerSwitchForm &&
        loginForm.style.display === 'block' &&
        registerForm.style.display === 'none'
    ) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
};

// Back
const backBtn = document.querySelectorAll('.btn-back');
const hideForm = () => {
    modalDOM.style.display = 'none';
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    getInputREG[0].value = '';
    getInputREG[1].value = '';
    getInputREG[2].value = '';
    getInputLOG[0].value = '';
    getInputLOG[1].value = '';
};

backBtn.forEach((back) => {
    back.onclick = () => {
        hideForm();
    };
});

// Ấn ra khoảng không => off | handle sk nổi bọt
// Tham khảo https://www.youtube.com/watch?v=dQpW4-NzUJc | 26:00
const modalBodyDOM = document.querySelector('.modal__body');

modalDOM.onclick = () => {
    hideForm();
};

modalBodyDOM.onclick = (e) => {
    // Ngừng nổi bọt để ấn vào trong k bị tắt đi
    e.stopPropagation();
};

// Fake submit
const userLoginAlready = document.getElementById('user-already');
const registerBtnSubmit = document.getElementById('register-btn');
const loginBtnSubmit = document.getElementById('login-btn');
const logOutBtn = document.getElementById('logout');

registerBtnSubmit.onclick = (e) => {
    // Convert HTMLCollection to an Array
    let arr = Array.from(getInputREG);

    let obj = {
        name: arr[0].value,
        password: arr[1].value,
        repassword: arr[2].value,
    };

    console.log(obj);
    alert(
        `Bạn đã đăng ký thành công !\n - username: ${obj.name} \n - password: ${obj.password} \n *Mở devtools để biết thêm chi tiết :)`,
    );

    hideForm();
};

loginBtnSubmit.onclick = (e) => {
    let arr = Array.from(getInputLOG);

    let obj = {
        name: arr[0].value,
        password: arr[1].value,
    };

    console.log(obj);
    alert(
        `Bạn đã đăng nhập thành công !\n - username: ${obj.name} \n - password: ${obj.password} \n *Mở devtools để biết thêm chi tiết :)`,
    );

    hideForm();
    // remove user not already
    userLoginAlready.classList.remove('navbar__list-item--user-not-already');

    // turn on user already mode :) / => hide login and register
    registerBtn.style.display = 'none';
    loginBtn.style.display = 'none';
};

logOutBtn.onclick = () => {
    // add user not already
    userLoginAlready.classList.add('navbar__list-item--user-not-already');

    // turn off user already mode :) / => hide login and register
    registerBtn.style.display = 'block';
    loginBtn.style.display = 'block';
};

// Handle Search
const searchHistoryDOM = document.querySelector('.header__search-history');
const searchInputDOM = document.querySelector('.header__search-input');
const searchListDOM = document.querySelector('.header__search-history-list');
// const searchLiDOM = searchListDOM.querySelectorAll('li');

// searchHistoryDOM.onmouseover = (e) => {
//     searchHistoryDOM.style.display = 'block';
// };

// searchHistoryDOM.onmouseleave = (e) => {
//     searchHistoryDOM.style.display = 'none';
// };

// searchInputDOM.onclick = () => {
//     searchHistoryDOM.style.display = 'block';
// };

// searchInputDOM.onfocus = (e) => {
//     searchHistoryDOM.style.display = 'block';
// };

// searchLiDOM.forEach((liDOM) => {
//     liDOM.onclick = (e) => {
//         if (e.target.tagName === 'LI') {
//             e.target.childNodes[0].click();
//         }
//     };
// });

// Action like, heart or something...
const spanHomeProductItemLike = document.querySelectorAll('.home-product-item__like');

spanHomeProductItemLike.forEach((itemLiked) => {
    itemLiked.onclick = (e) => {
        itemLiked.classList.toggle('home-product-item__like--liked');
    };
});
