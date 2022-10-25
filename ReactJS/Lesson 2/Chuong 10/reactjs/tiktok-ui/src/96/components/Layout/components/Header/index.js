import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/96/components/Popper';
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
    // Search Result, default = array
    const [searchResult, setSearchResult] = useState([]);

    // Fake API
    useEffect(() => {
        // sau 3s => set lai result
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
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
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex={-1}>
                                ket qua
                            </div>
                        </PopperWrapper>
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
                <div className={cx('actions')}>Action here</div>
            </div>
        </header>
    );
}

export default Header;
