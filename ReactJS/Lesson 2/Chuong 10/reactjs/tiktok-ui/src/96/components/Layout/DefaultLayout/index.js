import Header from '~/96/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

// Vì 'Content' thay đổi (<div className="content"></div>) => phải truyền từ ngoài vào => dùng children
export default DefaultLayout;
