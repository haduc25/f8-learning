import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

// tạo biến cx
const cx = classNames.bind(styles); //dùng method bind()

/** bind()
 * - bind obj styles
 * - return function vào cx
 * => Có thể viết ddc classname dưới dạng dấu - | 'ha-duc'
 */

function Header() {
    // console.log(images.logo.default); //return "/static/media/logo.e8af434aa91f33b2c32bb97d5fee0a28.svg"

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    {/* Clear */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    {/* Search */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* Actions */}
                <div className={cx('actions')}>Action here</div>
            </div>
        </header>
    );
}

export default Header;
