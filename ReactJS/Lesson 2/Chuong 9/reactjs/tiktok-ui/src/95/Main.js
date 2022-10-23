import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

// Main.js == App.js //tạm thời => app chính add vào App.js
function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Dùng map() => lấy dl ra */}
                    {publicRoutes.map((route, index) => {
                        // check Layout, Page
                        // Logic: Nếu k có 'route.layout' => lấy DefaultLayout
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component; //lấy key từ obj publicRoutes

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
