import classNames from 'classnames/bind';
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
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
