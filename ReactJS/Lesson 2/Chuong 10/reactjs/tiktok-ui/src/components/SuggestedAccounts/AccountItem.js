import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/31d8a993dbe6612e20356968b8fad1ce~c5_100x100.jpeg?x-expires=1667966400&x-signature=QnvPxu54hCyR2L38q6KiIQIa6hQ%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>yenkim07022004</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Kim Yến</p>
            </div>
        </div>
    );
}

// PropTypes
// AccountItem.propTypes = {};

export default AccountItem;
