import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    // render
    const renderItems = () => {
        // dùng map()
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            visible
            delay={[0, 700]}
            placement="bottom-end" //chỉnh vị trí của Tippy
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1}>
                    {/* Custom PopperWrapper: đang có padding-top: 8px => giờ cần custom thêm padding-bottom: 8px*/}
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title={'Language'} />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
