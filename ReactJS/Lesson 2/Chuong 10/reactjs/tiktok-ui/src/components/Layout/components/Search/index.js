import { useEffect, useState, useRef } from 'react';
// import axios from 'axios'; //đã chuyển vào file: utils>request.js
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import request from '~/utils/request';
// import * as request from '~/utils/request'; //lấy hết các export lẻ (get, port, push...) //đã chuyển vào file: apiServices>searchServices.js
import * as searchServices from '~/apiServices/searchServices';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
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

    // useDebounce
    /** useDebounce cách hoạt động
     *   1. Lần 1 comp chạy xong => debounced có giá trị là 1 chuỗi rỗng ('') // do chuỗi rỗng => return
     *   2. Lần 2 comp chạy xong => debounced có giá trị là ('h')
     *       // vì initalstate lấy giá trị đầu tiên => debouncedValue k thay đỗi
     *       // => lọt vào useEffect(file: useDebounce.js) nhưng vì đang gõ liên tục => return debouncedValue => chuỗi rỗng
     *       // => debounced k thay đổi => k search
     *   3. Lần 3 comp chạy xong => debounced có giá trị là ('ho') // tương tự lần 2 - khi đang gõ liên tục
     *   4. Lần 4 comp chạy xong => debounced có giá trị là ('hoa') // khi ngừng gõ => useEffect(file: useDebounce.js)
     *      // => sau delay ms sau set lại debouncedValue => thành chữ 'hoa' (setDebouncedValue(value))
     *      // => return ra debouncedValue = 'hoa' => debounced = 'hoa' => vào useEffect(file: Search) => gửi đi API
     */
    // Logic: Khi user ngừng gõ 'delay' ms => debounced mới đc update = giá trị mới nhất của searchValue
    const debounced = useDebounce(searchValue, 600); //delay: 500 ~ 800

    // Fake API, Call API, deps = searchValue
    useEffect(() => {
        // // Fake Api
        // // // sau 3s => set lai result
        // setTimeout(() => {
        //     setSearchResult([1, 2, 3]);
        //     // setSearchResult([]);
        // }, 0);

        // check debounced rỗng or k có
        if (!debounced.trim()) {
            setSearchResult([]); // Khi k có dl gì => xóa => set lại array
            return; //cho thoát khỏi hàm
        }

        // Loading trước khi gọi API
        // setLoading(true); //tạm tắt ở vd: Dùng Async/Await trong useEffect() file: apiServices>searchServices.js

        // Dùng Fetch
        /**
        // Call api / encodeURIComponent(): Mã hóa sang định dạng cho URL, để có thể nhập đc các ký tự như @&?...
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
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
        */

        // Dùng Axios
        /** Tạm tắt import Axios ở đầu 
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((res) => {
                // console.log(res); //{data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
                // console.log(res.data.data);
                // console.log(res.status, res.config.params, res.config.url); //200 {q: 'mwo', type: 'less'} 'https://tiktok.fullstack.edu.vn/api/users/search'

                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        */

        // Dùng Axios import từ file 'utils/request'
        /**
        request
            .get('users/search', {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        */

        // Dùng Axios import từ file 'utils/request' dùng custom get / async - await
        /**
        request
            .get('users/search', {
                params: {
                    q: debounced,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data); //giống trên mà đoạn này bỏ đc cái .data / :>
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        */

        // Dùng Async/Await trong useEffect() / đã chuyển vào file: apiServices>searchServices.js
        /** 
        // fetchApi
        const fetchApi = async () => {
            // Chuyển đổi từ Promise -> Async/Await
            // Await luôn ở trước Promise

            try {
                // nhận res
                const res = await request.get('users/search', {
                    params: {
                        q: debounced,
                        type: 'less',
                    },
                });
                // khi nào await xong mởi chạy bên dưới này
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchApi();
        */

        // Dùng Async/Await trong useEffect() file: apiServices>searchServices.js | tạm tắt setLoading(true); mấy bài trên cần mở ra
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced); //type có default = less => k cần truyền
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

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

    // handleChange
    const handleChange = (e) => {
        const searchValue = e.target.value;
        // kt searchValue
        if (!searchValue.startsWith(' ')) {
            // Nếu dl nhập vào đầu tiên k là đấu ' ' => set lại value
            setSearchValue(searchValue);
        }
    };

    return (
        // Giải thích cho cái thẻ div thừa bên dưới :>
        // => Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive //interactive : it can be hovered over or clicked without hiding.
                // Logic(visible): Nếu có kq => return true => show result
                // appendTo={() => document.body} //fix tippy nhưng k dùng cách này vì gây ra bug
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
                        onChange={handleChange} //set lai value
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

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
