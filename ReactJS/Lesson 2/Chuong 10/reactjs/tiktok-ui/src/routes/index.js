// 5. Đưa cấu hình routes ra ngoài

import routesConfig from '~/config/routes';

// Layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

/** Quy ước
 *  - Nếu k chỉ định layout => mặc định là DefaultLayout
 */

// Public Routes
const publicRoutes = [
    //Dùng cho nhưng router k cần đăng nhập vẫn xem được
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile }, //@ là ký tự muốn matches cố địnb, :nickname là patten có thể thay đổi
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Private Routes
const privateRoutes = [
    //Dùng cho nhưng router phải đăng nhập vẫn xem được | chuyển hướng sang login
];

export { publicRoutes, privateRoutes };
