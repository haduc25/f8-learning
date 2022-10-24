import classNames from 'classnames/bind';

import styles from './Header.module.scss';

// tạo biến cx
const cx = classNames.bind(styles); //dùng method bind()

/** bind()
 * - bind obj styles
 * - return function vào cx
 * => Có thể viết ddc classname dưới dạng dấu - | 'ha-duc'
 */

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
                {/* ... */}
                Header
            </div>
        </header>
    );
}

export default Header;
