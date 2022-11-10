import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import * as userService from '~/services/userService';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    // suggestedUser, default = []
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                // console.log({ data });
                // set lai data
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, []);

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
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
