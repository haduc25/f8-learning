import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
    faCircleQuestion,
    faEarthAsia,
    // faMagnifyingGlass,
    // faSignIn,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    // faPlus,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

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
                    type: 'language', //để sau này xác định đang ở trang nào
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },

        //// Testing nhiều children
        /**
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
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English Level 1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt Cấp 1',
                                children: {
                                    title: 'Language',
                                    data: [
                                        {
                                            code: 'en',
                                            title: 'English Level 2',
                                        },
                                        {
                                            code: 'vi',
                                            title: 'Tiếng Việt Cấp 2',
                                            children: {
                                                title: 'Language',
                                                data: [
                                                    {
                                                        code: 'en',
                                                        title: 'English Level 3',
                                                    },
                                                    {
                                                        code: 'vi',
                                                        title: 'Tiếng Việt Cấp 3',
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },

         */
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

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa.hanassii',
        // to: '/profile/@hoaa.hanassii',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    // tận dụng array trên => giải
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true, //vạch border-top
    },
];

function Header() {
    // currentUser
    const currentUser = true;

    // handleMenuChange | Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);

        switch (menuItem.type) {
            case 'language':
                // Handle change language / Xử lý thay đổi ngôn ngữ...
                console.log(menuItem.code);
                break;
            default:
        }
    };

    // console.log(images.logo.default); //return "/static/media/logo.e8af434aa91f33b2c32bb97d5fee0a28.svg"

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />
                {/* Search */}

                {/* Actions */}
                <div className={cx('actions')}>
                    {/* Logic: Nếu có currentUser => lấy thông tin của currentUser ngược lại render ra đăng nhập */}
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                                // trigger="click"
                            >
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faPlus} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Messages"
                                placement="bottom"
                                // trigger="click"
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                                // trigger="click"
                            >
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}

                    {/* Logic: Nếu có 'currentUser' -> dùng 'userMenu' ngược lại 'MENU_ITEMS' */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {/* Logic: Check currentUser để xem hiện avatar hay dấu more-btn */}
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="link nay bi loi roi"
                                // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1667030400&x-signature=nycDqbhu%2Bp0SIOy13dBN1dNwKFk%3D"
                                // khi lỗi thì show image truyền vào = fallback
                                fallback="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/240671549_113003017797767_4209998933159191123_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1fJNIUVwG_8AX_09zJ6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAeu-iDdrbrRvG_JdmAjBJyzKTJx99CG4TRQEftPLiRwA&oe=636275C0" // khi lỗi => show img này
                                alt="Đào Lê Phương Hoa"
                            />
                        ) : (
                            <>
                                {/* see more icon */}
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
