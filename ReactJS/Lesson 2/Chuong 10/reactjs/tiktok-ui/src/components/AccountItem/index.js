import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            {/* avatar */}
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            {/* info */}
            <div className={cx('info')}>
                {/* name */}
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {/* check icon thêm logic check tink true/false */}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                {/* username */}
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
