import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // test
    // console.log(data);
    // return <button>{data.title}</button>;
    // return <button>{JSON.stringify(data)}</button>;

    const classes = cx('menu-item', {
        // thêm class separate khi mà data có separate
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

// PropTypes
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
