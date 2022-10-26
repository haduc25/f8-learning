import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className, //để custom text
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    // Tạo Component default = button
    let Comp = 'button';

    // Tạo ra props default = onClick
    const props = {
        onClick,

        // lấy ra các props còn lại (ex: target="_blank")
        ...passProps,
    };

    // Loại bỏ events khi 'disabled'
    // Node: Remove eventlistener when button is disabled
    if (disabled) {
        //// case 1: delete onClick
        //delete props.onClick;

        //// case 2: lặp qua obj lấy ra tất cả event truyền vào
        Object.keys(props).forEach((key) => {
            // console.log(key); //return onCLick, onMouseUp

            // Logic (bắt sự kiện bắt đầu = từ on): Nếu key bát đầu = 'on' và typeof props[key] = funcition
            if (key.startsWith('on') && typeof props[key] === 'function') {
                // delete
                delete props[key];
            }
        });
    }

    // Logic: Nếu có 'to' lấy Link nội bộ (react-router-dom) / 'href' lấy thẻ a
    if (to) {
        // đưa 'to' vào trong 'props' & gán Comp = Link
        props.to = to;
        Comp = Link;
    } else if (href) {
        // đưa 'href' vào trong 'props' & gán Comp = thẻ a
        props.href = href;
        Comp = 'a';
    }

    // Tách class ra thành biến
    const classes = cx('wrapper', {
        [className]: className, //khi có 'className' -> lấy giá trị của 'className' làm key => ở đây là 'custom-login'
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {/* Logic: Nếu có leftIcon || rightIcon => thêm thẻ <span style='icon'></span> */}
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
