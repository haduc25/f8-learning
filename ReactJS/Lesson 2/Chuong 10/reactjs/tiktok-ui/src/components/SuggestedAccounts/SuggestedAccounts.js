import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

// PropTypes
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
