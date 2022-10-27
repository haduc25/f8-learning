import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // test
    // console.log(data);
    // return <button>{data.title}</button>;
    // return <button>{JSON.stringify(data)}</button>;

    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
