import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; //NavLink hỗ trợ xử lý active

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        /** className={cx('menu-item') => className={(nav) => cx('menu-item')
         * Chuyển từ truyền chuỗi sang truyền function
         * return lại chính className (đã đc convert) / menu-item'\
         * Vì là NavLink return ra callback là navData => tạo ra 'nav' nhận dl từ 'navData'
         * trong 'nav' => có 1 key là 'isActive'
         * Logic: nav.isActive là của 'NavLink' => khi đc active => nav.isActive = true
         * Thêm 'end' tự xóa 'active'
         */
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} end>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

// PropTypes
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
