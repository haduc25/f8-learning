import classNames from 'classnames/bind';

import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    /** <aside> - Definition and Usage
     *  - The <aside> tag defines some content aside from the content it is placed in.
     *  - The aside content should be indirectly related to the surrounding content.
     *  - Tip: The <aside> content is often placed as a sidebar in a document.
     *  - Note: The <aside> element does not render as anything special in a browser. However, you can use CSS to style the <aside> element.
     *  - Link: https://www.w3schools.com/tags/tag_aside.asp
     */

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {/* Vì icon nhận vào 1 node => HomeIcon đang là func => cần truyền = cách <HomeIcon /> | từ Comp => ReactELement */}
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
