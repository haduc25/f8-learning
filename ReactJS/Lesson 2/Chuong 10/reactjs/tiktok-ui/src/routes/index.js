// 5. Đưa cấu hình routes ra ngoài

// Layout
import { HeaderOnly } from '~/96/components/Layout';

// Pages
import Home from '~/96/pages/Home';
import Following from '~/96/pages/Following';
import Profile from '~/96/pages/Profile';
import Upload from '~/96/pages/Upload';
import Search from '~/96/pages/Search';

/** Quy ước
 *  - Nếu k chỉ định layout => mặc định là DefaultLayout
 */

// Public Routes
const publicRoutes = [
    //Dùng cho nhưng router k cần đăng nhập vẫn xem được
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private Routes
const privateRoutes = [
    //Dùng cho nhưng router phải đăng nhập vẫn xem được | chuyển hướng sang login
];

export { publicRoutes, privateRoutes };
