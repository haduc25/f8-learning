import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    // Search Result, default = array
    const [searchResult, setSearchResult] = useState([]);

    // Fake API
    useEffect(() => {
        // // sau 3s => set lai result
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
            // setSearchResult([]);
        }, 0);
    }, []);

    return (
        <HeadlessTippy
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
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
