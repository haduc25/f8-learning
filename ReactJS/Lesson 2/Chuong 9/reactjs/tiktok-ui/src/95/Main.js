import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';

// Main.js == App.js //tạm thời => app chính add vào App.js
function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    {/*  />
                    <Route path="/following" element={<Following />} /> */}

                    {/* Dùng map() => lấy dl ra */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component; //lấy key từ obj publicRoutes
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
