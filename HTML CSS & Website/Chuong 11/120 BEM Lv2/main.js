// Toast function
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    // console.log(main);

    if (main) {
        const toast = document.createElement('div');

        // Gỡ Toast message / Auto
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);

        // Gỡ Toast khi click
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-circle-xmark',
            // error: 'fa-solid fa-bug',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

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

        main.appendChild(toast);
    }
}

const showSuccessToast = () => {
    toast({
        title: 'Success - Yay! Everything worked!',
        message: 'Congraqts on the internet loading your request.',
        type: 'success',
        duration: 3000,
    });
};

const showInfoToast = () => {
    toast({
        title: 'Info - Did you know?',
        message: 'Here is something that you might like to know.',
        type: 'info',
        duration: 3000,
    });
};

const showWarningToast = () => {
    toast({
        title: 'Warning',
        message: "Looks like you've exceeded your limit.",
        type: 'warning',
        duration: 3000,
    });
};

const showErrorToast = () => {
    toast({
        title: 'Error - Uh oh, something went wrong',
        message: 'Sorry! There was a problem with your request.',
        type: 'error',
        duration: 1000,
    });
};
