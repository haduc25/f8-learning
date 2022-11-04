import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

// tránh trường hợp k truyền onChange
const defaultFunc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFunc }) {
    // lịch sử đi vào trang / default trang đầu tiên của menu
    const [history, setHistory] = useState([{ data: items }]);
    // console.log(history); //0 : {data: Array(3)} / đang có 1 phần tử

    // lấy phần tử cuối / => lấy data ra
    const current = history[history.length - 1];
    // console.log(current);
    // console.log(current.title); //khi nhấn menu cấp 2 mới hiện
    // console.log('current: ', current);
    // console.log('current data: ', current.data);
    // console.log('items: ', items);
    // console.log('1. history.length: ', history.length); //1

    // render
    const renderItems = () => {
        // dùng map() / thay thế items = current.data
        return current.data.map((item, index) => {
            // kt xem pt nào là parent
            // covert obj => booleam | mặc định có dl return obj & k có return undefined => true/false
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            console.log(item.children); //return {title: 'Language', data: Array(2)}
                            // console.log('2. history.length: ', history.length); //1

                            // push thêm dl vào array
                            setHistory((prev) => [...prev, item.children]); //bảo lưu array cũ => add array mới => re-render
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // handleBack
    const handleBack = () => {
        // Logic: current lúc nào cũng lấy phàn tử cuối => xóa phần tử cuối là lùi về 1 cấp
        // dùng slice(): cát từ phần tử số 0 đến phàn tử gần cuối
        setHistory((prev) => prev.splice(0, prev.length - 1));
    };

    // renderResult
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex={-1}>
            {/* Custom PopperWrapper: đang có padding-top: 8px => giờ cần custom thêm padding-bottom: 8px*/}
            <PopperWrapper className={cx('menu-popper')}>
                {/* Logic: Nếu có 2 item => k ở trang 1 => show | khi vào children => history.length > 1 => show */}
                {history.length > 1 && (
                    <Header
                        title={current.title} //khi ấn vào menu mới hiện title
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-scrollable')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // handleReset / Reset to First Page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            // visible
            delay={[0, 700]}
            offset={[12, 8]} //offset[x, y] | x: chiều ngang, y chiều cao
            hideOnClick={hideOnClick}
            placement="bottom-end" //chỉnh vị trí của Tippy
            render={renderResult}
            // khi ẩn => set vể phần tử đầu tiên
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

// PropTypes
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
