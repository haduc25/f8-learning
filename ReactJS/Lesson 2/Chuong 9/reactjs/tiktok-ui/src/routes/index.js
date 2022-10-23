// 5. Đưa cấu hình routes ra ngoài
import Home from '~/95/pages/Home';
import Following from '~/95/pages/Following';

// Public Routes
const publicRoutes = [
    //Dùng cho nhưng router k cần đăng nhập vẫn xem được
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

// Private Routes
const privateRoutes = [
    //Dùng cho nhưng router phải đăng nhập vẫn xem được | chuyển hướng sang login
];

export { publicRoutes, privateRoutes };
