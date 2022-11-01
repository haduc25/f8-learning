import { useEffect, useState, useRef } from 'react';
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
    // Search Value, default = '' / cho input
    const [searchValue, setSearchValue] = useState('');
    // Search Result, default = array
    const [searchResult, setSearchResult] = useState([]);
    // Show result: thể hiện trang thái có đang focus hay k, default = true
    const [showResult, setShowResult] = useState(true);
    // Loading, default = false, vì ban đầu k loading
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    console.log(searchValue);

    // Fake API, Call API, deps = searchValue
    useEffect(() => {
        // // Fake Api
        // // // sau 3s => set lai result
        // setTimeout(() => {
        //     setSearchResult([1, 2, 3]);
        //     // setSearchResult([]);
        // }, 0);

        // check searchValue rỗng or k cớ
        if (!searchValue.trim()) {
            setSearchResult([]); // Khi k có dl gì => xóa => set lại array
            return; //cho thoát khỏi hàm
        }

        // Loading trước khi gọi API
        setLoading(true);

        // Call api / encodeURIComponent(): Mã hóa sang định dạng cho URL, để có thể nhập đc các ký tự như @&?...
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                // console.log(res.data);

                // set lai array setSearchResult
                setSearchResult(res.data);

                // Gọi xong loading  = fasle
                setLoading(false);
            })
            .catch(() => {
                // lỗi: mất mạng...
                setLoading(false);
            });
    }, [searchValue]);

    // handleClear
    const handleClear = () => {
        setSearchValue(''); //set lại value / xóa kq text input
        setSearchResult([]); //set lại kq tìm kiếm
        inputRef.current.focus(); //focus
    };

    // handleHideResult
    const handleHideResult = () => {
        setShowResult(false); //hide result
    };

    return (
        <HeadlessTippy
            interactive //interactive : it can be hovered over or clicked without hiding.
            // Logic(visible): Nếu có kq => return true => show result
            visible={showResult && searchResult.length > 0}
            /** showResult && searchResult.length > 0
             *  có 2 đk: showResult default = true
             *  - vì khi lần đầu truy cập vào website searchResult sẽ k có gì  => searchResult.length = 0
             * - khi tìm kiếm có kq => set lại showResult
             */
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1}>
                    <PopperWrapper>
                        {/* search-title */}
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {/* render dl từ API */}
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                            // truyền obj vào trong vs props là data
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}

            /**onClickOutside
             * - bấm ra ngoài khu vực của Tippy => gọi onClickOutside
             */
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)} //set lai value
                    onFocus={() => setShowResult(true)} //show result
                />

                {/* Clear */}
                {!!searchValue && !loading && (
                    /** !!searchValue: Convert sang boolean
                     * Logic Khi có searchValue mới hiển thị nút Clear
                     * Nếu có value nhưng k có loading => show
                     */
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* Loading / Logic: Nếu có loading => show */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

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
