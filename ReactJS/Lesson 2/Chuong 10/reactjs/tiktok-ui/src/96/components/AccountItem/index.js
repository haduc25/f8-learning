import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            {/* avatar */}
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1666850400&x-signature=MjlKCFqdUbbDlfkiRr5ujqSUrDM%3D"
                alt="Hoa"
            />
            {/* info */}
            <div className={cx('info')}>
                {/* name */}
                <p className={cx('name')}>
                    <span>Đào Lê Phương Hoa</span>
                    {/* check icon */}
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                {/* username */}
                <span className={cx('username')}>@hoaa.hanassii</span>
            </div>
        </div>
    );
}

export default AccountItem;
