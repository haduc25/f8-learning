import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

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
                        /** Old Logic:
                         * Nếu 'route.layout' = null => Dùng 'Fragment' để k có layout / Fragment chỉ là thẻ chứa
                         * Ngược lại thì lấy DefaultLayout
                         * const Layout = route.layout === null ? Fragment : DefaultLayout;
                         *
                         *
                         * ========================================================================
                         *
                         * New Logic:
                         * - Nếu có layout => lấy layout
                         * - Nếu layout = null => lấy Fragment
                         * - Mặc định thì lấy Default
                         */

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

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
