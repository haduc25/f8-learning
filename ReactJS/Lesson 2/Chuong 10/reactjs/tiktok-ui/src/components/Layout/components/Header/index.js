import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

// tạo biến cx
const cx = classNames.bind(styles); //dùng method bind()

/** bind()
 * - bind obj styles
 * - return function vào cx
 * => Có thể viết ddc classname dưới dạng dấu - | 'ha-duc'
 */

// array
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        // thêm sub-item / children
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // Search Result, default = array
    const [searchResult, setSearchResult] = useState([]);

    // Fake API
    useEffect(() => {
        // // sau 3s => set lai result
        // setTimeout(() => {
        //     setSearchResult([1, 2, 3]);
        // }, 3000);
    });

    // console.log(images.logo.default); //return "/static/media/logo.e8af434aa91f33b2c32bb97d5fee0a28.svg"

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* Search */}
                <Tippy
                    interactive //interactive : it can be hovered over or clicked without hiding.
                    // Logic(visible): Nếu có kq => return true => show result
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1}>
                            <PopperWrapper>
                                {/* search-title */}
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        {/* Clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* Search Button*/}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* Actions */}
                <div className={cx('actions')}>
                    {/* <Button primary onClick={() => alert('Hello bro!')}>Login</Button> */}
                    {/* <Button primary to="./login">Login</Button> */}
                    {/* <Button primary href="https://www.youtube.com/25sdev" target="_blank">Login</Button> */}

                    {/* <Button primary>Login</Button> */}
                    {/* <Button outline>Login</Button> */}

                    {/* size mặc đinh là medium */}
                    {/* <Button outline small>Login</Button> */}
                    {/* <Button outline large>Login</Button> */}

                    {/* <Button primary>Login</Button> */}
                    {/* <Button outline>Register</Button> */}

                    {/* Text old version */}
                    {/* <Button text>Upload</Button> */}
                    {/* <Button primary>Login</Button> */}

                    {/* Disabled */}
                    {/* <Button primary disabled>Login</Button> */}
                    {/* <Button primary disabled onClick={() => alert('Hello bro!')}>Login</Button> */}
                    {/* <Button primary disabled onClick={() => alert('Hello bro!')} onMouseUp={() => console.log('Up')}>Login</Button> */}
                    {/* <Button primary onClick={() => alert('Hello bro!')} onMouseUp={() => console.log('Up')}>Login</Button> */}

                    {/* Rounded */}
                    {/* <Button rounded>Login</Button> */}

                    {/* Primary + Rounded & Outline + Rounded */}
                    {/* <Button primary rounded>Login</Button> */}
                    {/* <Button outline rounded>Login</Button> */}

                    {/* Custom style */}
                    {/* <Button rounded className={cx('custom-login')}>Login</Button> */}

                    {/* Icon Left & Right */}
                    {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Login</Button> */}
                    {/* <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Login</Button> */}

                    {/* Căn giữa lại text -> trong file scss */}
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu items={MENU_ITEMS}>
                        {/* see more icon */}
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
